import React, { useEffect, useState } from 'react';
import Donaters from '../Donaters/Donaters';
import SelectedDonaters from '../SelectedDonaters/SelectedDonaters';
import './Main.css'

const Main = () => {
    const [donaters, setDonaters] = useState([]);
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/Jayeen29/api-img-for-assignment/main/partnersData.json')
            .then(res => res.json())
            .then(data => setDonaters(data))
    }, []);
    return (
        <main className="main-section">
            <div className="container">
                <div className="main-contents">
                    <div className="jc-donaters">
                        <div className="donaters-head">
                            <h2>Our loyal donaters</h2>
                        </div>
                        <div className="donaters-content">
                            {
                                donaters.map(donater =>
                                    <Donaters donater={donater} key={donater._id}></Donaters>
                                )
                            }
                        </div>
                    </div>
                    <div className="jc-selected-donaters">
                        <SelectedDonaters></SelectedDonaters>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Main;