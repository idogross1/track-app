import { useState } from 'react'
import { useSelector } from 'react-redux'
import ReactPlayer from 'react-player'
export const TrackImageContainer = () => {
  const [playing, setPlaying] = useState(false)
  const { currTrack: track } = useSelector((state) => state.trackModule)

  const onImage = () => {
    setPlaying(!playing)
  }

  const handlePlay = () => {
    console.log('handlePlay ~ playing', playing)
  }

  const handlePause = () => {
    console.log('handlePause ~ playing', playing)
  }
  if (!track) return <div className="">Loading...</div>
  return (
    <div className="track-image-container">
      <h2>{track.name}</h2>
      <div className="img-container" onClick={onImage}>
        <img src={track.pictures.extra_large} alt="" />
      </div>
    </div>
  )
}
