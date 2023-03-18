import {useLocation} from 'react-router-dom';

const Database = () =>{

    const location = useLocation();

    return(
    <div>
        {location.state.name}
        {/* harshit */}
    </div>
    );
}
export default Database;
