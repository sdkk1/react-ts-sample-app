declare module 'sampleapp' {
  export type UserListItem = {
    id: number
    userId: string
    name: string
    roleType: number
    lang: string | null
    mailAddress: string
  }

  export type TableHeader = {
    text: string
    width: string
    fontSize: string
  }
}
