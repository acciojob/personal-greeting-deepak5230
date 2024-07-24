
import React,{useState} from "react";
import './../styles/App.css';


const Greeting = () => {
  const [name, setName] = useState('');
  const [greeting, setGreeting] = useState('');

  const handleInputChange = (e) => {
    setName(e.target.value);
  };

  const handleButtonClick = () => {
    setGreeting(`Hello, ${name}!`);
  };


  return (
    <div>
<input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={handleInputChange}
      />
      <button onClick={handleButtonClick}>Greet Me</button>
      {greeting && <h2>{greeting}</h2>}
    </div>
  )
}

export default App