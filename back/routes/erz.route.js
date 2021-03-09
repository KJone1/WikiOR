const router = require("express").Router();

let Erez = require("../db/models/erez.model");

//desc: get all
router.route("/").get((req, res) => {
  Erez.query()
    .then((q) => res.json(q))
    .catch((err) => res.status(400).json("Error: " + err));
});

// //desc: add new bug
// router.route("/").post((req, res) => {
//   const text = req.body.text;

//   const newBug = new Bug({
//     text,
//   });

//   newBug
//     .save()
//     .then(() => res.json("Bug added!"))
//     .catch((err) => res.status(400).json("Error: " + err));
// });

//desc: find by id
router.route("/:id").get((req, res) => {
  Erez.query()
    .findById(req.params.id)
    .then((q) => res.json(q))
    .catch((err) => res.status(400).json("Error: " + err));
});

// //desc: delete bug
// router.route("/:id").delete((req, res) => {
//   Bug.findByIdAndDelete(req.params.id)
//     .then(() => res.json("Bug deleted."))
//     .catch((err) => res.status(400).json("Error: " + err));
// });

// //desc: update  | find by id and update field

// router.route("/update/:id").post((req, res) => {
//   Bug.findByIdAndUpdate(req.params.id, { text: "new text" })
//     .then(() => res.json("Bug completed!"))
//     .catch((err) => res.status(400).json("Error: " + err));
// });

//desc: filter by title
router.route("/filter/:fault").get((req, res) => {
  Erez.query()
    .select("id", "fault", "type", "desc")
    .where("fault", "like", `%${req.params.fault}%`)

    .then((q) => res.json(q))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
