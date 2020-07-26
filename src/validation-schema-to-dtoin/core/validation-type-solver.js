let validationTypeSolver = (key, value) => {
    if (value != null && typeof value.generate === "function") {
        return value.generate();
    }
    return value;
};
export default validationTypeSolver;