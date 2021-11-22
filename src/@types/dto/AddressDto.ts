export interface AddressDTO {
  street: string;
  district: string;
  number: number;
  city: string;
  state: string;
  country: string;
  cep: string;
}

export interface UpdateAddressDTO {
  street?: string;
  district?: string;
  number?: number;
  city?: string;
  state?: string;
  country?: string;
  cep?: string;
}
