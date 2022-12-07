export interface IdentifyTag {
  id: string;
  tag_name: string;
}

export interface IdentifyTags {
  user_tags: IdentifyTag[];
}

interface IModTag {
  alcohol_id: string;
  tag: string;
}

export interface AlcoholLists {
  is_in_favourites: boolean;
  is_in_wishlist: boolean;
  alcohol_tags: string[];
}
