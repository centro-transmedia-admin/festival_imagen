import { HOST } from "../../../utils";

export default async function handler(req, res) {
    const { day: dayQuery } = req.query;
    const resData = await fetch(`${HOST}/api/days`);
    const days = await resData.json();
    let day = days.find(d => d.id === dayQuery);
    if (day)
        res.status(200).json(day);
    else
        res.status(404).json({});
}
