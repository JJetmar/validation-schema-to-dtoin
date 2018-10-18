let validationTypeSolver = (key, value) => {
    if (typeof value !== "undefined" && typeof value.generate === "function") {
        return value.generate();
    }
    return value;
};
export default validationTypeSolver;