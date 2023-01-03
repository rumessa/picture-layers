const FOURTH = "FOURTH";
const INITIAL4 = "INITIAL4";
  
const fourthChosen = () => {
    return {
        type: FOURTH,
    };
};

const deselect4 = () => {
    return {
        type: INITIAL4,
    }
}
  
export { FOURTH, INITIAL4, fourthChosen, deselect4 };