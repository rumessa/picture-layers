const FIRST = "FIRST";
const INITIAL1 = "INITIAL1";
  
const firstChosen = () => {
    return {
        type: FIRST,
    };
};

const deselect1 = () => {
    return {
        type: INITIAL1,
    }
}
  
export { FIRST, INITIAL1, firstChosen, deselect1 };