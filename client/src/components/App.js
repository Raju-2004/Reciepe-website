import '../../src/App.css';
import Home from '../pages/Home';
import RecipeDetail from '../pages/RecipeDetail';
import Footer from './Footer';
// import Header from './Header';
import Login from './Login';
import Navbar from './Navbar';
import SignUp from './SignUp';
import { Outlet, createBrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className='bg-black'>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  );
}
export const AppRouter = createBrowserRouter([
  {
    path:'/',
    element : <App/>,
    children : [
      {
        path :'/',
        element:<Home/>
      },
      {
        path:'/recipes/:id',
        element:<RecipeDetail/>
      }
    ]
  },
  {
    path:'/signup',
    element:<SignUp/>
  },
  {
    path:'/login',
    element:<Login/>
  }
])
export default App;
