export interface SchemeDTO {
  name: string;
  actionTemplatesIds: number[];
}

export interface UpdateSchemeDTO {
  name?: string;
  actionTemplatesIds?: number[];
}
