import Button from "../shared/Button";
import SectionTitle from "../shared/SectionTitle";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { BsCodeSlash } from "react-icons/bs";
import { PiGrainsDuotone } from "react-icons/pi";
import { SiCoinmarketcap } from "react-icons/si";
import { TbSeo } from "react-icons/tb";

const cardData = [
  {
    id: 112,
    title: "Web Development",
    icon: BsCodeSlash,
    desc: `Building responsive, user-friendly websites with dynamic features, tailored to your business needs, and optimized for a seamless online experience`,
  },
  {
    id: 11362,
    title: "Graphics design",
    icon: PiGrainsDuotone,
    desc: `Crafting visually appealing and impactful designs that tell your brand's story, from logos and marketing materials to web graphics and more`,
  },
  {
    id: 1162,
    title: "Digital marketing",
    icon: SiCoinmarketcap,
    desc: `Leveraging digital channels like social media, email, and paid advertising to connect with your target audience, boost brand awareness, and drive business growth`,
  },
  {
    id: 1162,
    title: "SEO",
    icon: TbSeo,
    desc: ` Improving your website's search engine rankings and online visibility through strategic keyword optimization, content enhancements, and technical SEO tactics`,
  },
];
const OurServices = () => {
  return (
    <div className="py-12 bg-white]">
      <div className="px-2 my-container">
        <div className="">
          <SectionTitle text={"our services"} number={""} />
        </div>

        <div className="space-y-4">
          <p className="text-[36px] sm:text-[45px] md:text-[45px] text-center font-semibold leading-tight">
            We build software solutions that solve client's business challenges
          </p>

          {/* <div className="w-max mx-auto">
            <Button text="start project" />
          </div> */}
        </div>

        <div className="my-8 grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {cardData?.map((data) => {
            const { title, icon: Icon, desc, id } = data;
            return (
              <div
                className="bg-white p-5 rounded-md drop-shadow-sm border border-stone-100 space-y-4 flex flex-col max-w-sm mx-auto sm:w-full "
                key={id}
              >
                <p className="w-10 h-10 bg-btnBg grid place-items-center rounded-full text-white text-2xl">
                  <Icon />
                </p>
                <h2 className="text-2xl font-semibold text-navBg">{title}</h2>
                <p className="text-p-text text-sm sm:text-base">{desc}</p>

                <button className="flex items-center gap-2 text-btnBg mt-auto">
                  Read more <HiOutlineArrowNarrowRight />{" "}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default OurServices;
