import { moves } from "../../data/moves";

function control(req, res) {
  if (req.method === "GET") {
    res.status(200).json(moves);
  } else if (req.method === "POST") {
    const move = req.body.move;
    moves.push(move);
    res.status(201).json(move);
  }
}

export default control;
