import { useEffect } from "react";
import Header from "./components/Header";
import logo from "./assets/polished-by-leydi-logo.png";
import leftBranch from "./assets/left-outline-branch.svg";
import cornerSprig from "./assets/corner-filled-sprig.svg";
import heroBackground from "./assets/polished-watercolor-background.png";
import gelIcon from "./assets/service-icons/gel-manicure.png";
import structuredIcon from "./assets/service-icons/structured-manicure.png";
import extensionsIcon from "./assets/service-icons/nail-extensions.png";
import nailArtIcon from "./assets/service-icons/nail-art.png";
import repairIcon from "./assets/service-icons/repairs.png";
import bookingHandArt from "./assets/booking-hand-art.svg";
import footerLogo from "./assets/footer-logo.svg";
import footerPinkLeaf from "./assets/footer-pink-leaf.svg";
import aboutLeafTop from "./assets/about-leaf-top.svg";
import aboutLeafBottom from "./assets/about-leaf-bottom.svg";
import locationIcon from "./assets/location-icon.svg";
import policyIcon from "./assets/policy-icon.svg";
import infoLeafLeft from "./assets/info-leaf-left.svg";
import infoLeafRight from "./assets/info-leaf-right.svg";
import reviewsLeafLeft from "./assets/reviews-leaf-left.svg";
import reviewsLeafRight from "./assets/reviews-leaf-right.svg";
import instagramLeafLeft from "./assets/instagram-leaf-left.svg";
import instagramLeafRight from "./assets/instagram-leaf-right.svg";
import servicesHeroLeafLeft from "./assets/services-hero-leaf-left.svg";
import servicesHeroLeafRight from "./assets/services-hero-leaf-right.svg";
import servicesManicureLeaf from "./assets/services-manicure-leaf.svg";
import servicesExtensionsLeaf from "./assets/services-extensions-leaf.svg";
import servicesRemovalsLeaf from "./assets/services-removals-leaf.svg";
import servicesSpecialtyLeaf from "./assets/services-specialty-leaf.svg";
import bookingHelpLeaf from "./assets/booking-help-leaf.svg";
import bookingHelpPolish from "./assets/booking-help-polish.svg";
import preparationCamera from "./assets/preparation-camera.svg";
import preparationCalendar from "./assets/preparation-calendar.svg";
import preparationClock from "./assets/preparation-clock.svg";

