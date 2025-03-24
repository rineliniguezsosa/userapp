export interface AllCountries {
    id:        number;
    name:      string;
    iso2:      string;
    iso3:      string;
    phonecode: string;
    capital:   string;
    currency:  string;
    native:    null | string;
    emoji:     string;
}

export type StateResponse = Omit<AllCountries,"iso3"|"phonecode"|"capital"|"currency"|"native"|"emoji"> 
