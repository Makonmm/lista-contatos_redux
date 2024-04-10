import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { BotaoSalvar, MainContainer, Titulo } from '../../styles'
import { Campo } from '../../styles'
import { Form, Opcoes, Opcao } from './styles'

import * as enums from '../../utils/enums/Contato'
import { cadastrar } from '../../store/reducers/contatos'

const Formulario = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [tel, setTel] = useState('')
  const [local, setLocal] = useState(enums.Local.FACULDADE)
  const [grau, setGrau] = useState(enums.Grau.COLEGA)

  const cadastrarContato = (evento: FormEvent) => {
    evento.preventDefault()

    const id = Math.floor(Math.random() * 1000)
    const novoContato = {
      id,
      nome,
      email,
      telefone: tel,
      local,
      grau
    }

    dispatch(cadastrar(novoContato))
    navigate('/')

    setNome('')
    setEmail('')
    setTel('')
    setLocal(enums.Local.FACULDADE)
    setGrau(enums.Grau.COLEGA)
  }

  return (
    <MainContainer>
      <Titulo>Novo Contato</Titulo>
      <Form onSubmit={cadastrarContato}>
        <Campo
          value={nome}
          onChange={(evento) => setNome(evento.target.value)}
          type="text"
          placeholder="Nome"
        />
        <Campo
          value={email}
          onChange={(evento) => setEmail(evento.target.value)}
          type="email"
          placeholder="E-mail"
        />
        <Campo
          value={tel}
          onChange={(evento) => setTel(evento.target.value)}
          type="tel"
          placeholder="Telefone"
        />
        <Opcoes>
          <p>Local e grau de proximidade:</p>
          {Object.values(enums.Local).map((localItem) => (
            <Opcao key={localItem}>
              <input
                type="radio"
                value={localItem}
                checked={local === localItem}
                onChange={() => setLocal(localItem as enums.Local)}
              />
              <label htmlFor={localItem}>{localItem}</label>
            </Opcao>
          ))}
          {Object.values(enums.Grau).map((grauItem) => (
            <Opcao key={grauItem}>
              <input
                type="radio"
                value={grauItem}
                checked={grau === grauItem}
                onChange={() => setGrau(grauItem as enums.Grau)}
              />
              <label htmlFor={grauItem}>{grauItem}</label>
            </Opcao>
          ))}
        </Opcoes>
        <BotaoSalvar type="submit">Cadastrar contato</BotaoSalvar>
      </Form>
    </MainContainer>
  )
}

export default Formulario
