import React, { useState, useEffect } from 'react';
import { observer } from 'mobx-react';
import GlobalStore from '../../stores/GlobalStore';
import BusinessStore from '../../stores/BusinessStore';
import './BusinessDetails.css';
import EditDetails from '../editDetails/EditDetails';
const BusinessDetails = observer(() => {
  useEffect(() => {
    async function fetchData(){
      await BusinessStore.initialData();
      // console.log("LEN", Object.keys(BusinessStore.businessDetails).length)
      if (Object.keys(BusinessStore.data).length === 0) {
        BusinessStore.initData({
          name: "Orientation Center - the occupational orientation center for the ultra-orthodox public in Jerusalem",
          address: "15 Hzvi St. Jerusalem",
          email: "kivun52@gmail.com",
          phone: "02-6456222",
          owner: "Dan Levi",
          description: "The 'Direction' center was established in 2014 in cooperation with the Ministry of Economy and the Jerusalem Municipality.",
          logo: '../../assets/images/logo-direction-transparent.png'
        });
      }
    }
    fetchData();
  }, []);
  const [animate, setAnimate] = useState(false);
  const businessDetails = [
    { label: 'Business Name:', value: BusinessStore.data.name },
    { label: 'Address:', value: BusinessStore.data.address },
    { label: 'Email:', value: BusinessStore.data.email },
    { label: 'Phone:', value: BusinessStore.data.phone },
    { label: 'Owner:', value: BusinessStore.data.owner },
    { label: 'Description:', value: BusinessStore.data.description },
  ];
  useEffect(() => {
    setAnimate(true);
  }, []);
  return (
    <div className={`business-container`}>
      <div className={`business-details ${animate ? 'animate' : ''}`}>
        {businessDetails.map((detail, index) => (
          <div
            key={index}
            className="business-detail"
            style={{ animationDelay: `${index * 1.2}s` }}
          >
            <span className="label">{detail.label}</span>
            <span className="value">{detail.value}</span>
          </div>
        ))}
        {GlobalStore.isLogin && (
          <>
            <div className="button-container">
              {<EditDetails />}
            </div>
          </>
        )}
      </div>
    </div>
  );
});

export default BusinessDetails;