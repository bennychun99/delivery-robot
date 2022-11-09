import { route } from "../../data/route";

function control(req, res) {
  if (req.method === "GET") {
    res.status(200).json(route);
  } else if (req.method === "POST") {
    route.data = req.body;
    res.status(201).json(req.body);
  }
}

export default control;
