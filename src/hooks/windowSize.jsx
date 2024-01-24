import { useState, useEffect } from "react";

const useWindowSize = () => {
    const [windowSize, setWindowSize] = useState({
        width: undefined,
        height: undefined
    });

    useEffect(() => {
        //handler
        const handleResize = () => {
            //set window size to state
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight
            });
        }

        //listen for the event
        window.addEventListener("resize", handleResize);

        //call handler to update state
        handleResize();

        // clean up: remove event listener
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return windowSize;
}

export default useWindowSize;