import styled, { createGlobalStyle } from 'styled-components'

const EstiloGlobal = createGlobalStyle`
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: "Roboto", sans-serif;
    list-style: none;

    body {
    background-color: #575fcf;
  }

}`

export const Container = styled.div`
  display: grid;
  grid-template-columns: 224px auto;
`

export const MainContainer = styled.main`
  padding: 0 40px;
  height: 100vh;
  overflow-y: scroll;
`

export const Titulo = styled.h2`
  display: block;
  margin-top: 40px;
  margin-bottom: 40px;
  font-size: 22px;
  font-weight: bold;
  border-bottom: 1px solid black;
`
export const Campo = styled.input`
  padding: 10px;
  font-size: 14px;
  background-color: #dfe6e9;
  border-radius: 10px;
  font-weight: bold;
  color: #2d3436;
  border-color: #2d3436;
  width: 100%;
`
export const Botao = styled.button`
  font-size: 12px;
  font-weight: bold;
  color: #fff;
  padding: 8px 12px;
  border: none;
  cursor: pointer;
  background-color: #2f3640;
  border-radius: 10px;
  margin-right: 8px;
`
export const BotaoSalvar = styled(Botao)`
  background-color: #0be881;
`

export default EstiloGlobal
