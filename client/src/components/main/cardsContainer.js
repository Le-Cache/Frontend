import React from 'react';
import UserCard from './userCard';

const CardsContainer = props => {
    return (
        <main>
            <div className="top">
                {props.filters.includes('Android Development') ? (
                    <span
                        className="tag"
                        onClick={() =>
                            props.removeFromFilter('Android Development')
                        }
                    >
                        &#x2717; Android Developer
                    </span>
                ) : (
                    <></>
                )}
                {props.filters.includes('Data Science') ? (
                    <span
                        className="tag"
                        onClick={() => props.removeFromFilter('Data Science')}
                    >
                        &#x2717; Data Science
                    </span>
                ) : (
                    <></>
                )}
                {props.filters.includes('iOS Development') ? (
                    <span
                        className="tag"
                        onClick={() =>
                            props.removeFromFilter('iOS Development')
                        }
                    >
                        &#x2717; iOS Developer
                    </span>
                ) : (
                    <></>
                )}
                {props.filters.includes('Web Development') ? (
                    <span
                        className="tag"
                        onClick={() =>
                            props.removeFromFilter('Web Development')
                        }
                    >
                        &#x2717; Web Developer
                    </span>
                ) : (
                    <></>
                )}
                {props.filters.includes('UX Design') ? (
                    <span
                        className="tag"
                        onClick={() => props.removeFromFilter('UX Design')}
                    >
                        &#x2717; UX Design
                    </span>
                ) : (
                    <></>
                )}
            </div>
            <div className="cards">
                {props.users === 'Loading' ? (
                    <h2 className="full-area">Loading...</h2> // have a loading screen while axios completes
                ) : props.users.length > 0 ? ( // if there are users, show them
                    props.users.map((user, index) => (
                        <UserCard key={index} data={user.fields} />
                    ))
                ) : (
                    // else, show that there are no users
                    <h2 className="full-area">
                        No users found for this criteria
                    </h2>
                )}
            </div>
        </main>
    );
};

export default CardsContainer;
