import './FormatDate.css';

const FormatDate = (props) => {

    const month = props.date.toLocaleDateString('en-US', { month: 'long' });
    const day = props.date.toLocaleDateString('en-US', { day: 'numeric' });
    const year = new Date().getFullYear() - props.date.getFullYear();

    return (
        <div className='display-date-row'>
            <div className='display-date'>
                <div>
                    {month}
                </div>
                <div className='display-day'>
                    {day}
                </div>
            </div>
            <div>
                turning {year}
            </div>
        </div>
    );
}

export default FormatDate;