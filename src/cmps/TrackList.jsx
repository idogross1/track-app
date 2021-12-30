import { TrackPreview } from './TrackPreview'
import { useState } from 'react'
export const TrackList = ({ tracks, onSetPage, page, onTrack }) => {
  const [view, setView] = useState('list')

  if (!tracks) return <h1>Loading...</h1>

  return (
    <section className="track-list">
      <div className={`tracks-container ${view}`}>
        {tracks.map((t) => {
          return <TrackPreview view={view} key={t.key} track={t} onTrack={onTrack} />
        })}
      </div>
      <div className="track-list-btns">
        <div className="navigation">
          {page !== 0 && (
            <button
              className={`prev-btn ${page ? 'active' : ''}`}
              onClick={() => {
                onSetPage(-1)
              }}
            ></button>
          )}
          <button
            className="next-btn"
            onClick={() => {
              onSetPage(1)
            }}
          ></button>
        </div>
        <div className="views">
          <button
            className="list"
            onClick={() => {
              setView('list')
            }}
          ></button>
          <button
            className="tile"
            onClick={() => {
              setView('tile')
            }}
          ></button>
        </div>
      </div>
    </section>
  )
}
