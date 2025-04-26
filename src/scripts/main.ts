interface Project {
  name: string;
  description: string;
  githubUrl: string;
}

class PortfolioApp {
  private isDarkMode: boolean = false;
  private isMobileMenuOpen: boolean = false;
  private projects: Project[] = [
    {
      name: "Dungeon Dive",
      description:
        "This is a simple dungeon crawler game made with C programming language where the player can navigate through a randomly generated dungeon after entering their username and dungeon size.",
      githubUrl: "https://github.com/0xRum/dungeon-dive",
    },
    {
      name: "Taskii",
      description:
        "A modern and efficient task management application built with Flutter. Taskii helps you organize, prioritize, and track your tasks seamlessly, whether you're managing personal to-dos or team projects.",
      githubUrl:
        "https://github.com/vasu-patel-123/Team-HamburgerHelpers-final-Project/tree/main/taskii",
    },
  ];

  constructor() {
    this.initializeApp();
  }

  private initializeApp(): void {
    // Theme initialization
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    const storedTheme =
      localStorage.getItem("theme") || (prefersDark ? "dark" : "light");
    document.documentElement.setAttribute("data-theme", storedTheme);

    // Event listeners for theme toggle
    const toggleTheme = () => {
      const newTheme =
        document.documentElement.getAttribute("data-theme") === "dark"
          ? "light"
          : "dark";
      document.documentElement.setAttribute("data-theme", newTheme);
      localStorage.setItem("theme", newTheme);
    };

    document
      .querySelectorAll(".theme-toggle, .theme-toggle-mobile")
      .forEach((btn) => btn.addEventListener("click", toggleTheme));

    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach((anchor) =>
      anchor.addEventListener("click", (e) => {
        e.preventDefault();
        const target = document.querySelector(
          (e.target as HTMLAnchorElement).getAttribute("href") || ""
        );
        target?.scrollIntoView({ behavior: "smooth" });
      })
    );

    // Projects loading
    if (
      window.location.pathname.endsWith("index.html") ||
      window.location.pathname === "/"
    ) {
      const projectsGrid = document.querySelector(".projects-grid");
      if (projectsGrid) {
        this.projects.forEach((project) => {
          const card = document.createElement("div");
          card.className = "project-card";
          card.innerHTML = `
            <div class="card-header">
              <h3>${project.name}</h3>
            </div>
            <p>${project.description}</p>
            <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer">
              View on GitHub
              <i class="fab fa-github"></i>
            </a>
          `;
          projectsGrid.appendChild(card);
        });
      }
    }

    // Intersection observer for animations
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach(
          (entry) =>
            entry.isIntersecting && entry.target.classList.add("visible")
        ),
      { threshold: 0.1 }
    );
    document
      .querySelectorAll("section")
      .forEach((section) => observer.observe(section));

    // Mobile menu
    const mobileMenu = document.querySelector(".mobile-menu");
    const menuToggle = document.querySelector(
      ".menu-toggle"
    ) as HTMLButtonElement;
    const closeMenu = document.querySelector(".close-menu");
    const mobileMenuLinks = document.querySelectorAll(".mobile-nav a");

    if (menuToggle && closeMenu && mobileMenu) {
      const toggleMenu = (open: boolean) => {
        this.isMobileMenuOpen = open;
        mobileMenu.classList.toggle("active", open);
        menuToggle.style.display = open ? "none" : "block";
        document.body.style.overflow = open ? "hidden" : "";
      };

      menuToggle.addEventListener("click", () => toggleMenu(true));
      closeMenu.addEventListener("click", () => toggleMenu(false));
      mobileMenuLinks.forEach((link) =>
        link.addEventListener("click", () => toggleMenu(false))
      );
    }

    // Skills carousel
    const carousel = document.querySelector(".skills-carousel");
    if (carousel) {
      const skillsScroll = carousel.querySelector(
        ".skills-scroll"
      ) as HTMLElement;
      const prevButton = carousel.querySelector(
        ".carousel-control.prev"
      ) as HTMLElement;
      const nextButton = carousel.querySelector(
        ".carousel-control.next"
      ) as HTMLElement;
      const skillItems = carousel.querySelectorAll(".skill-item");

      if (skillsScroll && prevButton && nextButton && skillItems.length) {
        let currentIndex = 0;
        let autoScrollInterval: number | null = null;
        const itemsPerView =
          window.innerWidth < 640 ? 1 : window.innerWidth < 1024 ? 2 : 3;
        const maxIndex = skillItems.length - itemsPerView;

        const updateCarousel = () => {
          skillsScroll.style.transform = `translateX(-${
            currentIndex * (100 / itemsPerView)
          }%)`;
        };

        const handleNavigation = (direction: number) => {
          currentIndex = Math.max(
            0,
            Math.min(maxIndex, currentIndex + direction)
          );
          updateCarousel();
          if (autoScrollInterval) {
            clearInterval(autoScrollInterval);
            autoScrollInterval = window.setInterval(() => {
              currentIndex = currentIndex >= maxIndex ? 0 : currentIndex + 1;
              updateCarousel();
            }, 2000);
          }
        };

        carousel.addEventListener(
          "mouseenter",
          () => autoScrollInterval && clearInterval(autoScrollInterval)
        );
        carousel.addEventListener("mouseleave", () => {
          autoScrollInterval = window.setInterval(() => {
            currentIndex = currentIndex >= maxIndex ? 0 : currentIndex + 1;
            updateCarousel();
          }, 2000);
        });

        prevButton.addEventListener("click", () => handleNavigation(-1));
        nextButton.addEventListener("click", () => handleNavigation(1));

        window.addEventListener("resize", () => {
          const newItemsPerView =
            window.innerWidth < 640 ? 1 : window.innerWidth < 1024 ? 2 : 3;
          if (newItemsPerView !== itemsPerView) {
            currentIndex = 0;
            updateCarousel();
          }
        });

        autoScrollInterval = window.setInterval(() => {
          currentIndex = currentIndex >= maxIndex ? 0 : currentIndex + 1;
          updateCarousel();
        }, 2000);
      }
    }
  }
}

// Initialize the app
document.addEventListener("DOMContentLoaded", () => new PortfolioApp());
