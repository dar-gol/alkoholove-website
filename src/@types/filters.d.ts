export type IFilterValues = {
  value: string;
  selected: boolean;
}[];
export type IFetchFilterValues = string[];

export interface IFilter {
  name: string;
  display_name: string;
  values: IFilterValues;
}

export interface IFetchFilter {
  name: string;
  display_name: string;
  values: IFetchFilterValues;
}

export interface ICategoryFilter {
  name: string;
  display_name: string;
  value: string;
  filters: IFilter[];
}

export interface IFetchCategoryFilter {
  name: string;
  display_name: string;
  value: string;
  filters: IFetchFilter[];
}
