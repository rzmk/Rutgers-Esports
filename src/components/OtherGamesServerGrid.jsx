import React from 'react';
import './Grid.css';
import Grid from '@material-ui/core/Grid';
import otherGames from '../data/OtherGameServers';

function OtherGameServerGrid() {
    return (
        <div className="section-container">
            <div className="title">Other Games</div>
            <div className="grid-container">
                <Grid container spacing={3}>
                    {otherGames.map((og) => (
                        <Grid item xs={6} sm={4} md={3} lg={3}>
                            <a target="_blank" rel="noopener noreferrer" href={og.link}>
                                <div className="orgContainer">
                                    <div className="orgTab" style={{ backgroundImage: `url(${og.icon})` }}>
                                        <p>
                                            {' '}
                                            {og.name}
                                        </p>
                                    </div>
                                </div>
                            </a>
                        </Grid>
                    ))}
                </Grid>
            </div>
        </div>
    );
}

export default OtherGameServerGrid;
