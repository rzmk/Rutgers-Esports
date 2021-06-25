import React, { useState } from 'react';
import HeroSection from './HeroSection';
import PersonPageGrid from './PersonPageGrid';
import ClubsInfo from './ClubsInfo';
import PersonInfo from './PersonInfo';
import clubs from '../data/clubsdata';
import ClubsGrid from './ClubsGrid';
import './Directors.css';
import currentClub from './CurrentClub';
import isClubPage from './isClubPage';

function Clubs() {
    const {
        headline, slogan, description, videoSourceURL,
    } = {
        headline: '',
        slogan: '',
        description: '',
        videoSourceURL: '/Videos/homepage-video.mp4',
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
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
        setCurrPerson(person);
        console.log(person);
        scrollToTop();
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
            <ClubsInfo tab={changeTab} people={currClub} />
            {currTab === 'about' && <PersonInfo person={currClub} />}
            {currTab === 'e-board' && <PersonInfo person={currPerson} />}
            <PersonPageGrid title={clubTitle} people={clubPeople} changePerson={changePerson} />
            <ClubsGrid />
        </>
    );
}
export default Clubs;
