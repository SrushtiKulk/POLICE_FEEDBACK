import React from "react";
import Navbarv from "components/womennavbar";
import Carouselv from "components/women_caurosel";
import Womenevents from "components/wevents";
import NewsletterSignup from "components/email";
import Footer from "components/footer";

import Public from "components/public"
import FeedBack from "pages/Public/FeedBack"




const HomePagePage = () => {
  return (
  <div>
    {<Navbarv /> }
      {<Carouselv />}
   
      {<Womenevents />}
      {<FeedBack />}

        
     
   
      {<NewsletterSignup />}
      {<Footer/>}
    </div>


  );
};

export default HomePagePage;