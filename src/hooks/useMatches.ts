import { useQuery } from "@tanstack/react-query";
import { matchService } from "../services/matchService";
import { MatchResponse } from "../types/match";

export const useMatches = () => {
  return useQuery<MatchResponse, Error>({
    queryKey: ["matches"],
    queryFn: matchService.getMatches,
  });
};
