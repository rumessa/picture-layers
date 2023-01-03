const THIRD = "THIRD";
const INITIAL3 = "INITIAL3";
  
const thirdChosen = () => {
    return {
        type: THIRD,
    };
};

const deselect3 = () => {
    return {
        type: INITIAL3,
    }
}
  
export { THIRD, INITIAL3, thirdChosen, deselect3 };