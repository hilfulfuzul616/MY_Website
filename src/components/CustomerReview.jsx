import reviewer_5 from "../assets/Reviewer_IMG/rev_5.jfif";
import reviewer_4 from "../assets/Reviewer_IMG/rev_4.jfif";
import reviewer_3 from "../assets/Reviewer_IMG/rev_3.jfif";
import reviewer_1 from "../assets/Reviewer_IMG/rev_1.jfif";
import reviewer_2 from "../assets/Reviewer_IMG/rev_2.jfif";
const CustomerReview = () => {
  return (
    <div className="my-container  flex gap-6 flex-col sm:flex-row">
      {/* LEFT SIDE  */}
      <div className="space-y-4 flex-1 text-center sm:text-left ">
        <h2 className="text-[36px] sm:text-[45px] md:text-[50px] font-semibold leading-tight text-navBg">
          Our customers love what we do
        </h2>
        <h4 className="text-lg font-medium text-zinc-800">
          Transform your idea into reality with finsweet
        </h4>
        <p className="text-p-text md:max-w-[80%]  w-full">
        Customer reviews provide feedback and opinions from customers about a product or service, aiding potential buyers and enhancing a business's credibility
        </p>

        <div className="space-y-1">
          <div className="flex items-center justify-center md:justify-start gap-2">
            <img className="w-[3.2em] h-[3.2em] rounded-full border-2 border-teal-700" src={reviewer_5} alt="reviewer" />
            <img className="w-[3.2em] h-[3.2em] rounded-full border-2 border-teal-700" src={reviewer_4} alt="reviewer" />
            <img className="w-[3.2em] h-[3.2em] rounded-full border-2 border-teal-700" src={reviewer_3} alt="reviewer" />
            <img className="w-[3.2em] h-[3.2em] rounded-full border-2 border-teal-700" src={reviewer_1} alt="reviewer" />
          </div>

          <p className="text-sm">
            <strong className="text-base">25+</strong> customer reviews
          </p>
        </div>
      </div>

      {/* RIGHT SIDE  */}
      <div className="space-y-6 bg-white p-4 flex-1 h-max rounded-md shadow-sm">
        <p className="text-2xl sm:text-3xl font-semibold tracking-tight">
        I am thoroughly impressed with the exceptional web development work done by this team. The team's work is top-notch, and they delivered a user-friendly and visually appealing website. Highly recommended
        </p>

        <div className="flex  items-center gap-2">
          <img className="w-[3.2em] h-[3.2em] rounded-full border-2 border-teal-700"  src={reviewer_2} alt="reviewer" />
          <div className="leading-5 ">
            <h4 className="font-medium">Enamul Haque</h4>
            <h4>ERP Client</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerReview;
