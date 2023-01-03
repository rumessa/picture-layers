import '../styles/sidebar.css';

import { useDispatch } from "react-redux";
import { firstChosen, deselect1 } from "../redux/actions/firstActions";
import { secondChosen, deselect2 } from "../redux/actions/secondActions";
import { thirdChosen, deselect3 } from "../redux/actions/thirdActions";
import { fourthChosen, deselect4 } from "../redux/actions/fourthActions";
import { useState } from 'react';

const Sidebar = () => {
    const dispatch = useDispatch();
    const [comments, setComments] = useState(false);
    const [option, setOption] = useState(false);
    
    function SaveButton(){
        if (comments && option){
          return <button id="save">Save Result</button>
        } 
        else {
          return <button id="save" disabled>Save Result</button>
        }
    };

    return(
        <div className="sidebar">
            <div className="inside-sidebar">
                <div>
                    <h1>PNG Analysis</h1>

                    <div className="checkboxes">
                        <label>PNG 1<input type="checkbox" onClick={(e) => e.target.checked ? dispatch(firstChosen()) : dispatch(deselect1())}></input></label>
                        <label>PNG 2<input type="checkbox" onClick={(e) => e.target.checked ? dispatch(secondChosen()) : dispatch(deselect2())}></input></label>
                        <label>PNG 3<input type="checkbox" onClick={(e) => e.target.checked ? dispatch(thirdChosen()) : dispatch(deselect3())}></input></label>
                        <label>PNG 4<input type="checkbox" onClick={(e) => e.target.checked ? dispatch(fourthChosen()) : dispatch(deselect4())}></input></label>
                    </div>
                </div>
                

                <div className="form">
                    <h6>User Confirmation</h6>
                    <select onChange={(e) => setOption(e.target.value !== "Select Observed Result" ? true : false)}>
                        <option>Select Observed Result</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                    </select>
                    <textarea className="comments" placeholder="Comments" onChange={(e) => 
                        setComments(e.target.value === "" ? false : true)}>
                    </textarea>
                </div>
            </div>
            
            <div className="button-area">
                <button id="cancel">Cancel</button>
                <SaveButton />
            </div>
        </div>
    );
}


export default Sidebar;