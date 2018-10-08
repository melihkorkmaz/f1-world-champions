import { connect } from 'react-redux';
import { seasonOperations, seasonSelectors } from '../ducks';
import SeasonDetails from './season-details.component';

const mapStateToProp = state => ({
    season: seasonSelectors.season(state)
});

const mapDispatchToProps = dispatch => ({
    fetchSeason: yearOfSeason => (dispatch(seasonOperations.fetchSeason(yearOfSeason)))
});

export default connect(mapStateToProp, mapDispatchToProps)(SeasonDetails);
