import { Link } from "react-router-dom";
import Button from "../shared/Button";
import OurProcessSeo from "../services/Seo/OurProcessSeo";
import ServicesSeo from "../services/Seo/ServicesSeo";
// import SectionTitle from "../shared/SectionTitle";
import moduleName from '../../assets/Main_Images/SEO_Main_Image.jfif';

const Seo = () => {
  const navItems = [
    {
      label: "☛ Keyword Research",
      to: "#",
    },
    {
      label: "☛ Competitors Analysis",
      to: "#",
    },
    {
      label: "☛ On Page SEO",
      to: "#",
    },
    {
      label: "☛ Off Page SEO",
      to: "#",
    },
    // {
    //   label: "Technical SEO      ",
    //   to: "#",
    // },
    // {
    //   label: "Content Optimization       ",
    //   to: "#",
    // },
    // {
    //   label: "Monthly SEO Reporting      ",
    //   to: "#",
    // },
    // {
    //   label: "SEO Link Building and Citation      ",
    //   to: "#",
    // },
    // {
    //   label: "Google Business Profile Optimization",
    //   to: "#",
    // },
    {
      label: "☛ Backlink Analyzing",
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
        <h3 className="text-3xl text-center md:text-left font-semibold leading-tight lg:text-[40px] lg:w-3/4">
        Accelerate your online growth with sophisticated SEO solutions
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
       <img className="w-[54em] md:h-[25em]" src={moduleName} alt="" />
      </div>
    </header>
    <div>
    <OurProcessSeo />
    <ServicesSeo />
    </div>
  </section>

    // <section className="my-container">
    //   <header className="items-center flex  gap-10 py-8 space-y-4  lg:space-y-0 lg:py-20">
    //     <div className="space-y-4 w-[80%]">
    //       {/* <div className="w-max">
    //         <SectionTitle text={"our services"} number={"01"} />
    //       </div> */}
    //       <h3 className="text-3xl text-center md:text-left font-semibold leading-tight lg:text-5xl lg:w-3/4">
    //         Accelerate your online growth with sophisticated SEO solutions
    //       </h3>
    //       <p className="font-semibold text-center md:text-left">
    //       Driving Online Success with Advanced SEO Strategies for Rapid Growth
    //       </p>
    //       <div className="flex justify-center md:justify-start"> <Button text="Request A Quote" /></div>
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
        // <OurProcessSeo />
        // <ServicesSeo />
    //   </div>
    // </section>
  );
};

export default Seo;
