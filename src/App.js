import { useState } from "react";


function App() {
  const [userInput, setUserInput] = useState();

  const emojiDiectionary = [{
    "😋": "Face Savoring Food",
    "🤪": "Zany Face",
    "🤔": "Thinking Face",
    "🥵": "Hot face",
    "🥶": "Cold face",
    "😕": "Confused face",
    "😠": "Angry Face",
    "😫": "Tired Face",
    "🤧": "Sneezing Face"
  }]

  function handleChange(e) {
    setUserInput(e.target.value);
  }

  let meaning = emojiDiectionary[userInput];
  console.log(userInput);



  return (
    <div className="App">
      <h2>Enter Emoji</h2>
      <input type="text" onChange={handleChange} />

      <h4>{userInput}{emojiDiectionary["😕"]}</h4>
      <button></button>

      <p>emojies we have</p>
    </div>
  );
}

export default App;
