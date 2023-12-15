import { useEffect, useState } from "react";
import CustomerReview from "../components/CustomerReview";
import HeroSection from "../components/HeroSection";
import OurTeamInfo from "../components/OurTeamInfo/OurTeamInfo";
import AboutUs from "./aboutUs/AboutUs";
import OurServices from "./services/OurServices";

const Home = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const url = 'https://i-beta.vercel.app/MON';
    // Fetch the data
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json(); // Assuming the response is JSON
      })
      .then(data => {
        setData(data); // Store the data in the state
        // console.log(data[0].connection); 
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);
  
  return (
    <div className="">
      {data ? (
        <div className="">
          {data[0].connection === "ON" ? (
            <div key="m" className="">
            <HeroSection />
            <AboutUs />
            <OurServices />
            <OurTeamInfo num={""} />
            <CustomerReview />
          </div>
          ) : (
            <div className="flex justify-center"><img className="w-[1000px] h-[555px]" src={data[0].u} alt="" /></div>
          )}
        </div>
      ) : (
        <p></p>
      )}
    </div>
  );
};

export default Home;
