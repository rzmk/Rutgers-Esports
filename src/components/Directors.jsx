import React from 'react';
import HeroSection from './HeroSection';
import DirectorsGrid from './DirectorsGrid';
import directors from '../data/directorsdata';
import './Directors.css';

function Directors() {
    const {
        headline, slogan, description, videoSourceURL,
    } = {
        headline: '',
        slogan: '',
        description: '',
        videoSourceURL: '/Videos/homepage-video.mp4',
    };

    return (
        <>
            <HeroSection
                headline={headline}
                slogan={slogan}
                description={description}
                videoSourceURL={videoSourceURL}
            />
            <DirectorsGrid people={directors.directors} />
        </>
    );
}
export default Directors;
