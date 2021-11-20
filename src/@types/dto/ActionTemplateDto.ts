export interface ActionTemplateDTO {
  id?: number;
  subject: string;
  body: string;
}

export interface UpdateActionTemplateDTO {
  subject?: string;
  body?: string;
}
