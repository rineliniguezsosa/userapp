import { GridColDef } from "@mui/x-data-grid";
import React from "react"
export interface MuiPaperProps {
    height:number,
    width:string,
    children: React.ReactNode
}

export type MuiMenuItemProps = Omit<MuiPaperProps,"height"|"width"> & {
    value:string
}

export interface MuiTextFieldProps {
    id:string,
    label:string,
    name?:string,
    value?:string,
    onChange: (e:React.ChangeEvent<HTMLInputElement |  HTMLSelectElement | HTMLTextAreaElement>)=> void,
    children?: React.ReactNode,
    select?:boolean
    type?:string
}
export interface MuiFormProps {
    children:React.ReactNode,
    onSubmit:()=> void,
    title:string
}
export interface MuiModalProps {
    open:boolean,
    onClose:()=> void,
    children:React.ReactNode
}
export interface MuiButtonProps {
    loading?:boolean,
    variant: 'text' | 'contained' | 'outlined',
    sizes: 'small'|'large'|'medium',
    color: 'success' | 'error',
    onClick?:()=> void,
    children: React.ReactNode,
    type?:'submit'|'button'|'reset'
}

export interface MuiDataTaBleProps {
    rows:UsuarioRow[],
    columns:GridColDef[],
    checkboxSelection:boolean
}

export interface UsuarioRow {
    id: number,
    _id: string,
    gender: string,
    name: string,
    streetNumber:string,
    streetName: string,
    streetCity: string,
    streetState: string,
    streetCountry: string,
    stretPostcode: string,
    email: string,
    nat: string,
}
export interface Usuario {
    gender:     string;
    name:       Name;
    location:   Location;
    email:      string;
    cell:       string;
    id:         ID;
    picture:    Picture;
    nat:        string;
    _id:        string;
}
export interface UsuarioRequest {
    results: Result[];
    info:    Info;
}

export interface Info {
    seed:    string;
    results: number;
    page:    number;
    version: string;
}

export interface Result {
    gender:     string;
    name:       Name;
    location:   Location;
    email:      string;
    login:      Login;
    dob:        Dob;
    registered: Dob;
    phone:      string;
    cell:       string;
    id:         ID;
    picture:    Picture;
    nat:        string;
}

export interface Dob {
    date: Date;
    age:  number;
}

export interface ID {
    name:  string;
    value: string;
}

export interface Location {
    street:      Street;
    city:        string;
    state:       string;
    country:     string;
    postcode:    number | string;
    coordinates: Coordinates;
    timezone:    Timezone;
}

export interface Coordinates {
    latitude:  string;
    longitude: string;
}

export interface Street {
    number: number;
    name:   string;
}

export interface Timezone {
    offset:      string;
    description: string;
}

export interface Login {
    uuid:     string;
    username: string;
    password: string;
    salt:     string;
    md5:      string;
    sha1:     string;
    sha256:   string;
}

export interface Name {
    title: string;
    first: string;
    last:  string;
}

export interface Picture {
    large:     string;
    medium:    string;
    thumbnail: string;
}