import React from 'react';
import UserCard from './userCard';

const CardsContainer = props => {
    if (props.users.length) {
        return (
            <main>
                <div className="top">
                    {props.filters.includes('Android Development') ? (
                        <span>&#x2717; Android Developer</span>
                    ) : (
                        <></>
                    )}
                    {props.filters.includes('Data Science') ? (
                        <span>&#x2717; Data Science</span>
                    ) : (
                        <></>
                    )}
                    {props.filters.includes('iOS Development') ? (
                        <span>&#x2717; iOS Developer</span>
                    ) : (
                        <></>
                    )}
                    {props.filters.includes('Web Development') ? (
                        <span>&#x2717; Web Developer</span>
                    ) : (
                        <></>
                    )}
                    <div
                        className={
                            props.filters.includes('UX Design')
                                ? ''
                                : 'inactive'
                        }
                    >
                        &#x2717; UX Design
                    </div>
                </div>
                <div className="cards">
                    {props.users.map((user, index) => (
                        <UserCard key={index} data={user.fields} />
                    ))}
                </div>
            </main>
        );
    } else {
        return (
            <main>
                <div className="top">
                    {props.filters.includes('Android Development') ? (
                        <span>&#x2717; Android Developer</span>
                    ) : (
                        <></>
                    )}
                    {props.filters.includes('Data Science') ? (
                        <span>&#x2717; Data Science</span>
                    ) : (
                        <></>
                    )}
                    {props.filters.includes('iOS Development') ? (
                        <span>&#x2717; iOS Developer</span>
                    ) : (
                        <></>
                    )}
                    {props.filters.includes('Web Development') ? (
                        <span>&#x2717; Web Developer</span>
                    ) : (
                        <></>
                    )}
                    {props.filters.includes('UX Design') ? (
                        <span>&#x2717; UX Design</span>
                    ) : (
                        <></>
                    )}
                </div>
                <div className="cards"></div>
            </main>
        );
    }
};

export default CardsContainer;
