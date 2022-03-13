import FormatDate from "./FormatDate";

const DisplayBirthday = (props) => {
    const listing = props.listing;

    const deleteHandler = (id) => {
        props.onDeleteBirthday(id);
    }

    const selectedMonth = props.selectedMonth.toLocaleDateString('en-US', { month: 'long' });

    const filterListing = props.listing.filter(item=>{return item.birthday.toLocaleDateString('en-US', { month: 'long' }) === selectedMonth});

    //console.log('filterListing',filterListing);
    return (
        <div>
            {filterListing.map((list) => (
                <div className='birthday-card' key={list.id}>
                    <div className='display-name-details'>
                        <div className='display-name'>
                            {list.name}
                        </div>
                        <button type="submit" onClick={(e) => deleteHandler(list.id)}>
                            X
                        </button>
                    </div>
                    <div>
                        <FormatDate date={list.birthday} />
                    </div>
                </div>
            ))}
        </div>
    );
}

export default DisplayBirthday;