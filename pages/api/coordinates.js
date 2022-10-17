import { coordinates } from "../../data/coordinates";

function control(req, res) {
  if (req.method === "GET") {
    res.status(200).json(coordinates);
  } else if (req.method === "POST") {
    const coordinate = req.body;
    coordinates = coordinate;
    res.status(201).json(move);
  }
}

export default control;
