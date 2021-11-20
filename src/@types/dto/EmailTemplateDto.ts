export interface EmailTemplateDTO {
  id?: number;
  subject: string;
  body: string;
}

export interface UpdateEmailTemplateDTO {
  subject?: string;
  body?: string;
}
