import { useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useForm } from '../hooks/useForm.js'
import { setRecentSearches } from '../store/actions/trackActions.js'

export const TrackFilter = ({ onChangeFilter }) => {
  const input = useRef()
  const dispatch = useDispatch()
  const [filterBy, handleChange] = useForm(
    {
      q: '',
    },
    onChangeFilter
  )

  const [active, setActive] = useState(false)

  const onSearch = (search, ev) => {
    ev.preventDefault()
    dispatch(setRecentSearches({ q: search }))
  }

  const clearSearch = () => {
    input.current.value = ''
  }

  const { q } = filterBy
  return (
    <section className={`search ${active ? 'active' : ''}`}>
      <div className="icon" onClick={() => setActive(!active)}></div>
      <form className="search-bar" onSubmit={(ev) => onSearch(q, ev)}>
        <input type="text" value={q} id="q" name="q" onChange={handleChange} placeholder="Search Tracks..." ref={input} />
      </form>
      <span className="clear" onClick={clearSearch}></span>
    </section>
  )
}
