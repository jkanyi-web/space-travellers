import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMissions, missionsActions } from '../redux/mission/missionSlice';

const MissionsPage = () => {
  const { missions } = useSelector((state) => state.mission);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMissions());
  }, [dispatch]);

  const joinMissionHandler = (e) => {
    const { id } = e.target.dataset;
    dispatch(missionsActions.joinMission({ id }));
  };

  const leaveMissionHandler = (e) => {
    const { id } = e.target.dataset;
    dispatch(missionsActions.leaveMission({ id }));
  };

  return (
    <div className="missions-wrap">
      <table className="bordered rounded">
        <thead>
          <tr>
            <th>Mission</th>
            <th>Description</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {missions.map((mission) => (
            <tr key={mission.mission_id} className="separator">
              <td className="separator">{mission.mission_name}</td>
              <td className="separator">{mission.description}</td>
              <td className="separator">
                {!mission.active ? (
                  <span className="pill">Not A Member</span>
                ) : (
                  <span className="pill">Active Member</span>
                )}
              </td>
              <td className="separator">
                {!mission.active ? (
                  <button
                    className="pillsx"
                    type="button"
                    onClick={joinMissionHandler}
                    data-id={mission.mission_id}
                  >
                    Join Mission
                  </button>
                ) : (
                  <button
                    className="pillsxx"
                    type="button"
                    onClick={leaveMissionHandler}
                    data-id={mission.mission_id}
                  >
                    Leave Mission
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MissionsPage;