function Hero() {
  return (
    <section
      className="hero"
      id="home"
      style={{
        backgroundImage: `url(${heroBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <img
        src={leftBranch}
        alt=""
        aria-hidden="true"
        style={{
          position: "absolute",
          zIndex: 0,
          top: "150px",
          left: "-25px",
          height: "300px",
          width: "auto",
          opacity: 0.46,
          pointerEvents: "none",
        }}
      />

      <div
        className="hero-copy"
        style={{ position: "relative", zIndex: 1 }}>
        <div className="hero-content">
          <p className="eyebrow">
            NAIL CARE
            <span>✦</span>
            BEAUTY
            <span>✦</span>
            CONFIDENCE
          </p>

          <img
            className="hero-logo"
            src={logo}
            alt="Polished by Leydi"
          />

          <div className="hero-divider" />

          <h1>Nails that feel like you.</h1>

          <p className="hero-description">
            Thoughtfully designed. Beautifully polished.
            <br />
            Completely you.
          </p>

          <a href="/contact" className="button hero-button">
            Book an Appointment
            <span className="arrow">→</span>
          </a>
        </div>
      </div>

      <div
        className="hero-visual"
        style={{ position: "relative", zIndex: 1 }}
      >
        <div
          className="hero-photo-frame"
          style={{
            position: "relative",
            width: "580px",
            height: "700px",
            transform: "translateX(65px)",
            borderRadius: "110px 8px 110px 8px",
          }}
        >
          <div
            className="hero-photo"
            style={{
              borderRadius: "100px 4px 100px 4px",
            }}
          >
            <img
              src="/images/nails.jpeg"
              alt="Custom pink, gold, and white nails"
            />
          </div>

          <img
            className="hero-leaf-sprig"
            src={cornerSprig}
            alt=""
            aria-hidden="true"
            style={{
              position: "absolute",
              right: "-125px",
              bottom: "-90px",
              zIndex: 2,
              width: "350px",
              height: "auto",
              pointerEvents: "none",
            }}
          />
        </div>
      </div>
    </section>
  );
}

const services = [
  {
    title: "Gel Manicures",
    description: "Long-lasting shine and flawless wear.",
    icon: gelIcon,
  },
  {
    title: "Structured Manicures",
    description: "Strength, structure and natural beauty.",
    icon: structuredIcon,
  },
  {
    title: "Nail Extensions",
    description: "Length, shape and confidence.",
    icon: extensionsIcon,
  },
  {
    title: "Nail Art",
    description: "Custom designs just for you.",
    icon: nailArtIcon,
  },
  {
    title: "Soak-Offs & Repairs",
    description: "Gentle care for healthy nais.",
    icon: repairIcon,
  },
];

function NailIcon() {
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true">
      <path d="M23 46V25c0-10 4-16 9-16s9 6 9 16v21" />
      <path d="M23 46c0 6 4 9 9 9s9-3 9-9" />
      <path d="M27 42c1-6 2-9 5-9s4 3 5 9" />
      <path d="M48 18v8M44 22h8" />
    </svg>
  );
}

function ServicesStrip() {
  return (
    <section className="services-strip" id="services">
      <img
        className="services-branch services-branch-left"
        src={cornerSprig}
        alt=""
        aria-hidden="true"
      />

      <div className="services-grid">
        {services.map((service) => (
          <article className="service-card" key={service.title}>
            <div className="service-icon">
              <img src={service.icon} alt="" aria-hidden="true" />
            </div>

            <h2>{service.title}</h2>
            <p>{service.description}</p>
          </article>
        ))}
      </div>

      <img
        className="services-branch services-branch-right"
        src={cornerSprig}
        alt=""
        aria-hidden="true"
      />
    </section>
  );
}

function GalleryPreview() {
  return (
    <section className="gallery-preview" id="gallery">
      <div className="gallery-copy">
        <p className="gallery-eyebrow">The Polished Look</p>

        <h2>
          Details that
          <br />
          make a statement.
        </h2>

        <p>
          Every set is a little different.
          <br />
          Every set is perfectly you.
        </p>

        <a href="/gallery" className="button gallery-button">
          View Gallery
          <span className="arrow">→</span>
        </a>
      </div>

      <div className="gallery-mosaic">
        <figure className="gallery-photo gallery-photo-left">
          <img
            src="/images/nails-2.jpeg"
            alt="Custom pink and black nails"
          />
        </figure>

        <div className="gallery-photo-center">
          <figure className="gallery-photo">
            <img
              src="/images/nails-3.jpeg"
              alt="Custom brown and nude nails"
            />
          </figure>

          <figure className="gallery-photo">
            <img
              src="/images/nails-4.jpeg"
              alt="Custom silver butterfly nails"
            />
          </figure>
        </div>

        <figure className="gallery-photo gallery-photo-right">
          <img
            src="/images/nails-5.jpeg"
            alt="Custom zebra print nails"
          />
        </figure>
      </div>
    </section>
  );
}

function AboutPreview() {
  return (
    <section className="about-preview" id="about">
      <figure className="about-photo">
        <img
          src="/images/leydi.jpg"
          alt="Leydi, nail artist and founder of Polished by Leydi"
        />
      </figure>

      <div className="about-copy">
        <p className="about-eyebrow">Meet Leydi</p>

        <h2>
          Nails are my art,
          <br />
          making you feel your best
          <br />
          is my passion.
          <span className="about-heart">♡</span>
        </h2>

        <p className="about-description">
          Hi! I'm Leydi - a nail artist and perfectionist at heart. Polished by Leydi was created to offer a relaxing, personalized experience where every detail matters. Thank you for trusting me with your nails!
        </p>

        <a href="/about" className="button about-button">
          Learn More About Me
          <span className="arrow">→</span>
        </a>
      </div>

      <div className="about-booking-card">

        <h2>
          Your next set
          <br />
          is calling ♡
        </h2>

        <p>
          Let's create something
          <br />
          beautiful together.
        </p>

        <a href="/contact" className="button booking-button">
          Book Your Appointment
          <span className="arrow">→</span>
        </a>

        <img
          className="booking-line-art"
          src={bookingHandArt}
          alt=""
          aria-hidden="true"
        />
      </div>
    </section>
  );
}

const reviews = [
  {
    image: "/images/nails-7.jpeg",
    quote:
      "Leydi is so talented and so sweet! I always leave feeling confident and obsessed with my nails.",
    name: "Amanda R.",
  },
  {
    image: "/images/nails-9.jpeg",
    quote:
      "The cleanest, most relaxing nail experience I've ever had. She pays attention to every detail!",
    name: "Brianna T.",
  },
  {
    image: "/images/nails-10.jpeg",
    quote:
      "Absolutely in love with my nails every single time.",
    name: "Taylor M.",
  },
];

function ReviewsSection() {
  return (
    <section className="reviews-section" id="reviews">
      <div className="reviews-heading">
        <span />
        <p>
          Kind Words <span className="reviews-heart">♡</span>
        </p>
        <span />
      </div>

      <div className="reviews-grid">
        {reviews.map((review) => (
          <article className="review-card" key={review.name}>
            <img
              className="review-image"
              src={review.image}
              alt={`Nail set for ${review.name}`}
            />

            <div className="review-content">
              <div className="review-stars" aria-label="5 out of 5 stars">
                ★★★★★
              </div>

              <p>{review.quote}</p>
              <cite>- {review.name}</cite>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

const instagramImages = [
  "/images/instagram-1.png",
  "/images/nails-6.jpeg",
  "/images/instagram-5.png",
  "/images/instagram-3.png",
  "/images/nails-8.jpeg",
  "/images/instagram-2.png",
  "/images/nails-11.jpg",
  "/images/instagram-4.png",
];

function InstagramSection() {
  return (
    <section className="instagram-section">
      <div className="instagram-heading">
        <span />

        <a
          href="https://www.instagram.com/polished_by_leydii"
          target="_blank"
          rel="noreferrer"
        >
          Follow Along @polished_by_leydii
          <span className="instagram-heart">♡</span>
        </a>

        <span />
      </div>

      <div className="instagram-grid">
        {instagramImages.map((image, index) => (
          <a
            className="instagram-photo"
            href="https://www.instagram.com/polished_by_leydii"
            target="_blank"
            rel="noreferrer"
            key={image}
            aria-label={`View Polished by Leydi on Instagram, photo ${index + 1}`}
          >
            <img
              src={image}
              alt={`Polished by Leydi Instagram post ${index +1}`}
            />

            <div className="instagram-overlay">
              <span>View on Instagram</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer" id="contact">
      <div className="footer-grid">
        <div className="footer-brand">
          <div className="footer-logo-wrap">
            <img src={footerLogo} alt="Polished by Leydi" />
          </div>

          <div className="footer-legal">
            <p>
              © {new Date().getFullYear()} Polished by Leydi.
              <br />
              All rights reserved.
            </p>

            <p className="footer-credit">
              Designed &amp; Developed by{" "}
              <span className="designer-name">Maddie W</span>
            </p>
          </div>

        </div>

        <div className="footer-column">
          <h2>Navigate</h2>

          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/services">Services</a>
        </div>

        <div className="footer-column">
          <h2>Explore</h2>

          <a href="/gallery">Gallery</a>
          <a href="#reviews">Reviews</a>
          <a href="/contact">Contact</a>

          <div className="footer-links-flourish" aria-hidden="true">
            <span className="footer-mini-sparkle">✦</span>
            <span className="footer-flourish-text">polished with love</span>
            <span className="footer-mini-heart">♡</span>
          </div>
        </div>

        <div className="footer-column footer-connect">
          <h2>Connect</h2>

          <a
            href="https://www.instagram.com/polished_by_leydii"
            target="_blank"
            rel="noreferrer"
          >
            <span aria-hidden="true">◎</span>
            Instagram
          </a>

          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noreferrer"
          >
            <span aria-hidden="true">f</span>
            Facebook
          </a>

          <a href="mailto:hello@polishedbyleydi.com">
            <span aria-hidden="true">✉</span>
            hello@polishedbyleydi.com
          </a>
        </div>

        <div className="footer-newsletter">
          <h2>Let's Stay Connected</h2>

          <p>Get updates, nail inspo and special offers!</p>

          <form
            className="newsletter-form"
            onSubmit={(event) => event.preventDefault()}
          >
            <label className="sr-only" htmlFor="newsletter-email">
              Email address
            </label>

            <input
              id="newsletter-email"
              type="email"
              name="email"
              placeholder="Your email"
              required
            />

            <button type="submit">Join</button>
          </form>
        </div>
      </div>

      <div className="footer-leaf-wrap" aria-hidden="true">
        <img src={footerPinkLeaf} alt="" />
      </div>
    </footer>
  );
}

const fullServices = [
  {
    name: "Structured Manicure",
    description:
      "A strengthening manicure designed to support natural nail growth while keeping your nails polished and protected.",
    price: "$70+",
    duration: "60 min",
  },
  {
    name: "Structured Manicure Rebalance",
    description:
      "Maintenance service for returning structured manicure clients.",
    price: "$75+",
    duration: "80 min",
  },
  {
    name: "Gel Manicure",
    description:
      "Includes nail shaping, cuticle care, a light hand massage, your choice of gel polish and a signature scrub.",
    price: "$40+",
    duration: "45 min",
  },
  {
    name: "Gel-X Full Set",
    description:
      "Perfect for adding length and strength with lightweight Gel-X extensions.",
    price: "$85+",
    duration: "80 min",
  },
  {
    name: "XXL Gel-X - One Color",
    description:
      "An extra-long Gel-X extension set finished with one gel-polish color.",
    price: "$80+",
    duration: "90 min",
  },
  {
    name: "Removal + Gel-X Full Set",
    description:
      "Safe removal of your previous Gel-X set followed by a fresh full set.",
    price: "$95",
    duration: "120 min",
  },
  {
    name: "Level 1 Nail Art",
    description:
      "Small basic nail art on one finger of each hand.",
    price: "$5+",
    duration: "15 min",
  },
  {
    name: "Level 3 Nail Art",
    description:
      "Detailed designs on all ten fingers. Please send inspiration pictures before your appointment.",
    price: "$25+",
    duration: "40 min",
  },
  {
    name: "Acrylic, Dip or Builder Gel Removal",
    description:
      "Careful removal of acrylic, dip powder or builder gel.",
    price: "$40",
    duration: "60 min",
  },
  {
    name: "Gel-X Removal",
    description:
      "Gentle removal of a Gel-X set without another service.",
    price: "$20",
    duration: "45 min",
  },
  {
    name: "Structured Manicure Removal",
    description:
      "Removal service for existing structured manicure clients.",
    price: "$20",
    duration: "45 min",
  },
  {
    name: "Add-On Gel Removal",
    description:
      "Add this when your appointment requires removal of existing gel polish.",
    price: "$15",
    duration: "30 min",
  },
  {
    name: "Nail Fix",
    description:
      "Repair for a chipped, cracked or broken nail.",
    price: "$5+",
    duration: "30 min",
  },
  {
    name: "MENCare",
    description:
      "Nail clipping, nail shaping and cuticle care.",
    price: "$25",
    duration: "30 min",
  },
  {
    name: "Kids Gel Manicure",
    description:
      "A sweet and simple gel manicure for younger clients.",
    price: "$30",
    duration: "30 min",
  },
];

const serviceCategories = [
  {
    id: "manicures",
    eyebrow: "Manicures",
    title: "Classic care, polished results.",
    icon: gelIcon,
    services: [
      "Structured Manicure",
      "Structured Manicure Rebalance",
      "Gel Manicure",
    ],
  },
  {
    id: "extensions",
    eyebrow: "Gel-X Extensions",
    title: "Strong, lightweight, & beautifully sculpted.",
    icon: extensionsIcon,
    services: [
      "Gel-X Full Set",
      "XXL Gel-X - One Color",
      "Removal + Gel-X Full Set",
    ],
  },
  {
    id: "nail-art",
    eyebrow: "Nail Art",
    title: "Personal style, every time.",
    icon: nailArtIcon,
    services: ["Level 1 Nail Art", "Level 3 Nail Art"],
  },
  {
    id: "removals",
    eyebrow: "Removals & Repairs",
    title: "Safe removal, expert care",
    icon: repairIcon,
    services: [
      "Acrylic, Dip or Builder Gel Removal",
      "Gel-X Removal",
      "Structured Manicure Removal",
      "Add-On Gel Removal",
      "Nail Fix",
    ],
  },
  {
    id: "specialty",
    eyebrow: "Specialty",
    title: "Care for every client.",
    icon: structuredIcon,
    services: ["MENCare", "Kids Gel Manicure"],
  },
];

const popularServices = new Set([
  "Structured Manicure",
  "Gel-X Full Set",
]);

function ServicesPage() {
  return (
    <>
      <Header />
      
      <main className="services-page">
        <section
          className="services-page-hero"
          style={{
            backgroundImage: `linear-gradient(rgba(255, 250, 243, 0.38), rgba(255, 250, 243, 0.38)), url("${heroBackground}")`,
          }}
        >
          <img
            className="services-hero-leaf services-hero-leaf-left"
            src={servicesHeroLeafLeft}
            alt=""
            aria-hidden="true"
          />

          <img
            className="services-hero-leaf services-hero-leaf-right"
            src={servicesHeroLeafRight}
            alt=""
            aria-hidden="true"
          />

          <div className="services-hero-content">
            <p className="services-page-eyebrow">
              Polished by Leydi <span>✦</span> Service Menu
            </p>

            <h1>Services</h1>

            <p className="services-page-description">
              Thoughtful nail care, beautiful details and a service created just for you.
            </p>
          </div>

          <div className="services-hero-wave" aria-hidden="true">
            <svg viewBox="0 0 1440 125" preserveAspectRatio="none">
              <path
                className="services-wave-fill"
                d="M0 50 C240 118, 470 28, 725 65 C990 100, 1215 115, 1440 35 L1440 125 L0 125 Z"
              />

              <path
                className="services-wave-line"
                d="M0 50 C240 118, 470 28, 725 65 C900 100, 1215 115, 1440 35"
              />
            </svg>

            <span className="services-wave-heart">♡</span>
          </div>
        </section>
        
        <nav
          className="services-category-nav"
          aria-label="Service categories"
        >
          {serviceCategories.map((category) => (
            <a href={`#${category.id}`} key={category.id}>
              <img src={category.icon} alt="" aria-hidden="true" />
              <span>{category.eyebrow}</span>
            </a>
          ))}
        </nav>
        
        <div className="services-category-list">
          {serviceCategories.map((category) => {
            const categoryServices = fullServices.filter((service) =>
              category.services.includes(service.name),
            );
            
            return (
              <section
                className={`service-category service-category-${category.id}`}
                id={category.id}
                key={category.id}
              >
                <div className="service-category-heading">
                  <p>{category.eyebrow}</p>
                  <h2>{category.title}</h2>

                  <div className="service-category-divider">
                    <span />
                    <span>♡</span>
                    <span />
                  </div>
                </div>

                <div
                  className={`service-category-grid ${
                    categoryServices.length === 2
                      ? "service-category-grid-two"
                      : ""
                  }`}
                >
                  {categoryServices.map((service) => {
                    const serviceIndex =
                      fullServices.findIndex(
                        (item) => item.name === service.name,
                      ) + 1;

                    const isPopular = popularServices.has(service.name);

                    return (
                      <article
                        className="upgraded-service-card"
                        key={service.name}
                      >
                        {isPopular && (
                          <span className="popular-service-badge">
                            Most Popular
                          </span>
                        )}

                        <span className="upgraded-service-number">
                          {String(serviceIndex).padStart(2,"0")}
                        </span>

                        <div className="upgraded-service-icon">
                          <img
                            src={category.icon}
                            alt=""
                            aria-hidden="true"
                          />
                        </div>

                        <h3>{service.name}</h3>
                        <p>{service.description}</p>

                        <div className="upgraded-service-details">
                          <span className="service-price">
                            {service.price}
                          </span>

                          <span className="service-duration">
                            {service.duration}
                          </span>
                        </div>

                        <a
                          className="button upgraded-book-button"
                          href="/contact"
                        >
                          Book Now
                          <span className="arrow">→</span>
                        </a>
                      </article>
                    );
                  })}
                </div>

                {category.id === "manicures" && (
                  <img
                    className="manicure-section-leaf"
                    src={servicesManicureLeaf}
                    alt=""
                    aria-hidden="true"
                  />
                )}

                {category.id === "extensions" && (
                  <img
                    className="extensions-section-leaf"
                    src={servicesExtensionsLeaf}
                    alt=""
                    aria-hidden="true"
                  />
                )}

                {category.id === "removals" && (
                  <img
                    className="removals-section-leaf"
                    src={servicesRemovalsLeaf}
                    alt=""
                    aria-hidden="true"
                  />
                )}

                {category.id === "specialty" && (
                  <img
                    className="specialty-section-leaf"
                    src={servicesSpecialtyLeaf}
                    alt=""
                    aria-hidden="true"
                  />
                )}
              </section>
            );
          })}
        </div>

        <section className="service-help-card">
          <img
            className="service-help-leaf"
            src={bookingHelpLeaf}
            alt=""
            aria-hidden="true"
          />

          <div className="service-help-copy">
            <p>Need a little guidance?</p>
            <h2>Not sure what to book?</h2>
            <span>
              I'm here to help you choose the perfect service for your nails and your goals.
            </span>
          </div>

          <div className="service-help-divider" />

          <div className="service-help-reasons">
            <p>
              <span>♡</span>
              Not sure what service fits your needs?
            </p>

            <p>
              <span>♡</span>
              Have questions about timing or nail health?
            </p>

            <p>
              <span>♡</span>
              Want a custom plan for your nails?
            </p>
          </div>

          <a className="button service-help-button" href="/contact">
            Help Me Choose
            <span className="arrow">→</span>
          </a>

          <img
            className="service-help-polish"
            src={bookingHelpPolish}
            alt=""
            aria-hidden="true"
          />
        </section>

        <section className="service-preparation">
          <article>
            <img
              className="preparation-svg"
              src={preparationCamera}
              alt=""
              aria-hidden="true"
            />

            <div>
              <h2>Bring Inspiration Photos</h2>
              <p>
                Photos help me understand your vision and create your perfect set.
              </p>
            </div>
          </article>

          <article>
            <img
              className="preparation-svg"
              src={preparationCalendar}
              alt=""
              aria-hidden="true"
            />

            <div>
              <h2>Book Removal When Needed</h2>
              <p>
                Add removal to your appointment so there is enough time for the best results.
              </p>
            </div>
          </article>

          <article>
            <img
              className="preparation-svg"
              src={preparationClock}
              alt=""
              aria-hidden="true"
            />

            <div>
              <h2>Nail Art May Require Extra Time</h2>
              <p>
                Detailed designs take time and love. Thank you for understanding!
              </p>
            </div>
          </article>
        </section>
        
        <section className="services-page-cta">
          <img
            className="services-cta-leaf"
            src={servicesSpecialtyLeaf}
            alt=""
            aria-hidden="true"
          />

          <p>Ready for your next set?</p>
          <h2>Let's create something beautiful.</h2>
          
          <a className="button services-cta-button" href="/contact">
            Book Your Appointment
            <span className="arrow">→</span>
          </a>
        </section>
      </main>
      
      <Footer />
    </>
  );
}
const businessHours = [
  ["Monday", "Closed"],
  ["Tuesday", "10 AM - 2 PM"],
  ["Wednesday", "10 AM - 6 PM"],
  ["Thursday", "10 AM -6 PM"],
  ["Friday", "10 AM - 6 PM"],
  ["Saturday", "10 AM - 6 PM"],
  ["Sunday", "Closed"],
];

