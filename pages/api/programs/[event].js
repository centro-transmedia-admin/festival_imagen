import { HOST } from "../../../utils";

export default async function handler(req, res) {
    const { event: eventQuery } = req.query;
    const resData = await fetch(`${HOST}/api/programs`);
    const programs = await resData.json();
    const eventPrograms = programs.filter(program => program.event_id === eventQuery);
    res.status(200).json(eventPrograms);
}