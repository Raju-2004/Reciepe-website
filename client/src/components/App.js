import '../../src/App.css';
import Footer from './Footer';
import Header from './Header';
import Login from './Login';
import SignUp from './SignUp';
import { Outlet, createBrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div>
      <Header/>
      <div>Home Page</div>
      <Footer/>
    </div>
  );
}
export const AppRouter = createBrowserRouter([
  {
    path:'/',
    element : <App/>,
    children : [
      
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
