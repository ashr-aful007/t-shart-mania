import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import Grandpa from './Components/Grandpa/Grandpa';
import Home from './Components/Home/Home';
import Main from './Components/Layouts/Main';
import Orders from './Components/Orders/Orders';

function App() {

    const router = createBrowserRouter([
        {
          path: '/',
          element: <Main></Main>,
          children: [
            {
              path: '/',
              loader: () => fetch('tshirts.json'),
              element: <Home></Home>
            },
            {
              path: '/orders',
              element: <Orders></Orders>
            },
            {
               path: '/about',
               element: <About></About>
            },
            {
              path: '/grandpa',
              element: <Grandpa></Grandpa>
            }
          ]
        }
    ])

  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
