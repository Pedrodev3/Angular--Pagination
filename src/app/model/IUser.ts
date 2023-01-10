export interface IUser {
  userId?: number,
  id?: number,
  title: string,
  body: string,
}

export interface Itens<T> {
  itens: T[];
}
