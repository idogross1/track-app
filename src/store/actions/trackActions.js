import { trackService } from '../../services/trackService.js'

export function loadTracks() {
  return async (dispatch, getState) => {
    const { filterBy, page } = getState().trackModule
    try {
      let tracks = await trackService.query(filterBy, page)
      dispatch({ type: 'SET_TRACKS', tracks })
    } catch (error) {
      console.log(error)
    }
  }
}

export function getRecentSearches() {
  return async (dispatch) => {
    try {
      let recentSearches = await trackService.getRecentSearches()
      dispatch({ type: 'SET_RECENT_SEARCHES', recentSearches })
    } catch (error) {
      console.log(error)
    }
  }
}

export function setFilterBy(filterBy) {
  return (dispatch) => {
    dispatch({ type: 'SET_FILTER_BY', filterBy })
  }
}

export function setPage(diff) {
  return (dispatch) => {
    dispatch({ type: 'SET_PAGE', diff })
  }
}

export function setTrack(track) {
  return (dispatch) => {
    dispatch({ type: 'SET_TRACK', track })
  }
}

export function setRecentSearches(search, view) {
  return async (dispatch) => {
    try {
      const recentSearches = await trackService.saveSearch(search, view)
      dispatch({ type: 'SET_RECENT_SEARCHES', recentSearches })
    } catch (error) {
      console.log(error)
    }
  }
}
