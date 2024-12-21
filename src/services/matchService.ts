import axios, { AxiosError } from "axios";
import { Match, MatchResponse } from "../types/match";
import { ApiError, CustomError } from "../types/api";
import { config } from "../config/env";

const handleError = (error: AxiosError<ApiError>) => {
  if (error.response) {
    throw new CustomError({
      message: error.response.data.message || "An error occurred",
      code: error.response.data.code || "UNKNOWN_ERROR",
      status: error.response.status,
    });
  }
  throw new CustomError({
    message: error.message,
    code: "NETWORK_ERROR",
    status: 500,
  });
};

export const matchService = {
  async getMatches(): Promise<MatchResponse> {
    try {
      const response = await axios.get<MatchResponse>(
        `${config.apiUrl}/matches?token=${config.apiToken}`
      );
      return response.data;
    } catch (error) {
      return handleError(error as AxiosError<ApiError>);
    }
  },

  async getMatchById(id: number): Promise<Match> {
    try {
      const response = await axios.get<Match>(`${config.apiUrl}/matches/${id}`);
      return response.data;
    } catch (error) {
      return handleError(error as AxiosError<ApiError>);
    }
  },
};
