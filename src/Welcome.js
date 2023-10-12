const About = () => {
  return (
    <div className="sectionContainer">
      <h2>Welcome to Spiritus</h2>
      <p>
        Breathing exercises can be calming, energizing and a valuable tool for dealing with stress. I try to include them throughout my day, and while they are best utilized in a focused state, I've found that having a visual guide can help with exploring, training, starting and maintaining a regular practice.
      </p>
      <p>I decided to take four exercises and explore them visually. They can be started and stopped as desired, and there is an additional learning section on how to perform them. In addition, there is an analytics section that provides insights on how you are using the app, both in frequency and a types of exercises. All data is stored locally on your phone and not shared with anyone.</p>
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
      {/* <p>
        “Practicing a regular, mindful breathing exercise can be calming and
        energizing and can even help with stress-related health problems ranging
        from panic attacks to digestive disorders.” Andrew Weil, M.D.
      </p> */}
      {/* <p>
        Since breathing is something we can control and regulate, it is a useful
        tool for achieving a relaxed and clear state of mind. I recommend three
        breathing exercises and techniques to help relax and reduce stress: The
        Stimulating Breath, The 4-7-8 Breathing Exercise (also called the
        Relaxing Breath), and Breath Counting. Try each of these breathing
        exercises and techniques and see how they affect your stress and anxiety
        levels.
      </p> */}
    </div>
  );
};

export default About;
