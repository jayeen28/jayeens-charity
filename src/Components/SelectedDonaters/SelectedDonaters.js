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
                <h5>Donators names:{
                    uniqueScDonators.map(donator =>
                        <ul key={donator._id} className="selected-donaters-list">
                            <li>{donator.name}</li>
                        </ul>)
                } </h5>
            </div>
        </div>
    );
};

export default SelectedDonaters;