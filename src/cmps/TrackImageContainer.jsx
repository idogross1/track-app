import { useState } from 'react'
import { useSelector } from 'react-redux'
import ImgPlaceholder from '../assets/img/image.svg'

export const TrackImageContainer = () => {
  const [playing, setPlaying] = useState(false)
  const { currTrack: track } = useSelector((state) => state.trackModule)

  const onImage = () => {
    setPlaying(!playing)
  }

  // if (!track) return <div className="">Loading...</div>
  if (track)
    return (
      <div className="track-image-container">
        <h2>{track.name}</h2>
        <div className="img-container" onClick={onImage}>
          <img src={track.pictures.extra_large} alt="" />
        </div>
      </div>
    )
}
