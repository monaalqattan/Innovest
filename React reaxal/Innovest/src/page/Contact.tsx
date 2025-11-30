import "../styles/Contact.css";
import emailjs from "emailjs-com";
import { useRef } from "react";

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_r6tfhsy",       // Service ID
      "template_3u1qg8h",      // Template ID
      form.current,
      "HvZhNQiskuByI8rNs"      // Public Key
    )
    .then(() => {
      alert("Message sent successfully!");
      form.current.reset();
    })
    .catch((error) => {
      console.error("Email Error:", error);
      alert("Failed to send message. Try again.");
    });
  };

  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src="../assets/Logo.png" alt="Innovest Logo" />
            Innovest
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav me-3">
              <li className="nav-item"><a className="nav-link" href="#">Home</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Discover</a></li>
              <li className="nav-item"><a className="nav-link" href="#">About Us</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Contact</a></li>
            </ul>

            <button className="btn-login">Log in</button>
            <button className="btn-signup">Sign up</button>
          </div>
        </div>
      </nav>

      {/* Page Wrapper */}
      <div className="page-wrapper">
        <div className="contact-container">

          {/* Left Side – Form */}
          <div className="main-content">
            <div className="logo">
              <div className="logo-text">D</div>
            </div>

            <h1 className="contact-title">contact us</h1>
            <p className="contact-subtitle">
              feel free to contact us any time, we will get back to you<br />
              as soon as possible
            </p>

            <form ref={form} onSubmit={sendEmail}>
              {/* Name */}
              <div className="form-group">
                <label className="form-label">Name</label>
                <input 
                  type="text" 
                  className="form-input" 
                  name="from_name" 
                  required 
                />
              </div>

              {/* Email */}
              <div className="form-group">
                <label className="form-label">E-Mail</label>
                <input 
                  type="email" 
                  className="form-input" 
                  name="from_email" 
                  required 
                />
              </div>

              {/* Message */}
              <div className="form-group">
                <label className="form-label">Message</label>
                <input 
                  type="text" 
                  className="form-input" 
                  name="message" 
                  required 
                />
              </div>

              <button type="submit" className="send-btn">
                Send
              </button>
            </form>
          </div>

          {/* Right Sidebar */}
          <div className="sidebar">
            <div className="info-box">
              <div className="info-title">Info</div>

              <div className="info-item">
                <i className="far fa-envelope"></i>
                <a href="mailto:innovest@gmail.com">innovest@gmail.com</a>
              </div>

              <div className="info-item">
                <i className="fas fa-phone"></i>
                <span>+230502</span>
              </div>

              <div className="info-item">
                <i className="far fa-map"></i>
                <span>21 Jump st</span>
              </div>

              <div className="info-item">
                <i className="far fa-clock"></i>
                <span>8:00 Am - 5:00 Pm</span>
              </div>
            </div>

            <div className="social-icons">
              <a href="#" className="social-icon"><i className="fab fa-google"></i></a>
              <a href="#" className="social-icon"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="social-icon"><i className="fab fa-instagram"></i></a>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default Contact;
