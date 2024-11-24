import { CheckCircle2 } from "lucide-react";
import { checklistItems } from '../../../lib/constants/indexConstants';

const Workflow = () => {
  return (
    <div className="mt-[150px]">
      <h2 className="mb-5 text-3xl sm:text-5xl lg:text-6xl text-center mt-6 tracking-wide">
        Pourquoi nous{" "}
        <span className=" mb-5 bg-gradient-to-r from-blue-500 to-primary text-transparent bg-clip-text">
          Choisir ?
        </span>
      </h2>
      <div className="flex flex-wrap justify-center">
        <div className="p-2 w-full rounded-full lg:w-1/2">
          <img src='/herosection.jpg' alt="Coding" />
        </div>
        <div className="pt-12 w-full lg:w-1/2">
          {checklistItems.map((item, index) => (
            <div key={index} className="flex mb-12">
              <div className="text-blue-400 mx-6 bg-neutral-900 h-10 w-10 p-2 justify-center items-center rounded-full">
                <CheckCircle2 />
              </div>
              <div>
                <h5 className="mt-1 mb-2 text-xl">{item.title}</h5>
                <p className="text-md text-neutral-500">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Workflow;