import { useSelector } from 'react-redux'
import Contato from '../../components/Contato'
import { MainContainer } from '../../styles'

import { RootReducer } from '../../store'

const ListaDeContatos = () => {
  const { itens } = useSelector((state: RootReducer) => state.contatos)
  const { termo, criterio, valor } = useSelector(
    (state: RootReducer) => state.filtro
  )

  const filtraContatos = () => {
    let contatosFiltrados = itens
    if (termo !== undefined) {
      contatosFiltrados = contatosFiltrados.filter(
        (item) => item.nome.toLowerCase().search(termo.toLowerCase()) >= 0
      )
      if (criterio === 'local') {
        contatosFiltrados = contatosFiltrados.filter(
          (item) => item.local === valor
        )
      } else if (criterio === 'grau') {
        contatosFiltrados = contatosFiltrados.filter(
          (item) => item.grau === valor
        )
      }

      return contatosFiltrados
    } else {
      return itens
    }
  }
  const contatos = filtraContatos()

  return (
    <MainContainer>
      <ul>
        {contatos.map((c) => (
          <li key={c.nome}>
            <Contato
              id={c.id}
              nome={c.nome}
              email={c.email}
              telefone={c.telefone}
              local={c.local}
              grau={c.grau}
            />
          </li>
        ))}
      </ul>
    </MainContainer>
  )
}

export default ListaDeContatos
