import {IdentifyTags} from '../../@types/Lists';
import {IUser} from '../../@types/user';

export interface IDataView {
  user: IUser;
}
export interface IListsView {
  tags: IdentifyTags;
  user: IUser;
}
export interface ISettingsView {
  sendError: (description: string) => void;
}
