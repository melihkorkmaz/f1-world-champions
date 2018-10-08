import React from 'react';
import PropTypes from 'prop-types';
import WithLoader from '../../common/WithLoader/with-loader.component';

import './seasons-list.component.scss';

class SeasonsList extends React.PureComponent {

  componentDidMount() {
    this.props.listSeasons();
  }

  render() {
    const { seasons = [], onSeasonSelect, isFetching, hasErrors } = this.props;
    return (
      <WithLoader isLoading={isFetching} hasError={hasErrors} errorMessage="Something went wrong, please try again!">
        <div className="seasons">
          {seasons.map(season => (
            <div className="seasons__item-container" key={season.year}>
              <div className="seasons__item" onClick={onSeasonSelect.bind(null, season.year)} >
                <span className="seasons__year">{season.year}</span>
                <span className="seasons__winner">{season.winner.name}</span>
              </div>
            </div>
          ))}
        </div>
      </WithLoader>
    );
  }
}

SeasonsList.propTypes = {
  onSeasonSelect: PropTypes.func.isRequired,
  seasons: PropTypes.arrayOf(PropTypes.object),
  listSeasons: PropTypes.func,
  isFetching: PropTypes.bool,
  hasErrors: PropTypes.bool
};

export default SeasonsList;
