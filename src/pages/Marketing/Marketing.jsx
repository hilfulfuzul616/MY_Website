import { Link } from "react-router-dom";
import Button from "../shared/Button";
import OurProcessMarketing from "../services/Marketing/OurProcessMarketing";
import ServicesMarketing from "../services/Marketing/ServicesMarketing";
// import SectionTitle from "../shared/SectionTitle";
import moduleName from '../../assets/Main_Images/Digital_Marketing_Main_Image.jfif'

const Marketing = () => {
  const navItems = [
    {
      label: "☛ Digital Marketing      ",
      to: "#",
    },
    {
      label: "☞ Social Media Marketing      ",
      to: "#",
    },
    {
      label: "☛ YouTube Marketing     ",
      to: "#",
    }
  ];
  return (

    <section className="my-container">
    <header className="flex flex-col-reverse md:flex-row justify-between items-center pt-0 pb-7 space-y-4 lg:space-y-0 lg:pt-2 lg:pb-10">
      <div className="col-span-3 space-y-4">
        {/* <div className="w-max">
          <SectionTitle text={"our services"} number={"01"} />
        </div> */}
        <h3 className="text-3xl text-center md:text-left font-semibold leading-tight lg:text-[45px] lg:w-3/4">
        Empowering Brands with Comprehensive Digital Marketing Solutions
        </h3>
        <p className="text-center md:text-left font-semibold">
        Crafting Tailored Strategies, Driving Engagement, and Delivering Measurable Results for Sustainable Online Success
        </p>
        <ul className="col-span-1 space-y-1 hidden md:block lg:space-y-4">
        {navItems.map((item) => (
          <li key={item.label} className="text-lg font-bold ">
            <Link to={item.to}>{item.label}</Link>
          </li>
        ))}
      </ul>
       <div className="flex justify-center md:justify-start"> <Button text="Request A Quote" /></div>
      </div>
      <div>
       <img className="w-[85em] md:h-[25em]" src={moduleName} alt="" />
      </div>
    </header>
    <div>
    <OurProcessMarketing />
    <ServicesMarketing />
    </div>
  </section>
    // <section className="my-container">
    //   <header className="items-center grid-cols-4 gap-10 py-8 space-y-4 lg:grid lg:space-y-0 lg:py-20">
    //     <div className="col-span-3 space-y-4">
    //       {/* <div className="w-max">
    //         <SectionTitle text={"our services"} number={"01"} />
    //       </div> */}
    //       <h3 className="text-3xl text-center md:text-left font-semibold leading-tight lg:text-5xl lg:w-3/4">
    //       Empowering Brands with Comprehensive Digital Marketing Solutions
    //       </h3>
    //       <p className="font-semibold text-center md:text-left">
    //       Crafting Tailored Strategies, Driving Engagement, and Delivering Measurable Results for Sustainable Online Success
    //       </p>
    //      <div className="flex justify-center md:justify-start"> <Button text="Request A Quote" /></div>
    //     </div>
    //     <ul className="col-span-1 space-y-1 lg:space-y-4 hidden md:block">
    //       {navItems.map((item) => (
    //         <li key={item.label} className="text-lg font-bold ">
    //           <Link to={item.to}>{item.label}</Link>
    //         </li>
    //       ))}
    //     </ul>
    //   </header>
    //   <div>
    //     <OurProcessMarketing />
    //     <ServicesMarketing />
    //   </div>
    // </section>
  );
};

export default Marketing;
