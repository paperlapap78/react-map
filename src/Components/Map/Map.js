import React, {Component} from 'react';

import BackgroundMapService from '../../Service/BackgroundMapService'
import MapDataService from '../../Service/MapDataService'
import LocationDetails from './LocationDetails/LocationDetails'

import markerImg from './marker.png';
import markerSelectedImg from './marker-selected.png';

import './Map.css';

export default class Map extends Component {

  constructor(props) {
    super(props);
    this.state = {
      backgroundMap: null,
      mapLocationData: [],
      isMarkerSelected: false,
      selectedMarker: null
    };
    this.onMarkerClick = this.onMarkerClick.bind(this);
    this.onMapClick = this.onMapClick.bind(this);
  }

  componentDidMount() {
    BackgroundMapService.get()
      .then(backgroundMap => this.setState({ backgroundMap }));
    MapDataService.get()
      .then(mapLocationData => this.setState({ mapLocationData }));
  }

  onMapClick() {
    this.setState({
      isMarkerSelected: false,
      selectedMarker: null
    })
  }

  onMarkerClick(index) {
    this.setState({
      isMarkerSelected: true,
      selectedMarker: index
    })
  }

  _renderMarker(location, index) {

    return (
        <img className="marker"
             onClick={(e) => this.onMarkerClick(index, e)}
             src={this.state.selectedMarker === index ? markerSelectedImg : markerImg}
             style={{left: location.position[0], top: location.position[1]}}
             alt={location.name}
             key={index}
        />
    )
  }

  _renderLocationDetails() {
    return (
        <LocationDetails locationDetails={this.state.mapLocationData[this.state.selectedMarker]} />
    )
  }

  render() {
    const {
      backgroundMap,
      mapLocationData,
      isMarkerSelected
    } = this.state;

    return (
      <div className="map">
        <img className="background-map"
             src={backgroundMap}
             onClick={this.onMapClick}
             alt="Map"/>
        {
          mapLocationData.map((location, index) =>
            this._renderMarker(location, index))
        }

        { isMarkerSelected && this._renderLocationDetails() }
      </div>
    );
  }
}
