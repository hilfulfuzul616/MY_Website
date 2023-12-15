import SectionTitle from "../shared/SectionTitle";

// import aboutImg from "../../assets/about.png";
import ceo from '../../assets/SCO_Images/noman.jfif';
import team1 from "../../assets/Team1.png";
import Expertise from "./Expertise";
//WEB
import partha from '../../assets/Team_Img/Web/partha.jfif';
import redwan from '../../assets/Team_Img/Web/redwan.jfif';
import shuvo from '../../assets/Team_Img/Web/shuvo.jfif';
//WEB LARAVEL
import Larav_Team_Had from '../../assets/Team_Img/Web_Laravel/head_Laravel.png'
import Raju from '../../assets/Team_Img/Web_Laravel/Raju.png'
import safuiddin from '../../assets/Team_Img/Web_Laravel/safuiddin.png'
//SEO
import halder_Sohag from '../../assets/Team_Img/Seo/halder_Sohag.jfif'
import md_Sohag from '../../assets/Team_Img/Seo/md_Sohag.jfif'
import sadika from '../../assets/Team_Img/Seo/sadika.jfif'
//GRAPHIC
import Azizul from '../../assets/Team_Img/Graphic/Azizul.png'
import Imon from '../../assets/Team_Img/Graphic/Imon.png'
import person_3 from '../../assets/Team_Img/Graphic/person_3.png'
import { BiLogoFacebook, BiLogoTwitter, BiLogoLinkedin } from "react-icons/bi";

