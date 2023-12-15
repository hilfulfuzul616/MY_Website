import { Link } from "react-router-dom";
import { BsTelephone } from "react-icons/bs";
import { useEffect, useState } from "react";
import { MdOutlineMailOutline } from "react-icons/md";
import { BiMap } from "react-icons/bi";
const Footer = () => {
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
        <div key="r" className="">
          {data[0].connection === "ON" ? (
            <div key="i" className="bg-navBg pt-8 mt-8">
              <div className="my-container flex flex-wrap gap-5 justify-between">
                <div className="text-zinc-100 space-y-4">
                  <h2 className="text-2xl font-semibold">Lets talk🤙</h2>

                  <div className="text-zinc-200 space-y-2">
                    <p className="flex items-center gap-2">
                      <BsTelephone /> +8801976243616
                    </p>
                    <p className="flex items-center gap-2">
                      <MdOutlineMailOutline /> hilfulfuzulit616@gmail.com
                    </p>
                    <p className="flex items-center gap-2">
                      <BiMap /> Tongibari, Munshiganj, Dhaka, Bangladesh
                    </p>
                  </div>

                  <div className="flex gap-x-3 items-center">
                    <a href="https://www.facebook.com/hilfulfuzulit2023" target="_blank" rel="noopener noreferrer"> <div className='cursor-pointer hover:scale-110 transition-all duration-300'><AntDesignFacebookFilled /></div></a>
                    <a href="https://www.linkedin.com/company/hilfulfuzulit2023" target="_blank" rel="noopener noreferrer"><div className='cursor-pointer hover:scale-110 transition-all duration-300'><CibLinkedin /></div></a>
                    {/* <div className='cursor-pointer hover:scale-110 transition-all duration-300'><BiYoutube /></div> */}
                    {/* <div className='cursor-pointer hover:scale-110 transition-all duration-300'><RiTwitterXLine /></div> */}
                    <a href="https://www.instagram.com/hilfulfuzulit2023" target="_blank" rel="noopener noreferrer"><div className='cursor-pointer hover:scale-110 transition-all duration-300'><BxBxlInstagramAlt /></div></a>
                  </div>
                </div>

                <div className="text-zinc-100 flex flex-col space-y-2  capitalize font-medium">
                  <Link to={"/"}>home</Link>
                  <Link to={"/"}>service</Link>
                  <Link to={"/about-us"}>company</Link>
                </div>

                <div className="text-zinc-100 flex flex-col space-y-2  capitalize ">
                  <Link to={"/"}>technical support</Link>
                  <Link to={"/"}>development</Link>
                  <Link to={"/"}>technology information</Link>
                  <Link to={"/"}>testing</Link>
                  <Link to={"/"}>consulting</Link>
                </div>
              </div>

              <p className="text-zinc-200 text-center font-semibold  py-3">
                &copy; {new Date().getFullYear()} copy rights. All right reserved by
                <span className="font-bold text-yellow-400"> Hilful Fuzul IT</span>
              </p>
            </div>
          ) : (
            <div key="j" className="hidden"></div>
          )}
        </div>
      ) : (
        <p></p>
      )}
    </div>
  );
};


export function AntDesignFacebookFilled(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1.7em" height="1.7em" viewBox="0 0 1024 1024" {...props}><path fill="#f85606" d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-92.4 233.5h-63.9c-50.1 0-59.8 23.8-59.8 58.8v77.1h119.6l-15.6 120.7h-104V912H539.2V602.2H434.9V481.4h104.3v-89c0-103.3 63.1-159.6 155.3-159.6c44.2 0 82.1 3.3 93.2 4.8v107.9z"></path></svg>
  )
}


