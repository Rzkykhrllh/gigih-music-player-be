const express = require("express");
const app = express();
const songs = require("./songs");

app.use(express.json());
app.get("/", (req, res) => {
  try {
    res.status(200);
    res.send(songs);
  } catch (error) {}
});

app.get("/playSong/:id", (req, res) => {
  try {
    const id = req.params.id;
    res.status(200);

    songs.forEach((song) => {
      song.status = "idle";
    });

    songs[id - 1].status = "playing";

    res.send(songs);
  } catch (error) {}
});

app.post("/addSong", (req, res) => {
  try {
    const newSong = req.body;

    console.log("checkpoint 1", newSong);

    newSong.status = "idle";
    newSong.id = songs[songs.length - 1].id++;

    console.log("checkpoint 2");

    songs.push(newSong);

    console.log("checkpoint 3");

    res.statusCode = 201;
    res.json({ status: "success", message: "data added successfully" });
    // res.redirect("/");
  } catch (error) {}
});

app.listen(3000, () => {
  console.log("Berhasil run");
});
