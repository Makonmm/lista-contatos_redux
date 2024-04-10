import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

import * as enums from '../../utils/enums/Contato'
import { Botao } from '../../styles'

type TagProps = {
  grau?: enums.Grau
  local?: enums.Local
  parametro: 'local' | 'grau'
}

function retornaCorDeFundo(props: TagProps): string {
  if (props.parametro === 'grau') {
    if (props.grau === enums.Grau.AMIGO) return variaveis.corAmigo
    if (props.grau === enums.Grau.COLEGA) return variaveis.corColega
    if (props.grau === enums.Grau.PARENTE) return variaveis.corParente
  } else {
    if (props.local === enums.Local.TRABALHO) return variaveis.corTrabalho
    if (props.local === enums.Local.FACULDADE) return variaveis.corFaculdade
  }

  return '#ccc'
}

export const Card = styled.div`
  background-color: #dfe4ea;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.3);
  padding: 16px;
  margin-bottom: 32px;
  width: 70%;
  border-radius: 16px;
  margin-top: 32px;
`

export const Nome = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 16px;
  dsiplay: block;
`

export const Tag = styled.span<TagProps>`
  padding: 4px 10px;
  font-size: 12px;
  font-weight: bold;
  color: #fff;
  background-color: ${(props) => retornaCorDeFundo(props)};
  border-radius: 10px;
  margin-right: 16px;
  display: inline-block;
`

export const Email = styled.input`
  color: #1e272e;
  font-size: 14px;
  line-height: 24px;
  font-family: 'Roboto Mono', monospace;

  width: 60%;
  margin-left: 40px;
  margin-top: 16px;
  margin-bottom: 16px;
  border: none;
  border-bottom: 2px solid black;
  margin-right: 24px;
`
export const Telefone = styled.input`
  color: #1e272e;
  font-size: 14px;
  line-height: 24px;
  font-family: 'Roboto Mono', monospace;
  width: 12%;
  align-items: center;
  margin-top: 16px;
  margin-bottom: 16px;
  border: none;
  border-bottom: 2px solid black;
`

export const BarraAcoes = styled.div`
  border-top: 2px solid rgba(0, 0, 0, 0.2);
  padding-top: 16px;
`

export const BotaoCancelarRemover = styled(Botao)`
  background-color: #ff3f34;
`
