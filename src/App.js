import "./App.css";

import Main from "./components2/Main";
import Courses from "./components2/Courses";
import Header from "./components2/Header";
import Footer from "./components2/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TermsAndConditions from "./components2/TermsAndConditions";
import RefundPolicy from "./components2/RefundPolicy";
import PrivacyPolicy from "./components2/PrivacyPolicy";
import Verify from "./components2/Verify";
import Blogs from "./components2/Blogs";
import Cybersecurity from "./components2/blogcomp/Cybersecurity";
import WebVulnerabilities from "./components2/blogcomp/WebVulnerabilities";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<><Main /><Courses /></>} />
          
          {/* Add other routes here */}
          <Route path="/verify" element={<Verify/>} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/refund-policy" element={<RefundPolicy />} />
          <Route path ="/blogs" element={<Blogs/>}/>
          <Route path="/blogs/Cybersecurity" 
          element= {<Cybersecurity/> }/>
          <Route path="/blogs/WebVulnerabilities" 
          element={<WebVulnerabilities/>}/> </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
