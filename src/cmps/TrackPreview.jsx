import { parseISO, parseSeconds } from '../services/utilService'

export const TrackPreview = ({ track, view, onTrack }) => {
  const getPicture = () => {
    if (view === 'list') return track.pictures.thumbnail
    return track.pictures.large
  }

  return (
    <div className={`track-preview ${view}`} onClick={() => onTrack(track, view)}>
      <img className="track-img" src={getPicture()} alt="img" />
      <div className="track-details">
        <p className="track-name">{track.name}</p>
        <p className="track-artist">by {track.user.name}</p>
        <div className="track-info">
          <span className="play-count">{track.play_count}</span>
          <span className="audio-length">{parseSeconds(track.audio_length)}</span>
          <span className="created-time">{parseISO(track.created_time)}</span>
        </div>
      </div>
    </div>
  )
}
