import React from "react";
import "../css/locationgrid.css";
import Location_grid_card from "./Location_grid_card";
function Locationgrid() {
  return (
    <div className="home--location">
      <h1>
        Exceptional Locations, Unrivaled <br />
        Lifestyles.
      </h1>
      <div className="home--locationgrid">
          <Location_grid_card
            title="Whats new in art."
            img="spacejoy-YqFz7UMm8qE-unsplash.jpg"
          />
          <Location_grid_card
            title="Whats new in architecture."
            img="etienne-beauregard-riverin-B0aCvAVSX8E-unsplash.jpg"
          />
          <Location_grid_card
            title="Whats new in design."
            img="joel-filipe-RFDP7_80v5A-unsplash.jpg"
          />
          <Location_grid_card
            title="Luxury Homes 2022."
            img="todd-kent-178j8tJrNlc-unsplash.jpg"
          />
          <Location_grid_card
            title="Whats new in design."
            img="joel-filipe-RFDP7_80v5A-unsplash.jpg"
          />
          <Location_grid_card
            title="Luxury Comforts 2022."
            img="spacejoy-YqFz7UMm8qE-unsplash.jpg"
          />
          <Location_grid_card
            title="Luxury Outlook 2022."
            img="lance-anderson-QdAAasrZhdk-unsplash.jpg"
          />
          <Location_grid_card
            title="Luxury Comforts 2022."
            img="todd-kent-178j8tJrNlc-unsplash.jpg"
          />
      </div>
    </div>
  );
}

export default Locationgrid;
