import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Nav/Navbar";
import Footer from "./Footer/Footer";
import Loading from "./UI/loading";
import Design from "./sectionPage/detailspage/design";
import Development  from "./sectionPage/detailspage/development";
import Marketing from "./sectionPage/detailspage/marketing";


const Home = React.lazy(() => import("./Home"));
const Gpage = React.lazy(() => import("./innerpages/Gpage"));
const Ipage = React.lazy(() => import("./innerpages/ipage"));
const ExploreTab = React.lazy(() => import("./innerpages/ExploreTab"));
const Wpage = React.lazy(()=>import("./innerpages/Wpage"));
const Vpage = React.lazy(()=>import("./innerpages/Vpage"));
const Dpage = React.lazy(()=>import("./innerpages/Dpage"));
const Cpage = React.lazy(()=>import("./innerpages/Cpage"));
const LogoCombo = React.lazy(()=>import("./makersCombo/logoCombo"));
const WeddingCombo = React.lazy(()=>import("./makersCombo/weddingCombo"));
const VideoCombo = React.lazy(()=>import("./makersCombo/videoCombo"));
const Socialcombo = React.lazy(()=>import("./makersCombo/socialCombo"));
const Cart = React.lazy(()=>import("./cart/cart"));
const About = React.lazy(()=>import("./sectionPage/about"));
const Help = React.lazy(()=>import("./sectionPage/help"));
const Services = React.lazy(()=>import("./sectionPage/services"));
const Portfolio = React.lazy(()=>import("./sectionPage/portfolio"));
const SignIn = React.lazy(()=>import("./Form/Sign_in"));
const SignUp = React.lazy(()=>import("./Form/SignUp"));
const NoMatchFound = React.lazy(() => import("./noMatchfound/noMatchFound"));
const Contact = React.lazy(() => import("./sectionPage/contact"));
const Thankyou = React.lazy(() => import("./UI/Thankyou"));




function App() {
  

  return (
    <>
        <Navbar />
        <div className="container">
        <Suspense fallback={<div className="centered"><Loading /></div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="explore" element={<ExploreTab />} />
            <Route path="about" element={<About />} />
            <Route path="help" element={<Help />} />
            <Route path="portfolio" element={<Portfolio />} />
            <Route path="contact" element={<Contact />} />


            <Route path="services" element={<Services />}/>
              <Route path="design" element={<Design />} />
              <Route path="development" element={<Development />} />
              <Route path="marketing" element={<Marketing />} />
      
            <Route path="signup" element={<SignUp />} />
            <Route path="signup" element={<SignIn />} />
            <Route path="Gpage" element={<Gpage />} />
            <Route path="ipage" element={<Ipage />} />
            <Route path="wpage" element={<Wpage />} />
            <Route path="vpage" element={<Vpage />} />
            <Route path="cpage" element={<Cpage />} />
            <Route path="Dpage" element={<Dpage />} />

            <Route path="*" element={<NoMatchFound />} />
            <Route path="cart" element={<Cart />} />
            <Route path="logocombo" element={<LogoCombo />} />
            <Route path="weddingcombo" element={<WeddingCombo />} />
            <Route path="videocombo" element={<VideoCombo />} />
            <Route path="socialcombo" element={<Socialcombo />} />

            <Route path="thankyou" element={<Thankyou />} />
          </Routes>
        </Suspense>
        </div>
        <Footer />
    </>
  );
}

export default App;
