/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import './PersonPageGrid.css';
import currentClub from './CurrentClub';
import isClubPage from './isClubPage';

const ClubsInfo = ({ tab, people }) => {
    const [aboutTab, setAboutTab] = useState('tab-text tab-active');
    const [eboardTab, setEboardTab] = useState('tab-text');

    const selectTab = (selectedTab) => {
        if (selectedTab === 'about') {
            tab('about');
            isClubPage.isClubPage = true;
            setAboutTab('tab-text tab-active');
            setEboardTab('tab-text');
        } else {
            tab('e-board');
            isClubPage.isClubPage = true;
            setAboutTab('tab-text');
            setEboardTab('tab-text tab-active');
        }
    };
    return (
        <div className="header col-12 col-md-8 col-xs-12 mt-5">
            <div className="header-section row mx-0">
                <h1 className="col-8 px-0">{currentClub.currentClub}</h1>
                <div className="socials col-4 col-md-4 col-xs-12">
                    {Object.entries(people.socials).map(([key, value]) => (
                        // eslint-disable-next-line jsx-a11y/control-has-associated-label
                        <a href={`${value}`} target="_blank" rel="noreferrer"><i className={`fab fa-${key} fa-3x`} /></a>
                    ))}
                </div>
            </div>
            <div className="options row mx-auto mt-5">
                <div onClick={() => selectTab('about')}>
                    <h6 className="pr-4 text-center"><span className={aboutTab}>About</span></h6>
                </div>
                <div onClick={() => selectTab('e-board')}>
                    <h6><span className={eboardTab}>E-board</span></h6>
                </div>
            </div>
            {/* {aboutTab.includes('active') &&
                <div>
                </div>
            } */}
        </div>
    );
};

export default ClubsInfo;
