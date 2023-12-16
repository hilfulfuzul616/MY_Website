import SectionTitle from "../shared/SectionTitle";
import { BiPhoneCall } from "react-icons/bi";
import { HiOutlineMail } from "react-icons/hi";
import { AiOutlineWhatsApp } from "react-icons/ai";
import Swal from "sweetalert2";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles

const Contact = () => {
  const handleButtonClick = () => {
    Swal.fire('Success!', 'Your action was successful!', 'success');
  };

  AOS.init();

  // You can also pass an optional settings object
  // below listed default settings
  AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
    initClassName: "aos-init", // class applied after initialization
    animatedClassName: "aos-animate", // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 110, // offset (in px) from the original trigger point
    delay: 200, // values from 0 to 3000, with step 50ms
    duration: 1200, // values from 0 to 3000, with step 50ms
    easing: "ease", // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
  });

  return (
    <div className="py-10">
      <div className="w-[20rem] h-[20rem] bg-gradient-to-br from-purple-500 to-pink-500 absolute top-0 right-0 -z-10 blur-[250px]"></div>
      <div className="w-[20rem] h-[20rem] bg-gradient-to-br from-yellow-500 to-rose-500 absolute top-0 left-0 -z-10 blur-[250px]"></div>
      <div className="my-container">
        <div className="">
          <SectionTitle text={"contact us"} />
        </div>

        <div className="grid gap-[7rem] md:gap-3 md:grid-cols-[1fr,_2fr] bg-white px-6 border border-zinc-200 py-12  rounded-md relative">
          {/* left  */}

          <div data-aos="fade-right" className="relative order-2 md:order-3">
            <h1 className="capitalize text-4xl  font-medium text-zinc-700 text-center mb-12 ">
              Get in touch
            </h1>

            <div className="space-y-7 w-max mx-auto">
              <a
                href="tel:+8801976243616"
                className="flex items-center gap-5 cursor-pointer flex-col md:flex-row"
              >
                <p className="text-6xl md:text-2xl text-orange-500 hover:text-orange-600 transition-all">
                  <BiPhoneCall />
                </p>
                <p className="text-3xl  text-zinc-500 md:text-xl">
                  Book a free call
                </p>
              </a>
              <a
                href="mailto:Khidmahit2023@gmail.com"
                className="flex items-center gap-5 flex-col md:flex-row"
              >
                <p className="text-6xl md:text-2xl text-orange-500 hover:text-orange-600 transition-all">
                  <HiOutlineMail />
                </p>
                <p className="text-3xl  text-zinc-500 md:text-xl">Send Email</p>
              </a>
              <a
                href="https://wa.me/01976243616"
                className="flex cursor-pointer items-center gap-5 flex-col md:flex-row"
              >
                <p className="text-6xl md:text-2xl text-orange-500 hover:text-orange-600 transition-all">
                  <AiOutlineWhatsApp />
                </p>
                <p className="text-3xl  text-zinc-500 md:text-xl">
                  WhatsApp Chat
                </p>
              </a>
            </div>
          </div>
          {/* right  */}
          <div data-aos="fade-left" className="order-1 md:order-4">
            <h1 className="mb-8 text-3xl text-zinc-700 font-semibold">
              Leave a message and we will contact you shortly.
            </h1>

            <form
              className="relative space-y-5
            "
            >
              <div>
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full border border-zinc-200 p-2 px rounded-md focus:outline-zinc-300 bg-teal-50/20"
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Email"
                  className="w-full border border-zinc-200 p-2 px rounded-md focus:outline-zinc-300 bg-teal-50/20"
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full border border-zinc-200 p-2 px rounded-md focus:outline-zinc-300 bg-teal-50/20"
                />
              </div>
              <div>
                <textarea
                  name=""
                  id=""
                  rows="5"
                  className="w-full border border-zinc-200 p-2 px rounded-md focus:outline-zinc-300 bg-teal-50/20"
                ></textarea>
              </div>

              <div className=" w-full sm:w-max mx-auto  ">
                <button onClick={handleButtonClick}
                  type="submit"
                  className="w-full sm:w-max border border-orange-500 py-2 px-4 rounded-md drop-shadow-sm  text-orange-500 font-semibold hover:bg-orange-500 hover:text-white transition-all"
                >
                  Send message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
