import { useEffect } from "react"
import { observer } from "mobx-react"
import BusinessDetails from '../businessDetails/BusinessDetails'
import Footer from '../footer/Footer'
import GlobalStore from '../../stores/GlobalStore'
import BusinessAdmin from '../businessAdmin/BusinessAdmin';
import Login from '../logIn/Login';
import Header from '../header/Header';
const Admin = observer(() => {
  useEffect(() => {
    if (localStorage.getItem("isLogin") === "true") {
        GlobalStore.setIsLogin(true)
    }  
}, []);
  return (
    <>
      <Header />
      {!GlobalStore.isLogin ? (
        <Login />
      ) : (
        <>
          <BusinessDetails />
          <BusinessAdmin />
        </>
      )}
      <Footer />
    </>
  )
})

export default Admin


