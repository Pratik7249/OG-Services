import { NavLink } from "react-router-dom";
import { useAuth } from "../store/auth";  // Assuming useAuth is a custom hook that provides user data
import { Analytics2 } from "../components/layouts/Analytics2";

// Define the scrollToTop function
const scrollToTop = () => {
  window.scrollTo(0, 0); // Scrolls to the top of the page
};

export const About = () => {
  const { user } = useAuth();  // Access user directly from the useAuth hook

  return (
    <>
      <main>
        <section className="section-hero">
          <div className="container grid grid-two-cols">
            <div className="hero-content">
              <p>
                Welcome,{" "}
                {user && user.userData
                  ? `${user.userData.username} to our website`
                  : "to our website"}
              </p>
              <h1>Why Choose Us?</h1>
              <p>
                Expertise: Our team of skilled instructors stays ahead of industry trends to offer cutting-edge computer science courses.
              </p>
              <p>
                Customization: Every learner is unique, and we tailor our courses to meet your specific goals and needs.
              </p>
              <p>
                Customer-Centric Approach: We prioritize your success, offering top-notch support throughout your learning journey.
              </p>
              <p>
                Affordability: Learn at competitive prices without compromising on quality.
              </p>
              <p>
                Reliability: Count on us for consistent, accessible learning whenever you need it.
              </p>
              <div className="btn btn-group">
                <NavLink to="/services" onClick={scrollToTop}>
                  <button className="btn">Check Now</button>
                </NavLink>
              </div>
            </div>
            <div className="hero-image">
              <img
                src="/images/images/about.jpeg"
                alt="coding buddies"
                width="400"
                height="500"
              />
            </div>
          </div>
        </section>
      </main>

      <Analytics2 />
    </>
  );
};
