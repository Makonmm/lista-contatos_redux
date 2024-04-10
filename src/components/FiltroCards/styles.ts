import styled from 'styled-components'

type Props = {
  ativo: boolean
}

export const Card = styled.div<Props>`
  padding: 8px;
  border: 1px solid ${(props) => (props.ativo ? '#3867d6' : '#2d3436')};
  background-color: ${(props) => (props.ativo ? '#4b6584' : '#dfe6e9')};
  color: ${(props) => (props.ativo ? '#d1d8e0' : '#2d3436')};
  border-radius: 10px;
  cursor: pointer;
`

export const Contador = styled.span`
  font-weight: bold;
  font-size: 22px;

  display: block;
`

export const Label = styled.div`
  font-size: 16px;
`