export function MdiWeb(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1.3em" height="1.3em" viewBox="0 0 24 24" {...props}><path fill="#f85606" d="M16.36 14c.08-.66.14-1.32.14-2c0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2m-5.15 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95a8.03 8.03 0 0 1-4.33 3.56M14.34 14H9.66c-.1-.66-.16-1.32-.16-2c0-.68.06-1.35.16-2h4.68c.09.65.16 1.32.16 2c0 .68-.07 1.34-.16 2M12 19.96c-.83-1.2-1.5-2.53-1.91-3.96h3.82c-.41 1.43-1.08 2.76-1.91 3.96M8 8H5.08A7.923 7.923 0 0 1 9.4 4.44C8.8 5.55 8.35 6.75 8 8m-2.92 8H8c.35 1.25.8 2.45 1.4 3.56A8.008 8.008 0 0 1 5.08 16m-.82-2C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2c0 .68.06 1.34.14 2M12 4.03c.83 1.2 1.5 2.54 1.91 3.97h-3.82c.41-1.43 1.08-2.77 1.91-3.97M18.92 8h-2.95a15.65 15.65 0 0 0-1.38-3.56c1.84.63 3.37 1.9 4.33 3.56M12 2C6.47 2 2 6.5 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2Z"></path></svg>
  )
}


export function BiYoutube(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1.3em" height="1.3em" viewBox="0 0 16 16" {...props}><path fill="#f85606" d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104l.022.26l.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105l-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006l-.087-.004l-.171-.007l-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103l.003-.052l.008-.104l.022-.26l.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007l.172-.006l.086-.003l.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408z"></path></svg>
  )
}


export function RiTwitterXLine(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1.3em" height="1.3em" viewBox="0 0 24 24" {...props}><path fill="#f85606" d="M8 2H1l8.26 11.015L1.45 22H4.1l6.388-7.349L16 22h7l-8.608-11.478L21.8 2h-2.65l-5.986 6.886L8 2Zm9 18L5 4h2l12 16h-2Z"></path></svg>
  )
}


export function BxBxlInstagramAlt(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1.89em" height="1.89em" viewBox="0 0 24 24" {...props}><path d="M20.947 8.305a6.53 6.53 0 0 0-.419-2.216a4.61 4.61 0 0 0-2.633-2.633a6.606 6.606 0 0 0-2.186-.42c-.962-.043-1.267-.055-3.709-.055s-2.755 0-3.71.055a6.606 6.606 0 0 0-2.185.42a4.607 4.607 0 0 0-2.633 2.633a6.554 6.554 0 0 0-.419 2.185c-.043.963-.056 1.268-.056 3.71s0 2.754.056 3.71c.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632a6.584 6.584 0 0 0 2.185.45c.963.043 1.268.056 3.71.056s2.755 0 3.71-.056a6.59 6.59 0 0 0 2.186-.419a4.615 4.615 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.187c.043-.962.056-1.267.056-3.71c-.002-2.442-.002-2.752-.058-3.709zm-8.953 8.297c-2.554 0-4.623-2.069-4.623-4.623s2.069-4.623 4.623-4.623a4.623 4.623 0 0 1 0 9.246zm4.807-8.339a1.077 1.077 0 0 1-1.078-1.078a1.077 1.077 0 1 1 2.155 0c0 .596-.482 1.078-1.077 1.078z" fill="#f85606"></path><circle cx="11.994" cy="11.979" r="3.003" fill="#f85606"></circle></svg>
  )
}


export function CibLinkedin(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1.3em" height="1.3em" viewBox="0 0 32 32" {...props}><path fill="#f85606" d="M27.26 27.271h-4.733v-7.427c0-1.771-.037-4.047-2.475-4.047c-2.468 0-2.844 1.921-2.844 3.916v7.557h-4.739V11.999h4.552v2.083h.061c.636-1.203 2.183-2.468 4.491-2.468c4.801 0 5.692 3.161 5.692 7.271v8.385zM7.115 9.912a2.75 2.75 0 0 1-2.751-2.756a2.753 2.753 0 1 1 2.751 2.756m2.374 17.359H4.74V12h4.749zM29.636 0H2.36C1.057 0 0 1.031 0 2.307v27.387c0 1.276 1.057 2.307 2.36 2.307h27.271c1.301 0 2.369-1.031 2.369-2.307V2.307C32 1.031 30.932 0 29.631 0z"></path></svg>
  )
}
export default Footer;


