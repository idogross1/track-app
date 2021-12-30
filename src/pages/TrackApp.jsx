import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { loadTracks, setFilterBy, setPage, setRecentSearches, setTrack } from '../store/actions/trackActions.js'
import { TrackList } from '../cmps/TrackList'
import { TrackFilter } from '../cmps/TrackFilter.jsx'
import { TrackImageContainer } from '../cmps/TrackImageContainer.jsx'
import { CSSTransition } from 'react-transition-group'

export const TrackApp = (props) => {
  const { currTrack, tracks, page, filterBy } = useSelector((state) => state.trackModule)
  const { search, view } = useParams()
  const dispatch = useDispatch()

  const [isTracks, setIsTracks] = useState(false)
  const [isSelctedTrack, setIsSelectedTrack] = useState(false)

  useEffect(() => {
    if (!search) return
    dispatch(setFilterBy({ q: search }))
    dispatch(loadTracks())
    setIsTracks(true)
  }, [])

  const onChangeFilter = (filterBy) => {
    if (!filterBy.q) return
    dispatch(setFilterBy(filterBy))
    dispatch(loadTracks())
    setIsTracks(true)
  }

  const onSetPage = (diff) => {
    if (page === 0 && diff === -1) return
    dispatch(setPage(diff))
    dispatch(loadTracks())
    setIsTracks(true)
  }

  const onTrack = (track, view) => {
    dispatch(setRecentSearches(filterBy, view))
    dispatch(setTrack(track))
    setIsTracks(false)
    setIsSelectedTrack(true)
  }

  return (
    <section className="main-layout track-app">
      <TrackFilter onChangeFilter={onChangeFilter} />
      <CSSTransition in={isTracks} timeout={1000} classNames="track-list-" unmountOnExit={true} mountOnEnter={true}>
        <TrackList tracks={tracks.data} onSetPage={onSetPage} page={page} onTrack={onTrack} viewProp={view} />
      </CSSTransition>

      <CSSTransition in={isSelctedTrack} timeout={1000} classNames="track-list-" unmountOnExit={true} mountOnEnter={true}>
        <TrackImageContainer track={currTrack} />
      </CSSTransition>
    </section>
  )
}
