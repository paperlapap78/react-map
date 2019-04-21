import React, {Component} from 'react';

import './LocationDetails.css';

export default class LocationDetails extends Component {

  render() {
    const { locationDetails } = this.props;
    return (
      <div className='location-details'>
        <dl>
          <dt className="location-details-dt">Name:</dt>
          <dd className="location-details-dd">{locationDetails['name']}</dd>
          
          <dt className="location-details-dt">Type:</dt>
          <dd className="location-details-dd">{locationDetails['type']}</dd>

          <dt className="location-details-dt">Population:</dt>
          <dd className="location-details-dd">{locationDetails['population']}</dd>

          <dt className="location-details-dt">Wealth:</dt>
          <dd className="location-details-dd">{locationDetails['wealth']}</dd>

          <dt className="location-details-dt">Authority:</dt>
          <dd className="location-details-dd">{locationDetails['authority']}</dd>

          <dt className="location-details-dt">Guards:</dt>
          <dd className="location-details-dd">{locationDetails['numGuards']}</dd>

          <dt className="location-details-dt">Position:</dt>
          <dd className="location-details-dd">{locationDetails['position']}</dd>
        </dl>
      </div>
    )
  }
}
