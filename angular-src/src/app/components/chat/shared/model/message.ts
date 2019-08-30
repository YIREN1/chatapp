import { Action } from './action';
import { User } from './user';

export interface Message {
  user?: User;
  action?: Action;
  date?: number;
  text?: string;
  files?: any[];
  type?: string;
  reply?: boolean;
  quote?: string;
  channelId?: string;
}
