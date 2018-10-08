import React from 'react';
import PropTypes from 'prop-types';
import WithLoader from '../../common/WithLoader/with-loader.component';

import './season-details.component.scss';

class SeasonDetails extends React.PureComponent {
  constructor() {
    super();
    this.state = {};
  }

  static getDerivedStateFromProps(props, state) {
    if (state.yearOfSeason !== props.yearOfSeason) {
      props.fetchSeason(props.yearOfSeason);
    }
    return { yearOfSeason: props.yearOfSeason };
  }

  render() {
    const { winner = {}, races = [] } = this.props.season || {};

    return (
      <WithLoader isLoading={this.props.season.isFetching}>
        <div className="season-details">
          <span>
            Season champion is: {winner.driver ? winner.driver.name : ''}
          </span>
          <div>
            <table className="season-details__table">
              <thead>
                <tr>
                  <th>#</th>
                  <th className="visible-lg">Date</th>
                  <th>Event</th>
                  <th className="visible-md">Circuit</th>
                  <th>Winner</th>
                  <th>Constructor</th>
                  <th className="visible-sm">Laps</th>
                  <th className="visible-sm">Time</th>
                </tr>
              </thead>
              <tbody>
                {races.map(race => (
                  <tr
                    key={race.round}
                    className={
                      race.winner.driver.driverId === winner.driver.driverId
                        ? 'winner'
                        : ''
                    }
                  >
                    <td>{race.round}</td>
                    <td className="visible-lg">{race.date}</td>
                    <td>{race.name}</td>
                    <td className="visible-md">{race.circuit.name}</td>
                    <td>{race.winner.driver.name}</td>
                    <td>{race.winner.constructor.name}</td>
                    <td className="visible-sm">{race.lap}</td>
                    <td className="visible-sm">{race.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </WithLoader>
    );
  }
}

SeasonDetails.propTypes = {
  yearOfSeason: PropTypes.number,
  season: PropTypes.object,
  fetchSeason: PropTypes.func
};

export default SeasonDetails;
