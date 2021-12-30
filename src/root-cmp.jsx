import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import { AppHeader } from './cmps/AppHeader'
import routes from './routes'
export function RootCmp() {
  return (
    <Router>
      <AppHeader />
      <Switch>
        {routes.map((route) => (
          <Route key={route.path} exact component={route.component} path={route.path}></Route>
        ))}
        {/* <Route path="/" component={HomePage}></Route> */}
      </Switch>
    </Router>
  )
}
