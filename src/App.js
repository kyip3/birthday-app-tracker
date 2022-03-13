import './App.css';
import AddBirthday from './AddBirthday';
import BirthdayList from './BirthdayList';
import { useState } from 'react';
import { isValidDateValue } from '@testing-library/user-event/dist/utils';

const SAMPLE_DATA = [
  
  { id: 0, name: 'Jenny', birthday: new Date('1989-04-19')},
  { id: 1, name: 'Lucy', birthday: new Date('2000-05-24')},
  { id: 2, name: 'phobe', birthday: new Date('2004-05-30')},
  { id: 3, name: 'Anna', birthday: new Date('1984-06-04')},
  { id: 4, name: 'Bella', birthday: new Date('1988-07-10') },
  { id: 5, name: 'Mary', birthday: new Date('1988-02-10') },
  { id: 6, name: 'kaiyn', birthday: new Date('1988-01-10') },
  { id: 6, name: 'mars', birthday: new Date('1988-03-10') }
];
function App() {

  const [birthdayList, setBirthdayList] = useState(SAMPLE_DATA);

  const [toggleAdd, setToggleAdd] = useState(false);

  const toggleAddHandler = () => {
    setToggleAdd(true);
  }

  const handleHideAddBirthday = () => {
    setToggleAdd(false);
  }

  const handleAddNewBirthday = (value) => {
    
    const newValue = { id: Math.random(), name: value.newName, birthday: new Date(value.newBirthday)};
    console.log('adding new birthday', newValue);

    setBirthdayList((prevState) => {
      return [...prevState, newValue];
    });

  }

  const deleteBirthdayHandler = (id) =>{
    console.log('deleting id', id);

    var newList = birthdayList.filter(value=>{
      return value.id !== id;
    });

    setBirthdayList(newList);
  }
  return (
    <div className="App">
      {toggleAdd && <AddBirthday onToggle={handleHideAddBirthday} onAddNewBirthday={handleAddNewBirthday} />}
      {!toggleAdd && <div className="App-button">
        <button onClick={toggleAddHandler}>add birthday</button>
      </div>}

      <BirthdayList birthdayListing={birthdayList} onDeleteBirthday={deleteBirthdayHandler}/>
    </div>
  );
}

export default App;
