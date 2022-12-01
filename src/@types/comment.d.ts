import { IPageInfo } from './pagination.d';

export interface IComment {
  "review": string,
  "rating": number,
  "id": string,
  "username": string,
  "date": string,
  "alcohol_id": string,
  "helpful_count": number,
  "helpful": boolean
}

export interface CommentsData {
  my_review: IComment | null,
  page_info: IPageInfo,
  reviews: IComment[] | []

}