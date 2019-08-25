import { Action } from './action';
import { User } from './user';

export interface Message {
  user?: User;
  action?: Action;
  date?: Date;
  text?: string;
  files?: any[];
  type?: string;
  reply?: boolean;
  quote?: string;
}