function AboutInfoSection() {
  return (
    <section
      className="about-info-section"
      style={{
        backgroundImage: `linear-gradient(rgba(250, 238, 229, 0.62), rgba(250, 238, 229, 0.62)), url("${heroBackground}")`,
      }}
    >

      <div className="about-info-grid">
        <article className="about-info-card hours-card">
          <img
            className="about-info-icon-image"
            src={locationIcon}
            alt=""
            aria-hidden="true"
          />

          <h2>Hours &amp; Location</h2>

          <div className="about-info-divider">
            <span />
            <span>♡</span>
            <span />
          </div>

          <a
            className="about-address"
            href="https://maps.google.com/?q=495+Uinta+Way+Suite+210+Denver+CO+80230"
            target="_blank"
            rel="noreferrer"
          >
            <span aria-hidden="true">⌖</span>

            <span>
              495 Uinta Way, Sutie 210
              <br />
              Denver, CO 80230
            </span>
          </a>

          <div className="business-hours">
            {businessHours.map(([day, hours]) => (
              <div className="business-hours-row" key={day}>
                <span>{day}</span>
                <span>{hours}</span>
              </div>
            ))}
          </div>

          <img
            className="about-info-leaf about-info-leaf-left"
            src={infoLeafLeft}
            alt=""
            aria-hidden="true"
          />
        </article>

        <article className="about-info-card policy-card">
          <img
            className="about-info-icon-image"
            src={policyIcon}
            alt=""
            aria-hidden="true"
          />

          <h2>Cancellation Policy</h2>

          <div className="about-info-divider">
            <span />
            <span>♡</span>
            <span />
          </div>

          <p>
            I charge a 50% cancellation fee for any no-show or cancellation within 24 hours of the scheduled appointment.
          </p>

          <a className="button policy-button" href="/contact">
            Contact Me
            <span className="arrow">→</span>
          </a>

          <img
            className="about-info-leaf about-info-leaf-right"
            src={infoLeafRight}
            alt=""
            aria-hidden="true"
          />
        </article>
      </div>
    </section>
  );
}

