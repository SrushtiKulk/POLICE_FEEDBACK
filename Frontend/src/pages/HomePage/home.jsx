import React from "react";
import Navbarv from "components/navbar";
import Carouselv from "components/caurosel";
import Trendingevents from "components/events";
import NewsletterSignup from "components/email";
import Footer from "components/footer";
import About from "components/about";
import Public from "components/public"


const HomePagePage = () => {
  return (
  <div>
    {<Navbarv /> }
      {<Carouselv />}
      {<About />}
      {<Trendingevents />}
      {<Public />}
   
      {<NewsletterSignup />}
      {<Footer/>}
    </div>


  );
};

export default HomePagePage;
