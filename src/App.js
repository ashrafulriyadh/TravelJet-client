import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import Header from './Pages/Shared/Header/Header';
import Login from './Pages/Login/Login';
import MyOrders from './Pages/MyOrders/MyOrders';
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder';
import Footer from './Pages/Shared/Footer/Footer';
import ManageOrder from './Pages/ManageOrder/ManageOrder';
import AddService from './Pages/AddService/AddService';
import NotFound from './Pages/NotFound/NotFound';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';

function App() {
  return (
    <AuthProvider>
        <Router>
      <Header></Header>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/login">
          <Login></Login>
        </Route>
        <PrivateRoute path="/myOrders/:email">
          <MyOrders></MyOrders>
        </PrivateRoute>
        <PrivateRoute path="/placeOrder/:name">
          <PlaceOrder></PlaceOrder>
        </PrivateRoute>
        <PrivateRoute path="/manageOrder">
          <ManageOrder></ManageOrder>
        </PrivateRoute>
        <PrivateRoute path="/addService">
          <AddService></AddService>
        </PrivateRoute>
        <Route path="*">
          <NotFound></NotFound>
        </Route>
      </Switch>
      <Footer></Footer>
    </Router>
    </AuthProvider>
  );
}

export default App;
