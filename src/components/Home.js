import React from "react";
import "../css/home.css";
import Localexpert from "./Localexpert";
import Locationgrid from "./Locationgrid";
import Navbar from "./Navbar";
import Ourstory from "./Ourstory";
import Process from "./Process";
import RecentProject from "./RecentProject.js";
import Services from "./Services";
import Whatdo from "./Whatdo";
import Countup from "react-countup";
function Home() {
  return (
    <div className="home">
      <div className="home--img_search">
        <div className="home--img">
          <Navbar />
        </div>
        <div className="home--search">
          <h1 className="h1">To each their home.</h1>
          <p>Let's find a home, that's perfect for you.</p>
        </div>
      </div>
      <div className="home--achievement">
        <div className="home--achievement_client">
          <h2>
            <Countup start={0} end={300} duration={5} suffix="+" />
          </h2>
          <p>
            Happy <br /> Client
          </p>
        </div>
        <div className="home--achievement_project">
          <h2>
            <Countup start={0} end={900} duration={5} suffix="+" />
          </h2>
          <p>
            Amazing <br /> Projects
          </p>
        </div>
        <div className="home--achievement_award">
          <h2>
            <Countup start={0} end={20} duration={5} suffix="+" />
          </h2>
          <p>
            Awards <br /> Winning
          </p>
        </div>
      </div>
      <Services />
      <Localexpert />
      <Process />
      <Locationgrid />
      <Whatdo />
      <Ourstory />
      <footer>
        <h5 className="h5">
          Discover{" "}
          <img
            loading="lazy"
            decoding="async"
            src="https://www.trulia.com/images/icons/txl3/LocationLincolnIcon.svg"
            alt=""
            height="30px"
            width="30px"
            class="Image__ImageContainer-sc-1motiir-0 lnwaHv getSvgContainer__StyledImage-sc-9w90nz-1 kXViDo"
          ></img>{" "}
          a place{" "}
          <img
            loading="lazy"
            decoding="async"
            src="https://www.trulia.com/images/icons/txl3/TownHouseIcon.svg"
            alt=""
            height="30px"
            width="30px"
            class="Image__ImageContainer-sc-1motiir-0 lnwaHv getSvgContainer__StyledImage-sc-9w90nz-1 kXViDo"
          ></img>
          you'll love{" "}
          <img
            loading="lazy"
            decoding="async"
            src="https://cdn.iconscout.com/icon/premium/png-256-thumb/love-3682121-3064297.png?w=128&f=avif"
            alt=""
            height="30px"
            width="30px"
            class="Image__ImageContainer-sc-1motiir-0 lnwaHv getSvgContainer__StyledImage-sc-9w90nz-1 kXViDo"
          ></img>
          to live.
        </h5>
        <img
          src="https://www.seekpng.com/png/detail/767-7674434_facilities-management-ict-buildings-footer.png"
          type="image/svg+xml"
          alt="Footer art"
          focusable="false"
          height="160"
          width="1500"
          class="pfs__kizoah-0 GYDLt"
        ></img>
      </footer>
    </div>
  );
}

export default Home;
