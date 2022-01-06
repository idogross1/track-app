import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getRecentSearches, setFilterBy, loadTracks } from '../store/actions/trackActions'

export const RecentSearches = () => {
  const { recentSearches } = useSelector((state) => state.trackModule)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getRecentSearches())
  }, [])

  const onSearchTerm = (rs) => {
    dispatch(setFilterBy(rs))
    dispatch(loadTracks())
  }

  return (
    <section className="recent-searches">
      <h2>Recent searches:</h2>
      {recentSearches.map((rs) => (
        <p className="search-term" key={rs._id} onClick={() => onSearchTerm(rs)}>
          {rs.q}
        </p>
      ))}
    </section>
  )
}
