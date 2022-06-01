import { useRoutes } from 'react-router-dom';
import UserSettings from './pages/UserSettings';
import NotFound from './pages/NotFound';
// import Configuration from './components/Configuration';

function App() {
  let element = useRoutes([
    { path: '/', element: <UserSettings /> },
    { path: 'user-settings', element: <UserSettings /> },
    { path: '*', element: <NotFound /> },
  ]);

  // This can be a top-most wrapper component so that it gets each time on page load and enables to run any logic for once on load
  // return <Configuration>{element}</Configuration>;
  return element;
}

export default App;
