import { useState } from "react";
import { useMusic } from "../contexts/MusicContext";

export const Playlists = () => {
  const [newPlaylistName, setNewPlaylistName] = useState("");
  const [selectedPlaylist, setSelectedPlaylist] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);

  const {
    playlists,
    createPlaylist,
    allSongs,
    addSongToPlaylist,
    currentTrackIndex,
    handlePlaySong,
    deletePlaylist,
  } = useMusic();

  const filteredSongs = allSongs.filter((song) => {
    const matches =
      song.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      song.artist.toLowerCase().includes(searchQuery.toLowerCase());

    const isAlreadyInPlaylist = selectedPlaylist?.songs.some(
      (playlistSong) => playlistSong.id === song.id
    );

    return matches && !isAlreadyInPlaylist;
  });

  return <div>Playlists</div>;
};
