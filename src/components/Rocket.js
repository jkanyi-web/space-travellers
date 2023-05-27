import { useDispatch } from "react-redux";
import { rocketsActions } from "../redux/rockets/rocketsSlice";

const Rocket = (props) => {
  const { description, id, rocket_name, flickr_images, reserved } =
    props.rocketData;
  const imageURL = flickr_images?.[0];
  const dispatch = useDispatch();

  const reserveHandler = (e) => {
    const { id } = e.target.dataset;

    dispatch(rocketsActions.reserveRocket({ id }));
  };

  const cancelHandler = (e) => {
    const { id } = e.target.dataset;
    dispatch(rocketsActions.cancelRocketReservation({ id }));
  };

  return (
    <div className="rocket">
      <div className="rocket-img-wrapper">
        <img className="rocket-img" src={imageURL} alt={rocket_name} />
      </div>
      <div className="rocket-details">
        <h3>{rocket_name}</h3>
        <p>
          {reserved && <span className="reserved-badge">Reserved</span>}
          {description}
        </p>
        {!reserved && (
          <button
            type="button"
            className="reserve-btn"
            onClick={reserveHandler}
            data-id={id}
          >
            Reserve Rocket
          </button>
        )}
        {reserved && (
          <button
            type="button"
            className="cancel-reservation-btn"
            data-id={id}
            onClick={cancelHandler}
          >
            Cancel Reservation
          </button>
        )}
      </div>
    </div>
  );
};

export default Rocket;
