const songs = [
  {
    id: 1,
    title: "2 Soon",
    artists: ["Keshi"],
    url: "https://www.youtube.com/watch?v=IsIq5aBb6ZA",
    status: "playing",
    genre: "R&B",
    playedCount: 67,
  },
  {
    id: 2,
    title: "Peach",
    artists: ["Lauv"],
    url: "https://www.youtube.com/watch?v=NDtBnTMpltM",
    status: "playing",
    genre: "Pop",
    playedCount: 22,
  },
  {
    id: 3,
    title: "runaway",
    artists: ["lany"],
    url: "https://www.youtube.com/watch?v=_X1pYYo2agE",
    status: "playing",
    genre: "Indie Pop",
    playedCount: 85,
  },
  {
    id: 4,
    title: "beside you",
    artists: ["lany"],
    url: "https://www.youtube.com/watch?v=yXnjy5YlDwk",
    status: "playing",
    genre: "Indie Pop",
    playedCount: 50,
  },
  {
    id: 5,
    title: "Atlas",
    artists: ["Keshi"],
    url: "https://www.youtube.com/watch?v=Ly6fXIP55Kg",
    status: "playing",
    genre: "R&B",
    playedCount: 10,
  },
  {
    id: 6,
    title: "love somebody",
    artists: ["lany"],
    url: "https://www.youtube.com/watch?v=GrI2Aw8ekUM",
    status: "playing",
    genre: "Indie Pop",
    playedCount: 76,
  },
  {
    id: 7,
    title: "Feel It All",
    artists: ["Lauv"],
    url: "https://www.youtube.com/watch?v=1fGFo1-q9F0",
    status: "playing",
    genre: "Pop",
    playedCount: 93,
  },
  {
    id: 8,
    title: "Right Here",
    artists: ["Keshi"],
    url: "https://www.youtube.com/watch?v=4dpK7eGOLP8",
    status: "playing",
    genre: "R&B",
    playedCount: 42,
  },
  {
    id: 9,
    title: "Sad Songs",
    artists: ["Lauv"],
    url: "https://www.youtube.com/watch?v=78OY2CRcYmE",
    status: "playing",
    genre: "Pop",
    playedCount: 55,
  },
  {
    id: 10,
    title: "Thru These Tears",
    artists: ["LANY"],
    url: "https://www.youtube.com/watch?v=rtSTagi7zjM",
    status: "playing",
    genre: "Indie Pop",
    playedCount: 18,
  },
];

const getAllSong = () => {
  return songs;
};

const getSortedSong = (isAsc) => {
  const sorted = isAsc ? sortAsc(songs) : sortDesc(songs);

  return sorted;
};

const createNewSong = (newSong) => {
  newSong.status = "idle";
  newSong.id = songs[songs.length - 1].id++;

  songs.push(newSong);
};

const playSong = (id) => {
  if (doesIdExist(id)) {
    songs.forEach((song) => {
      song.status = "idle";
    });

    songs[id - 1].status = "playing";
    songs[id - 1].playedCount++;

    return getAllSong();
  } else {
    return "lagu tidak ditemukan";
  }
};

// Helper Function
const sortAsc = (list) => {
  return list.sort((a, b) => {
    return a.playedCount - b.playedCount;
  });
};

const sortDesc = (list) => {
  return list.sort((a, b) => {
    return b.playedCount - a.playedCount;
  });
};

function doesIdExist(id) {
  return songs.find((song) => song.id == id) !== undefined;
}

module.exports = { getAllSong, getSortedSong, createNewSong, playSong };
