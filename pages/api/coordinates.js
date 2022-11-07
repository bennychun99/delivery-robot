import { coords } from "../../data/coordinates";

function coordinates(req, res) {
  if (req.method === "GET") {
    res.status(200).json(coords);
  } else if (req.method === "POST") {
    const latitude = req.body;
    const longitude = req.body.locationLongitude;
    const magnetometerX = req.body.magnetometerX;
    const magnetometerY = req.body.magnetometerY;
    const magnetometerZ = req.body.magnetometerZ;
    const status = req.body.status;
    coords.latitude = latitude;
    coords.longitude = longitude;
    coords.status = status;
    coords.magnetometerX = magnetometerX;
    coords.magnetometerY = magnetometerY;
    coords.magnetometerZ = magnetometerZ;
    res.status(201).json(req.body);
  }
}

export default coordinates;
