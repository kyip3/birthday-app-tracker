import './AddBirthday.css';

const AddBirthday = (props) => {

    const submitHandler = (e) => {
        e.preventDefault();
        console.log('button clicked!');
        props.onToggle();
    }
    return (
        <form onSubmit={submitHandler}>
            <div className='birthday-card'>
                <div className='birthday-controls'>
                    <label>Name</label>
                    <input type='text'></input>
                </div>
                <div className='birthday-controls'>
                    <label>Birthday</label>
                    <input type='date'></input>
                </div>
                <div className='birthday-controls__bottom'>
                    <button type='submit'>Add</button>
                </div>
            </div>
        </form>

    );
}

export default AddBirthday;