const aboutReviews = [
  {
    quote:
      "Always a great experience with Leydi. She makes sure she's gentle and everything is to your liking.",
    name: "Mish",
  },
  {
    quote:
      "Leydi was amazing! I had such a great experience and will definitely be back. My nails look amazing!",
    name: "CC Stallings",
  },
  {
    quote:
      "Leydi does a phenomenal job! My nails look great and hold up well over time. Highly recommend her services!",
    name: "Jillian",
  },
  {
    quote:
      "Professional Accomodating. Creative. Efficient. My nails always look great. Thank you.",
    name: "Alex",
  },
  {
    quote:
      "It's my first time doing Gel X, and I am very satisfied with the outcome. Leydi did amazing work, she's very creative and understanding. I would definitely book with her again.",
    name: "Jess Chavez",
  },
];

function AboutReviewsSection() {
  return (
    <section
      className="about-reviews-section"
      id="reviews"
      style={{
        backgroundImage: `linear-gradient(rgba(255, 250, 243, 0.58), rgba(255, 250, 243, 0.58)), url("${heroBackground}")`,
      }}
    >
      <div className="about-reviews-heading">
        <h2>Kind Words</h2>

        <div className="about-reviews-divider">
          <span />
          <span>♡</span>
          <span />
        </div>

        <div 
          className="about-reviews-heading-stars"
          aria-label="5 out of 5 stars"
        >
          ★★★★★
        </div>
      </div>

      <div className="about-reviews-grid">
        {aboutReviews.map((review) => (
          <article className="about-review-card" key={review.name}>
            <span className="about-review-quote" aria-hidden="true">
              “
            </span>

            <div
              className="about-review-stars"
              aria-label="5 out of 5 stars"
            >
              ★★★★★
            </div>

            <p>{review.quote}</p>

            <div className="about-review-author">
              <span aria-hidden="true">♡</span>
              <cite>{review.name}</cite>
            </div>
          </article>
        ))}
      </div>

      <div className="about-reviews-action">
        <a
          className="button google-reviews-button"
          href="https://www.google.com/search?q=Polished+by+Leydi+Denver+reviews"
          target="_blank"
          rel="noreferrer"
        >
          Read More Reviews
          <span className="arrow">→</span>
        </a>
      </div>

      <img
        className="about-reviews-leaf about-reviews-leaf-left"
        src={reviewsLeafLeft}
        alt=""
        aria-hidden="true"
      />

      <img
        className="about-reviews-leaf about-reviews-leaf-right"
        src={reviewsLeafRight}
        alt=""
        aria-hidden="true"
      />
    </section>
  );
}

