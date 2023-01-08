import {IdentifyTags} from '../../@types/Lists';
import {IUser} from '../../@types/user';

export type TabType = 'data' | 'lists' | 'settings';

export interface IProfileView {
  handleTab: (tab: TabType) => void;
  sendError: (description: string) => void;
  deleteAccount: () => void;
  createTag: (tagName: string) => void;
  tab: TabType;
  user: IUser;
  tags: IdentifyTags;
}

export interface IProfileLogic {
  sendError: (description: string) => void;
  deleteAccount: () => void;
  createTag: (tagName: string) => void;
  user: IUser;
  tags: IdentifyTags;
}
