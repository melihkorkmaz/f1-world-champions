import React from 'react';
import { SeasonsList, SeasonDetails, Drawer } from '../components';

/**
 * I have only one page to show. It has season list and a drawer with season details.
 * When user click a season it sets the state of the component and drawer shown.
 */
class Home extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      drawerOpen: false,
      selectedYear: null
    };
  }

  render() {
    return (
      <div>
        <h2>Seasons</h2>
        <SeasonsList onSeasonSelect={year => this.setState({ selectedYear: year, drawerOpen: true })} />
        <Drawer
          title={`F1 ${this.state.selectedYear} Season`}
          open={this.state.drawerOpen}
          onClose={() => this.setState({ drawerOpen: false })} >
            <SeasonDetails yearOfSeason={this.state.selectedYear} />
        </Drawer>
      </div>
    );
  }
}

export default Home;
