import Donater from '../Donater/Donater';
import './Donaters.css'
const Donaters = (props) => {
    return (
        <div className="donaters-profiles">
            <Donater donaterData={props}></Donater>
        </div>
    );
};

export default Donaters;