import "../styles/Siginup.css";
import rectangleImage from "../assets/Rectangle 55.png";

const Signup = () => {
  return (
    
    <div className="signup-container">

      {/* LEFT IMAGE */}
      <div className="left-box">
        <img 
          src={rectangleImage} 
          className="img-fluid" 
          alt="Login illustration" 
        />
      </div>

      {/* RIGHT FORM */}
      <div className="right-box">
        <a href="/" className="back-link">
          <i className="fa-solid fa-arrow-left"></i> Back to Website
        </a>

        <h2>Welcome Back</h2>
        <p>Log in to your account</p>

        <form>
          <label>Email</label>
          <input type="email" placeholder="example@gmail.com" />

          <label>Password</label>
          <input type="password" placeholder="••••••••" />

          <div className="forgot-password">
            <a href="#">Forgot Password?</a>
          </div>

          <button type="submit" className="main-btn">Log In</button>

          <button type="button" className="google-btn">
            <i className="fa-brands fa-google"></i> Log in with Google
          </button>

          <button type="button" className="facebook-btn">
            <i className="fa-brands fa-facebook"></i> Log in with Facebook
          </button>
        </form>

        <p className="bottom-text">
          Don't have an account? <a href="#">Sign up</a>
        </p>
      </div>

    </div>
  );
};

export default Signup;