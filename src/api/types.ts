export interface AuthUserResponse {
  access_token: string;
  refresh_token: string;
  ttl: number;
  expires_in: number;
  token_type: string;
  reg_user_resumes_count: number;
}

export interface VacanciesRequestFilterData {
  keyword?: string;
  payment_from?: number;
  payment_to?: number;
  page?: number;
  count?: number;
}

export interface VacancyResponse {
  objects: Vacancy[];
  total: number;
}

export interface Vacancy {
  id: number;
  profession: string;
  firm_name: string;
  town: { title: string };
  type_of_work: { title: string };
  payment_to: number;
  payment_from: number;
  currency: string;
}

export interface Profession {
  title: string;
  title_trimmed: string;
  key: number;
}
