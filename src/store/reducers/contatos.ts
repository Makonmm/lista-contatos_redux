import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Contato from '../../models/Contato'

import * as enums from '../../utils/enums/Contato'

type ContatosState = {
  itens: Contato[]
}

const initialState: ContatosState = {
  itens: [
    {
      id: 1,
      email: 'ronald@outlook.com',
      telefone: '(34) 2625-5644',
      local: enums.Local.FACULDADE,
      grau: enums.Grau.AMIGO,
      nome: 'Ronald Roberto'
    },
    {
      id: 2,
      email: 'josue@outlook.com',
      telefone: '(74) 3842-9888',
      local: enums.Local.FACULDADE,
      grau: enums.Grau.COLEGA,
      nome: 'Lucas Alberto'
    },
    {
      id: 3,
      email: 'marcos@outlook.com',
      telefone: '(67) 2737-3910',
      local: enums.Local.TRABALHO,
      grau: enums.Grau.PARENTE,
      nome: 'Marcos Souza'
    }
  ]
}

const contatosSlice = createSlice({
  name: 'contatos',
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter(
        (contato) => contato.id !== action.payload
      )
    },
    editar: (state, action: PayloadAction<Contato>) => {
      const indexDoContato = state.itens.findIndex(
        (c) => c.id === action.payload.id
      )

      if (indexDoContato >= 0) {
        state.itens[indexDoContato] = action.payload
      }
    },
    cadastrar: (state, action: PayloadAction<Omit<Contato, 'id'>>) => {
      const contatoJaExiste = state.itens.find(
        (contato) =>
          contato.nome.toLowerCase() === action.payload.nome.toLowerCase()
      )
      if (contatoJaExiste) {
        alert('Já existe um contato com esse nome')
      } else {
        const ultimoContato = state.itens[state.itens.length - 1]
        const contatoNovo = {
          ...action.payload,
          id: ultimoContato ? ultimoContato.id + 1 : 1
        }
        state.itens.push(contatoNovo)
      }
    }
  }
})

export const { remover, editar, cadastrar } = contatosSlice.actions

export default contatosSlice.reducer
