import React from 'react';
import '../styles.css';
import { useSelector } from 'react-redux';

const MyProfilePage = () => {
  const { rockets } = useSelector((state) => state.rockets);
  const { missions } = useSelector((state) => state.mission);

  const renderMissionRows = () => {
    if (missions.length === 0) {
      return (
        <tr>
          <td>
            <p style={{ marginLeft: '20px', marginBottom: '20px' }}>
              No joined missions data to display
            </p>
          </td>
        </tr>
      );
    }

    return missions
      .filter((mission) => mission.active)
      .map((mission) => (
        <tr key={mission.mission_id}>
          <td className="separator">{mission.mission_name}</td>
        </tr>
      ));
  };

  const renderRocketRows = () => {
    if (rockets.length === 0) {
      return (
        <tr>
          <td>
            <p style={{ marginLeft: '20px', marginBottom: '20px' }}>
              No reserved rocket data to display
            </p>
          </td>
        </tr>
      );
    }

    return rockets
      .filter((rocket) => rocket.reserved)
      .map((rocket) => (
        <tr key={rocket.id}>
          <td className="separator">{rocket.rocket_name}</td>
        </tr>
      ));
  };

  return (
    <div className="main-wrap">
      <div className="list-wrap">
        <h3>My Missions</h3>
        <table className="bordered rounded">
          <tbody>
            {renderMissionRows()}
          </tbody>
        </table>
      </div>
      <div className="list-wrapx">
        <h3>My Rockets</h3>
        <table className="bordered rounded">
          <tbody>
            {renderRocketRows()}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyProfilePage;
