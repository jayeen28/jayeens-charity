import './SelectedDonaters.css';
const SelectedDonaters = props => {
    let uniqueIds = [];
    let uniqueScDonators = []
    props.selectedDonaters.forEach(element => {
        if (uniqueIds.indexOf(element._id) === -1) {
            uniqueIds.push(element._id);
            uniqueScDonators.push(element);
        }
    });
    const { length } = uniqueScDonators;
    let expectedDonation = 0;
    uniqueScDonators.forEach(donator => {
        expectedDonation = expectedDonation + donator.deposited
    }
    );
    return (
        <div className="selected-donaters">
            <h2>Selected Donater's</h2>
            <div className="sc-donaters-card">
                <h5>Total request: {length}</h5>
                <h5>Total expected donation: {expectedDonation} </h5>
                <h5>Donators names:
                    <ul className="selected-donaters-list">
                        {
                            uniqueScDonators.map(donator =>
                                <li key={donator._id} >{donator.name}</li>
                            )
                        }
                    </ul>
                </h5>
            </div>
        </div>
    );
};

export default SelectedDonaters;