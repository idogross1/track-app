import { NavLink } from 'react-router-dom'
export const AppHeader = () => {
  return (
    <header className=" ">
      <section className=" main-header">
        <div className="logo">tracks</div>
        <nav className="navigation">
          {/* <NavLink to="/track">Search</NavLink>
          <NavLink to="/history">History</NavLink> */}
        </nav>
      </section>
    </header>
  )
}
