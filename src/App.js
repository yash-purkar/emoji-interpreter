import { useState } from "react";


function App() {
  const [emojiMeaning, setEmojiMeaning] = useState();

  const emojiDiectionary = {
    "😋": "Face Savoring Food",
    "🤪": "Zany Face",
    "🤔": "Thinking Face",
    "🥵": "Hot face",
    "🥶": "Cold face",
    "😕": "Confused face",
    "😠": "Angry Face",
    "😫": "Tired Face",
    "🤧": "Sneezing Face"
  }

  // Here we convert keys of emojiDiectionary in to an array.
  let key = Object.keys(emojiDiectionary);
  console.log(key);

  function handleChange(e) {
    let userInput = e.target.value;
    let meaning = emojiDiectionary[userInput];

    if (meaning === undefined) {  //
      meaning = `We couldn't find this ${userInput} emoji.`
    }
    setEmojiMeaning(` ${meaning}`)

  }

  function clickHandler(c) {
    setEmojiMeaning(emojiDiectionary[c])

  }



  return (
    <div className="App">
      <h2>Enter Emoji</h2>
      <input type="text" onChange={handleChange} />

      <h4>Meaning : {emojiMeaning}</h4>
      <button></button>

      <p>emojies we have</p>
      {
        key.map(cu => {
          return (
            <li onClick={() => clickHandler(cu)}>{cu}</li>
          )

        })
      }

    </div>
  );
}

export default App;
