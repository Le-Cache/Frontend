import React from 'react';
import placeholder from '../../assets/placeholder.png';
import pin from '../../assets/pin.svg';
import twitterIcon from '../../assets/twitter.png';

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
        <div className="card">
            {props.data[profilePic] ? (
                <div className="frame">
                    <div className="avatar-image"style={{ backgroundImage:`url(${props.data[profilePic][0].url})`}}>
                        
                    </div>
                </div>
            ) : (
                <div className="frame">
                    <div className="avatar-image" style={{ backgroundImage:`url(${placeholder})`}}>
                        
                    </div>
                </div>
            )}
            <div className="card-content">
                <div className="row">
                    <div className="col">
                        <h2>
                            {props.data[firstName]} {props.data[lastName]}
                        </h2>
                    </div>
                    <div className="col">
                        {props.data[twitter] ? <a className="icon" href={props.data[twitter]}  rel="noopener noreferrer" target="_blank"><img className="icon" src={`${twitterIcon}`} /></a> : <></>}
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <p>{props.data[program]}</p>
                    </div>
                    <div className="col">
                        <p><img className="pin" src={`${pin}`} width="12px" height="auto" />{props.data[location]}</p>
                    </div>
                </div>
                <div className="row">
                    <p className="bio">{props.data[bio]}</p>
                </div>
                
            </div>
            <div className="row last">
                <a className="btn" href={props.data[linkedIn]} rel="noopener noreferrer" target="_blank">Linkedin</a>
                {props.data[portfolio] ? <a className="btn" href={props.data[portfolio]} rel="noopener noreferrer" target="_blank">Site</a> : <></>}
                {props.data[github] ? <a className="btn" href={props.data[github]} rel="noopener noreferrer" target="_blank">GitHub</a> : <></>}
            </div>
        </div>
    );
};

export default UserCard;