const About = () => {
  return (
    <section className="bg-white py-6 my-4">
      <div className="my-container">
        <div>
          <SectionTitle text={"about us"} number={""} />
        </div>

        <div className="space-y-4 text-center  md:text-left">
          <h2 className="text-[30px] sm:text-[40px] md:text-[40px] text-center font-semibold leading-tight text-navBg">
            “A Journey of Growth, Passion, and Impact Over the Last 2+ Years”
          </h2>

          <p className="text-sm sm:text-base text-p-text">
            In the last 2+ years, Hilful Fuzul IT has grown from a small software business in Dhaka with only 4 employees to now a family of over 90. Southtech’s growth is an example of true entrepreneurial spirit and an unwavering passion to work towards the interest of humanity
          </p>
        </div>

        <div className="pt-5">
          <section className="flex flex-col-reverse items-center gap-y-5">
            <div className="md:w-[60%] text-center md:text-left italic">
              <p><span className="font-bold text-[1.3em]">“</span>Business has only two functions- marketing and innovation<span className="font-bold text-[1.3em]">”</span></p>
              <p className="pt-2 font-semibold">- 𝙲𝙴𝙾, Hilful Fuzul IT</p>
            </div>
            <div className="">
              <img src="https://replicate.delivery/pbxt/IO5YA6embUU9UKfSkevsv4DNicVBh7koAOxrpG4f23dWKFVHB/out.png" loading="lazy" className=" rounded-full w-[20em] h-[20em] md:w-[22em] md:h-[22em] border-[9px] border-blue-500 border-double  hover:scale-105 transition-all" />
              <div>
                <SectionTitle text={"CEO's Message"} number={""} />
              </div>
            </div>
          </section>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 py-6">
          {/* left   */}
          <div>
            <div className="sm:w-max ">
              <SectionTitle text={"our story"} number={""} />
            </div>

            <div className="sm:pr-20 text-center sm:text-left">
              <h2 className="text-3xl text-navBg sm:text-4xl font-bold mb-4">
                From Startups to Titans of Industry
              </h2>
              <p className="text-sm text-p-text">
                Hilful Fuzul It's extraordinary evolution, beginning as a humble 4-member software venture in Dhaka and flourishing into a vibrant community of over 90 professionals, stands as a testament to unwavering entrepreneurial zeal. Their unwavering commitment to bettering humanity is evident in their remarkable growth, underscoring their passion and dedication. This inspiring journey reflects the essence of entrepreneurial spirit and a profound dedication to the greater good of society
              </p>
            </div>
          </div>
          {/* right */}
          <div className="bg-[#f4a261] p-4 rounded-md drop-shadow-sm h-max">
            <div className="my-6 pb-6 grid gap-3 grid-cols-2">
              <div className="text-center  py-6 px-2 rounded-md">
                <p className="text-2xl font-bold text-zinc-800">150+</p>
                <p className="text-zinc-800 font-medium">Project Delivered</p>
              </div>
              <div className="text-center  py-6 px-2 rounded-md">
                <p className="text-2xl font-bold text-zinc-800">120+</p>
                <p className="text-zinc-800 font-medium">Professional</p>
              </div>
              <div className="text-center  py-6 px-2 rounded-md">
                <p className="text-2xl font-bold text-zinc-800">170+</p>
                <p className="text-zinc-800 font-medium">Happy Client</p>
              </div>
              <div className="text-center  py-6 px-2 rounded-md">
                <p className="text-2xl font-bold text-zinc-800">2y+</p>
                <p className="text-zinc-800 font-medium">Experience</p>
              </div>
            </div>
          </div>
        </div>

        {/* Expertise  */}
        <Expertise num={"03"} />

        {/* team members  */}

        <div className="my-4 py-4">
          <div>
            <div>
              <SectionTitle text={"meet our team"} number={""} />
            </div>


















            <div className="space-y-4 text-center max-w-lg sm:max-w-xl md:max-w-3xl w-full mx-auto md:text-left">
              <h1 className="text-[30px] sm:text-[40px] md:text-[45px] text-center font-semibold leading-tight text-navBg">
                Teamwork is the only way we work
              </h1>
              <p className="text-sm sm:text-base font-bold text-p-text  text-center">
                𝚆𝚎𝚋 𝙳𝚎𝚟𝚎𝚕𝚘𝚙𝚖𝚎𝚗𝚝 𝙳𝚎𝚙𝚊𝚛𝚝𝚖𝚎𝚗𝚝
              </p>
            </div>

            <div className="md:w-[70%] mx-auto">
              {/* teams avatar */}
              <div className="grid gap-3 grid-cols-3 md:my-8 my-4 ">
                <div className="relative rounded-md overflow-hidden group">
                  <img
                    src={partha}
                    alt="avatar"
                    className="w-full h-full object-cover"
                  />

                  <div className="absolute top-0 left-0 bg-zinc-400/80 w-full h-full p-6 grid place-items-center translate-y-[120%] transition-all group-hover:translate-y-0">
                    <div className="text-center">
                      <h2 className="text-2xl text-zinc-50 font-semibold uppercase">
                        Partha Sarathi
                      </h2>
                      <h3 className="text-zinc-100 uppercase text-sm font-semibold">
                        Team Head
                      </h3>

                      <div className="flex items-center gap-3 text-zinc-50 text-2xl mt-3 w-max mx-auto">
                        <a
                          href="#"
                          className="w-8 h-8 bg-stone-500 rounded-full grid place-content-center transition-all hover:bg-stone-600"
                        >
                          <BiLogoFacebook />
                        </a>
                        <a
                          href="#"
                          className="w-8 h-8 bg-stone-500 rounded-full grid place-content-center transition-all hover:bg-stone-600"
                        >
                          <BiLogoLinkedin />
                        </a>
                        <a
                          href="#"
                          className="w-8 h-8 bg-stone-500 rounded-full grid place-content-center transition-all hover:bg-stone-600"
                        >
                          <BiLogoTwitter />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative rounded-md overflow-hidden group">
                  <img
                    src={redwan}
                    alt="avatar"
                    className="w-full h-full object-cover"
                  />

                  <div className="absolute top-0 left-0 bg-zinc-400/80 w-full h-full p-6 grid place-items-center translate-y-[120%] transition-all group-hover:translate-y-0">
                    <div className="text-center">
                      <h2 className="text-3xl text-zinc-50 font-semibold uppercase">
                        MD. Redwan
                      </h2>
                      <h3 className="text-zinc-100 uppercase text-sm font-semibold">
                        Assistant Department Head
                      </h3>

                      <div className="flex items-center gap-3 text-zinc-50 text-2xl mt-3 w-max mx-auto">
                        <a
                          href="#"
                          className="w-8 h-8 bg-stone-500 rounded-full grid place-content-center transition-all hover:bg-stone-600"
                        >
                          <BiLogoFacebook />
                        </a>
                        <a
                          href="#"
                          className="w-8 h-8 bg-stone-500 rounded-full grid place-content-center transition-all hover:bg-stone-600"
                        >
                          <BiLogoLinkedin />
                        </a>
                        <a
                          href="#"
                          className="w-8 h-8 bg-stone-500 rounded-full grid place-content-center transition-all hover:bg-stone-600"
                        >
                          <BiLogoTwitter />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative rounded-md overflow-hidden group">
                  <img
                    src={shuvo}
                    alt="avatar"
                    className="w-full h-full object-cover"
                  />

                  <div className="absolute top-0 left-0 bg-zinc-400/80 w-full h-full p-6 grid place-items-center translate-y-[120%] transition-all group-hover:translate-y-0">
                    <div className="text-center">
                      <h2 className="text-3xl text-zinc-50 font-semibold uppercase">
                        Shuvo Deb
                      </h2>
                      <h3 className="text-zinc-100 uppercase text-sm font-semibold">
                        Project Manager
                      </h3>

                      <div className="flex items-center gap-3 text-zinc-50 text-2xl mt-3 w-max mx-auto">
                        <a
                          href="#"
                          className="w-8 h-8 bg-stone-500 rounded-full grid place-content-center transition-all hover:bg-stone-600"
                        >
                          <BiLogoFacebook />
                        </a>
                        <a
                          href="#"
                          className="w-8 h-8 bg-stone-500 rounded-full grid place-content-center transition-all hover:bg-stone-600"
                        >
                          <BiLogoLinkedin />
                        </a>
                        <a
                          href="#"
                          className="w-8 h-8 bg-stone-500 rounded-full grid place-content-center transition-all hover:bg-stone-600"
                        >
                          <BiLogoTwitter />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>















            {/*  𝙳𝚒𝚐𝚒𝚝𝚊𝚕 𝙼𝚊𝚛𝚔𝚎𝚝𝚒𝚗𝚐 𝚂𝙴𝙾 𝙳𝚎𝚙𝚊𝚛𝚝𝚖𝚎𝚗𝚝 */}

            <div className="space-y-4 text-center max-w-lg sm:max-w-xl md:max-w-3xl w-full mx-auto md:text-left">
              <p className="text-sm sm:text-base font-bold text-p-text  text-center">
                𝙳𝚒𝚐𝚒𝚝𝚊𝚕 𝙼𝚊𝚛𝚔𝚎𝚝𝚒𝚗𝚐 𝚂𝙴𝙾 𝙳𝚎𝚙𝚊𝚛𝚝𝚖𝚎𝚗𝚝
              </p>
            </div>
            <div className="md:w-[70%] mx-auto">
              {/* teams avatar */}
              <div className="grid gap-3 grid-cols-3 md:my-8 my-4 ">
                <div className="relative rounded-md overflow-hidden group">
                  <img
                    src={halder_Sohag}
                    alt="avatar"
                    className="w-full h-full object-cover"
                  />

                  <div className="absolute top-0 left-0 bg-zinc-400/80 w-full h-full p-6 grid place-items-center translate-y-[120%] transition-all group-hover:translate-y-0">
                    <div className="text-center">
                      <h2 className="text-2xl text-zinc-50 font-semibold uppercase">
                        Shohag Hawlader
                      </h2>
                      <h3 className="text-zinc-100 uppercase text-sm font-semibold">
                        Team Head
                      </h3>

                      <div className="flex items-center gap-3 text-zinc-50 text-2xl mt-3 w-max mx-auto">
                        <a
                          href="#"
                          className="w-8 h-8 bg-stone-500 rounded-full grid place-content-center transition-all hover:bg-stone-600"
                        >
                          <BiLogoFacebook />
                        </a>
                        <a
                          href="#"
                          className="w-8 h-8 bg-stone-500 rounded-full grid place-content-center transition-all hover:bg-stone-600"
                        >
                          <BiLogoLinkedin />
                        </a>
                        <a
                          href="#"
                          className="w-8 h-8 bg-stone-500 rounded-full grid place-content-center transition-all hover:bg-stone-600"
                        >
                          <BiLogoTwitter />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative rounded-md overflow-hidden group">
                  <img
                    src={md_Sohag}
                    alt="avatar"
                    className="w-full h-full object-cover"
                  />

                  <div className="absolute top-0 left-0 bg-zinc-400/80 w-full h-full p-6 grid place-items-center translate-y-[120%] transition-all group-hover:translate-y-0">
                    <div className="text-center">
                      <h2 className="text-3xl text-zinc-50 font-semibold uppercase">
                        Mohammad Shohag
                      </h2>
                      <h3 className="text-zinc-100 uppercase text-sm font-semibold">
                        Assistant Department Head
                      </h3>

                      <div className="flex items-center gap-3 text-zinc-50 text-2xl mt-3 w-max mx-auto">
                        <a
                          href="#"
                          className="w-8 h-8 bg-stone-500 rounded-full grid place-content-center transition-all hover:bg-stone-600"
                        >
                          <BiLogoFacebook />
                        </a>
                        <a
                          href="#"
                          className="w-8 h-8 bg-stone-500 rounded-full grid place-content-center transition-all hover:bg-stone-600"
                        >
                          <BiLogoLinkedin />
                        </a>
                        <a
                          href="#"
                          className="w-8 h-8 bg-stone-500 rounded-full grid place-content-center transition-all hover:bg-stone-600"
                        >
                          <BiLogoTwitter />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative rounded-md overflow-hidden group">
                  <img
                    src={sadika}
                    alt="avatar"
                    className="w-full h-full object-cover"
                  />

                  <div className="absolute top-0 left-0 bg-zinc-400/80 w-full h-full p-6 grid place-items-center translate-y-[120%] transition-all group-hover:translate-y-0">
                    <div className="text-center">
                      <h2 className="text-3xl text-zinc-50 font-semibold uppercase">
                        Sadika Rahman
                      </h2>
                      <h3 className="text-zinc-100 uppercase text-sm font-semibold">
                        Project Manager
                      </h3>

                      <div className="flex items-center gap-3 text-zinc-50 text-2xl mt-3 w-max mx-auto">
                        <a
                          href="#"
                          className="w-8 h-8 bg-stone-500 rounded-full grid place-content-center transition-all hover:bg-stone-600"
                        >
                          <BiLogoFacebook />
                        </a>
                        <a
                          href="#"
                          className="w-8 h-8 bg-stone-500 rounded-full grid place-content-center transition-all hover:bg-stone-600"
                        >
                          <BiLogoLinkedin />
                        </a>
                        <a
                          href="#"
                          className="w-8 h-8 bg-stone-500 rounded-full grid place-content-center transition-all hover:bg-stone-600"
                        >
                          <BiLogoTwitter />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>













            {/*  𝙶𝚛𝚊𝚙𝚑𝚒𝚌 𝙳𝚎𝚜𝚒𝚐𝚗 𝙳𝚎𝚙𝚊𝚛𝚝𝚖𝚎𝚗𝚝 */}

            <div className="space-y-4 text-center max-w-lg sm:max-w-xl md:max-w-3xl w-full mx-auto md:text-left">
              <p className="text-sm sm:text-base font-bold text-p-text  text-center">
                𝙶𝚛𝚊𝚙𝚑𝚒𝚌 𝙳𝚎𝚜𝚒𝚐𝚗 𝙳𝚎𝚙𝚊𝚛𝚝𝚖𝚎𝚗𝚝
              </p>
            </div>
            <div className="md:w-[70%] mx-auto">
              {/* teams avatar */}
              <div className="grid gap-3 grid-cols-3 md:my-8 my-4 ">
                <div className="relative rounded-md overflow-hidden group">
                  <img
                    src={Imon}
                    alt="avatar"
                    className="w-full h-full object-cover"
                  />

                  <div className="absolute top-0 left-0 bg-zinc-400/80 w-full h-full p-6 grid place-items-center translate-y-[120%] transition-all group-hover:translate-y-0">
                    <div className="text-center">
                      <h2 className="text-2xl text-zinc-50 font-semibold uppercase">
                        Imran Talukdar
                      </h2>
                      <h3 className="text-zinc-100 uppercase text-sm font-semibold">
                        Team Head
                      </h3>

                      <div className="flex items-center gap-3 text-zinc-50 text-2xl mt-3 w-max mx-auto">
                        <a
                          href="#"
                          className="w-8 h-8 bg-stone-500 rounded-full grid place-content-center transition-all hover:bg-stone-600"
                        >
                          <BiLogoFacebook />
                        </a>
                        <a
                          href="#"
                          className="w-8 h-8 bg-stone-500 rounded-full grid place-content-center transition-all hover:bg-stone-600"
                        >
                          <BiLogoLinkedin />
                        </a>
                        <a
                          href="#"
                          className="w-8 h-8 bg-stone-500 rounded-full grid place-content-center transition-all hover:bg-stone-600"
                        >
                          <BiLogoTwitter />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative rounded-md overflow-hidden group">
                  <img
                    src={Azizul}
                    alt="avatar"
                    className="w-full h-full object-cover"
                  />

                  <div className="absolute top-0 left-0 bg-zinc-400/80 w-full h-full p-6 grid place-items-center translate-y-[120%] transition-all group-hover:translate-y-0">
                    <div className="text-center">
                      <h2 className="text-3xl text-zinc-50 font-semibold uppercase">
                        Azizul Islam
                      </h2>
                      <h3 className="text-zinc-100 uppercase text-sm font-semibold">
                        Assistant Department Head
                      </h3>

                      <div className="flex items-center gap-3 text-zinc-50 text-2xl mt-3 w-max mx-auto">
                        <a
                          href="#"
                          className="w-8 h-8 bg-stone-500 rounded-full grid place-content-center transition-all hover:bg-stone-600"
                        >
                          <BiLogoFacebook />
                        </a>
                        <a
                          href="#"
                          className="w-8 h-8 bg-stone-500 rounded-full grid place-content-center transition-all hover:bg-stone-600"
                        >
                          <BiLogoLinkedin />
                        </a>
                        <a
                          href="#"
                          className="w-8 h-8 bg-stone-500 rounded-full grid place-content-center transition-all hover:bg-stone-600"
                        >
                          <BiLogoTwitter />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative rounded-md overflow-hidden group">
                  <img
                    src={person_3}
                    alt="avatar"
                    className="w-full h-full object-cover"
                  />

                  <div className="absolute top-0 left-0 bg-zinc-400/80 w-full h-full p-6 grid place-items-center translate-y-[120%] transition-all group-hover:translate-y-0">
                    <div className="text-center">
                      <h2 className="text-3xl text-zinc-50 font-semibold uppercase">
                        Md Iman Hossain
                      </h2>
                      <h3 className="text-zinc-100 uppercase text-sm font-semibold">
                        Project Manager
                      </h3>

                      <div className="flex items-center gap-3 text-zinc-50 text-2xl mt-3 w-max mx-auto">
                        <a
                          href="#"
                          className="w-8 h-8 bg-stone-500 rounded-full grid place-content-center transition-all hover:bg-stone-600"
                        >
                          <BiLogoFacebook />
                        </a>
                        <a
                          href="#"
                          className="w-8 h-8 bg-stone-500 rounded-full grid place-content-center transition-all hover:bg-stone-600"
                        >
                          <BiLogoLinkedin />
                        </a>
                        <a
                          href="#"
                          className="w-8 h-8 bg-stone-500 rounded-full grid place-content-center transition-all hover:bg-stone-600"
                        >
                          <BiLogoTwitter />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>











            {/*  𝙻𝚊𝚛𝚊𝚟𝚎𝚕 𝙳𝚎𝚟𝚎𝚕𝚘𝚙𝚎𝚛 𝙳𝚎𝚙𝚊𝚛𝚝𝚖𝚎𝚗𝚝 */}

            <div className="space-y-4 text-center max-w-lg sm:max-w-xl md:max-w-3xl w-full mx-auto md:text-left">
              <p className="text-sm sm:text-base font-bold text-p-text  text-center">
                𝙻𝚊𝚛𝚊𝚟𝚎𝚕 𝙳𝚎𝚟𝚎𝚕𝚘𝚙𝚎𝚛 𝙳𝚎𝚙𝚊𝚛𝚝𝚖𝚎𝚗𝚝
              </p>
            </div>
            <div className="md:w-[70%] mx-auto">
              {/* teams avatar */}
              <div className="grid gap-3 grid-cols-3 md:my-8 my-4 ">
                <div className="relative rounded-md overflow-hidden group">
                  <img
                    src={Larav_Team_Had}
                    alt="avatar"
                    className="w-full h-full object-cover"
                  />

                  <div className="absolute top-0 left-0 bg-zinc-400/80 w-full h-full p-6 grid place-items-center translate-y-[120%] transition-all group-hover:translate-y-0">
                    <div className="text-center">
                      <h2 className="text-2xl text-zinc-50 font-semibold uppercase">
                        MD. Shakil Khan
                      </h2>
                      <h3 className="text-zinc-100 uppercase text-sm font-semibold">
                        Team Head
                      </h3>

                      <div className="flex items-center gap-3 text-zinc-50 text-2xl mt-3 w-max mx-auto">
                        <a
                          href="#"
                          className="w-8 h-8 bg-stone-500 rounded-full grid place-content-center transition-all hover:bg-stone-600"
                        >
                          <BiLogoFacebook />
                        </a>
                        <a
                          href="#"
                          className="w-8 h-8 bg-stone-500 rounded-full grid place-content-center transition-all hover:bg-stone-600"
                        >
                          <BiLogoLinkedin />
                        </a>
                        <a
                          href="#"
                          className="w-8 h-8 bg-stone-500 rounded-full grid place-content-center transition-all hover:bg-stone-600"
                        >
                          <BiLogoTwitter />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative rounded-md overflow-hidden group">
                  <img
                    src={safuiddin}
                    alt="avatar"
                    className="w-full h-full object-cover"
                  />

                  <div className="absolute top-0 left-0 bg-zinc-400/80 w-full h-full p-6 grid place-items-center translate-y-[120%] transition-all group-hover:translate-y-0">
                    <div className="text-center">
                      <h2 className="text-3xl text-zinc-50 font-semibold uppercase">
                        MD. Shorfuddin Siam
                      </h2>
                      <h3 className="text-zinc-100 uppercase text-sm font-semibold">
                        Assistant Department Head
                      </h3>

                      <div className="flex items-center gap-3 text-zinc-50 text-2xl mt-3 w-max mx-auto">
                        <a
                          href="#"
                          className="w-8 h-8 bg-stone-500 rounded-full grid place-content-center transition-all hover:bg-stone-600"
                        >
                          <BiLogoFacebook />
                        </a>
                        <a
                          href="#"
                          className="w-8 h-8 bg-stone-500 rounded-full grid place-content-center transition-all hover:bg-stone-600"
                        >
                          <BiLogoLinkedin />
                        </a>
                        <a
                          href="#"
                          className="w-8 h-8 bg-stone-500 rounded-full grid place-content-center transition-all hover:bg-stone-600"
                        >
                          <BiLogoTwitter />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative rounded-md overflow-hidden group">
                  <img
                    src={Raju}
                    alt="avatar"
                    className="w-full h-full object-cover"
                  />

                  <div className="absolute top-0 left-0 bg-zinc-400/80 w-full h-full p-6 grid place-items-center translate-y-[120%] transition-all group-hover:translate-y-0">
                    <div className="text-center">
                      <h2 className="text-3xl text-zinc-50 font-semibold uppercase">
                        MD. Raju Sheikh
                      </h2>
                      <h3 className="text-zinc-100 uppercase text-sm font-semibold">
                        Project Manager
                      </h3>

                      <div className="flex items-center gap-3 text-zinc-50 text-2xl mt-3 w-max mx-auto">
                        <a
                          href="#"
                          className="w-8 h-8 bg-stone-500 rounded-full grid place-content-center transition-all hover:bg-stone-600"
                        >
                          <BiLogoFacebook />
                        </a>
                        <a
                          href="#"
                          className="w-8 h-8 bg-stone-500 rounded-full grid place-content-center transition-all hover:bg-stone-600"
                        >
                          <BiLogoLinkedin />
                        </a>
                        <a
                          href="#"
                          className="w-8 h-8 bg-stone-500 rounded-full grid place-content-center transition-all hover:bg-stone-600"
                        >
                          <BiLogoTwitter />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>



          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
