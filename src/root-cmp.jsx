import { useSelector } from 'react-redux'
import { AppHeader } from './cmps/AppHeader'
import { TrackApp } from './pages/TrackApp'
import { RecentSearches } from './pages/RecentSearches'
import { TrackImageContainer } from './cmps/TrackImageContainer'
import { Player } from './cmps/Player'
export function RootCmp() {
  const { currTrack: track } = useSelector((state) => state.trackModule)
  return (
    <main className="main-layout">
      <AppHeader />
      <section className={`container ${!track ? 'wide' : ''}`} style={{ marginBottom: 150 + 'px' }}>
        <TrackApp />
        {track && <TrackImageContainer />}
        <RecentSearches />
      </section>
      {/* {track && (
        <iframe
          style={{ position: 'fixed', bottom: 0, left: 0, marginTop: 100 + 'px' }}
          width="100%"
          height="60"
          title="player"
          src={`https://www.mixcloud.com/widget/iframe/?hide_cover=1&mini=1&light=0&hide_artwork=1&feed=${track.key}`}
          frameBorder="0"
        ></iframe>
      )} */}
      {track && <Player track={track} />}
    </main>
  )
}
