const SECOND = "SECOND";
const INITIAL2 = "INITIAL2";
  
const secondChosen = () => {
    return {
        type: SECOND,
    };
};

const deselect2 = () => {
    return {
        type: INITIAL2,
    }
}
  
export { SECOND, INITIAL2, secondChosen, deselect2 };