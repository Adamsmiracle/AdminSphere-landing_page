import { features } from "../constants";
import Customers from '../assets/Customers.png';
import Calender from '../assets/Calender.png'

const FeatureSection = () => {
  return (
    <div className="relative mt-20 border-b border-neutral-800 min-h-[800px]">
      <div className="text-center">
        <span className="bg-neutral-900 text-orange-500 rounded-full h-6 text-sm font-medium px-2 py-1 uppercase">
          Feature
        </span>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide">
          Easily manage{" "}
          <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
            your data
          </span>
        </h2>
      </div>
      <div className="flex justify-center flex-wrap mt-10 lg:mt-20">
          <div className="w-3/4 mt-20">
          <p className=" flex text-3xl font-bold pb-5 items-center w-auto justify-center">Manage Customer data easily</p>
          <img src={Customers}  className="rounded-lg mt-5"/>
          </div>
          <div className="w-3/4 mt-20 ">
          <p className=" flex text-3xl font-bold pb-5 items-center w-auto justify-center">Manage deadlines with Calender</p>
          <img src={Calender}  className=" rounded-lg mt-5"/>
          </div>
      </div>
    </div>
  );
};

export default FeatureSection;
