import { coords } from "../../data/coordinates";

function coordinates(req, res) {
  if (req.method === "GET") {
    res.status(200).json(coords);
  } else if (req.method === "POST") {
    const coordinate = req.body;
    coords.key = coordinate;
    res.status(201).json(coordinate);
  }
}

export default coordinates;
