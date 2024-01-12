import React from "react";
import "./founder.css";
import Navbarv from "components/foundernavbar";
import Footer from "components/footer";

const FounderPage = () => {
  const founders = [
    {
      name: "Police Station 1",
      bio: "Name of Incharge (Contact Deatils)",
      profilePic: "https://cdn-icons-png.flaticon.com/512/700/700674.png",
    },
    {
      name: "Police Station 2",
      bio: "Name of Incharge (Contact Deatils)",
      profilePic: "https://cdn-icons-png.flaticon.com/512/700/700674.png",
    },
    {
      name: "Police Station 3",
      bio: "Name of Incharge (Contact Deatils)",
      profilePic: "https://cdn-icons-png.flaticon.com/512/700/700674.png",
    },
  ];

  return (
    <div className="founder-page1">
      {<Navbarv />}
      <div className="founder-page">
        <section className="founder-section">
          {founders.map((founder, index) => (
            <div className="founder-info" key={index}>
              <img className="xyz" src={founder.profilePic} />
              <div className="founder-details">
                <h2>{founder.name}</h2>
                <p>{founder.bio}</p>
              </div>
            </div>
          ))}
        </section>
        <section className="second-section">
          <div className="division">
            <h8>General Info</h8>
            <p>This section will contain the general information like address of the police station and its summarized star rating.</p>
            <button type="submit" className="btndesc">View More</button>
          </div>
          <div className="division">
            <h8>General Info</h8>
            <p>This section will contain the general information like address of the police station and its summarized star rating.</p>
            <button type="submit" className="btndesc">View More</button>
          </div>
          <div className="division">
            <h8>General Info</h8>
            <p>This section will contain the general information like address of the police station and its summarized star rating.</p>
            <button type="submit" className="btndesc">View More</button>
          </div>
        </section>
      </div>
      {<Footer />}
    </div>
  );
};

export default FounderPage;






