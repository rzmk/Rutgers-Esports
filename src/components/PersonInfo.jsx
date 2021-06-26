/* eslint-disable max-len */
import React from 'react';
import isClubPage from './isClubPage';

function PersonInfo({ person }) {
    return (
        <div className="section-container">
            <div className="header-section col-8 row">
                <div className="header col-12 col-md-8 col-xs-12 mt-0 mx-0 px-0">
                    <h1 id="heading">{!person.logo && person.name}</h1>
                    <h3>{person.role && person.role}</h3>
                </div>
                {/* <SocialsBar socials={person.socials} /> */}
                <div className="socials col-12 col-md-4 col-xs-12 mx-0 px-0">
                    {!isClubPage.isClubPage && Object.entries(person.socials).map(([key, value]) => (
                        // eslint-disable-next-line jsx-a11y/control-has-associated-label
                        <a href={`${value}`} target="_blank" rel="noopener noreferrer"><i className={`fab fa-${key} fa-3x`} /></a>
                    ))}
                </div>
            </div>
            <div className="info row">
                <div className="attributes col col-12 col-md-2 col-sm-12 mt-0">
                    <div>
                        {person.attributes && Object.entries(person.attributes).map(([key, value]) => (
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

export default PersonInfo;
