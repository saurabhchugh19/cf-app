import { useRoutes } from 'react-router-dom';
import UserSettings from './pages/UserSettings';
import NotFound from './pages/NotFound';

function App() {
  let element = useRoutes([
    { path: '/', element: <UserSettings /> },
    { path: 'user-settings', element: <UserSettings /> },
    { path: '*', element: <NotFound /> },
  ]);

  return element;
}

export default App;
