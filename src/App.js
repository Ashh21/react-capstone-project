
import { Outlet, createBrowserRouter } from 'react-router-dom';
import './App.css';
import { SignUp } from './signup/SignUp';
import { Entertainment } from './entertainment/Entertainment';
import { Home } from './home/Home';
import { EntertainmentPage } from './entertainmentpage/EntertainmentPage';

function App() {
  return (
    <div className="App">
      <Outlet />
    </div>
  );
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <SignUp />
      },
      {
        path: "/entertainment",
        element: <Entertainment />
      },
      {
        path: "/home",
        element: <Home />
      },
      {
        path: "/entertainmentPage",
        element: <EntertainmentPage />
      }
    ]
  }
])

export { App, appRouter };
