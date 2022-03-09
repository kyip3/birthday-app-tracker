import { useState } from 'react';
import './AddBirthday.css';

const AddBirthday = (props) => {

    const [name,setName] = useState('');
    const [birthday,setBirthday] = useState('');


    const submitHandler = (e) => {
        e.preventDefault();
        props.onToggle();

        const addNewBirthday = {newName: name, newBirthday : birthday};
        props.onAddNewBirthday(addNewBirthday);
    }

    const nameHandler = (e) =>
    {
        setName(e.target.value);
    }
    const birthdayHandler = (e) =>
    {
        setBirthday(e.target.value);
    }

    return (
        <form onSubmit={submitHandler}>
            <div className='birthday-card'>
                <div className='birthday-controls'>
                    <label>Name</label>
                    <input type='text' onChange={nameHandler}></input>
                </div>
                <div className='birthday-controls'>
                    <label>Birthday</label>
                    <input type='date' onChange={birthdayHandler}></input>
                </div>
                <div className='birthday-controls__bottom'>
                    <button type='submit'>Add</button>
                </div>
            </div>
        </form>

    );
}

export default AddBirthday;
