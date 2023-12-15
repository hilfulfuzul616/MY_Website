import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
//WEB
import partha from '../../assets/Team_Img/Web/partha.jfif'
import redwan from '../../assets/Team_Img/Web/redwan.jfif'
import shuvo from '../../assets/Team_Img/Web/shuvo.jfif'
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

import { Autoplay, Navigation, EffectCreative } from "swiper/modules";
import SectionTitle from "../../pages/shared/SectionTitle";
// import SectionTitle from "../../pages/shared/SectionTitle";

const OurTeamInfo = ({ num }) => {
  return (
    <div className="py-4 mb-8">
      <div>
        <SectionTitle text={"meet our teams"} number={num} />
      </div>
      <div className="my-container">
        <div>
          <Swiper
            autoplay={{
              delay: 3000,
            }}
            navigation={true}
            creativeEffect={true}
            modules={[Autoplay, Navigation, EffectCreative]}
          >
            <SwiperSlide>
              <div className="bg-white backdrop-blur-md p-4 border border-zinc-200">
                <div>
                  <SectionTitle text={"web Development"} />
                </div>

                <div className="mx-auto w-max">
                  {/* // ! AVATAR  */}
                  <div className="w-16 h-16 rounded-full object-cover ring-2 ring-offset-2 overflow-hidden mx-auto">
                    <img
                      className="max-w-full w-full"
                      src={partha}
                      alt="avatar"
                    />
                  </div>
                  {/* // ! TITLLE  */}
                  <div className="text-center leading-4 mt-2">
                    <h3 className="uppercase font-semibold">Partha Sarathi Halder</h3>
                    <p className="text-p-text uppercase text-sm font-semibold">
                      team head
                    </p>
                  </div>
                </div>

                {/* // ! GROUP  */}
                <div className="flex items-center justify-center pb-4 gap-12 mt-8 flex-wrap">
                  {/* // * person 1  */}
                  <div className="">
                    {/* // ! AVATAR  */}
                    <div className="w-16 h-16 rounded-full object-cover ring-2 ring-offset-2 overflow-hidden mx-auto">
                      <img
                        className="max-w-full w-full"
                        src={redwan}
                        alt="avatar"
                      />
                    </div>
                    {/* // ! TITLLE  */}
                    <div className="text-center leading-4 mt-2">
                      <h3 className="uppercase font-semibold">redwan islam</h3>
                      <p className="text-p-text uppercase text-sm font-semibold">
                      Assistant Department Head
                      </p>
                    </div>
                  </div>
                  {/* // * person 2  */}
                  <div className="">
                    {/* // ! AVATAR  */}
                    <div className="w-16 h-16 rounded-full object-cover ring-2 ring-offset-2 overflow-hidden mx-auto">
                      <img
                        className="max-w-full w-full"
                        src={shuvo}
                        alt="avatar"
                      />
                    </div>
                    {/* // ! TITLLE  */}
                    <div className="text-center leading-4 mt-2">
                      <h3 className="uppercase font-semibold">Shuvo Dev</h3>
                      <p className="text-p-text uppercase text-sm font-semibold">
                      Project manager
                      </p>
                    </div>
                  </div>
                  {/* // * person 3  */}
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="bg-white backdrop-blur-md p-4 border border-zinc-200">
                <div className="hidden md:block">
                  <SectionTitle text={"Digital Marketing & SEO  Department"} />
                </div>
                <div className="md:hidden">
                  <SectionTitle text={"SEO  Department"} />
                </div>

                <div className="mx-auto w-max">
                  {/* // ! AVATAR  */}
                  <div className="w-16 h-16 rounded-full object-cover ring-2 ring-offset-2 overflow-hidden mx-auto">
                    <img
                      className="max-w-full w-full"
                      src={halder_Sohag}
                      alt="avatar"
                    />
                  </div>
                  {/* // ! TITLLE  */}
                  <div className="text-center leading-4 mt-2">
                    <h3 className="uppercase font-semibold">Shohag Hawlader </h3>
                    <p className="text-p-text uppercase text-sm font-semibold">
                      team head
                    </p>
                  </div>
                </div>

                {/* // ! GROUP  */}
                <div className="flex items-center justify-center pb-4 gap-12 mt-8 flex-wrap">
                  {/* // * person 1  */}
                  <div className="">
                    {/* // ! AVATAR  */}
                    <div className="w-16 h-16 rounded-full object-cover ring-2 ring-offset-2 overflow-hidden mx-auto">
                      <img
                        className="max-w-full w-full"
                        src={md_Sohag}
                        alt="avatar"
                      />
                    </div>
                    {/* // ! TITLLE  */}
                    <div className="text-center leading-4 mt-2">
                      <h3 className="uppercase font-semibold">Mohammad Shohag</h3>
                      <p className="text-p-text uppercase text-sm font-semibold">
                      Assistant Department Head
                      </p>
                    </div>
                  </div>
                  {/* // * person 2  */}
                  <div className="">
                    {/* // ! AVATAR  */}
                    <div className="w-16 h-16 rounded-full object-cover ring-2 ring-offset-2 overflow-hidden mx-auto">
                      <img
                        className="max-w-full w-full"
                        src={sadika}
                        alt="avatar"
                      />
                    </div>
                    {/* // ! TITLLE  */}
                    <div className="text-center leading-4 mt-2">
                      <h3 className="uppercase font-semibold">Sadika Rahman</h3>
                      <p className="text-p-text uppercase text-sm font-semibold">
                      Project Manager
                      </p>
                    </div>
                  </div>
                  {/* // * person 3  */}
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="bg-white backdrop-blur-md p-4 border border-zinc-200">
                <div>
                  <SectionTitle text={"graphic design"} />
                </div>

                <div className="mx-auto w-max">
                  {/* // ! AVATAR  */}
                  <div className="w-16 h-16 rounded-full object-cover ring-2 ring-offset-2 overflow-hidden mx-auto">
                    <img
                      className="max-w-full w-full"
                      src={Imon}
                      alt="avatar"
                    />
                  </div>
                  {/* // ! TITLLE  */}
                  <div className="text-center leading-4 mt-2">
                    <h3 className="uppercase font-semibold">Imran Talukdar</h3>
                    <p className="text-p-text uppercase text-sm font-semibold">
                    Team Head 
                    </p>
                  </div>
                </div>

                {/* // ! GROUP  */}
                <div className="flex items-center justify-center pb-4 gap-12 mt-8 flex-wrap">
                  {/* // * person 1  */}
                  <div className="">
                    {/* // ! AVATAR  */}
                    <div className="w-16 h-16 rounded-full object-cover ring-2 ring-offset-2 overflow-hidden mx-auto">
                      <img
                        className="max-w-full w-full"
                        src={Azizul}
                        alt="avatar"
                      />
                    </div>
                    {/* // ! TITLLE  */}
                    <div className="text-center leading-4 mt-2">
                      <h3 className="uppercase font-semibold">Azizul Islam</h3>
                      <p className="text-p-text uppercase text-sm font-semibold">
                      Assistant Department Head
                      </p>
                    </div>
                  </div>
                  {/* // * person 2  */}
                  <div className="">
                    {/* // ! AVATAR  */}
                    <div className="w-16 h-16 rounded-full object-cover ring-2 ring-offset-2 overflow-hidden mx-auto">
                      <img
                        className="max-w-full w-full"
                        src={person_3}
                        alt="avatar"
                      />
                    </div>
                    {/* // ! TITLLE  */}
                    <div className="text-center leading-4 mt-2">
                      <h3 className="uppercase font-semibold">Md Iman Hossain</h3>
                      <p className="text-p-text uppercase text-sm font-semibold">
                      Project Manager
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-white backdrop-blur-md p-4 border border-zinc-200">
                <div>
                  <SectionTitle text={"Laravel Developer"} />
                </div>

                <div className="mx-auto w-max">
                  {/* // ! AVATAR  */}
                  <div className="w-16 h-16 rounded-full object-cover ring-2 ring-offset-2 overflow-hidden mx-auto">
                    <img
                      className="max-w-full w-full"
                      src={Larav_Team_Had}
                      alt="avatar"
                    />
                  </div>
                  {/* // ! TITLLE  */}
                  <div className="text-center leading-4 mt-2">
                    <h3 className="uppercase font-semibold">Shakil Khan</h3>
                    <p className="text-p-text uppercase text-sm font-semibold">
                    Team Head
                    </p>
                  </div>
                </div>

                {/* // ! GROUP  */}
                <div className="flex items-center justify-center pb-4 gap-12 mt-8 flex-wrap">
                  {/* // * person 1  */}
                  <div className="">
                    {/* // ! AVATAR  */}
                    <div className="w-16 h-16 rounded-full object-cover ring-2 ring-offset-2 overflow-hidden mx-auto">
                      <img
                        className="max-w-full w-full"
                        src={safuiddin}
                        alt="avatar"
                      />
                    </div>
                    {/* // ! TITLLE  */}
                    <div className="text-center leading-4 mt-2">
                      <h3 className="uppercase font-semibold">Shorfuddin Siam</h3>
                      <p className="text-p-text uppercase text-sm font-semibold">
                      Senior Developer
                      </p>
                    </div>
                  </div>
                  {/* // * person 3  */}
                  <div className="">
                    {/* // ! AVATAR  */}
                    <div className="w-16 h-16 rounded-full object-cover ring-2 ring-offset-2 overflow-hidden mx-auto">
                      <img
                        className="max-w-full w-full"
                        src={Raju}
                        alt="avatar"
                      />
                    </div>
                    {/* // ! TITLLE  */}
                    <div className="text-center leading-4 mt-2">
                      <h3 className="uppercase font-semibold">Raju Sheikh</h3>
                      <p className="text-p-text uppercase text-sm font-semibold">
                      Senior Developer
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default OurTeamInfo;
