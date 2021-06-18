/* eslint-disable no-sequences */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable max-len */
/* eslint-disable react/jsx-no-target-blank */
import React, { useState } from 'react';
import './DirectorsGrid.css';
import './Directors.css';
import Grid from '@material-ui/core/Grid';

const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
};

function displayInfo(director) {
    return (
        <div className="section-container">
            <div className="header-section row">
                <div className="header col-12 col-md-6 col-xs-12">
                    <h1>{director.name}</h1>
                    <h3>{director.role}</h3>
                </div>
                <div className="socials col-12 col-md-4 col-xs-12">
                    {Object.entries(director.socials).map(([key, value]) => (
                        // eslint-disable-next-line jsx-a11y/control-has-associated-label
                        <a href={`${value}`} target="_blank"><i className={`fab fa-${key} fa-3x`} /></a>
                    ))}
                </div>
            </div>
            <div className="info row">
                <div className="attributes col col-12 col-md-2 col-sm-12">
                    <div>
                        {Object.entries(director.attributes).map(([key, value]) => (
                            <ul>
                                <li className="attribute-key">
                                    {key.toUpperCase()}
                                </li>
                                <li className="attribute-value">
                                    {value}
                                </li>
                            </ul>
                        ))}
                    </div>
                </div>
                <div className="about col-12 col-md-6 col-sm-12 align-self-start mt-0">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cursus vitae congue mauris rhoncus aenean. Leo vel fringilla est ullamcorper eget nulla facilisi. Velit sed ullamcorper morbi tincidunt. Facilisis sed odio morbi quis. Diam in arcu cursus euismod quis. Massa enim nec dui nunc mattis enim ut. Semper viverra nam libero justo laoreet sit. Sem viverra aliquet eget sit amet tellus. Purus in mollis nunc sed id semper. Hac habitasse platea dictumst vestibulum rhoncus. Ornare arcu odio ut sem nulla pharetra diam. Lacus suspendisse faucibus interdum posuere lorem ipsum dolor sit. Mauris vitae ultricies leo integer malesuada nunc vel risus. Elit ut aliquam purus sit amet luctus. Aliquam sem fringilla ut morbi tincidunt augue. Ac feugiat sed lectus vestibulum mattis ullamcorper velit sed ullamcorper. Purus in massa tempor nec.
                    </p>
                </div>
            </div>
        </div>
    );
}

function DirectorsGrid({ people }) {
    const [currDirector, setCurrDirector] = useState(people[0]);
    return (
        <div className="pb-5">
            {displayInfo(currDirector)}
            <div className="title pt-0">MEET OUR DIRECTORS</div>
            <Grid container className="mx-auto" md={6} spacing={6} style={{ justifyContent: 'center' }}>
                {people.map((person) => (
                    <Grid item xs={8} sm={4} md={4}>
                        <div>
                            <div className="peopleContainer personTab personBox" onClick={() => (setCurrDirector(person), scrollToTop())} style={{ position: 'relative', zIndex: 0 }}>
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

export default DirectorsGrid;
