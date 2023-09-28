
import { createBrowserRouter } from 'react-router-dom';
// import './App.css';
import { SignUp } from './signup/SignUp';

function App() {
  return (
    <div className="App">
      <SignUp />
    </div>
  );
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />
  }
])

export { App, appRouter };
