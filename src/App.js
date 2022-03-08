import './App.css';
import AddBirthday from './AddBirthday';
import BirthdayList from './BirthdayList';
import { useState } from 'react';

function App() {


  const [toggleAdd, setToggleAdd] = useState(false);

  const toggleAddHandler = () => {
    setToggleAdd(true);
  }
  
  const handleHideAddBirthday = () =>{
    setToggleAdd(false);
  }

  return (
    <div className="App">
      {toggleAdd && <AddBirthday onToggle={handleHideAddBirthday}/>}
      {!toggleAdd && <div className="App-button">
        <button onClick={toggleAddHandler}>add birthday</button>
      </div>}

      <BirthdayList />
    </div>
  );
}

export default App;
