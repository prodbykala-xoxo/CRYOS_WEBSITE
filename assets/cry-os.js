/* CRY OS — interaction layer. Fast > responsive > usable > immersive. */
(function () {
  "use strict";

  /* ---------------------------------------------------------------------
     Cart drawer
     ------------------------------------------------------------------- */
  var drawer = document.querySelector("[data-cart-drawer]");
  var overlay = document.querySelector("[data-cart-overlay]");

  function openCart() {
    if (!drawer) return;
    drawer.setAttribute("data-open", "true");
    if (overlay) overlay.setAttribute("data-open", "true");
    document.body.style.overflow = "hidden";
  }
  function closeCart() {
    if (!drawer) return;
    drawer.removeAttribute("data-open");
    if (overlay) overlay.removeAttribute("data-open");
    document.body.style.overflow = "";
  }

  document.addEventListener("click", function (e) {
    if (e.target.closest("[data-cart-open]")) {
      e.preventDefault();
      openCart();
    }
    if (e.target.closest("[data-cart-close]") || e.target.closest("[data-cart-overlay]")) {
      closeCart();
    }
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeCart();
  });

  /* Re-render cart drawer contents after an add-to-cart without a full
     page reload, by re-fetching the cart-drawer section. */
  document.addEventListener("submit", function (e) {
    var form = e.target.closest('form[action*="/cart/add"]');
    if (!form) return;
    e.preventDefault();
    var formData = new FormData(form);
    fetch("/cart/add.js", { method: "POST", body: formData })
      .then(function (r) { return r.json(); })
      .then(function () { return fetch(window.location.pathname + "?sections=cart-drawer"); })
      .then(function (r) { return r.json(); })
      .then(function (data) {
        var html = data["cart-drawer"];
        if (html) {
          var tmp = document.createElement("div");
          tmp.innerHTML = html;
          var next = tmp.querySelector("[data-cart-drawer]");
          if (next && drawer) drawer.replaceWith(next);
          drawer = document.querySelector("[data-cart-drawer]");
        }
        openCart();
      })
      .catch(function () {
        /* fall back to a normal form submit if the fetch flow fails */
        form.submit();
      });
  });

  /* ---------------------------------------------------------------------
     Size pill selection (writes into a hidden variant-id input)
     ------------------------------------------------------------------- */
  document.addEventListener("click", function (e) {
    var pill = e.target.closest(".size-pill");
    if (!pill || pill.disabled) return;
    var group = pill.closest("[data-size-group]");
    if (!group) return;
    group.querySelectorAll(".size-pill").forEach(function (p) {
      p.setAttribute("aria-pressed", "false");
    });
    pill.setAttribute("aria-pressed", "true");
    var hiddenInput = group.parentElement.querySelector('[name="id"]');
    if (hiddenInput) hiddenInput.value = pill.getAttribute("data-variant-id");
  });

  /* ---------------------------------------------------------------------
     Boot sequence — first homepage visit only, session-gated
     ------------------------------------------------------------------- */
  var boot = document.querySelector("[data-boot-sequence]");
  if (boot) {
    var seen = sessionStorage.getItem("cryOsBooted");
    if (seen) {
      boot.setAttribute("data-skip", "true");
    } else {
      try { sessionStorage.setItem("cryOsBooted", "1"); } catch (err) {}
      var lines = boot.querySelectorAll("[data-boot-line]");
      lines.forEach(function (line, i) {
        line.style.opacity = "0";
        setTimeout(function () {
          line.style.transition = "opacity 180ms ease";
          line.style.opacity = "1";
        }, i * 220);
      });
    }
  }
})();
