import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layout/Main';

function App() {
  const router = createBrowserRouter([

  ])
return (
  <div className="App">
    <RouterProvider router={router}></RouterProvider>
  </div>
);
}

export default App;
