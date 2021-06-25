/* eslint-disable no-sequences */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable max-len */
/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import './PersonPageGrid.css';
import Grid from '@material-ui/core/Grid';

function PersonPageGrid({ title, people, changePerson }) {
    return (
        <div className="pb-5">
            <div className="title pt-0">{title}</div>
            <Grid container className="mx-auto" md={6} spacing={6} style={{ justifyContent: 'center' }}>
                {people.map((person) => (
                    <Grid item xs={8} sm={4} md={4}>
                        <div>
                            <div className="peopleContainer personTab personBox" onClick={() => changePerson(person)} style={{ position: 'relative', zIndex: 0 }}>
                                <div style={{ bottom: '0%', position: 'absolute', zIndex: 1 }}>
                                    <p className="personName">
                                        {' '}
                                        {person.name}
                                    </p>
                                    <p className="personRole">
                                        {' '}
                                        {person.role}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
}

export default PersonPageGrid;
