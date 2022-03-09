import FormatDate from "./FormatDate";
import './DisplayBirthdayListing.css';

const DisplayBirthdayListing = (props) => {

    //sort by month
    const listing = props.listing;

    listing.sort((a,b)=> {
        return a.birthday.getMonth() - b.birthday.getMonth();
    });

    const deleteHandler = (id)=> {
        props.onDeleteBirthday(id);
    }


    
    return (
        <div>
            {
                listing.map((list) => (
                    <div className='birthday-card' key={list.id}>
                        <div className='display-name-details'>
                            <div className='display-name'>
                                {list.name}
                            </div>
                            <button type="submit" onClick={(e)=>deleteHandler(list.id)}>
                                X
                            </button>
                        </div>
                        <div>
                            <FormatDate date={list.birthday} />
                        </div>
                    </div>
                ))
            }
        </div>
    );
}

export default DisplayBirthdayListing;