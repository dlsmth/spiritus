const About = (props) => {
  return (
    <div className="sectionContainer">
      <h2>About</h2>
      <p style={{fontWeight: 'bold'}}>How to use:</p>
      <ul>
        <li>Select a desired breathing expercise and tap START.</li>
        <li>The color indicates the action:</li>
        <li>Green: Breathe In</li>
        <li>Yellow: Hold Breath</li>
        <li>Red: Breathe Out</li>
        <li>The counter indicates how long the action should be performed.</li>
        <li>Using the slider at bottom, the timing can be slowed down or sped up a bit, as needed.</li>
        <li>Tap STOP to end the exercise.</li>
      </ul>
      <p>Built with React, using grids for design & animation. CSS framework using Material UI. Data visualization using D3.js. All data stored locally via local storage.</p>
      <p style={{textDecoration: 'underline'}} onClick={props.clearData}>Clear local data</p>
    </div>
  );
};

export default About;
