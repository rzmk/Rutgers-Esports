/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import './Socials.css';

function SocialsBar({ socials }) {
    return (
        <div>
            {socials && Object.entries(socials).map(([key, value]) => (
                // eslint-disable-next-line jsx-a11y/control-has-associated-label
                <span className="socials">
                    <a href={`${value}`} target="_blank" rel="noreferrer"><i className={`fab fa-${key} fa-3x`} /></a>
                </span>
            ))}
        </div>

    );
}

export default SocialsBar;
