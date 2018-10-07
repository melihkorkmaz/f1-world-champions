import React from 'react';
import PropTypes from 'prop-types';

import './seasons-list.component.scss';

const SeasonsList = ({ seasons, onSeasonSelect }) => (
  <div className="seasons">
    {seasons.map(season => (
      <div className="seasons__item-container" key={season}>
        <div className="seasons__item" onClick={onSeasonSelect.bind(null, season)}>
          {season}
        </div>
      </div>
    ))}
  </div>
);

SeasonsList.propTypes = {
  seasons: PropTypes.arrayOf(PropTypes.number).isRequired,
  onSeasonSelect: PropTypes.func.isRequired
};

export default SeasonsList;
