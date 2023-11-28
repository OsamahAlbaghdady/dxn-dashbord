import React from "react"
import './styles/globals.css';
import './styles/login.css';
import './styles/text.css';
import './styles/image.css';
import './styles/wallet.css';
import './styles/swiper.css';
import './styles/home.css';
import './styles/orderList.css';
import './styles/department.css';
import './styles/meals.css';
import './styles/offer.css';
import './styles/stats.css';
import './styles/showOrder.css';
import './styles/setting.css';
import './styles/admin.css';
import 'swiper/css';
import "react-toastify/dist/ReactToastify.css";
import NavBar from './component/else/navBar';
import Home from "./pages/home/index"
import Notification from './component/else/not';
import Login from './pc/login';
import Alert from './component/else/alert';
import SnackBar from './component/else/snackBar';
import Loading from './component/else/loading';
import { Route, Routes, useLocation } from 'react-router-dom';
import Department from "./pc/department";
import Meals from "./pc/meals";
import Offer from './pc/offer';
import Profile from './pc/profile'
import Setting from "./pages/setting/index"
import Dreiver from "./pc/driver";
function App() {
  const [ws, setWs] = React.useState();
  const [isOnLine, setIsOnLine] = React.useState(false);
  const { pathname } = useLocation()
  React.useEffect(() => {
    setIsOnLine(localStorage.getItem("onLine"))
  }, [pathname])
  // React.useEffect(() => {
  //   if (isOnLine) {
  //     const ws = new WebSocket(
  //       `wss://jayk.dorto-dev.com:6001/restaurant-socket/osamah?lat=33.29842179542057&lng=44.40035921881266&token=${localStorage.getItem("token")}`
  //     );
  //     setWs(ws);
  //   }
  // }, []);
  return (
    <>
      {isOnLine ?
        <>
          {/* <Notification ws={ws} /> */}
          <Loading />
          <NavBar />
          <Routes>
            <Route path='/department' element={<Department />} />
            <Route path='/home' element={<Home />} />
            {/* <Route path='/login' element={<Login/>} /> */}
            <Route path='/meals' element={<Meals />} />
            <Route path='/offer' element={<Offer />} />
            <Route path='/driver' element={<Dreiver />} />

            <Route path='/profile' element={<Profile />} />
            <Route path='/setting' element={<Setting />} />
          </Routes>
        </>
        : <Login />
      }
      <Alert />
      <SnackBar />

    </>

  );
}

export default App;
