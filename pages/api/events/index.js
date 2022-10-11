import { csv } from "d3-fetch";
import { createUri, sheets } from "../../../utils";

export default async function handler(req, res) {
    const events = await csv(createUri(sheets.events));
    res.status(200).json(events);
}
