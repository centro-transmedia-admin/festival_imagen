import { capitalize, days, months } from "../utils";

const DayInfo = ({ date }) => {

    const dayName = days[date.getDay()];
    const month = months[date.getMonth()];
    const day = date.getDate();
    return (
        <div>
            <h2>{capitalize(dayName)}</h2>
            <h3>{capitalize(month)} {day}</h3>
        </div>
    )
}

export default DayInfo