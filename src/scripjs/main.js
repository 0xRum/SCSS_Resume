"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var PortfolioApp = /*#__PURE__*/function () {
  function PortfolioApp() {
    _classCallCheck(this, PortfolioApp);
    _defineProperty(this, "isDarkMode", false);
    _defineProperty(this, "isMobileMenuOpen", false);
    _defineProperty(this, "projects", [{
      name: "Dungeon Dive",
      description: "This is a simple dungeon crawler game made with C programming language where the player can navigate through a randomly generated dungeon after entering their username and dungeon size.",
      githubUrl: "https://github.com/0xRum/dungeon-dive"
    }, {
      name: "Taskii",
      description: "A modern and efficient task management application built with Flutter. Taskii helps you organize, prioritize, and track your tasks seamlessly, whether you're managing personal to-dos or team projects.",
      githubUrl: "https://github.com/vasu-patel-123/Team-HamburgerHelpers-final-Project/tree/main/taskii"
    }]);
    this.initializeApp();
  }
  return _createClass(PortfolioApp, [{
    key: "initializeApp",
    value: function initializeApp() {
      var _this = this;
      // Theme initialization
      var prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      var storedTheme = localStorage.getItem("theme") || (prefersDark ? "dark" : "light");
      document.documentElement.setAttribute("data-theme", storedTheme);

      // Event listeners for theme toggle
      var toggleTheme = function toggleTheme() {
        var newTheme = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
        document.documentElement.setAttribute("data-theme", newTheme);
        localStorage.setItem("theme", newTheme);
      };
      document.querySelectorAll(".theme-toggle, .theme-toggle-mobile").forEach(function (btn) {
        return btn.addEventListener("click", toggleTheme);
      });

      // Smooth scroll
      document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
        return anchor.addEventListener("click", function (e) {
          e.preventDefault();
          var target = document.querySelector(e.target.getAttribute("href") || "");
          target === null || target === void 0 || target.scrollIntoView({
            behavior: "smooth"
          });
        });
      });

      // Projects loading
      if (window.location.pathname.endsWith("index.html") || window.location.pathname === "/") {
        var projectsGrid = document.querySelector(".projects-grid");
        if (projectsGrid) {
          this.projects.forEach(function (project) {
            var card = document.createElement("div");
            card.className = "project-card";
            card.innerHTML = "\n            <div class=\"card-header\">\n              <h3>".concat(project.name, "</h3>\n            </div>\n            <p>").concat(project.description, "</p>\n            <a href=\"").concat(project.githubUrl, "\" target=\"_blank\" rel=\"noopener noreferrer\">\n              View on GitHub\n              <i class=\"fab fa-github\"></i>\n            </a>\n          ");
            projectsGrid.appendChild(card);
          });
        }
      }

      // Intersection observer for animations
      var observer = new IntersectionObserver(function (entries) {
        return entries.forEach(function (entry) {
          return entry.isIntersecting && entry.target.classList.add("visible");
        });
      }, {
        threshold: 0.1
      });
      document.querySelectorAll("section").forEach(function (section) {
        return observer.observe(section);
      });

      // Mobile menu
      var mobileMenu = document.querySelector(".mobile-menu");
      var menuToggle = document.querySelector(".menu-toggle");
      var closeMenu = document.querySelector(".close-menu");
      var mobileMenuLinks = document.querySelectorAll(".mobile-nav a");
      if (menuToggle && closeMenu && mobileMenu) {
        var toggleMenu = function toggleMenu(open) {
          _this.isMobileMenuOpen = open;
          mobileMenu.classList.toggle("active", open);
          menuToggle.style.display = open ? "none" : "block";
          document.body.style.overflow = open ? "hidden" : "";
        };
        menuToggle.addEventListener("click", function () {
          return toggleMenu(true);
        });
        closeMenu.addEventListener("click", function () {
          return toggleMenu(false);
        });
        mobileMenuLinks.forEach(function (link) {
          return link.addEventListener("click", function () {
            return toggleMenu(false);
          });
        });
      }

      // Skills carousel
      var carousel = document.querySelector(".skills-carousel");
      if (carousel) {
        var skillsScroll = carousel.querySelector(".skills-scroll");
        var prevButton = carousel.querySelector(".carousel-control.prev");
        var nextButton = carousel.querySelector(".carousel-control.next");
        var skillItems = carousel.querySelectorAll(".skill-item");
        if (skillsScroll && prevButton && nextButton && skillItems.length) {
          var currentIndex = 0;
          var autoScrollInterval = null;
          var itemsPerView = window.innerWidth < 640 ? 1 : window.innerWidth < 1024 ? 2 : 3;
          var maxIndex = skillItems.length - itemsPerView;
          var updateCarousel = function updateCarousel() {
            skillsScroll.style.transform = "translateX(-".concat(currentIndex * (100 / itemsPerView), "%)");
          };
          var handleNavigation = function handleNavigation(direction) {
            currentIndex = Math.max(0, Math.min(maxIndex, currentIndex + direction));
            updateCarousel();
            if (autoScrollInterval) {
              clearInterval(autoScrollInterval);
              autoScrollInterval = window.setInterval(function () {
                currentIndex = currentIndex >= maxIndex ? 0 : currentIndex + 1;
                updateCarousel();
              }, 2000);
            }
          };
          carousel.addEventListener("mouseenter", function () {
            return autoScrollInterval && clearInterval(autoScrollInterval);
          });
          carousel.addEventListener("mouseleave", function () {
            autoScrollInterval = window.setInterval(function () {
              currentIndex = currentIndex >= maxIndex ? 0 : currentIndex + 1;
              updateCarousel();
            }, 2000);
          });
          prevButton.addEventListener("click", function () {
            return handleNavigation(-1);
          });
          nextButton.addEventListener("click", function () {
            return handleNavigation(1);
          });
          window.addEventListener("resize", function () {
            var newItemsPerView = window.innerWidth < 640 ? 1 : window.innerWidth < 1024 ? 2 : 3;
            if (newItemsPerView !== itemsPerView) {
              currentIndex = 0;
              updateCarousel();
            }
          });
          autoScrollInterval = window.setInterval(function () {
            currentIndex = currentIndex >= maxIndex ? 0 : currentIndex + 1;
            updateCarousel();
          }, 2000);
        }
      }
    }
  }]);
}(); // Initialize the app
document.addEventListener("DOMContentLoaded", function () {
  return new PortfolioApp();
});