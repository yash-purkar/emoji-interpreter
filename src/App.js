import { useState } from "react";
import emojiDiectionary from './EmojiD'


function App() {
  const [emojiMeaning, setEmojiMeaning] = useState();

  // Here we convert keys(emoji) of emojiDiectionary in to an array.
  let key = Object.keys(emojiDiectionary);
  // console.log(key);

  function handleChange(e) {
    let userInput = e.target.value;

    let meaning = emojiDiectionary[userInput];

    if (meaning === undefined) {  //
      meaning = `We couldn't find this ${userInput} emoji.`
    }
    setEmojiMeaning(meaning)

  }

  function clickHandler(emoji) {
    // It's like emojiDiectionary.value of emoji
    setEmojiMeaning(emojiDiectionary[emoji])
  }



  return (
    <div className="App">
      <h2>Enter Emoji</h2>
      <input type="text" onChange={handleChange} />
      <h4>Meaning : {emojiMeaning}</h4>
      <h3>emojies we have</h3>
      {
        key.map((currElem, i) => {
          return (
            <span onClick={() => clickHandler(currElem)} key={i} style={{ padding: "5px", cursor: "pointer" }}>{currElem}</span>
          )

        })
      }

      <h3 style={{ color: "gray" }}>Styling in progress</h3>
    </div>
  );
}

export default App;
