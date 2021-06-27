import React, { useState } from 'react';
import HeroSection from './HeroSection';
import PersonInfo from './PersonInfo';
import directors from '../data/directorsdata';
import './Directors.css';
import PersonGrid from './PersonGrid';

function Directors() {
    const {
        headline, slogan, description, videoSourceURL,
    } = {
        headline: '',
        slogan: '',
        description: '',
        videoSourceURL: '/Videos/homepage-video.mp4',
    };

    const [currPerson, setCurrPerson] = useState(directors.directors[0]);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    const changePerson = (person) => {
        setCurrPerson(person);
        scrollToTop();
    };

    return (
        <>
            <HeroSection
                headline={headline}
                slogan={slogan}
                description={description}
                videoSourceURL={videoSourceURL}
            />
            <PersonInfo person={currPerson} />
            <PersonGrid title="MEET OUR DIRECTORS" people={directors.directors} changePerson={changePerson} />
        </>
    );
}
export default Directors;
