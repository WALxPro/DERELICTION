import gsap from "gsap";

export function heroAnimation() {
  const hero = document.querySelector(".hero");
  if (!hero || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return () => {};

  let disposeEvents = () => {};
  const ctx = gsap.context(() => {
  const tl = gsap.timeline();
  const moveDepthX = gsap.quickTo(".hero-depth-layer", "x", { duration: 0.45, ease: "power2.out" });
  const moveDepthY = gsap.quickTo(".hero-depth-layer", "y", { duration: 0.45, ease: "power2.out" });

  // INITIAL STATES

  gsap.set(
    [
      ".hero-badge",
      ".hero-subtitle",
      ".hero-author",
      ".gold-divider",
      ".hero-scroll",
    ],
    {
      opacity: 0,
    },
  );

  gsap.set(".title-letter", {
    opacity: 0,
    y: 50,
    rotateX: 70,
  });

  gsap.set(".hero-buttons .btn", {
    opacity: 0,
    y: 25,
    scale: 0.95,
  });

  // CAMERA

  gsap.fromTo(
    hero,
    {
      scale: 1.04,
    },
    {
      scale: 1,
      duration: 1.5,
      ease: "power3.out",
    },
  );

  // MAIN INTRO

  tl.to(".hero-badge", {
    opacity: 1,
    y: 0,
    scale: 1,

    duration: 0.5,

    ease: "back.out(1.5)",
  })

    .to(
      ".title-letter",
      {
        opacity: 1,
        y: 0,
        rotateX: 0,
        duration: 0.7,

        stagger: 0.035,

        ease: "power3.out",
      },
      "-=0.25",
    )

    .to(
      ".hero-title",
      {
        textShadow: "0 0 35px rgba(232,201,107,.6)",

        duration: 0.5,
      },
      "-=0.3",
    )

    .to(
      [".hero-subtitle", ".hero-author"],
      {
        opacity: 1,
        x: 0,
        duration: 0.5,

        stagger: 0.1,

        ease: "power3.out",
      },
      "-=0.35",
    )

    .to(
      ".gold-divider",
      {
        opacity: 1,
        scaleX: 1,

        duration: 0.4,
      },
      "-=0.3",
    )

    .to(
      ".hero-buttons .btn",
      {
        opacity: 1,
        y: 0,
        scale: 1,

        duration: 0.5,

        stagger: 0.12,

        ease: "back.out(1.4)",
      },
      "-=0.25",
    )

    .to(
      ".hero-scroll",
      {
        opacity: 1,
        y: 0,

        duration: 0.4,
      },
      "-=0.2",
    );

  // BACKGROUND FLOAT (lightweight)

  gsap.to(".hero-glow", {
    x: -30,
    y: -20,

    duration: 7,

    repeat: -1,
    yoyo: true,

    ease: "sine.inOut",
  });

  gsap.to(".orb-one", {
    x: 30,
    y: -25,

    duration: 9,

    repeat: -1,
    yoyo: true,

    ease: "sine.inOut",
  });

  gsap.to(".orb-two", {
    x: -25,
    y: 20,

    duration: 10,

    repeat: -1,
    yoyo: true,

    ease: "sine.inOut",
  });

  // TITLE BREATH

  gsap.to(".hero-title", {
    y: -4,

    duration: 3,

    repeat: -1,

    yoyo: true,

    ease: "sine.inOut",
  });

  // MOUSE PARALLAX

  function moveHero(e) {
    const x = (e.clientX / window.innerWidth - 0.5) * 20;

    const y = (e.clientY / window.innerHeight - 0.5) * 20;

    moveDepthX(x);
    moveDepthY(y);
  }

  function resetHero() {
    moveDepthX(0);
    moveDepthY(0);
  }

  hero?.addEventListener("mousemove", moveHero);

  hero?.addEventListener("mouseleave", resetHero);

  disposeEvents = () => {
    hero.removeEventListener("mousemove", moveHero);
    hero.removeEventListener("mouseleave", resetHero);
  };
  }, hero);

  return () => {
    disposeEvents();
    ctx.revert();
  };
}
