import './DisplayBirthdayListing.css';
import DisplayBirthday from './DisplayBirthday';
const DisplayBirthdayListing = (props) => {


    const listing = props.listing;

    //sort the list by month, then day
    listing.sort((a, b) => {
        //  return a.birthday.getMonth() - b.birthday.getMonth();
        if (a.birthday.getMonth() !== b.birthday.getMonth()) {
            return a.birthday.getMonth() - b.birthday.getMonth();
        }
        else {
            return a.birthday.getDate() - b.birthday.getDate();
        }
    });



    //console.log('sorted listing', listing);

    const deleteHandler = (id) => {
        props.onDeleteBirthday(id);
    }


    const uniqueMonthList = [];
    for (let i = 0; i < listing.length; i++) {
        const found = uniqueMonthList.find(element => element.getMonth() === listing[i].birthday.getMonth());

        if (!found)
            uniqueMonthList.push(listing[i].birthday);
    }

    const currentMonth = new Date().getMonth();
    //console.log('currentMonth', currentMonth);

    while (true) {

        if (uniqueMonthList[0].getMonth() >= currentMonth) {
            break;
        }


        //remove first and push to back
        const firstElement = uniqueMonthList.shift();
        uniqueMonthList.push(firstElement);
    }
    // console.log('sorted uniqueMonthList', uniqueMonthList);

    return (
        <div>
            {uniqueMonthList.map(uniqueMonth =>
                <div key={uniqueMonth.getMonth()}>

                    <div>
                        {uniqueMonth.toLocaleDateString('en-US', { month: 'long' })}
                    </div>


                    <DisplayBirthday listing={listing} selectedMonth={uniqueMonth} onDeleteBirthday={deleteHandler} />

                </div>

            )}


        </div>
    );
}

export default DisplayBirthdayListing;