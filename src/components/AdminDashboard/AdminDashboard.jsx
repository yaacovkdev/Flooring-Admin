import React, { useState } from "react";
import axios from "axios";
import HeroImages from "../HeroImages/HeroImages";

const AdminDashboard = () => {
  const [flooringData, setFlooringData] = useState(null);

  useState(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/admin/data`
        );
        setFlooringData(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return flooringData && <div className="admin-dashboard">
    <HeroImages heroImagesData={flooringData.hero_titles}/>
  </div>;
};
// //move later
// const testresponse = await axios.get(`${base_url}/admin/data`);
// console.log(testresponse);
export default AdminDashboard;
