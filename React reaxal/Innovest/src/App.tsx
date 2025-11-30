// import { Routes, Route } from 'react-router-dom';
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Homepage from "./page/Homepage";
import Landingpage from "./page/Landingpage";
import DiscoverPage from "./page/Discover";
import InvestorDashboardPage from "./page/Investordeshboard";
import AdminDashboard from "./page/Adminpage";
import StartupProfile from "./page/Startup";
import Signup from "./page/Signup";
import Contact from "./page/Contact";
import AboutPage from "./page/Aboutus";
function App() {
  return (
    <>
      {
        <Routes>
          <Route path="/" element={<Landingpage/>} />
          <Route path="/homepage" element={<Homepage/>} />
          <Route path="/discover" element={<DiscoverPage />} />
          <Route path="/investorDashboard" element={<InvestorDashboardPage />} />
          <Route path="/adminDashboard" element={<AdminDashboard />} />
          <Route path="/startupProfile" element={<StartupProfile />}></Route>
          <Route path="/signup" element={< Signup/>}></Route>
          <Route path="/contact" element={<Contact />}></Route>
            <Route path="/aboutus" element={<AboutPage />}></Route>
        </Routes>
      }
    </>
  );
}

export default App;
{
  /* <Route path="/discover" element={<Discover />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="*" element={<NotFound />} /> */
}