function AboutInstagramSection() {
  const aboutInstagramImages = [
    "/images/nails-12.jpg",
    "/images/nails-13.jpg",
    "/images/nails-14.jpg",
    "/images/nails-15.jpg",
    "/images/nails-16.jpg",
  ];

  return (
    <section className="about-instagram-section">
      <div className="about-instagram-heading">
        <a
          href="https://www.instagram.com/polished_by_leydii"
          target="_blank"
          rel="noreferrer"
        >
          Follow on Instagram <span>♡</span>
        </a>

        <p>@polished_by_leydii</p>
      </div>

      <div className="about-instagram-gallery">
        <div className="about-instagram-grid">
          {aboutInstagramImages.map((image, index) => (
            <a
              className="about-instagram-photo"
              href="https://www.instagram.com/polished_by_leydii"
              targer="_blank"
              rel="noreferrer"
              key={image}
              aria-label={`View Instagram post ${index + 1}`}
            >
              <img
                src={image}
                alt={`Polished by Leydi nail design ${index + 1}`}
              />

              <div className="about-instagram-overlay">
                <span aria-hidden="true">♡</span>
                <span>View Post</span>
              </div>
            </a>
          ))}
        </div>

        <img
          className="about-instagram-leaf about-instagram-leaf-left"
          src={instagramLeafLeft}
          alt=""
          aria-hidden="true"
        />

        <img
          className="about-instagram-leaf about-instagram-leaf-right"
          src={instagramLeafRight}
          alt=""
          aria-hidden="true"
        />
      </div>

      <div className="about-instagram-wave" aria-hidden="true">
        <svg viewBox="0 0 1440 100" preserveAspectRatio="none">
          <path d="M0 50 C250 110, 460 35, 720 62 C1000 92, 1210 25, 1440 58 L1440 100 L0 100 Z" />
        </svg>
      </div>
    </section>
  );
}

