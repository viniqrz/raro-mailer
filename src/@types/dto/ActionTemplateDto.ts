export interface ActionTemplateDTO {
  id?: number;
  name: string;
  subject: string;
  body: string;
  day: number;
}

export interface UpdateActionTemplateDTO {
  name?: string;
  subject?: string;
  body?: string;
  day?: number;
}
