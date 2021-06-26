/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useState } from 'react';
import HeroSection from './HeroSection';
import PersonPageGrid from './PersonPageGrid';
import ClubsInfo from './ClubsInfo';
import PersonInfo from './PersonInfo';
import clubs from '../data/clubsdata';
import ClubsGrid from './ClubsGrid';
import currentClub from './CurrentClub';
import isClubPage from './isClubPage';
import './Grid.css';

function Clubs() {
    const {
        headline, slogan, description, videoSourceURL,
    } = {
        headline: '',
        slogan: '',
        description: '',
        videoSourceURL: '/Videos/homepage-video.mp4',
    };

    isClubPage.isClubPage = true;

    const [currPerson, setCurrPerson] = useState({});
    let currClub = {};
    let clubPeople = [];
    const getClubPeople = () => {
        clubs.orgs.forEach((club) => {
            if (club.name === currentClub.currentClub) {
                clubPeople = club.people;
                currClub = club;
                if (!club.people.includes(currPerson)) {
                    setCurrPerson(club.people[0]);
                }
            }
        });
        return clubPeople;
    };

    getClubPeople();

    const [currTab, setCurrTab] = useState('about');

    const changePerson = (person) => {
        setCurrTab('e-board');
        setCurrPerson(person);
    };

    const changeTab = (tabName) => {
        setCurrTab(tabName);
    };

    const clubTitle = currentClub.currentClub.concat(' E-board');

    return (
        <>
            <div className="title pt-5 pb-5 mb-0">OUR CLUBS</div>
            <HeroSection
                headline={headline}
                slogan={slogan}
                description={description}
                videoSourceURL={videoSourceURL}
            />
            <ClubsInfo tab={changeTab} people={currClub} currTab={currTab} />
            {currTab === 'about' && <PersonInfo person={currClub} />}
            {currTab === 'e-board' && <PersonInfo person={currPerson} />}
            <PersonPageGrid title={clubTitle} people={clubPeople} changePerson={changePerson} />
            <a href="#heading"><ClubsGrid className="clubs-grid" /></a>
        </>
    );
}
export default Clubs;
