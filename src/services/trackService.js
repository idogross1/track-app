import { httpService } from './httpService'
import { storageService } from './async-storage.service'

const BASE_URL = 'https://api.mixcloud.com/search/'
const PAGE_SIZE = 6
const KEY = 'searches'

async function query(filter = 'adele', page) {
  if (!filter.q) return
  const { q } = filter

  const qReq = `?q=${q}`
  return await httpService.get(`${BASE_URL}${qReq}&type=cloudcast&limit=6&offset=${page * PAGE_SIZE}`)
}

async function saveSearch(search, view) {
  search.view = view
  let searches = await storageService.query(KEY)

  const oldSearchIdx = searches.findIndex((s) => s.q === search.q)
  if (oldSearchIdx !== -1) {
    if (searches[oldSearchIdx].view === search.view) return searches
    await storageService.remove(KEY, searches[oldSearchIdx]._id)
    searches.splice(oldSearchIdx, 1, search)
    await storageService.post(KEY, search)
    return searches
  }

  if (searches.length === 5) {
    await storageService.remove(KEY, searches[0]._id)
  }

  await storageService.post(KEY, search)
  return await storageService.query(KEY)
}

async function getRecentSearches() {
  let searches = await storageService.query(KEY)
  searches = searches ? searches : []
  return searches
}

export const trackService = { query, getRecentSearches, saveSearch }
