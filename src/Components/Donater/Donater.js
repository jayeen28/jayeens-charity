import React from 'react';
import './Donater.css'
const Donater = (props) => {
    const { name, gender, ocupation, age, deposited, profileImage } = props.donaterData.donater;
    return (
        <div className="donater-profile">
            <div className="donater-img">
                <img src={profileImage} alt="raw" />
            </div>
            <div className="donater-info">
                <h3>Name: {name}</h3>
                <h4>Gender: {gender}</h4>
                <h4>Ocupation: {ocupation}</h4>
                <h4>Age: {age}</h4>
                <div className="donater-footer">
                    <h4>Deposited: {deposited}</h4>
                    <button onClick={() => {
                        props.donaterData.rqDonate(props.donaterData.donater);
                    }}>Rquest to Donate</button>
                </div>
            </div>
        </div>
    );
};

export default Donater;