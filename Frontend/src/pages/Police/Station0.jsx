import React from "react";
import "./founder.css";
import Navbarv from "components/navbar";
import Footer from "components/footer";
import ChartComponent from "./Sol0";



const Station0Page = () => {
  return (
    <div className="founder-page1">
      {<Navbarv />}
      {<ChartComponent />}
     
      {<Footer />}
    </div>
  );
};

export default Station0Page;