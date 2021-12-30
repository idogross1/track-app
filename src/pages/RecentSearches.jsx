import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getRecentSearches } from '../store/actions/trackActions'

export const RecentSearches = () => {
  const { recentSearches } = useSelector((state) => state.trackModule)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getRecentSearches())
  }, [])

  return (
    <section className="main-layout recent-searches">
      {recentSearches.map((rs) => (
        <Link className="search-term" key={rs._id} to={`/track/${rs.q}/${rs.view}`}>
          {rs.q}
        </Link>
      ))}
    </section>
  )
}
