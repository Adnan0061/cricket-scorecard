export interface Team {
  name: string;
  flagUrl: string;
}

export interface Match {
  match_id: number;
  title: string;
  short_title: string;
  subtitle: string;
  match_number: string;
  format: number;
  format_str: string;
  status: number;
  status_str: string;
  status_note: string;
  verified: string;
  pre_squad: string;
  odds_available: string;
  game_state: number;
  game_state_str: string;
  domestic: string;
  competition: {
    cid: number;
    title: string;
    abbr: string;
    type: string;
    category: string;
    match_format: string;
    season: string;
    status: string;
    datestart: string;
    dateend: string;
    country: string;
    total_matches: string;
    total_rounds: string;
    total_teams: string;
  };
  teama: {
    team_id: number;
    name: string;
    short_name: string;
    logo_url: string;
    scores_full?: string;
  };
  teamb: {
    team_id: number;
    name: string;
    short_name: string;
    logo_url: string;
    scores_full?: string;
  };
  date_start: string;
  date_end: string;
  timestamp_start: number;
  timestamp_end: number;
  date_start_ist: string;
  date_end_ist: string;
  venue: {
    venue_id: string;
    name: string;
    location: string;
    country: string;
    timezone: string;
  };
  umpires: string;
  referee: string;
  equation: string;
  live: string;
  result: string;
  result_type: string;
  win_margin: string;
  winning_team_id: number;
  commentary: number;
  wagon: number;
  latest_inning_number: number;
  presquad_time: string;
  verify_time: string;
  match_dls_affected: string;
  weather: {
    weather: string;
    weather_desc: string;
    temp: number;
    humidity: number;
    visibility: number;
    wind_speed: string;
    clouds: number;
  };
  pitch: {
    pitch_condition: string;
    batting_condition: string;
    pace_bowling_condition: string;
    spine_bowling_condition: string;
  };
  toss: {
    winner: number;
    decision: number;
  };
}

export interface MatchResponse {
  status: string;
  response: {
    items: Match[];
    total_items: number;
    total_pages: number;
  };
  etag: string;
  modified: string;
  datetime: string;
  api_version: string;
}
