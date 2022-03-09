import './BirthdayList.css';
import DisplayBirthdayListing from './DisplayBithdayListing';

const BirthdayList = (props) => {

    const listing = props.birthdayListing;

    const deleteBirthdayHandler = (id) =>{
        props.onDeleteBirthday(id);
    }
    return (
        <div className='birthday-listing'>
            <label className='birthday-list-label'>Upcoming birthdays</label>
            <DisplayBirthdayListing listing={listing} onDeleteBirthday={deleteBirthdayHandler}/>
        </div>

    );
}

export default BirthdayList;