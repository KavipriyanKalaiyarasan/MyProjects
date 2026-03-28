(function () {
  const nav = document.querySelector(".nav");
  const navToggle = document.querySelector(".nav-toggle");
  const navLinks = document.querySelectorAll(".nav-links a");
  const header = document.querySelector(".site-header");
  const heroBg = document.querySelector(".hero-bg");

  const headerOffset = () => (header ? header.getBoundingClientRect().height : 72);

  function scrollToHash(hash) {
    const id = hash.replace("#", "");
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - headerOffset() - 12;
    window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
  }

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (e) => {
      const href = anchor.getAttribute("href");
      if (!href || href === "#") return;
      e.preventDefault();
      scrollToHash(href);
      document.body.classList.remove("nav-open");
      nav?.classList.remove("is-open");
      navToggle?.setAttribute("aria-expanded", "false");
    });
  });

  if (navToggle && nav) {
    navToggle.addEventListener("click", () => {
      const open = nav.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", open ? "true" : "false");
      document.body.classList.toggle("nav-open", open);
    });
    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        nav.classList.remove("is-open");
        document.body.classList.remove("nav-open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  let scrollTicking = false;
  function onScroll() {
    if (!scrollTicking) {
      requestAnimationFrame(() => {
        const y = window.scrollY;
        if (nav) nav.classList.toggle("is-scrolled", y > 40);

        if (heroBg) {
          const scale = 1.08 + y * 0.00015;
          const translate = y * 0.22;
          heroBg.style.transform = `scale(${Math.min(scale, 1.18)}) translate3d(0, ${translate}px, 0)`;
        }

        scrollTicking = false;
      });
      scrollTicking = true;
    }
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  const revealEls = document.querySelectorAll(".reveal");
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    },
    { rootMargin: "0px 0px -8% 0px", threshold: 0.12 }
  );
  revealEls.forEach((el) => io.observe(el));

  const videoFrame = document.querySelector(".video-frame");
  const iframe = document.querySelector(".video-embed");
  const placeholder = document.getElementById("videoPlaceholder");
  const loadVideoBtn = document.getElementById("loadVideo");

  function activateVideo() {
    const url = videoFrame?.getAttribute("data-youtube-embed")?.trim();
    if (!url || !iframe) return false;
    iframe.src = url;
    iframe.classList.add("is-active");
    placeholder?.classList.add("is-hidden");
    return true;
  }

  loadVideoBtn?.addEventListener("click", () => {
    const ok = activateVideo();
    if (!ok && placeholder) {
      const hint = placeholder.querySelector(".video-hint");
      if (hint) {
        hint.textContent =
          "Paste your YouTube embed link on the video section (data-youtube-embed) to watch here.";
        hint.style.color = "var(--neon)";
      }
      loadVideoBtn.animate([{ transform: "scale(1)" }, { transform: "scale(1.05)" }, { transform: "scale(1)" }], {
        duration: 400,
        easing: "ease-out",
      });
    }
  });
})();
