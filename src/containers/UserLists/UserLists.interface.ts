import {
  ListsAlcohols,
} from '../../@types/alcohol.d';

export interface IUserListsView {
  lists: ListsAlcohols;
  setLimit: () => void;
  isOpentag: boolean;
  handleOpenTag: (open: boolean) => void;
  createTag: (tagName: string) => void;
  isOpenRemovetag: boolean;
  handleOpenRemoveTag: (open: boolean) => void;
  removeTag: () => void;
}
export interface IUserListsLogic {
  lists: ListsAlcohols;
  setLimit: () => void;
  removeTag: () => void;
  createTag: (tagName: string) => void;
}
