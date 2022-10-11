import { csv } from "d3-fetch";
import { createUri, sheets } from "../../../utils";

export default async function handler(req, res) {
    const programs = await csv(createUri(sheets.programs));
    res.status(200).json(programs);
}
