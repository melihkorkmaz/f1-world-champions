import React from 'react';
import PropTypes from 'prop-types';
import WithLoader from '../../common/WithLoader/with-loader.component';

import './seasons-list.component.scss';

class SeasonsList extends React.PureComponent {

  componentDidMount() {
    this.props.listSeasons();
  }

  render() {
    const { seasons = [], onSeasonSelect, isFetching } = this.props;
    return (
      <WithLoader isLoading={isFetching}>
        <div className="seasons">
          {seasons.map(season => (
            <div className="seasons__item-container" key={season}>
              <div className="seasons__item" onClick={onSeasonSelect.bind(null, season)} >
                {season}
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
  seasons: PropTypes.arrayOf(PropTypes.number),
  listSeasons: PropTypes.func,
  isFetching: PropTypes.bool
};

export default SeasonsList;
