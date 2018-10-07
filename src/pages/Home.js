import React from 'react';
import { SeasonsList } from '../components';

const seasons = [2014, 2013, 2012, 2011, 2010, 2009, 2008, 2007, 2006, 2005];
const Home = () => (
    <div>
        <h2>Seasons</h2>
        <SeasonsList seasons={seasons} onSeasonSelect={() => {}}/>
    </div>
);

export default Home;
