import { connect } from 'react-redux';
import { seasonOperations, seasonSelectors } from '../ducks';
import SeasonsList from './seasons-list.component';

const mapStateToProps = state => ({
    seasons: seasonSelectors.seasons(state),
    isFetching: seasonSelectors.seasonsIsFetching(state)
});

const mapDispatchToProps = dispatch => ({
    listSeasons: () => dispatch(seasonOperations.seasonList())
});

export default connect(mapStateToProps, mapDispatchToProps)(SeasonsList);
