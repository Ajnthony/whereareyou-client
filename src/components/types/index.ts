export interface LastSeenObj {
  datetime: string;
  location: string;
}

export interface TagObj {
  type: string;
  label: string;
}

export interface Animal {
  id: number;
  owner: number;
  name: string;
  size: string;
  last_seen: LastSeenObj;
  gender: string;
  description: string;
  species: string;
  is_found: boolean;
  image: string;
  tags: TagObj[];
  date_created: string;
  date_updated: string;
  views: number;
  likes: number;
}

export interface Address {
  address_line_1: string;
  address_line_2: string;
  state: string;
  country: string;
  zip_code: string;
}

export interface User {
  id: number;
  pet?: number[];
  first_name: string;
  last_name: string;
  display_name: string;
  email: string;
  profile_url: string;
  bio: string;
  address?: Address;
  is_staff?: boolean;
  is_active: boolean;
  is_admin: boolean;
  is_moderator: boolean;
}

export interface PostDetails {
  is_pinned: boolean;
  is_flagged: boolean;
  is_deleted: boolean;
  likes: number;
}

export interface Post {
  id: number;
  title: string;
  content: string;
  user: number;
  date_created: string;
  date_updated: string;
  details: PostDetails;
  category: number;
  views: number;
}

export interface CommentDetail {
  is_flagged: boolean;
  is_deleted: boolean;
  likes: number;
}

export interface Comment {
  id: number;
  post: number;
  user: number;
  content: string;
  date_created: string;
  date_updated: string;
  details: CommentDetail;
}

export interface Category {
  id: number;
  name: string;
  color?: string;
}
