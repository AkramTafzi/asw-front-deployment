import { Comments } from './Comments';
import { User } from './User';

export interface News {
  itemId: number;
  title: string;
  page_: string;
  points: number;
  username: User;
  datePublished: string;
  link: string;
  text: string;
  type: string;
  comments: Comments[];
  likedBy: User[];
}
