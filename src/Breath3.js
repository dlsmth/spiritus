import { useEffect, useState } from "react";

import { Button, Slider } from "@mui/material";

let timer;

const Breath3 = (props) => {
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
    props.handleNewSession(2);
    setCountOn(true);
    let breath = 0;
    let sec = 0;
    timer = setInterval(function () {
      setCount(++sec);
      console.log(sec);

      if (sec === 50) {
        sec = 0;
      }
    }, 750 * (sliderValue / 100));
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
        <h2>Counting Breath</h2>
        {!learnMode && (
          <p onClick={() => setLearnMode(!learnMode)}>learn more</p>
        )}
        {learnMode && <p onClick={() => setLearnMode(!learnMode)}>hide</p>}
      </div>
      {learnMode && (
        <p className="learningContainer">
          If you want to get a feel for this challenging work, try your hand at{" "}
          <b>breath counting</b>, a deceptively simple breathing technique much
          used in Zen practice. Sit in a comfortable position with the spine
          straight and head inclined slightly forward. Gently close your eyes
          and take a few deep breaths. Then let the breath come naturally
          without trying to influence it. Ideally it will be quiet and slow, but
          depth and rhythm may vary. To begin the exercise, count “one” to
          yourself as you exhale. The next time you exhale, count “two,” and so
          on up to “five.” Then begin a new cycle, counting “one” on the next
          exhalation. Never count higher than “five,” and count only when you
          exhale. You will know your attention has wandered when you find
          yourself up to “eight,” “12,” even “19.” Try to do 10 minutes of this
          form of meditation.
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
          <div class="b3Wrapper">
            {/* <div className="number">
              <p>{displayCount}</p>
              <p>{displayText}</p>
            </div> */}
            <div className={`${count === 0 ? "dim" : "bright"} c1 corner`}></div>
            <div className={`${count === 0 ? "dim" : "bright"} c2 corner`}></div>
            <div className={`${count === 0 ? "dim" : "bright"} c3 corner`}></div>
            <div className={`${count === 0 ? "dim" : "bright"} c4 corner`}></div>
            {count < 6 && (
              <>
                <div
                  className={`${count >= 1 ? "show" : "hide"} one sBox`}
                ></div>
                <div
                  className={`${count >= 2 ? "show" : "hide"} two sBox`}
                ></div>
                <div
                  className={`${count >= 3 ? "show" : "hide"} three sBox`}
                ></div>
                <div
                  className={`${count >= 4 ? "show" : "hide"} four sBox`}
                ></div>
                <div
                  className={`${count >= 5 ? "show" : "hide"} five sBox`}
                ></div>
              </>
            )}
            {count > 5 && (
              <>
                <div
                  className={`${
                    count >= 6 ? "exhaleStart" : "exhaleEnd"
                  } one sBox`}
                ></div>
                <div
                  className={`${
                    count >= 7 ? "exhaleStart" : "exhaleEnd"
                  } two sBox`}
                ></div>
                <div
                  className={`${
                    count >= 8 ? "exhaleStart" : "exhaleEnd"
                  } three sBox`}
                ></div>
                <div
                  className={`${
                    count >= 9 ? "exhaleStart" : "exhaleEnd"
                  } four sBox`}
                ></div>
                <div
                  className={`${
                    count >= 10 ? "exhaleStart" : "exhaleEnd"
                  } five sBox`}
                ></div>
              </>
            )}
            {count < 16 && (
              <>
                <div
                  className={`${count >= 11 ? "show" : "hide"} six sBox`}
                ></div>
                <div
                  className={`${count >= 12 ? "show" : "hide"} seven sBox`}
                ></div>
                <div
                  className={`${count >= 13 ? "show" : "hide"} eight sBox`}
                ></div>
                <div
                  className={`${count >= 14 ? "show" : "hide"} nine sBox`}
                ></div>
                <div
                  className={`${count >= 15 ? "show" : "hide"} ten sBox`}
                ></div>
              </>
            )}
            {count > 15 && (
                  <>
                    <div
                      className={`${
                        count >= 16 ? "exhaleStart" : "exhaleEnd"
                      } six sBox`}
                    ></div>
                    <div
                      className={`${
                        count >= 17 ? "exhaleStart" : "exhaleEnd"
                      } seven sBox`}
                    ></div>
                    <div
                      className={`${
                        count >= 18 ? "exhaleStart" : "exhaleEnd"
                      } eight sBox`}
                    ></div>
                    <div
                      className={`${
                        count >= 19 ? "exhaleStart" : "exhaleEnd"
                      } nine sBox`}
                    ></div>
                    <div
                      className={`${
                        count >= 20 ? "exhaleStart" : "exhaleEnd"
                      } ten sBox`}
                    ></div>
                  </>
                )}
            {count < 26 && (
              <>
                <div
                  className={`${count >= 21 ? "show" : "hide"} eleven sBox`}
                ></div>
                <div
                  className={`${count >= 22 ? "show" : "hide"} twelve sBox`}
                ></div>
                <div
                  className={`${count >= 23 ? "show" : "hide"} thirteen sBox`}
                ></div>
                <div
                  className={`${count >= 24 ? "show" : "hide"} fourteen sBox`}
                ></div>
                <div
                  className={`${count >= 25 ? "show" : "hide"} fifteen sBox`}
                ></div>
              </>
            )}
            {count > 25 && (
                  <>
                    <div
                      className={`${
                        count >= 26 ? "exhaleStart" : "exhaleEnd"
                      } eleven sBox`}
                    ></div>
                    <div
                      className={`${
                        count >= 27 ? "exhaleStart" : "exhaleEnd"
                      } twelve sBox`}
                    ></div>
                    <div
                      className={`${
                        count >= 28 ? "exhaleStart" : "exhaleEnd"
                      } thirteen sBox`}
                    ></div>
                    <div
                      className={`${
                        count >= 29 ? "exhaleStart" : "exhaleEnd"
                      } fourteen sBox`}
                    ></div>
                    <div
                      className={`${
                        count >= 30 ? "exhaleStart" : "exhaleEnd"
                      } fifteen sBox`}
                    ></div>
                  </>
                )}
            {count <
                36 && (
                  <>
                    <div
                      className={`${
                        count >= 31 ? "show" : "hide"
                      } sixteen sBox`}
                    ></div>
                    <div
                      className={`${
                        count >= 32 ? "show" : "hide"
                      } seventeen sBox`}
                    ></div>
                    <div
                      className={`${
                        count >= 33 ? "show" : "hide"
                      } eighteen sBox`}
                    ></div>
                    <div
                      className={`${
                        count >= 34 ? "show" : "hide"
                      } nineteen sBox`}
                    ></div>
                    <div
                      className={`${count >= 35 ? "show" : "hide"} twenty sBox`}
                    ></div>
                  </>
                )}
            {count > 35 && (
              <>
                <div
                  className={`${
                    count >= 36 ? "exhaleStart" : "exhaleEnd"
                  } sixteen sBox`}
                ></div>
                <div
                  className={`${
                    count >= 37 ? "exhaleStart" : "exhaleEnd"
                  } seventeen sBox`}
                ></div>
                <div
                  className={`${
                    count >= 38 ? "exhaleStart" : "exhaleEnd"
                  } eighteen sBox`}
                ></div>
                <div
                  className={`${
                    count >= 39 ? "exhaleStart" : "exhaleEnd"
                  } nineteen sBox`}
                ></div>
                <div
                  className={`${
                    count >= 40 ? "exhaleStart" : "exhaleEnd"
                  } twenty sBox`}
                ></div>
              </>
            )}
            {count < 46 && (
              <>
                <div
                  className={`${count >= 41 ? "show" : "hide"} twentyone sBox`}
                ></div>
                <div
                  className={`${count >= 42 ? "show" : "hide"} twentytwo sBox`}
                ></div>
                <div
                  className={`${
                    count >= 43 ? "show" : "hide"
                  } twentythree sBox`}
                ></div>
                <div
                  className={`${count >= 44 ? "show" : "hide"} twentyfour sBox`}
                ></div>
                <div
                  className={`${count >= 45 ? "show" : "hide"} twentyfive sBox`}
                ></div>
              </>
            )}
            {count > 45 && (
              <>
                <div
                  className={`${
                    count >= 46 ? "exhaleStart" : "exhaleEnd"
                  } twentyone sBox`}
                ></div>
                <div
                  className={`${
                    count >= 47 ? "exhaleStart" : "exhaleEnd"
                  } twentytwo sBox`}
                ></div>
                <div
                  className={`${
                    count >= 48 ? "exhaleStart" : "exhaleEnd"
                  } twentythree sBox`}
                ></div>
                <div
                  className={`${
                    count >= 49 ? "exhaleStart" : "exhaleEnd"
                  } twentyfour sBox`}
                ></div>
                <div
                  className={`${
                    count >= 50 ? "exhaleStart" : "exhaleEnd"
                  } twentyfive sBox`}
                ></div>
              </>
            )}
          </div>
          <div className="textDiv">
          {count === 0 && <div className="text">press start</div>}
            {count > 0 && count < 6 && <div className="text">breathe in</div>}
            {count >= 6 && count < 11 && <div className="text">breathe out: 1</div>}
            {count >= 11 && count < 16 && <div className="text">breathe in</div>}
            {count >= 16 && count < 21 && <div className="text">breathe out: 2</div>}
            {count >= 21 && count < 26 && <div className="text">breathe in</div>}
            {count >= 26 && count < 31 && <div className="text">breathe out: 3</div>}
            {count >= 31 && count < 36 && <div className="text">breathe in</div>}
            {count >= 36 && count < 41 && <div className="text">breathe out: 4</div>}
            {count >= 41 && count < 46 && <div className="text">breathe in</div>}
            {count >= 46 && count < 51 && <div className="text">breathe out: 5</div>}</div>
          <div className="speedContainer">
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
          </div>
        </section>
      )}
    </div>
  );
};

export default Breath3;
