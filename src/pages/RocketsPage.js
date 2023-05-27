import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Rocket from '../components/Rocket';
import { getRockets } from '../redux/rockets/rocketsSlice';

const RocketsPage = () => {
  const dispatch = useDispatch();
  const { rockets } = useSelector((state) => state.rockets);

  useEffect(() => {
    dispatch(getRockets());
  }, [dispatch]);

  const renderRocketList = () => {
    if (rockets.length === 0) {
      return <p>No rockets available</p>;
    }

    return rockets.map((rocket) => (
      <Rocket key={rocket.id} rocketData={rocket} />
    ));
  };

  return (
    <main>
      <div className="rocket-list row">
        {renderRocketList()}
      </div>
    </main>
  );
};

export default RocketsPage;
