import { coords } from "../../data/coordinates";

function coordinates(req, res) {
  if (req.method === "GET") {
    res.status(200).json(coords);
  } else if (req.method === "POST") {
    const latitude = req.body.locationLatitude;
    const longitude = req.body.locationLongitude;
    const logginTime = req.body.logginTime;
    const motionYaw = req.body.motionYaw;
    const status = req.body.status;
    coords.latitude = latitude;
    coords.longitude = longitude;
    coords.logginTime = logginTime;
    coords.motionYaw = motionYaw;
    coords.status = status;
    res.status(201).json(req.body);
  }
}

export default coordinates;
