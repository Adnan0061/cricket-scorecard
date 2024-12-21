import { format } from "date-fns";
import { Match } from "../types/match";

interface MatchCardProps {
  match: Match;
}

const MatchCard: React.FC<MatchCardProps> = ({ match }: MatchCardProps) => {
  const {
    format_str,
    competition: { title, total_matches },
    match_number,
    date_start_ist,
    teama,
    teamb,
    result,
    status_note,
  } = match;

  return (
    <div className="bg-white p-4 border-[0.2px] border-gray-300">
      <div className="flex justify-between items-center mb-2">
        {/* mock api does not have status_note value for all matches */}
        <div className="text-sm text-gray-600">{`${title} - ${format_str} ${match_number} of ${total_matches} . ${status_note}`}</div>
        <div className="text-sm text-gray-600">
          {/* showing date in Bangladesh Standard Time format */}
          {format(
            new Date(new Date(date_start_ist).getTime() + 3600000 * 0.5),
            "yyyy-MM-dd"
          ) === format(new Date(), "yyyy-MM-dd")
            ? "Today"
            : format(
                new Date(new Date(date_start_ist).getTime() + 3600000 * 0.5),
                "yyyy-MM-dd"
              ) === format(new Date(Date.now() + 86400000), "yyyy-MM-dd")
            ? "Tomorrow"
            : format(
                new Date(new Date(date_start_ist).getTime() + 3600000 * 0.5),
                "EEE, MMM d"
              )}
        </div>
      </div>

      {/* Teams & Scores */}
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <img
            src={teama.logo_url}
            alt={teama.name}
            className="w-6 h-4 object-cover"
          />
          <span className="flex-1">{teama.name}</span>
          <span className="font-semibold text-gray-700">
            {/*in mock api no mactch has teams scores_full value so showing hardcoded data for visual representation */}
            {teama?.scores_full ?? "0/0 (0)"}{" "}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <img
            src={teamb.logo_url}
            alt={teamb.name}
            className="w-6 h-4 object-cover"
          />
          <span className="flex-1">{teamb.name}</span>
          <span className="font-semibold text-gray-700">
            {/*in mock api no mactch has teams scores_full value so showing hardcoded data for visual representation */}
            {teamb.scores_full ?? "0/0 (0)"}
          </span>
        </div>
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center mt-3">
        <div className="text-sm text-gray-500">
          {/* in mock api no match has result value so showing hardcoded data for visual representation */}
          {!!result ? result : "Result not yet available"}
        </div>
      </div>
    </div>
  );
};

export default MatchCard;
