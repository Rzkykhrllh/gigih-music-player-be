const express = require("express");
const app = express();
const {
  getAllSong,
  getSortedSong,
  createNewSong,
  playSong,
} = require("./songs");

app.use(express.json());
app.get("/", (req, res) => {
  try {
    res.redirect("/song");
  } catch (error) {}
});

// Song
app.get("/song", (req, res) => {
  res.send(getAllSong());
});

app.post("/song", (req, res) => {
  try {
    const newSong = req.body;
    createNewSong(newSong);

    res.statusCode = 201;
    res.json({ status: "success", message: "data added successfully" });
    res.redirect("/song");
  } catch (error) {
    console.log(error);
  }
});

app.get("/song/:asc", (req, res) => {
  try {
    const isAsc = req.params.asc == 1 ? 1 : 0;
    res.send(getSortedSong(isAsc));
  } catch (error) {
    console.log(error);
  }
});

app.get("/play/:id", (req, res) => {
  try {
    const id = req.params.id;

    res.status(200);
    res.send(playSong(id));
  } catch (error) {
    console.log(error);
  }
});

app.listen(3000, () => {
  console.log("Berhasil run");
});
