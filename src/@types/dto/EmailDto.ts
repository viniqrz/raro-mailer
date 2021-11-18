export type EmailDTO = {
  id?: number;
  subject: string;
  body: string;
  address: string;
  sendDate: Date;
  actionId?: number;
};

export type UpdateEmailDTO = {
  id: number;
  subject?: string;
  body?: string;
  address?: string;
  sendDate?: Date;
};

export type EmailData = {
  to: string;
  subject: string;
  body: string;
};
