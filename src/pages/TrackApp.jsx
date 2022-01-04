import { useSelector, useDispatch } from 'react-redux'
import { loadTracks, setFilterBy, setPage, setRecentSearches, setTrack } from '../store/actions/trackActions.js'
import { TrackList } from '../cmps/TrackList'
import { TrackFilter } from '../cmps/TrackFilter.jsx'

export const TrackApp = (props) => {
  const { tracks, page, filterBy } = useSelector((state) => state.trackModule)
  const dispatch = useDispatch()

  const onChangeFilter = (filterBy) => {
    if (!filterBy.q) return
    dispatch(setFilterBy(filterBy))
    dispatch(loadTracks())
  }

  const onSetPage = (diff) => {
    if (page === 0 && diff === -1) return
    dispatch(setPage(diff))
    dispatch(loadTracks())
  }

  const onTrack = (track, view) => {
    dispatch(setRecentSearches(filterBy, view))
    dispatch(setTrack(track))
  }

  return (
    <section className="track-app">
      <TrackFilter onChangeFilter={onChangeFilter} />
      {tracks && <TrackList tracks={tracks.data} onSetPage={onSetPage} page={page} onTrack={onTrack} viewProp={filterBy.view} />}

      {/* <CSSTransition in={isSelctedTrack} timeout={1000} classNames="track-list-" unmountOnExit={true} mountOnEnter={true}>
        <TrackImageContainer track={currTrack} />
      </CSSTransition> */}
    </section>
  )
}
