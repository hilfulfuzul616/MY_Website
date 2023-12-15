import { Link } from "react-router-dom";
import Button from "../shared/Button";
import OurProcesswebdev from "../services/Web/OurProcesswebdev";
import Serviceswebdev from "../services/Web/Serviceswebdev";
// import SectionTitle from "../shared/SectionTitle";
import moduleName from '../../assets/Main_Images/Website_main_image.jfif'

const WebDevelopment = () => {
  const navItems = [
    {
      label: "☞ Web Development",
      to: "#",
    },
    {
      label: "☛ Technical Support",
      to: "#",
    },
    {
      label: "☛ AWS/Azure",
      to: "#",
    },
    {
      label: "☛ Consulting",
      to: "#",
    },
    {
      label: "☛ Information Technology",
      to: "#",
    },
  ];
  return (
    <section className="my-container">
      <header className="flex flex-col-reverse md:flex-row justify-between items-center pt-0 pb-7 space-y-4 lg:space-y-0 lg:pt-2 lg:pb-10">
        <div className="col-span-3 space-y-4">
          {/* <div className="w-max">
            <SectionTitle text={"our services"} number={"01"} />
          </div> */}
          <h3 className="text-3xl text-center md:text-left font-semibold leading-tight lg:text-5xl lg:w-3/4">
            We Build Software Solution that Solve Clients Business Challenges
          </h3>
          <p className="text-center md:text-left font-semibold">
          Delivering Effective Software Solutions to Address Your Business Challenges and Propel Growth
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
         <img className="w-[55em] md:h-[25em]" src={moduleName} alt="" />
        </div>
      </header>
      <div>
        <OurProcesswebdev />
        <Serviceswebdev />
      </div>
    </section>
  );
};

export default WebDevelopment;
