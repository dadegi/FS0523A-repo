export interface User {
    id: number,
    email: string,
    nome: string,
    ruolo: 'admin' | 'user'
}
