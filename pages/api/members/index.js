import { csv } from "d3-fetch";
import { createUri, sheets } from "../../../utils";

export default async function handler(req, res) {
    const members = await csv(createUri(sheets.members));
    res.status(200).json(members);
}
