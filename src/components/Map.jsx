import React from "react";
import "../styles/Map.css";

const Map = () => {
  return (
    <div className="map-container">

      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>

      <div className="map-box">

        <h1>Google Maps Clone</h1>

        <p>
          Explore beautiful locations with live map view.
        </p>

        <div className="map-frame">

          <iframe
            title="Google Map"
            src="https://maps.google.com/maps?q=Prayagraj&z=13&output=embed"
            loading="lazy"
          ></iframe>

        </div>

        <button>
          Explore Location
        </button>

      </div>
    </div>
  );
};

export default Map;