import { useMatches } from "../hooks/useMatches";
import MatchCard from "./MatchCard";
import { IoIosArrowDown } from "react-icons/io";

const MatchList: React.FC = () => {
  const { data, isLoading, error } = useMatches();
  const matches = data?.response.items;
  console.log("matches", matches);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[200px]">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-red-600 py-8">
        Error loading matches: {error.message}
      </div>
    );
  }
  if (!matches || matches.length === 0) {
    return (
      <div className="text-center text-gray-600 py-8">No matches available</div>
    );
  }

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border-y border-gray-300">
        {matches?.map((match) => (
          <MatchCard key={match.match_id} match={match} />
        ))}
      </div>
      <div className="flex justify-between items-center gap-4 p-6">
        <p className="text-gray-600">
          All times are in Bangladesh Standard Time
        </p>
        <p className="text-gray-600">Feedback</p>
      </div>
      <div className="flex flex-col justify-center items-center -mb-11">
        <button className="mx-autow-fit z-100 p-3 rounded-full bg-cyan-700 flex items-center justify-center">
          <IoIosArrowDown className="w-5 h-5 text-white" />
        </button>
        <p className=" text-gray-600">See more</p>
      </div>
    </div>
  );
};

export default MatchList;
