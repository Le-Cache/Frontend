import React from 'react';

const UserCard = props => {
    /*Field Names*/
    const firstName = 'First Name';
    const lastName = 'Last Name';
    const program = 'Which program are you in?';
    const bio = 'Bio';
    const linkedIn = 'LinkedIn URL';
    const twitter = 'Twitter URL';
    const github = 'GitHub URL';
    const portfolio = 'Portfolio URL';
    const location = 'Where are you located?';
    const profilePic = 'Profile Picture';

    return (
        <div>
            {props.data[profilePic] ? (
                <img src={props.data[profilePic][0].url} />
            ) : (
                <></>
            )}
            <p>
                {props.data[firstName]} {props.data[lastName]}
            </p>
            <p>{props.data[program]}</p>
            <p>{props.data[location]}</p>
            <p>{props.data[bio]}</p>
            <p>{props.data[linkedIn]}</p>
            {props.data[twitter] ? <p>{props.data[twitter]}</p> : <></>}
            {props.data[github] ? <p>{props.data[github]}</p> : <></>}
            {props.data[portfolio] ? <p>{props.data[portfolio]}</p> : <></>}
        </div>
    );
};

export default UserCard;
