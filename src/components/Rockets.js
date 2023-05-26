import React from 'react';
/* eslint-disable */
import PropTypes from 'prop-types';
/* eslint-disable */

function Rocket(props) {
  const {
    description, rocket_id, rocket_name, flickr_images} = props.rocketData;
  const imageURL = flickrImages?.[0];
  return (
    <div className="rocket">
      <div className="rocket-img-wrapper">
        <img className="rocket-img" src={imageURL} alt={rocketName} />
      </div>
      <div className="rocket-details">
        <h3>{rocketName}</h3>
        <p>{description}</p>
        <button type="button" className="reserve-btn" data-id={rocketId}>
          Reserve Rocket
        </button>
      </div>
    </div>
  );
}

// Rocket.propTypes = {
//   rocketData: PropTypes.shape({
//     description: PropTypes.string.isRequired,
//     rocket_id: PropTypes.string.isRequired,
//     rocket_name: PropTypes.string.isRequired,
//     flickr_images: PropTypes.arrayOf(PropTypes.string).isRequired,
//     // Other prop types for rocketData properties, if any
//   }).isRequired,
// };
export default Rocket;
