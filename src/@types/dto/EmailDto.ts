export interface EmailDTO {
  id?: number;
  subject: string;
  body: string;
  address: string;
  sendDate: Date;
  actionId?: number;
}

export interface UpdateEmailDTO {
  subject?: string;
  body?: string;
  address?: string;
  sendDate?: Date;
}

export interface EmailData {
  to: string;
  subject: string;
  body: string;
}
