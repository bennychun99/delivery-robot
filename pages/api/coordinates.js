import { coords } from "../../data/coordinates";

function coordinates(req, res) {
  if (req.method === "GET") {
    res.status(200).json(coords);
  } else if (req.method === "POST") {
    const latitude = req.body.latitude;
    const longitude = req.body.longitude;
    const status = req.body.status;
    coords.latitude = latitude;
    coords.longitude = longitude;
    coords.status = status;
    res.status(201).json(req.body);
  }
}

export default coordinates;
