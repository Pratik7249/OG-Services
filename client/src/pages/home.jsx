import { Analytics } from "../components/Analytics.jsx";

export const Home = () => {
  return (
    <>
      <main>
        <section className="section-hero">
          <div className="container grid grid-two-cols">
            <div className="hero-content">
              <p>We Offer the Best Computer Science Courses</p>
              <h1>Welcome to OG-Services</h1>
              <p>
                Are you ready to elevate your skills and take your career to the next level with cutting-edge computer science courses? Look no further! At OG-Services, we specialize in providing innovative and comprehensive computer science courses designed to meet your learning needs and goals. Whether you're a beginner or an advanced learner, our expertly curated courses will help you master the latest technologies and methodologies in the field.
              </p>
              <div className="btn btn-group">
                <a href="/contact">
                  <button className="btn">connect now</button>
                </a>
                <a href="/services">
                  <button className="btn secondary-btn">learn more</button>
                </a>
              </div>
            </div>

            {/* hero images  */}
            <div className="hero-image">
              <img
                src="/images/images/home.webp"
                alt="coding together"
                width="500"
                height="500"
              />
            </div>
          </div>
        </section>
      </main>

      {/* 2nd section  */}
      <Analytics />

      {/* 3rd section  */}
      <section className="section-hero">
        <div className="container grid grid-two-cols">
          {/* hero images  */}
          <div className="hero-image">
            <img
              src="/images/images/information.jpg"
              alt="coding together"
              width="400"
              height="500"
            />
          </div>

          <div className="hero-content">
            <p>We are here to help you</p>
            <h1>Get Started Today</h1>
            <p>
              Ready to boost your career in computer science? Enroll in our expert-led courses today and take the first step towards mastering tech skills. Contact us now for a free consultation and learn how our courses can accelerate your success.
            </p>
            <div className="btn btn-group">
              <a href="/register">
                <button className="btn">Register Now</button>
              </a>
              <a href="/login">
                <button className="btn secondary-btn">Login</button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
};
