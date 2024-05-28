function useDebounce(cb , delay = 2000){
    let timerid;
    return(...args) => {
        console.log(timerid);
        timerId = setTimeout(() => {
            cb(...args);
        },delay);
    }
}

export default useDebounce;