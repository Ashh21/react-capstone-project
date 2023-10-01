
import { Outlet, createBrowserRouter } from 'react-router-dom';
// import './App.css';
import { SignUp } from './signup/SignUp';
import { Body } from './body/Body';

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
        path: "/body",
        element: <Body />
      }
    ]
  }
])

export { App, appRouter };
