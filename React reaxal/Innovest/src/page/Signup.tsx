
import "../styles/Siginup.css";

const Signup= () => {
  return (
    
    <div className="signup-container">

      {/* LEFT IMAGE */}
      <div className="left-box">
        <img src="/img/Rectangle 55.png" className="img-fluid" alt="Signup" />
      </div>

      {/* RIGHT FORM */}
      <div className="right-box">
        <a href="/" className="back-link">
          <i className="fa-solid fa-arrow-left"></i> Back to Website
        </a>

        <h2>Welcome</h2>
        <p>Create your new account</p>

        <form>
          <label>Full Name</label>
          <input type="text" placeholder="Abdulrahman Elnady" />

          <label>Email</label>
          <input type="email" placeholder="example@gmail.com" />

          <label>Password</label>
          <input type="password" placeholder="••••••••" />

          <label>Confirm Password</label>
          <input type="password" placeholder="••••••••" />

          <button type="submit" className="main-btn">Sign Up</button>

          <button type="button" className="google-btn">
            <i className="fa-brands fa-google"></i> Sign up with Google
          </button>

          <button type="button" className="facebook-btn">
            <i className="fa-brands fa-facebook"></i> Sign up with Facebook
          </button>
        </form>

        <p className="bottom-text">
          Already have an account? <a href="#">Log in</a>
        </p>
      </div>

    </div>
  );
};

export default Signup;
