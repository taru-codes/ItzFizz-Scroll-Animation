import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function App() {
  const heroRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // =========================
      // PAGE LOAD ANIMATION
      // =========================

      const intro = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
      });

      intro
        .from(".navbar", {
          y: -25,
          opacity: 0,
          duration: 0.7,
        })
        .from(
          ".eyebrow",
          {
            y: 20,
            opacity: 0,
            duration: 0.6,
          },
          "-=0.3"
        )
        .from(
          ".hero-title",
          {
            y: 45,
            opacity: 0,
            duration: 0.9,
          },
          "-=0.3"
        )
        .from(
          ".hero-description",
          {
            y: 25,
            opacity: 0,
            duration: 0.7,
          },
          "-=0.4"
        )
        .from(
          ".stat",
          {
            y: 20,
            opacity: 0,
            duration: 0.5,
            stagger: 0.12,
          },
          "-=0.35"
        )
        .from(
          ".scroll-indicator",
          {
            opacity: 0,
            y: 15,
            duration: 0.6,
          },
          "-=0.25"
        );

      // =========================
      // CAR SCROLL JOURNEY
      // =========================

      gsap.fromTo(
  ".car",
  {
    x: 0,
    y: 0,
    scale: 0.9,
    rotation: 0,
  },
  {
    x: "-42vw",
    y: "4vh",
    scale: 1,
    rotation: 0,
    ease: "none",

    scrollTrigger: {
      trigger: ".hero",
      start: "top top",
      end: "bottom bottom",
      scrub: 1.5,
    },
  }
);

      // =========================
      // CAR LIGHT / SHADOW EFFECT
      // =========================

      gsap.to(".car img", {
        filter:
          "drop-shadow(0 30px 35px rgba(0,0,0,0.75)) drop-shadow(0 0 30px rgba(255,255,255,0.08))",
        duration: 1,
        ease: "power2.out",
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <main className="site" ref={heroRef}>

      {/* =========================
          NAVBAR
      ========================= */}

      <nav className="navbar">
        <div className="logo">
          ITZFIZZ
        </div>

        <button
  className="explore"
  onClick={() => {
    document
      .querySelector(".second-section")
      ?.scrollIntoView({
        behavior: "smooth",
      });
  }}
>
  Explore
</button>
      </nav>


      {/* =========================
          HERO
      ========================= */}

      <section className="hero">

        <div className="hero-background" />

        <div className="hero-inner">

          {/* CONTENT */}

          <div className="hero-content">

            <div className="eyebrow">
              DIGITAL EXPERIENCE
            </div>

            <h1 className="hero-title">
              W E L C O M E&nbsp;&nbsp;I T Z F I Z Z
            </h1>

            <p className="hero-description">
              Experience a new generation of digital
              interaction, where creativity, technology
              and motion come together.
            </p>


            {/* STATS */}

            <div className="stats">

              <div className="stat">
                <div className="stat-number">
                  58%
                </div>

                <div className="stat-label">
                  Faster Experience
                </div>
              </div>


              <div className="stat">
                <div className="stat-number">
                  23%
                </div>

                <div className="stat-label">
                  Higher Engagement
                </div>
              </div>


              <div className="stat">
                <div className="stat-number">
                  40%
                </div>

                <div className="stat-label">
                  Visual Impact
                </div>
              </div>

            </div>

          </div>


          {/* =========================
              CAR
          ========================= */}

          <div className="car">

  <img
    src={`${import.meta.env.BASE_URL}assets/car.png`}
    alt="Premium sports car"
  />

</div>


          {/* =========================
              SCROLL INDICATOR
          ========================= */}

          <div className="scroll-indicator">

            <span>
              SCROLL TO EXPLORE
            </span>

            <div className="scroll-arrow">
              ↓
            </div>

          </div>

        </div>

      </section>


      {/* =========================
          SECOND SECTION
      ========================= */}

      <section className="second-section">

        <div className="second-content">

          <p>
            THE EXPERIENCE CONTINUES
          </p>

          <h2>
            Built for Motion.
          </h2>

          <span>
            Scroll-driven interactions create a smooth,
            modern and immersive digital experience.
          </span>

        </div>

      </section>

    </main>
  );
}

export default App;