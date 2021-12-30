import { TrackApp } from '../pages/TrackApp.jsx'
import { RecentSearches } from '../pages/RecentSearches.jsx'
const routes = [
  {
    path: '/track/:search?/:view?',
    component: TrackApp,
    label: 'Track App',
  },
  {
    path: '/history',
    component: RecentSearches,
    label: 'Recent Searches',
  },
]
export default routes
