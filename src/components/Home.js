import React from "react";
import "../css/home.css";
import Explore from "./Explore";
import Localexpert from "./Localexpert";
import Locationgrid from "./Locationgrid";
import Navbar from "./Navbar";
import Ourstory from "./Ourstory";
import Process from "./Process";
import RecentProject from "./RecentProject.JS";
import Services from "./Services";
import Whatdo from "./Whatdo";
function Home() {
  return (
    <div className="home">
      <div className="home--img_search">
        <div className="home--img">
          <Navbar />
        </div>
        <div className="home--search">
          <h1>Find a home that suits your lifestyle.</h1>
          <form>
            <input
              type="search"
              name=""
              id="home-search "
              className="home--search_box"
              placeholder="Search Properties"
            />
          </form>
        </div>
      </div>
      <div className="home--achievement">
        <div className="home--achievement_client">
          <h2>
            300<span>+</span>
          </h2>
          <p>
            Happy <br /> Client
          </p>
        </div>
        <div className="home--achievement_project">
          <h2>
            900<span>+</span>
          </h2>
          <p>
            Amazing <br /> Projects
          </p>
        </div>
        <div className="home--achievement_award">
          <h2>
            20<span>+</span>
          </h2>
          <p>
            Awards <br /> Winning
          </p>
        </div>
      </div>
      <Services/>
      <Explore/>
      <Localexpert/>
      <Process/>
      <Locationgrid/>
      <Whatdo/>
      <Ourstory/>
      
    </div>
  );
}

export default Home;
