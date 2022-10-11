import { csv } from "d3-fetch";
import { createUri, sheets } from "../../../utils";

export default async function handler(req, res) {
    const days = await csv(createUri(sheets.days));
    res.status(200).json(days);
}
