import {IdentifyTags} from '../../@types/Lists.d';
import {IUser} from '../../@types/user';

export type TabType = 'data' | 'lists' | 'settings';

export interface IProfilView {
  handleTab: (tab: TabType) => void;
  sendError: (description: string) => void;
  tab: TabType;
  user: IUser;
  tags: IdentifyTags;
}

export interface IProfilLogic {
  sendError: (description: string) => void;
  user: IUser;
  tags: IdentifyTags;
}
