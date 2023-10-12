import { useEffect, useState } from "react";

import { Button, Slider } from "@mui/material";

let timer;

const Breath2 = (props) => {
  const [learnMode, setLearnMode] = useState(false);
  const [count, setCount] = useState(0);
  const [displayCount, setDisplayCount] = useState(0);
  const [displayText, setDisplayText] = useState("Hold");
  const [countOn, setCountOn] = useState(false);
  const [sliderValue, setSliderValue] = useState(100);

  useEffect(() => {
    let display;
    let text;
    if (count > 11) {
      display = count - 11;
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

  const startTimer = () => {
    console.log("starting timer...");
    props.handleNewSession(2);
    setCountOn(true);
    let sec = 0;
    timer = setInterval(function () {
      setCount(++sec);
      console.log(sec);
      if (sec === 19) {
        sec = 0;
      }
    }, 1000 * (sliderValue / 100));
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
  }, [sliderValue]);

  return (
    <div className="breathContainer">
      <div className="breathHeader">
        <h2>Relaxing Breath (4-7-8)</h2>
        {!learnMode && (
          <p onClick={() => setLearnMode(!learnMode)}>learn more</p>
        )}
        {learnMode && <p onClick={() => setLearnMode(!learnMode)}>hide</p>}
      </div>
      {learnMode && (
        <p className="learningContainer">
          The <b>4-7-8 breathing exercise</b> is utterly simple, takes almost no time,
          requires no equipment and can be done anywhere. Although you can do it
          in any position, sit with your back straight while learning the
          exercise. Place the tip of your tongue against the ridge of tissue
          just behind your upper front teeth, and keep it there through the
          entire exercise. You will be exhaling through your mouth around your
          tongue; try pursing your lips slightly if this seems awkward. Exhale
          completely through your mouth, making a whoosh sound. Close your mouth
          and inhale quietly through your nose to a mental count of four. Hold
          your breath for a count of seven. Exhale completely through your
          mouth, making a whoosh sound to a count of eight. This is one breath
          cycle. Now inhale again and repeat the cycle three more times for a
          total of four cycles. Note that with this breathing technique, you
          always inhale quietly through your nose and exhale audibly through
          your mouth. The tip of your tongue stays in position the whole time.
          Exhalation takes twice as long as inhalation. The absolute time you
          spend on each phase is not important; the ratio of 4:7:8 is important.
          If you have trouble holding your breath, speed the exercise up but
          keep to the ratio of 4:7:8 for the three phases. With practice you can
          slow it all down and get used to inhaling and exhaling more and more
          deeply. This breathing exercise is a natural tranquilizer for the
          nervous system. Unlike tranquilizing drugs, which are often effective
          when you first take them but then lose their power over time, this
          exercise is subtle when you first try it, but gains in power with
          repetition and practice. Do it at least twice a day. You cannot do it
          too frequently. Do not do more than four breaths at one time for the
          first month of practice. Later, if you wish, you can extend it to
          eight breaths. If you feel a little lightheaded when you first breathe
          this way, do not be concerned; it will pass. Once you develop this
          technique by practicing it every day, it will be a very useful tool
          that you will always have with you. Use it whenever anything upsetting
          happens - before you react. Use it whenever you are aware of internal
          tension or stress. Use it to help you fall asleep. This exercise
          cannot be recommended too highly. Everyone can benefit from it.
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
          <div class="b2Wrapper">
            <div className="number">
              <p>{displayCount}</p>
              <p>{displayText}</p>
            </div>
            <div className={`${count === 0 ? "dim" : "bright"} c1 corner`}></div>
            <div className={`${count === 0 ? "dim" : "bright"} c2 corner`}></div>
            <div className={`${count === 0 ? "dim" : "bright"} c3 corner`}></div>
            <div className={`${count === 1 ? "show" : "hide"} one hBox`}></div>
            <div className={`${count === 2 ? "show" : "hide"} two hBox`}></div>
            <div
              className={`${count === 3 ? "show" : "hide"} three hBox`}
            ></div>
            <div className={`${count === 4 ? "show" : "hide"} four hBox`}></div>
            <div className={`${count === 5 ? "show" : "hide"} five vBox`}></div>
            <div className={`${count === 6 ? "show" : "hide"} six vBox`}></div>
            <div
              className={`${count === 7 ? "show" : "hide"} seven vBox`}
            ></div>
            <div
              className={`${count === 8 ? "show" : "hide"} eight vBox`}
            ></div>
            <div className={`${count === 9 ? "show" : "hide"} nine vBox`}></div>
            <div className={`${count === 10 ? "show" : "hide"} ten vBox`}></div>
            <div
              className={`${count === 11 ? "show" : "hide"} eleven vBox`}
            ></div>
            <div
              className={`${count === 12 ? "show" : "hide"} twelve aBox`}
            ></div>
            <div
              className={`${count === 13 ? "show" : "hide"} thirteen aBox`}
            ></div>
            <div
              className={`${count === 14 ? "show" : "hide"} fourteen aBox`}
            ></div>
            <div
              className={`${count === 15 ? "show" : "hide"} fifteen aBox`}
            ></div>
            <div
              className={`${count === 16 ? "show" : "hide"} sixteen aBox`}
            ></div>
                       <div
              className={`${count === 17 ? "show" : "hide"} seventeen aBox`}
            ></div>
            <div
              className={`${count === 18 ? "show" : "hide"} eighteen aBox`}
            ></div>
            <div
              className={`${count === 19 ? "show" : "hide"} nineteen aBox`}
            ></div>
          </div>
          <div className="speedContainer">
            <div className="sliderLabel"><p>faster</p><p>100%</p><p>slower</p></div>
            <Slider
            size="small"
              aria-label="Temperature"
              defaultValue={100}
              //   getAriaValueText={valuetext}
              valueLabelDisplay="auto"
              step={50}
              marks
              min={0}
              max={200}
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

export default Breath2;
