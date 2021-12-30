import ReactPlayer from 'react-player'
import { useState } from 'react'

export const TrackImageContainer = ({ track }) => {
  const [playing, setPlaying] = useState(false)

  const onImage = () => {
    console.log('hi')
    setPlaying(!playing)
  }

  const handlePlay = () => {
    console.log('handlePlay ~ playing', playing)
  }

  const handlePause = () => {
    console.log('handlePause ~ playing', playing)
  }

  return (
    <div className="track-image-container">
      <h2>{track.name}</h2>
      <div className="img-continer" onClick={onImage}>
        <img src={track.pictures.extra_large} alt="" />
      </div>
      <div className="player-wrapper">
        <ReactPlayer className="react-player" url={track.url} width="100%" height="100%" playing={playing} onPlay={handlePlay} onPause={handlePause} />
      </div>
    </div>
  )
}