function AboutPage() {
  useEffect(() => {
    if (window.location.hash === "#reviews") {
      window.requestAnimationFrame(() => {
        document
          .getElementById("reviews")
          ?.scrollIntoView({ behavior: "smooth", block: "start"});
      });
    }
  }, []);

  return (
    <>
      <Header />
      
      <main className="about-page">
        <section
          className="about-page-hero"
          style={{
            backgroundImage: `linear-gradient(
              rgba(255, 250, 243, 0.38),
              rgba(255, 250, 243, 0.38)
            ), url("${heroBackground}")`,
          }}
        >
          <div className="about-page-copy">
            <p className="about-page-eyebrow">Meet Leydi</p>
            
            <h1>
              Nails are my art,
              <br />
              making you feel your best
              <br />
              is my passion.
            </h1>
            
            <div className="about-page-divider">
              <span />
              <span className="about-page-heart">♡</span>
              <span />
            </div>
            
            <p className="about-page-description">
              Hi! I'm Leydi - a nail artist and perfectionist at heart. Polished by Leydi was created to offer a relaxing, personalized experience where every detail matters. Thank you for trusting me with your nails!
            </p>
            
            <a
              href="/contact"
              className="button about-page-button"
            >
              Book Your Appointment
              <span className="arrow">→</span>
            </a>
          </div>
          
          <div className="about-page-portrait">
            <img
              className="about-portrait-leaf about-portrait-leaf-top"
              src={aboutLeafTop}
              alt=""
              aria-hidden="true"
            />
            
            <div className="about-page-photo">
              <img
                src="/images/leydi-2.jpg"
                alt="Leydi, nail artist and founder of Polished by Leydi"
              />
            </div>

            <img
              className="about-portrait-leaf about-portrait-leaf-bottom"
              src={aboutLeafBottom}
              alt=""
              aria-hidden="true"
            />
          </div>

          <div className="about-hero-wave" aria-hidden="true">
            <svg
              viewBox="0 0 1440 120"
              preserveAspectRatio="none"
            >
              <path
                className="about-wave-fill"
                d="
                  M 0 45
                  C 220 105, 430 20, 710 58
                  C 970 95, 1190 108, 1440 25
                  L 1440 120
                  L 0 120
                  Z
                "
              />

              <path
                className="about-wave-line"
                d="
                  M 0 45
                  C 220 105, 430 20, 710 58
                  C 970 95, 1190 108, 1440 25
                "
              />
            </svg>
          </div>
        </section>

        <AboutInfoSection />
        <AboutReviewsSection />
        <AboutInstagramSection />
      </main>
      
      <Footer />
    </>
  );
}

