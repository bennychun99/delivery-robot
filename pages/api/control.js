import { moves } from "../../data/moves";

function control(req, res) {
  if (req.method === "GET") {
    res.status(200).json(moves);
  } else if (req.method === "POST") {
    const move = req.body.move;
    moves.x = move.x;
    moves.y = move.y;
    res.status(201).json(move);
  }
}

export default control;
