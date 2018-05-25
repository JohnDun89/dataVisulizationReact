import DeckGL, { LineLayer } from "deck.gl";
import React, { Component } from "react";

const viewport = {
  width: 500,
  height: 500,
  longitude: -122.41669,
  latitude: 37.7853,
  zoom: 13,
  pitch: 0,
  bearing: 0
};

const data = [
  {
    sourcePosition: [-122.41669, 37.7853],
    targetPosition: [-122.41669, 37.781]
  }
];

class MapContainer extends Component {
  render() {
    return (
      <div className="MapContainer">
        <p>I am a map</p>
        <DeckGL
          {...viewport}
          layers={[new LineLayer({ id: "line-layer", data })]}
        />
      </div>
    );
  }
}

export default MapContainer;
