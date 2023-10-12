import { useEffect, useState } from "react";

import Tabs from "./Tabs";
import Breath1 from "./Breath1";
import Breath2 from "./Breath2";
import Breath3 from "./Breath3";
import Breath4 from "./Breath4";

const Breath = (props) => {

    const [breathMode, setBreathMode] = useState(0);

    // useEffect(() => {
    //     handleBreathMode(props.lastBreathMode);
    // }, []);

    const handleBreathMode = (value) => {
        setBreathMode(value);
        props.handleNewSession(value);
    };

    return (
        <div className="sectionContainer" style={{marginTop: '1.25rem'}}>
            {/* <h2>Breath</h2> */}
            <nav><Tabs handleBreathMode={handleBreathMode}/></nav>
            <section>
        {breathMode === 0 && <Breath1 handleNewSession={props.handleNewSession} selected={breathMode === 0} />}
        {breathMode === 1 && <Breath2 handleNewSession={props.handleNewSession} selected={breathMode === 1} />}
        {breathMode === 2 && <Breath3 handleNewSession={props.handleNewSession} selected={breathMode === 2} />}
        {breathMode === 3 && <Breath4 handleNewSession={props.handleNewSession} selected={breathMode === 3} />}
      </section>
        </div>
    );
};

export default Breath;