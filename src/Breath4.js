import { useEffect, useState } from "react";

import { Button, Slider } from "@mui/material";

let timer;

const Breath4 = (props) => {
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

  const startTimer = () => {
    console.log("starting timer...");
    props.handleNewSession(4);
    setCountOn(true);
    let sec = 0;
    timer = setInterval(function () {
      setCount(++sec);
      console.log(sec);
      if (sec === 16) {
        sec = 0;
      }
    }, 1000 * (sliderValue/100));
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
        <h2>Square Breath</h2>
        {!learnMode && (
          <p onClick={() => setLearnMode(!learnMode)}>learn more</p>
        )}
        {learnMode && <p onClick={() => setLearnMode(!learnMode)}>hide</p>}
      </div>
      {learnMode && (
        <p className="learningContainer">
          <b>Box breathing</b> is a form of yogic deep breathing employed by the United
          States Navy SEALs and by stressed-out people everywhere. It’s also
          known as sama vritti pranayama, born of the yogic practice of
          pranayama, or focusing on the breath. Its common name, “box
          breathing,” refers to the fact that a box has four sides, a concept
          represented here by breathing while you slowly count to four for a
          total of four times — four counts of breathing in, four counts of
          holding your breath, four counts of exhaling and four more counts of
          holding after your exhale. This technique goes by other names, too:
          4×4 breathing. 4-4-4-4 breathing. Equal breathing. Four-square
          breathing. Square breathing. The benefits of box breathing “I love
          breathwork because it’s easy, it can be done anywhere and it has a
          potent effect on your physiology,” Dr. Young says. “It’s really very
          powerful.” She explains what box breathing, like other forms of
          breathwork, does for your body. Lowers stress The biggest benefit of
          box breathing is relaxation, especially in times of stress. Studies
          show that regulating your breath can lower levels of the stress
          hormone cortisol and maybe even help lower blood pressure. Activates
          the parasympathetic nervous system In times of stress, your
          sympathetic nervous system is on high alert. Box breathing can help
          you move out of that state by tapping into the bodily system
          responsible for rest and digestion — the parasympathetic nervous
          system. The parasympathetic nervous system is the opposite of the
          sympathetic nervous system, otherwise known as “fight or flight.”
          “When we’re anxious, we breathe shallowly and quickly, which actually
          creates more anxiety within your body,” Dr. Young explains. “We can
          use breathwork to move out of the fight-or-flight state and into that
          parasympathetic nervous system.” Calms the mind You don’t have to be
          stressed to benefit from this breath exercise. Practicing box
          breathing is an opportunity to bring mindfulness to your breath, which
          is a valuable practice even in tranquil times. “It allows you to slow
          your breath, and it also has an aspect of meditation,” Dr. Young says.
          “As you’re breathing, you’re also silently counting, which is a kind
          of mantra meditation that, again, calms the nervous system and brings
          you into the present moment.” How to do box breathing Don’t put too
          much pressure on yourself to master the box breathing method right
          away. “You don’t want to go too slowly or too quickly,” Dr. Young
          says. “Stay at your comfort level, making sure you’re breathing very
          gently and not straining.” Breathe out slowly, releasing all the air
          from your lungs. Breathe in through your nose as you slowly count to
          four in your head. Be conscious of how the air fills your lungs and
          stomach. Hold your breath for a count of four. Exhale for another
          count of four. Hold your breath again for a count of four. Repeat for
          three to four rounds. How simple is that? In fact, box breathing’s
          straightforwardness is what makes it so accessible — and so impactful.
          “Box breathing’s simplicity is its greatest strength,” Dr. Young says.
          “When you start out with other forms of breathwork, you can almost get
          more anxious by overthinking it. But this is just very simple
          breathing and counting.” She recommends practicing one or two times a
          day, regardless of how you’re feeling. Try it out first thing in the
          morning or after a stressful day of work. Keep practicing At first,
          you may have a hard time keeping your breath steady for all those
          counts of four. But as with anything, you can get better at it with a
          little bit of practice. “Over time, this becomes easier, and you’ll be
          able to extend that count to four more easily and slow your breathing
          down for even more benefit,” Dr. Young says. And working on your box
          breathing in times of calm can help you harness it in times of
          anxiety, even going so far as to lessen your body’s overall response
          to stress.
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
          <div class="b4Wrapper">
            <div className="number">
              <p>{displayCount}</p>
              <p>{displayText}</p>
            </div>
            <div className={`${count === 0 ? "dim" : "bright"} c1 corner`}></div>
            <div className={`${count === 0 ? "dim" : "bright"} c2 corner`}></div>
            <div className={`${count === 0 ? "dim" : "bright"} c3 corner`}></div>
            <div className={`${count === 0 ? "dim" : "bright"} c4 corner`}></div>
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
            <div className={`${count === 9 ? "show" : "hide"} nine hBox2`}></div>
            <div className={`${count === 10 ? "show" : "hide"} ten hBox2`}></div>
            <div
              className={`${count === 11 ? "show" : "hide"} eleven hBox2`}
            ></div>
            <div
              className={`${count === 12 ? "show" : "hide"} twelve hBox2`}
            ></div>
            <div
              className={`${count === 13 ? "show" : "hide"} thirteen vBox`}
            ></div>
            <div
              className={`${count === 14 ? "show" : "hide"} fourteen vBox`}
            ></div>
            <div
              className={`${count === 15 ? "show" : "hide"} fifteen vBox`}
            ></div>
            <div
              className={`${count === 16 ? "show" : "hide"} sixteen vBox`}
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

export default Breath4;
