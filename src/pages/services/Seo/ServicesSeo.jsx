// import Swal from "sweetalert2"
import Monthly_Seo_Reporting from '../../../assets/SCO_Images/Monthly_Seo_Reporting.jfif'
import Content_Optimization from '../../../assets/SCO_Images/Content_Optimization.jfif'
import Competitors_Analysis from '../../../assets/SCO_Images/Competitors_Analysis.jfif'
import Backlink_Analyzing from '../../../assets/SCO_Images/Backlink_Analyzing.jfif'
import SectionTitle from "../../shared/SectionTitle"
import ServiceCard from "../ServiceCard"
const ServicesSeo = () => {
    const services = [
        {
            title: "Monthly SEO Reporting",
            subtitle: "Monthly SEO Report Analysis Service",
            description: "Monthly SEO reporting services are essential for businesses and website owners looking to track the performance of their online presence. SEO (Search Engine Optimization) reporting helps in analyzing website traffic, keyword rankings, backlinks, and other important metrics that determine the effectiveness of your digital marketing efforts. Hiring a professional SEO reporting service can provide you with detailed insights, allowing you to make data-driven decisions and optimize your website for better search engine visibility",
            image: Monthly_Seo_Reporting
        },
        {
            title: "Content Optimization",
            subtitle: "Content Optimization Service",
            description: "Content is most important in site ranking, if you want traffic and reach your target you need qualityful content. A perfect content write making reache your target. In this part product description, your site details, Product title,meta title, meta description all are attach",
            image: Content_Optimization
        },
        {
            title: "Backlink Analyzing",
            subtitle: "Backlink Audit Analysis Service",
            description: "Backlink Analyzing services is a critical aspect of SEO, helping businesses understand their existing backlink profile, identify high-quality backlinks, and improve their link-building strategies",
            image: Backlink_Analyzing
        },
        {
            title: "Competitors Analysis",
            subtitle: "Best Competitive Analysis Service",
            description: "Offering a Competitor Analysis service is a valuable offering for agencies, helping businesses understand their market position and make informed strategic decisions. When choose such keyword research must do your Competitor Analysis service, it's essential to convey professionalism, expertise, and the ability to provide actionable insights",
            image: Competitors_Analysis
        },
    ]
//     const Handle_Submit = (event) => {
//         event.preventDefault();
//         set_success("")
//         const Full_Form = event.target

//                   //image upload start-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
//         const image = Full_Form.image.files[0]
//         const Form_Data = new FormData()
//         Form_Data.append('image', image)
//         const url = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMAGE_UPLOAD_KEY}`
//         fetch(url, {
//             method: 'POST',
//             body: Form_Data,
//         })
//             .then(res => res.json())
//             .then(img_data => {
//                 //    console.log(img_data.data.display_url)
//                 const img_url = img_data.data.display_url
//                 //image upload end-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// //-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// //𝐀𝐝𝐦𝐢𝐧 𝐏𝐚𝐧𝐧𝐞𝐥 & 𝐔𝐬𝐞𝐫 𝐑𝐞𝐥𝐚𝐭𝐞𝐝 𝐀𝐏𝐈.. (𝑵𝑬𝑾) || 𝐀𝐝𝐦𝐢𝐧 𝐏𝐚𝐧𝐧𝐞𝐥 & 𝐔𝐬𝐞𝐫 𝐑𝐞𝐥𝐚𝐭𝐞𝐝 𝐀𝐏𝐈.. (𝑵𝑬𝑾) || 𝐀𝐝𝐦𝐢𝐧 𝐏𝐚𝐧𝐧𝐞𝐥 & 𝐔𝐬𝐞𝐫 𝐑𝐞𝐥𝐚𝐭𝐞𝐝 𝐀𝐏𝐈.. (𝑵𝑬𝑾) || 𝐀𝐝𝐦𝐢𝐧 𝐏𝐚𝐧𝐧𝐞𝐥 & 𝐔𝐬𝐞𝐫 𝐑𝐞𝐥𝐚𝐭𝐞𝐝 𝐀𝐏𝐈.. (𝑵𝑬𝑾) || 𝐀𝐝𝐦𝐢𝐧 𝐏𝐚𝐧𝐧𝐞𝐥 & 𝐔𝐬𝐞𝐫 𝐑𝐞𝐥𝐚𝐭𝐞𝐝 𝐀𝐏𝐈.. (𝑵𝑬𝑾)
// //-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
//                        .then(() => {
//                            const user_secret_info = {name , email , password , img_url}
//                             fetch("https://summer-camp-server-zeta.vercel.app/user_data",
//                             {
//                                 method: "POST",//-----------------------------------
//                                 headers: { //---------------------------------------
//                                     "Content-Type": "application/json",
//                                 },
//                                 body: JSON.stringify(user_secret_info),
//                             }
//                         )
//                             .then(res => res.json())
//                             .then(user_secret_info => {
//                                 console.log(user_secret_info);
//                                 if (user_secret_info.insertedId) {
//                                     Swal.fire({
//                                         title: 'success',
//                                         text: 'Photo has been Uploded successfully!',
//                                         icon: 'success',
//                                         confirmButtonText: '🥰K',
//                                       })
//                                     //   navigate('/')
//                                 }
//                             })
//                         })
       
//                     })
// //-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// //𝐀𝐝𝐦𝐢𝐧 𝐏𝐚𝐧𝐧𝐞𝐥 & 𝐔𝐬𝐞𝐫 𝐑𝐞𝐥𝐚𝐭𝐞𝐝 𝐀𝐏𝐈.. (𝑵𝑬𝑾) || 𝐀𝐝𝐦𝐢𝐧 𝐏𝐚𝐧𝐧𝐞𝐥 & 𝐔𝐬𝐞𝐫 𝐑𝐞𝐥𝐚𝐭𝐞𝐝 𝐀𝐏𝐈.. (𝑵𝑬𝑾) || 𝐀𝐝𝐦𝐢𝐧 𝐏𝐚𝐧𝐧𝐞𝐥 & 𝐔𝐬𝐞𝐫 𝐑𝐞𝐥𝐚𝐭𝐞𝐝 𝐀𝐏𝐈.. (𝑵𝑬𝑾) || 𝐀𝐝𝐦𝐢𝐧 𝐏𝐚𝐧𝐧𝐞𝐥 & 𝐔𝐬𝐞𝐫 𝐑𝐞𝐥𝐚𝐭𝐞𝐝 𝐀𝐏𝐈.. (𝑵𝑬𝑾) || 𝐀𝐝𝐦𝐢𝐧 𝐏𝐚𝐧𝐧𝐞𝐥 & 𝐔𝐬𝐞𝐫 𝐑𝐞𝐥𝐚𝐭𝐞𝐝 𝐀𝐏𝐈.. (𝑵𝑬𝑾)
// //-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
                          
                   
//                    .catch((error) => {
//                        //eslint-disable-next-line
//                        const errorCode = error.code;
//                        const errorMessage = error.message;
//                        set_error_Message(errorMessage)
//                        // ..
//                    });
//                })
//                .catch(err => console.log(err.message))
//            //Friebase code end-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// // console.log(name , email , password);
//         Full_Form.reset();
//     }
    return (
       <form >
         <div>
            <div className=" text-center">
                <SectionTitle text={"our Support"} number={""} />
            </div>
            {/* <div className=' mx-auto pt-3'>
                <p className='md:text-[.94em] text-[.85em] font-semibold'>Profile </p>
                <p className='pt-1 md:pt-2'><input name='image' id="image" type='file' accept='image/*' className=" rounded-md bg-red-500 bg-opacity-5 border border-[#c32629] w-full py-2 md:py-[12px] pl-1 md:pl-2 text-[.65em] md:text-[.85em]" /></p>
            </div> */}
            {/* <p onClick={handleClick} className='pt-1 md:pt-2'><input type="submit" value="Sign In" className={`${isScaled ? 'scale-90' : ''}  bg-gradient-to-r from-[#c32629] to-[#e5b235]  duration-300  rounded-md cursor-grab w-full py-2 md:py-[9px] pl-1 md:pl-2 text-[.65em] font-bold text-yellow-50 md:text-[1.3em] `} /></p> */}

            <div className="mt-[1em] space-y-8 lg:space-y-20 lg:mt-[3em] text-center md:text-left">
                {services.map((service, index) => (
                    <ServiceCard
                        key={service.title}
                        order={index + 1}
                        service={service} />
                ))}
            </div>
        </div>
       </form>
    )
}

export default ServicesSeo
