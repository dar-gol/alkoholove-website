import {IdentifyTags} from '../../@types/Lists';
import {IUser} from '../../@types/user';

export interface IDataView {
  user: IUser;
}
export interface IListsView {
  tags: IdentifyTags;
  user: IUser;
  createTag: (tagName: string) => void;
}
export interface ISettingsView {
  sendError: (description: string) => void;
}
