import {
  BrowserRouter,
  Routes,
  HashRouter,
  Link,
  MemoryRouter,
  NavLink,
  Prompt,
  Redirect,
  Route,
  Router,
  StaticRouter,
  Switch,
  generatePath,
  matchPath,
  useHistory,
  useLocation,
  useParams,
  useRouteMatch,
  withRouter,
} from 'react-router-dom';
import Login from './pages/Login/Login';
import Main from './pages/Main/Main';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