const galleryItems = [
  { src: "/images/nails.jpeg", category: "soft", alt: "Soft nude manicure" },
  { src: "/images/nails-2.jpeg", category: "art", alt: "Detailed custom nail art" },
  { src: "/images/nails-3.jpeg", category: "art", alt: "Brown and nude nail art" },
  { src: "/images/nails-4.jpeg", category: "gelx", alt: "Long butterfly nails" },
  { src: "images/nails-5.jpeg", category: "art", alt: "Zebra print nail design" },
  { src: "images/nails-6.jpeg", category: "seasonal", alt: "Seasonal manicure" },
  { src: "/images/nails-7.jpeg", category: "gelx", alt: "Custom Gel-X extensions" },
  { src: "/images/nails-8.jpeg", category: "soft", alt: "Plished neutral manicure" },
  { src: "/images/nails-9.jpeg", category: "art", alt: "Creative nail art" },
  { src: "/images/nails-10.jpeg", category: "seasonal", alt: "Colorful seasonal nails" },
  { src: "/images/nails-11.jpg", category: "soft", alt: "Soft polished nail set" },
  { src: "/images/nails-12.jpg", category: "gelx", alt: "Sculpted Gel-X nails" },
  { src: "/images/nails-13.jpg", category: "art", alt: "custom statement nails" },
  { src: "/images/nails-14.jpg", category: "seasonal", alt: "Seasonal nail artwork" },
  { src: "/images/nails-15.jpg", category: "soft", alt: "Elegant natural manicure" },
  { src: "/images/nails-16.jpg", category: "gelx", alt: "Long custom extensions" },
];

const galleryFilters = [
  { label: "All Sets", value: "all" },
  { label: "Soft & Simple", value: "soft" },
  { label: "Nail Art", value: "art" },
  { label: "Gel-X", value: "gelx" },
  { label: "Seasonal", value: "seasonal" },
];

function GalleryPage() {
  
    return (
      <>
        <Header />
        
        <main className="gallery-page">
          <section
            className="services-page-hero gallery-matching-hero"
            style={{
              backgroundImage: `linear-gradient(
                rgba(255, 250, 243, 0.38),
                rgba(255, 250, 243, 0.38)
              ), url("${heroBackground}")`,
            }}
          >
            <img
              className="services-hero-leaf services-hero-leaf-left"
              src={servicesHeroLeafLeft}
              alt=""
              aria-hidden="true"
            />
            
            <img
              className="services-hero-leaf services-hero-leaf-right"
              src={servicesHeroLeafRight}
              alt=""
              aria-hidden="true"
            />

            <div className="services-hero-content">
              <p className="services-page-eyebrow">
                Polished by Leydi <span>✦</span> Recent Work
              </p>

              <h1>Gallery</h1>

              <p className="services-page-description">
                Real nails. Real confidence. A little inspiration for your next set.
              </p>
            </div>

            <div className="services-hero-wave" aria-hidden="true">
              <svg viewBox="0 0 1440 125" preserveAspectRatio="none">
                <path
                  className="services-wave-fill"
                  d="M0 50 C240 118, 470 28, 725 65 C990 100, 1215 115, 1440 35 L1440 125 L0 125 Z"
                />

                <path
                  className="services-wave-line"
                  d="M0 50 C240 118, 470 28, 725 65 C900 100, 1215 115, 1440 35"
                />
              </svg>
              
              <span className="services-wave-heart">♡</span>
            </div>
          </section>

          <section className="gallery-work">
            <div className="gallery-page-grid">
              {galleryItems.map((item, index) => (
                <figure
                  className={`gallery-grid-item gallery-frid-item-${index % 5}`}
                    key={`${item.src}-${index}`}
                >
                  <img src={item.src} alt={item.alt} loading="lazy" />

                  <figcaption>
                    <span>Polished by Leydi</span>
                    <span>♡</span>
                  </figcaption>
                </figure>
              ))}
            </div>

            <img
              className="gallery-work-leaf gallery-work-leaf-left"
              src={servicesSpecialtyLeaf}
              alt=""
              aria-hidden="true"
            />

            <img
              className="gallery-work-leaf gallery-work-leaf-right"
              src={servicesManicureLeaf}
              alt=""
              aria-hidden="true"
            />
          </section>

          <section className="gallery-booking-card">
            <img src={servicesSpecialtyLeaf} alt="" aria-hidden="true" />
            
            <div>
              <p>Found your inspiration?</p>
              <h2>See something you love?</h2>
              <span>
                Let's bring your dream nails to life and create a set that feels completely you.
              </span>
              
              <a className="button gallery-page-button" href="/contact">
                Book Your Appointment
                <span className="arrow">→</span>
              </a>
            </div>
            
            <img src={servicesHeroLeafRight} alt="" aria-hidden="true" />
          </section>
          
          <section className="gallery-page-cta">
            <img
              className="gallery-cta-leaf gallery-cta-leaf-left"
              src={servicesSpecialtyLeaf}
              alt=""
              aria-hidden="true"
            />
            
            <div>
              <p>Ready for your next set?</p>
              <h2>Let's create something beautiful.</h2>
              
              <a className="button gallery-page-button" href="/contact">
                Book Now
                <span className="arrow">→</span>
              </a>
            </div>
            
            <img
              className="gallery-cta-leaf gallery-cta-leaf-right"
              src={servicesSpecialtyLeaf}
              alt=""
              aria-hidden="true"
            />
          </section>
        </main>
        
        <Footer />
      </>
    );
}

