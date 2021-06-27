/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import './Grid.css';
import Grid from '@material-ui/core/Grid';
import { useLocation } from 'react-router-dom';

function PersonGrid({ title, people, changePerson }) {
    const path = useLocation().pathname;

    const pageValue = () => {
        if (path === '/') return '12';
        return '6';
    };

    const anchorValue = () => {
        if (path === '/') return '#';
        return '#heading';
    };

    const clickFunctionality = (person) => {
        if (path === '/') return;
        changePerson(person);
    };

    return (
        <div>
            <div className="title pt-0">{title}</div>
            <Grid container className="mx-auto" md={pageValue()} spacing={3}>
                {people.map((person) => (
                    <Grid item xs={6} sm={4}>
                        <div className="peopleContainer">
                            <a href={anchorValue()}>
                                <div className="personTab" onClick={() => clickFunctionality(person)} />
                                <div style={{ marginTop: '1.5rem' }}>
                                    <p className="personName">
                                        {' '}
                                        {person.name}
                                    </p>
                                    <p className="personRole">
                                        {' '}
                                        {person.role}
                                    </p>
                                </div>
                            </a>
                        </div>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
}

export default PersonGrid;
