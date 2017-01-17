var playlist = {artist: 'song'}

function updatePlaylist(playlist, artistName, SongTitle) {
  playlist[artistName] = SongTitle
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName]
}
