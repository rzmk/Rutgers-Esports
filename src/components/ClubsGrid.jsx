import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Carousel, { autoplayPlugin } from '@brainhubeu/react-carousel';
import SocialsBar from './SocialsBar';
import PersonGrid from './PersonGrid';
import './Grid.css';
import './Socials.css';
import clubs from '../data/clubsdata';
import '@brainhubeu/react-carousel/lib/style.css';

function ClubsGrid() {
    const [clubPop, setClubPop] = useState({});
    const [visible, setVisible] = useState(false);
    const info = clubs.orgs;

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    const visibility = (club) => {
        if (visible) {
            setVisible(false);
        } else {
            setVisible(true);
            setClubPop(club);
            scrollToTop();
        }
    };

    return (
        <div>
            <div className="section-container">
                <div className="title">OUR CLUBS</div>
                {visible && (
                    <div className="popUpBackground">
                        <div
                            className="filler"
                            onClick={() => visibility(clubPop)}
                            onKeyPress={() => visibility(clubPop)}
                            role="button"
                            tabIndex="0"
                        >
                            Filler
                        </div>
                        <div className="popUpContainer">
                            <div
                                className="exitPop"
                                onClick={() => visibility(clubPop)}
                                onKeyPress={() => visibility(clubPop)}
                                role="button"
                                tabIndex="0"
                            >
                                Exit Pop &nbsp;
                                <i className="fas fa-times" />
                            </div>
                            <div className="orgTitle">
                                <p>{clubPop.name}</p>
                            </div>
                            <div>
                                <Carousel plugins={['infinite', { resolve: autoplayPlugin, options: { interval: 4000 } }]} animationSpeed={1000}>
                                    {clubPop.pictures.map((pic) => (

                                        <img className="orgPicture" src={pic} alt={clubPop.name} />
                                    ))}
                                </Carousel>
                            </div>

                            <div className="popUpBody">
                                <div className="socialsBar">
                                    <SocialsBar flow="row-reverse" socials={clubPop.socials} />
                                </div>
                                <div className="info container px-0 mx-auto w-100 pb-4">

                                    <div className="row">
                                        <div className="meetings col-6 col-md-4 col-sm-12 px-2 mx-auto pt-0 mt-0">
                                            <h6 style={{ fontSize: '1.25rem' }}> Founded </h6>
                                            <p style={{ fontSize: '1.25rem' }}> 2021 - Kevin Cubillos </p>
                                            <h6 style={{ fontSize: '1.25rem' }}> Meeting Times </h6>
                                            <p style={{ fontSize: '1.25rem' }}>
                                                {' '}
                                                {clubPop.meeting}
                                            </p>
                                            <h6 style={{ fontSize: '1.25rem' }}> Location </h6>
                                            <p style={{ fontSize: '1.25rem' }}>
                                                {' '}
                                                {clubPop.location}
                                            </p>
                                        </div>
                                        <div className="about col-6 col-md-8 col-sm-12 px-2 mx-auto">
                                            <h5>
                                                About
                                            </h5>
                                            <p>{clubPop.about}</p>

                                        </div>
                                    </div>

                                </div>

                                <PersonGrid people={clubPop.people} title="Executive Board" />
                            </div>

                        </div>
                        <div
                            className="filler"
                            onClick={() => visibility(clubPop)}
                            onKeyPress={() => visibility(clubPop)}
                            role="button"
                            tabIndex="0"
                        >
                            Filler
                        </div>
                    </div>
                )}
                <div className="grid-container">

                    <Grid container spacing={3}>
                        {info.map((club) => (

                            <Grid item xs={6} sm={4} md={3} lg={3}>
                                <div className="orgContainer">
                                    <div
                                        className="orgTab"
                                        style={{ backgroundImage: `url(${club.logo})` }}
                                        onClick={() => visibility(club)}
                                        onKeyPress={() => visibility(club)}
                                        role="button"
                                        tabIndex="0"
                                    >
                                        <p>
                                            {' '}
                                            {club.name}
                                        </p>
                                    </div>
                                </div>
                            </Grid>
                        ))}
                    </Grid>
                </div>
            </div>
        </div>
    );
}

export default ClubsGrid;
