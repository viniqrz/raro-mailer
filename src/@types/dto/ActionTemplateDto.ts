export interface ActionTemplateDTO {
  id?: number;
  name: string;
  subject: string;
  body: string;
}

export interface UpdateActionTemplateDTO {
  name?: string;
  subject?: string;
  body?: string;
}
