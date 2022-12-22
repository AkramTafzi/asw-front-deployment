import * as internal from 'stream';

export interface User {
  username: string;
  created: Date;
  karma: number;
  about: string;
  maxvisit: number;
  minaway: number;
  delay: number;
  showdead: boolean;
  noprocrast: boolean;
}
