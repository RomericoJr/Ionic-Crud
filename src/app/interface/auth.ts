export interface Auth {

}

export interface login{
  email: string
  password: string
}

export interface register{
  name: string
  email: string
  password: string
}

export interface respuestaLogin{
  access_token:string
message:string
name : string
typeToken: string
user: [
  {

    created_at:string
    email: string
    email_verified_at: boolean
    id: number
    name: string
    rol_id: number
    updated_at: string
    }
]
}
