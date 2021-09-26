import React from 'react';
import './SelectedDonaters.css'
const SelectedDonaters = (props) => {
    console.log(props.selectedDonaters);
    const { length } = props.selectedDonaters;
    let expectedDonation = 0;
    props.selectedDonaters.map(donator =>
        expectedDonation = expectedDonation + donator.deposited
    );
    return (
        <div className="selected-donaters">
            <h2>Selected Donater's</h2>
            <div className="sc-donaters-card">
                <h5>Total request: {length}</h5>
                <h5>Total expected donation: {expectedDonation} </h5>
                <h5>Donators names: </h5>
            </div>
        </div>
    );
};

export default SelectedDonaters;