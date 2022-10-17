import { coords } from "../../data/coordinates";

function coordinates(req, res) {
  if (req.method === "GET") {
    res.status(200).json(coords);
  } else if (req.method === "POST") {
    const latitude = req.body.latitude;
    const longitude = req.body.longitude;
    coords.latitude = latitude;
    coords.longitude = lonigtude;
    res.status(201).json(req.body);
  }
}

export default coordinates;
