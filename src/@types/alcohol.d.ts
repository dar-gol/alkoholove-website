import {IPageInfo} from './pagination.d';

export type IAroma = string;

export type IBarcode = string;

export type IRegion = string;

export type ICountry = string;

export type IFood = string;

export type ITaste = string;

export type IFinishes = string;

export type IIngredients = string;

export type IKeywords = string;

export type IAdditionalProperty = {
  name: string;
  display_name: string;
  value: number | string | string[] | number[];
};

export interface IAlcohol {
  name: string;
  kind: string;
  type: string;
  username: string | null;
  alcohol_by_volume: number;
  description: string;
  color: string;
  manufacturer: string;
  country: ICountry;
  region: IRegion;
  food: IFood[];
  finish: IFinishes[];
  aroma: IAroma[];
  taste: ITaste[];
  id: string;
  barcode: IBarcode[];
  keywords: IKeywords[];
  avg_rating: number;
  rate_count: number;
  rate_1_count: number;
  rate_2_count: number;
  rate_3_count: number;
  rate_4_count: number;
  rate_5_count: number;
  date: Date | null;
  rate_value: number;
  additional_properties: IAdditionalProperty[];
  searchDate?: string;
}

export type Alcohols = IAlcohol[];

export type AlcoholsObject = {
  alcohols: IAlcohol[] | null;
  page_info: IPageInfo;
};

export type StandardAlcohols = {
  type: 'standard';
  alcohols: IAlcohol[];
  page_info: IPageInfo;
};

export type HistoryAlcohols = {
  type: 'history';
  alcohols: {alcohol: IAlcohol; date: string}[];
  page_info: IPageInfo;
};

export type RatedAlcohols = {
  type: 'rated';
  reviews: {
    alcohol: IAlcohol;
    user_id: string;
    review: string;
    rating: number;
    id: string;
    username: string;
    date: string;
    alcohol_id: string;
    helpful_count: number;
    helpful: boolean;
  }[];
  page_info: IPageInfo;
};

export type RecommendationAlcohols = {
  type: 'recommendations';
  alcohols: IAlcohol[];
  page_info?: never;
};

export type ListsAlcohols =
  | StandardAlcohols
  | HistoryAlcohols
  | RatedAlcohols
  | RecommendationAlcohols;
