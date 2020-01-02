import React from 'react';
import UserCard from './userCard';

const CardsContainer = props => {
    if (props.users.length) {
        return (
            <div>
                {props.users.map((user, index) => (
                    <UserCard key={index} data={user.fields} />
                ))}
            </div>
        );
    } else {
        return <div>Loading...</div>;
    }
};

export default CardsContainer;
