import { ChevronDownIcon, StarIcon } from "@heroicons/react/outline";
import { DotsCircleHorizontalIcon } from "@heroicons/react/solid";

const RepositoryCard = ({ repoDetail }) => {
  // const lastUpdatedDate = sub(new Date(repoDetail.updated_at));
  // console.log(lastUpdatedDate, "lkjh");
  return (
    <div className="flex justify-between py-6 md:ml-4 items-center border-b">
      <div>
        <p className="text-[#0969da] font-bold ">
          {repoDetail.name}
          <span className=" border ml-1 px-2 py-[.15rem] text-[.75rem] text-[#24292f] rounded-full">
            {repoDetail.private ? "Private" : "Public"}
          </span>
        </p>
        <div className="flex mt-3 text-[#24282f] text-[.85rem]">
          <DotsCircleHorizontalIcon
            className="mx-1"
            color="yellow"
            width={18}
          />{" "}
          <span>{repoDetail.language}</span>
          <span className="ml-3"> updated on {repoDetail.updated_at} </span>
        </div>
      </div>
      <div>
        <div className="flex items-center bg-slate-600 px-2 rounded bg-opacity-10">
          <span className="flex items-center border-r border-r-[#9da4ad] pr-1 text-[#24292f] ">
            <StarIcon
              width={15}
              className="mx-[.13rem] rounded-tl rounded-bl"
            />{" "}
            Star
          </span>
          <ChevronDownIcon
            className="ml-2 -mr-1 h-4 w-4  text-violet-400 hover:text-violet-100"
            aria-hidden="true"
          />
          {/*   */}
        </div>
        <div className="hidden md:block mt-8 h-1 bg-green-400 w-22"></div>
      </div>
    </div>
  );
};

export default RepositoryCard;
