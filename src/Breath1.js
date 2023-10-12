import { useEffect, useState } from "react";

import { Button, Slider, ToggleButton } from "@mui/material";

let timer;

const Breath1 = (props) => {
  const [learnMode, setLearnMode] = useState(false);
  const [count, setCount] = useState(0);
  const [displayCount, setDisplayCount] = useState(0);
  const [displayText, setDisplayText] = useState("Hold");
  const [countOn, setCountOn] = useState(false);
  const [sliderValue, setSliderValue] = useState(100);

  useEffect(() => {
    let display;
    let text;
    if (count > 12) {
      display = count - 12;
      text = "hold";
    } else if (count > 8) {
      display = count - 8;
      text = "breathe out";
    } else if (count > 4) {
      display = count - 4;
      text = "hold";
    } else if (count === 0) {
      display = 0;
      text = "press start";
    } else {
      display = count;
      text = "breathe in";
    }
    setDisplayCount(display);
    setDisplayText(text);
  }, [count]);

  //   const startTimer = () => {
  //     console.log("starting timer...");
  //     setCountOn(true);
  //     let sec = 0;
  //     timer = setInterval(function () {
  //       setCount(++sec);
  //       console.log(sec);
  //       if (sec === 25) {
  //         sec = 0;
  //       }
  //     }, 1000 * (sliderValue / 100));
  //   };

  const startTimer = () => {
    console.log("starting timer...");
    props.handleNewSession(1);
    setCountOn(true);
    let breath = 0;
    let sec = 0;
    timer = setInterval(function () {
      setCount(++sec);
      console.log(sec);

      if (sec === 91) {
        endTimer();
        setCount(0);
      }
    }, 333 * (sliderValue / 100));
  };

  const endTimer = () => {
    console.log("ending timer...");
    setCountOn(false);
    clearInterval(timer);
  };

  const handleSlider = (e, val) => {
    console.log(e);
    console.log(val);
  };

  const handleSliderCommit = (e, val) => {
    console.log(e);
    console.log(e);
  };

  useEffect(() => {
    console.log(sliderValue);
    endTimer();
  }, [sliderValue, learnMode]);

  return (
    <div className="breathContainer">
      <div className="breathHeader">
        <h2>Stimulating Breath</h2>
        {!learnMode && (
          <p onClick={() => setLearnMode(!learnMode)}>learn more</p>
        )}
        {learnMode && <p onClick={() => setLearnMode(!learnMode)}>hide</p>}
      </div>
      {learnMode && (
        <p className="learningContainer">
          The <b>Stimulating Breath</b> is a yogic breathing techniques. Its aim
          is to raise vital energy and increase alertness. Inhale and exhale
          rapidly through your nose, keeping your mouth closed but relaxed. Your
          breaths in and out should be equal in duration, but as short as
          possible. This is a noisy breathing exercise. Try for three in-and-out
          breath cycles per second. This produces a quick movement of the
          diaphragm, suggesting a bellows. Breathe normally after each cycle. Do
          not do for more than 15 seconds on your first try. Each time you
          practice the Stimulating Breath, you can increase your time by five
          seconds or so, until you reach a full minute. If done properly, you
          may feel invigorated, comparable to the heightened awareness you feel
          after a good workout. You should feel the effort at the back of the
          neck, the diaphragm, the chest and the abdomen. Try this diaphragmatic
          breathing exercise the next time you need an energy boost and feel
          yourself reaching for a cup of coffee.
        </p>
      )}
      {!learnMode && (
        <section className="breathBox">
          {!countOn && (
            <Button
              variant="contained"
              fullWidth
              sx={{ mb: 3, mt: -1 }}
              onClick={startTimer}
            >
              Start
            </Button>
          )}
          {countOn && (
            <Button
              variant="outlined"
              fullWidth
              sx={{ mb: 3, mt: -1 }}
              onClick={endTimer}
            >
              Stop
            </Button>
          )}
          <div class="b1Wrapper">
            {/* <div className="number">
              <p>{displayCount}</p>
              <p>{displayText}</p>
            </div> */}
            <div className={`${count > 0 ? "show" : "hide"} c1 corner`}></div>
            <div className={`${count > 6 ? "show" : "hide"} c2 corner`}></div>
            <div className={`${count > 12 ? "show" : "hide"} c3 corner`}></div>
            <div className={`${count > 18 ? "show" : "hide"} c4 corner`}></div>
            <div className={`${count > 24 ? "show" : "hide"} c5 corner`}></div>
            <div className={`${count > 30 ? "show" : "hide"} c6 corner`}></div>
            <div className={`${count > 36 ? "show" : "hide"} c7 corner`}></div>
            <div className={`${count > 42 ? "show" : "hide"} c8 corner`}></div>
            <div className={`${count > 48 ? "show" : "hide"} c9 corner`}></div>
            <div className={`${count > 54 ? "show" : "hide"} c10 corner`}></div>
            <div className={`${count > 60 ? "show" : "hide"} c11 corner`}></div>
            <div className={`${count > 66 ? "show" : "hide"} c12 corner`}></div>
            <div className={`${count > 72 ? "show" : "hide"} c13 corner`}></div>
            <div className={`${count > 78 ? "show" : "hide"} c14 corner`}></div>
            <div className={`${count > 84 ? "show" : "hide"} c15 corner`}></div>
            <div className={`${count === 1 ? "show" : "hide"} one lBox`}></div>
            <div className={`${count === 2 ? "show" : "hide"} two rBox`}></div>
            <div
              className={`${count === 3 ? "show" : "hide"} three lBox`}
            ></div>
            <div className={`${count === 4 ? "show" : "hide"} four rBox`}></div>
            <div className={`${count === 5 ? "show" : "hide"} five lBox`}></div>
            <div className={`${count === 6 ? "show" : "hide"} six rBox`}></div>
            <div
              className={`${count === 7 ? "show" : "hide"} seven lBox`}
            ></div>
            <div
              className={`${count === 8 ? "show" : "hide"} eight rBox`}
            ></div>
            <div className={`${count === 9 ? "show" : "hide"} nine lBox`}></div>
            <div className={`${count === 10 ? "show" : "hide"} ten rBox`}></div>
            <div
              className={`${count === 11 ? "show" : "hide"} eleven lBox`}
            ></div>
            <div
              className={`${count === 12 ? "show" : "hide"} twelve rBox`}
            ></div>
            <div
              className={`${count === 13 ? "show" : "hide"} thirteen lBox`}
            ></div>
            <div
              className={`${count === 14 ? "show" : "hide"} fourteen rBox`}
            ></div>
            <div
              className={`${count === 15 ? "show" : "hide"} fifteen lBox`}
            ></div>
            <div
              className={`${count === 16 ? "show" : "hide"} sixteen rBox`}
            ></div>
            <div
              className={`${count === 17 ? "show" : "hide"} seventeen lBox`}
            ></div>
            <div
              className={`${count === 18 ? "show" : "hide"} eighteen rBox`}
            ></div>
            <div
              className={`${count === 19 ? "show" : "hide"} nineteen lBox`}
            ></div>
            <div
              className={`${count === 20 ? "show" : "hide"} twenty rBox`}
            ></div>
            <div
              className={`${count === 21 ? "show" : "hide"} twentyone lBox`}
            ></div>
            <div
              className={`${count === 22 ? "show" : "hide"} twentytwo rBox`}
            ></div>
            <div
              className={`${count === 23 ? "show" : "hide"} twentythree lBox`}
            ></div>
            <div
              className={`${count === 24 ? "show" : "hide"} twentyfour rBox`}
            ></div>
            <div
              className={`${count === 25 ? "show" : "hide"} twentyfive lBox`}
            ></div>
            <div
              className={`${count === 26 ? "show" : "hide"} twentysix rBox`}
            ></div>
            <div
              className={`${count === 27 ? "show" : "hide"} twentyseven lBox`}
            ></div>
            <div
              className={`${count === 28 ? "show" : "hide"} twentyeight rBox`}
            ></div>
            <div
              className={`${count === 29 ? "show" : "hide"} twentynine lBox`}
            ></div>
            <div
              className={`${count === 30 ? "show" : "hide"} thirty rBox`}
            ></div>
            <div
              className={`${count === 31 ? "show" : "hide"} thirtyone lBox`}
            ></div>
            <div
              className={`${count === 32 ? "show" : "hide"} thirtytwo rBox`}
            ></div>
            <div
              className={`${count === 33 ? "show" : "hide"} thirtythree lBox`}
            ></div>
            <div
              className={`${count === 34 ? "show" : "hide"} thirtyfour rBox`}
            ></div>
            <div
              className={`${count === 35 ? "show" : "hide"} thirtyfive lBox`}
            ></div>
            <div
              className={`${count === 36 ? "show" : "hide"} thirtysix rBox`}
            ></div>
            <div
              className={`${count === 37 ? "show" : "hide"} thirtyseven lBox`}
            ></div>
            <div
              className={`${count === 38 ? "show" : "hide"} thirtyeight rBox`}
            ></div>
            <div
              className={`${count === 39 ? "show" : "hide"} thirtynine lBox`}
            ></div>
            <div
              className={`${count === 40 ? "show" : "hide"} forty rBox`}
            ></div>
            <div
              className={`${count === 41 ? "show" : "hide"} fortyone lBox`}
            ></div>
            <div
              className={`${count === 42 ? "show" : "hide"} fortytwo rBox`}
            ></div>
            <div
              className={`${count === 43 ? "show" : "hide"} fortythree lBox`}
            ></div>
            <div
              className={`${count === 44 ? "show" : "hide"} fortyfour rBox`}
            ></div>
            <div
              className={`${count === 45 ? "show" : "hide"} fortyfive lBox`}
            ></div>
            <div
              className={`${count === 46 ? "show" : "hide"} fortysix rBox`}
            ></div>
            <div
              className={`${count === 47 ? "show" : "hide"} fortyseven lBox`}
            ></div>
            <div
              className={`${count === 48 ? "show" : "hide"} fortyeight rBox`}
            ></div>
            <div
              className={`${count === 49 ? "show" : "hide"} fortynine lBox`}
            ></div>
            <div
              className={`${count === 50 ? "show" : "hide"} fifty rBox`}
            ></div>
            <div
              className={`${count === 51 ? "show" : "hide"} fiftyone lBox`}
            ></div>
            <div
              className={`${count === 52 ? "show" : "hide"} fiftytwo rBox`}
            ></div>
            <div
              className={`${count === 53 ? "show" : "hide"} fiftythree lBox`}
            ></div>
            <div
              className={`${count === 54 ? "show" : "hide"} fiftyfour rBox`}
            ></div>
            <div
              className={`${count === 55 ? "show" : "hide"} fiftyfive lBox`}
            ></div>
            <div
              className={`${count === 56 ? "show" : "hide"} fiftysix rBox`}
            ></div>
            <div
              className={`${count === 57 ? "show" : "hide"} fiftyseven lBox`}
            ></div>
            <div
              className={`${count === 58 ? "show" : "hide"} fiftyeight rBox`}
            ></div>
            <div
              className={`${count === 59 ? "show" : "hide"} fiftynine lBox`}
            ></div>
            <div
              className={`${count === 60 ? "show" : "hide"} sixty rBox`}
            ></div>
            <div
              className={`${count === 61 ? "show" : "hide"} sixtyone lBox`}
            ></div>
            <div
              className={`${count === 62 ? "show" : "hide"} sixtytwo rBox`}
            ></div>
            <div
              className={`${count === 63 ? "show" : "hide"} sixtythree lBox`}
            ></div>
            <div
              className={`${count === 64 ? "show" : "hide"} sixtyfour rBox`}
            ></div>
            <div
              className={`${count === 65 ? "show" : "hide"} sixtyfive lBox`}
            ></div>
            <div
              className={`${count === 66 ? "show" : "hide"} sixtysix rBox`}
            ></div>
            <div
              className={`${count === 67 ? "show" : "hide"} sixtyseven lBox`}
            ></div>
            <div
              className={`${count === 68 ? "show" : "hide"} sixtyeight rBox`}
            ></div>
            <div
              className={`${count === 69 ? "show" : "hide"} sixtynine lBox`}
            ></div>
            <div
              className={`${count === 70 ? "show" : "hide"} seventy rBox`}
            ></div>
            <div
              className={`${count === 71 ? "show" : "hide"} seventyone lBox`}
            ></div>
            <div
              className={`${count === 72 ? "show" : "hide"} seventytwo rBox`}
            ></div>
            <div
              className={`${count === 73 ? "show" : "hide"} seventythree lBox`}
            ></div>
            <div
              className={`${count === 74 ? "show" : "hide"} seventyfour rBox`}
            ></div>
            <div
              className={`${count === 75 ? "show" : "hide"} seventyfive lBox`}
            ></div>
            <div
              className={`${count === 76 ? "show" : "hide"} seventysix rBox`}
            ></div>
            <div
              className={`${count === 77 ? "show" : "hide"} seventyseven lBox`}
            ></div>
            <div
              className={`${count === 78 ? "show" : "hide"} seventyeight rBox`}
            ></div>
            <div
              className={`${count === 79 ? "show" : "hide"} seventynine lBox`}
            ></div>
            <div
              className={`${count === 80 ? "show" : "hide"} eighty rBox`}
            ></div>
            <div
              className={`${count === 81 ? "show" : "hide"} eightyone lBox`}
            ></div>
            <div
              className={`${count === 82 ? "show" : "hide"} eightytwo rBox`}
            ></div>
            <div
              className={`${count === 83 ? "show" : "hide"} eightythree lBox`}
            ></div>
            <div
              className={`${count === 84 ? "show" : "hide"} eightyfour rBox`}
            ></div>
            <div
              className={`${count === 85 ? "show" : "hide"} eightyfive lBox`}
            ></div>
            <div
              className={`${count === 86 ? "show" : "hide"} eightysix rBox`}
            ></div>
            <div
              className={`${count === 87 ? "show" : "hide"} eightyseven lBox`}
            ></div>
            <div
              className={`${count === 88 ? "show" : "hide"} eightyeight rBox`}
            ></div>
            <div
              className={`${count === 89 ? "show" : "hide"} eightynine lBox`}
            ></div>
            <div
              className={`${count === 90 ? "show" : "hide"} ninety rBox`}
            ></div>
          </div>
          <div className="legend">
            <span className="lci"></span><p>breathe in</p><span className="lco"></span><p>breathe out</p>
          </div>
          <div className="speedContainer" style={{marginTop: '20px'}}>
            <div className="sliderLabel">
              <p>faster</p>
              <p>100%</p>
              <p>slower</p>
            </div>
            <Slider
              size="small"
              aria-label="Temperature"
              defaultValue={100}
              //   getAriaValueText={valuetext}
              valueLabelDisplay="auto"
              step={50}
              marks
              min={50}
              max={150}
              //   onChange={(e, val) => handleSlider()} // for example updating a state value
              //   onChangeCommitted={(e, val) => handleSliderCommit()} // for example fetching new data
              onChange={(_, value) => setSliderValue(value)}
            />
            <ToggleButton />
          </div>
        </section>
      )}
    </div>
  );
};

export default Breath1;
