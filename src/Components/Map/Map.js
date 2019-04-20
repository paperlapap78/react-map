import React, {Component} from 'react';

import backgroundMap from './background-map.jpg';
import marker from './marker.png';
import markerSelected from './marker-selected.png';

import mapData from './map-data.json';

import './Map.css';

export default class Map extends Component {

  constructor(props) {
    super(props);

    console.log(mapData);

    this.markerClick = this.markerClick.bind(this);
    this.mapClick = this.mapClick.bind(this);

    this.state = {
      selectedMarker: null
    }
  }

  mapClick() {
    console.log('map clicked');
    this.setState({ selectedMarker: null })
  }

  markerClick(index) {
    console.log('clicked ', index);
    this.setState({ selectedMarker: index })

  }

  renderMarker(location, index) {
    return (
        <img className="marker"
             onClick={(e) => this.markerClick(index, e)}
             src={this.state.selectedMarker === index ? markerSelected : marker}
             style={{left: location.position[0], top: location.position[1]}}
             alt={location.name}
             key={index}
        />
    )
  }

  render() {
    return (
      <div className="map">

        <img src={backgroundMap}
             onClick={this.mapClick}
             alt="Map"/>
        {
          mapData.map((location, index) =>
             this.renderMarker(location, index)
          )
        }
      </div>
    );
  }
}
