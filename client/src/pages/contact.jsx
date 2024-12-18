import { useState, useEffect } from "react";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";

const defaultContactForm = {
  username: "",
  email: "",
  message: "",
};

export const Contact = () => {
  const [contact, setContact] = useState(defaultContactForm);
  const { user } = useAuth();

  // Pre-fill form with user data if logged in
  useEffect(() => {
    if (user?.userData) {
      setContact({
        username: user.userData.username || "",
        email: user.userData.email || "",
        message: "",
      });
    }
  }, [user]);

  // Handle input changes
  const handleInput = (e) => {
    const { name, value } = e.target;
    setContact((prevContact) => ({
      ...prevContact,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/form/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contact),
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        setContact({ ...defaultContactForm }); // Reset form on success
        toast.success("Message sent successfully");
      } else {
        toast.error("Failed to send message. Please try again.");
      }
    } catch (error) {
      toast.error("Message not sent. Network error occurred.");
      console.error("Error:", error);
    }
  };

  return (
    <div>
      {(!user || !user?.userData) && (
        <div style={{ textAlign: "center", marginTop: "20px", marginBottom: "20px" }}>
          <p>User data is not available. Please log in or register for a better experience (e.g., pre-filled data).</p>
          <div>
            <button
              style={{
                margin: "10px",
                padding: "10px 20px",
                backgroundColor: "#007bff",
                color: "#fff",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
              onClick={() => window.location.href = "/login"}
            >
              Login
            </button>
            <button
              style={{
                margin: "10px",
                padding: "10px 20px",
                backgroundColor: "#28a745",
                color: "#fff",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
              onClick={() => window.location.href = "/register"}
            >
              Register
            </button>
          </div>
        </div>
      )}

      <section className="section-contact">
        <div className="container grid grid-two-cols">
          <div className="contact-img">
            <img src="/images/images/support.jpg" alt="We are always ready to help" />
          </div>

          <section className="section-form">
            <h1 className="main-heading contact-heading">Contact Form</h1>

            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  autoComplete="off"
                  value={contact.username}
                  onChange={handleInput}
                  required
                  className="username-input"
                  placeholder="Enter your username"
                />
              </div>

              <div>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="off"
                  value={contact.email}
                  onChange={handleInput}
                  required
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label htmlFor="message">Message</label>
                <textarea
                  name="message"
                  id="message"
                  autoComplete="off"
                  value={contact.message}
                  onChange={handleInput}
                  required
                  cols="30"
                  rows="6"
                  placeholder="Write your message"
                ></textarea>
              </div>

              <div>
                <button type="submit" className="btn btn-submit">
                  Contact Now
                </button>
              </div>
            </form>
          </section>
        </div>
      </section>
    </div>
  );
};
