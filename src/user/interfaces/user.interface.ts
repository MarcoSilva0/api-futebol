import { Workspace } from '@prisma/client';

export interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  permission: string;
  documentIdentifier: string;
  phone: string;
  picture: string;
  Workspace?: Workspace;
}
