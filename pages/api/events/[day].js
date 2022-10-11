import { HOST } from "../../../utils";

export default async function handler(req, res) {
    const { day: dayQuery } = req.query;
    const resData = await fetch(`${HOST}/api/events`);
    const events = await resData.json();
    const dayEvents = events.filter(event => event.day === dayQuery);
    res.status(200).json(dayEvents);
}