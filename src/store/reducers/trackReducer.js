const INITIAL_STATE = {
  tracks: [],
  currTrack: null,
  filterBy: {
    q: '',
    view: 'list',
  },
  page: 0,
  recentSearches: [],
}

export function trackReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'SET_TRACKS':
      return {
        ...state,
        tracks: action.tracks,
      }
    case 'SET_FILTER_BY':
      return {
        ...state,
        filterBy: action.filterBy,
      }
    case 'SET_PAGE':
      return {
        ...state,
        page: action.diff + state.page,
      }
    case 'SET_TRACK':
      return {
        ...state,
        currTrack: action.track,
      }
    case 'SET_RECENT_SEARCHES':
      return {
        ...state,
        recentSearches: action.recentSearches,
      }

    default:
      return state
  }
}
