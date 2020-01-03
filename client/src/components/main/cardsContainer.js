import React from 'react';
import UserCard from './userCard';

const CardsContainer = props => {
    if (props.users.length) {
        return (
            <main>
                <div className="top">
                    <p><span>&#x2717; Dummy Tag</span></p>
                </div>
                <div className="cards">
                {props.users.map((user, index) => (
                    <UserCard key={index} data={user.fields} />
                ))}
                </div>
            </main>
        );
    } else {
        return <div>Loading...</div>;
    }
};

export default CardsContainer;
