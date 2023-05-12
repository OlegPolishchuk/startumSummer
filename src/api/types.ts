export interface AuthUserResponse {
  access_token: string;
  refresh_token: string;
  ttl: number;
  expires_in: number;
  token_type: string;
  reg_user_resumes_count: number;
}

export interface VacanciesRequestFilterData {
  keyword: string;
  payment_from: number;
  payment_to: number;
}
