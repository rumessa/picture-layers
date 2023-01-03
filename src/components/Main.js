import '../styles/main.css';

import c1 from '../imgs/c1.png';
import c2 from '../imgs/c2.png';
import c3 from '../imgs/c3.png';
import c4 from '../imgs/c4.png';

import { useSelector } from 'react-redux';

const Main = () => {
    const opacity1 = useSelector(state => state.first);
    const opacity2 = useSelector(state => state.second);
    const opacity3 = useSelector(state => state.third);
    const opacity4 = useSelector(state => state.fourth);
    console.log(opacity3);
    
    return(
        <div className="main">

            <img style={{opacity: opacity1}} src={c1} ></img>
            <img style={{opacity: opacity2}} src={c2}></img>
            <img style={{opacity: opacity3}} src={c3}></img>
            <img style={{opacity: opacity4}} src={c4}></img>
        </div>
    );
}
export default Main;