const contactHours = [
  ["Monday", "Closed"],
  ["Tuesday", "10 AM - 2 PM"],
  ["Wednesday", "10 AM - 6 PM"],
  ["Thursday", "10AM - 6 PM"],
  ["Friday", "10 AM - 6 PM"],
  ["Saturday", "10 AM - 6 PM"],
  ["Sunday", "Closed"],
];

function ContactPage() {
  return (
    <>
      <Header />
      
      <main className="contact-page">
        <section
          className="services-page-hero contact-page-hero"
          style={{
            backgroundImage: `linear-gradient(
              rgba(255, 250, 243, 0.34),
              rgba(255, 250, 243, 0.34)
          ), url("${heroBackground}")`,
          }}
        >
          <img
            className="services-hero-leaf services-hero-leaf-left"
            src={servicesHeroLeafLeft}
            alt=""
            aria-hidden="true"
          />

          <img
            className="services-hero-leaf services-hero-leaf-right"
            src={servicesHeroLeafRight}
            alt=""
            aria-hidden="true"
          />
          
          <div className="services-hero-content">
            <p className="services-page-eyebrow">
              Polished by Leydi <span>✦</span> Get in Touch
            </p>
            
            <h1>Let's Connect</h1>
            
            <p className="services-page-description">
              I'd love to hear from you. Questions, bookings, or just want to say hi? I'm here for you.
            </p>
          </div>
          
          <div className="services-hero-wave" aria-hidden="true">
            <svg viewBox="0 0 1440 125" preserveAspectRatio="none">
              <path
                className="services-wave-fill"
                d="M0 50 C240 118, 470 28, 725 65 C990 100, 1215 115, 1440 34 L1440 125 L0 125 Z"
              />
              
              <path
                className="services-wave-line"
                d="M0 50 C240 118, 470 28, 725 65 C900 100, 1215 115, 1440 35"
              />
            </svg>
            
            <span className="services-wave-heart">♡</span>
          </div>
        </section>
        
        <section className="contact-main-section">
          <img
            className="contact-decoration contact-decoration-left"
            src={servicesSpecialtyLeaf}
            alt=""
            aria-hidden="true"
          />
          
          <img
            className="contact-decoration contact-decoration-right"
            src={servicesManicureLeaf}
            alt=""
            aria-hidden="true"
          />
          
          <div className="contact-card contact-form-card">
            <p className="contact-card-eyebrow">Send a Note</p>
            <h2>Send a Message</h2>
            
            <p className="contact-card-intro">
              Have a question or ready to book? Fill out the form below and I'll get back to you as soon as possible.
            </p>
            
            <form
              className="contact-form"
              onSubmit={(event) => event.preventDefault()}
            >
              <label>
                <span>
                  Name <b>*</b>
                </span>
                
                <input
                  type="text"
                  name="name"
                  placeholder="Your full name"
                  required
                />
              </label>
              
              <label>
                <span>
                  Email <b>*</b>
                </span>
                
                <input
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  required
                />
              </label>
              
              <label>
                <span>Phone</span>
                
                <input
                  type="tel"
                  name="phone"
                  placeholder="(720) 123, 4567"
                />
              </label>
              
              <label>
                <span>
                  What can I help you with? <b>*</b>
                </span>
                
                <select name="reason" defaultValue="" required>
                  <option value="" disabled>
                    Select an option
                  </option>
                  <option value="booking">Booking question</option>
                  <option value="service">Help choosing a service</option>
                  <option value="nail-art">Custom nail art</option>
                  <option value="existing-appointment">
                    Existing appointment
                  </option>
                  <option value="other">Something else</option>
                </select>
              </label>
              
              <label>
                <span>
                  Message <b>*</b>
                </span>
                
                <textarea
                  name="message"
                  placeholder="Tell me more..."
                  rows="6"
                  required
                />
              </label>
              
              <button className="button contact-submit-button" type="submit">
                Send Message
                <span className="arrow">→</span>
              </button>
            </form>
          </div>
          
          <div className="contact-card contact-studio-card">
            <p className="contact-card-eyebrow">Come Say Hello</p>
            <h2>Visit the Studio</h2>
            
            <p className="contact-card-intro">
              Come see me in person! I can't wait to welcome you to my cozy nail studio.
            </p>
            
            <a
              className="contact-address"
              href="https://www.google.com/maps/search/?api=1&query=495+Uinta+Way+Suite+210+Denver+CO+80230"
              target="_blank"
              rel="noreferrer"
            >
              <span className="contact-round-icon">⌖</span>
              
              <span>
                495 Uinta Way, Suite 210
                <br />
                Denver, CO 80230
              </span>
            </a>
            
            <div className="contact-map">
              <iframe
                title="Polished by Leydi studio location"
                src="https://google.com/maps?q=495+Uinta+Way+Suite+210+Denver+CO+80230&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            
            <div      className="contact-hours-heading">
              <span className="contact-round-icon">♡</span>
              <h3>Studio Hours</h3>
            </div>
            
            <div className="contact-hours">
              {contactHours.map(([day, hours]) => (
                <div className="contact-hours-row" key={day}>
                  <span>{day}</span>
                  <span>{hours}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
}

function App() {
  const currentPath = window.location.pathname;

  if (currentPath === "/services") {
    return <ServicesPage />;
  }

  if (currentPath === "/about") {
    return <AboutPage />;
  }
  
  if (currentPath === "/gallery") {
    return <GalleryPage />;
  }

  if (currentPath === "/contact") {
    return <ContactPage />;
  }

  return (
    <div className="home-page">
      <Header />

      <main id="top">
        <Hero />
        <ServicesStrip />
        <GalleryPreview />
        <AboutPreview />
        <ReviewsSection />
        <InstagramSection />
      </main>

      <Footer />
    </div>
  );
}

export default App;