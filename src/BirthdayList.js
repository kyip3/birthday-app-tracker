import './BirthdayList.css';

const BirthdayList = () => {
    return (
        <div className='birthday-listing'>
            <label className='birthday-list-label'>Upcoming birthdays</label>

            <div className='birthday-card'>
                <div>
                    Jenny
                </div>
                <div>
                    April 19
                </div>
            </div>
            <label className='birthday-list-label'>May</label>
            <div className='birthday-card'>
                <div>
                    Lucy
                </div>
                <div>
                    May 24
                </div>
            </div>
            <div className='birthday-card'>
                <div>
                    Mary
                </div>
                <div>
                    May 30
                </div>
            </div>

            <label className='birthday-list-label'>June</label>
            <div className='birthday-card'>
                <div>
                    Anna
                </div>
                <div>
                    June 4
                </div>
            </div>
            <label className='birthday-list-label'>July</label>
            <div className='birthday-card'>
                <div>
                    Bella
                </div>
                <div>
                    July 10
                </div>
            </div>
        </div>

    );
}

export default BirthdayList;