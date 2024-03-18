
import Footer from '../footer/Footer';
import ServicesTabs from '../servicesTabs/ServicesTabs';
import './Costumer.css'
import GlobalStore from '../../stores/GlobalStore';
import { useEffect } from 'react';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import Header from '../header/Header';
import BusinessDetails from '../businessDetails/BusinessDetails';
export default function Costumer() {
  useEffect(()=>{
    localStorage.removeItem("isLogin");
    GlobalStore.setIsLogin(false);
  })
  return (
    <>
      <Header />
      <BusinessDetails />
      <div className='space'>Our services<br /><ArrowCircleDownIcon fontSize='large' /></div>
      {<ServicesTabs />}
      <Footer />
    </>
  );
}
