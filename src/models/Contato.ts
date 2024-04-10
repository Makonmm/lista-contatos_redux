import * as enums from '../utils/enums/Contato'

class Contato {
  nome: string
  telefone: string
  email: string
  local: enums.Local
  grau: enums.Grau
  id: number

  constructor(
    nome: string,
    telefone: string,
    email: string,
    local: enums.Local,
    grau: enums.Grau,
    id: number
  ) {
    this.nome = nome
    this.telefone = telefone
    this.email = email
    this.local = local
    this.grau = grau
    this.id = id
  }
}

export default Contato
