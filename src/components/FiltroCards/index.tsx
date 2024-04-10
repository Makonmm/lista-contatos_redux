import { useDispatch, useSelector } from 'react-redux'
import * as S from './styles'
import { alterarFiltro } from '../../store/reducers/filtro'
import * as enums from '../../utils/enums/Contato'
import { RootReducer } from '../../store'

export type Props = {
  legenda: string
  criterio: 'local' | 'grau' | 'Todos'
  valor?: enums.Grau | enums.Local
}

const FiltroCards = ({ legenda, criterio, valor }: Props) => {
  const dispatch = useDispatch()
  const { filtro, contatos } = useSelector((state: RootReducer) => state)
  const verificaEstaAtivo = () => {
    const mesmoCriterio = filtro.criterio === criterio
    const mesmoValor = filtro.valor === valor

    return mesmoCriterio && mesmoValor
  }

  const contaContatos = () => {
    if (criterio === 'Todos') return contatos.itens.length
    if (criterio === 'local') {
      return contatos.itens.filter((item) => item.local === valor).length
    }
    if (criterio === 'grau') {
      return contatos.itens.filter((item) => item.grau === valor).length
    }
  }

  const filtrar = () => {
    dispatch(
      alterarFiltro({
        criterio,
        valor
      })
    )
  }

  const contador = contaContatos()
  const ativo = verificaEstaAtivo()

  return (
    <S.Card ativo={ativo} onClick={filtrar}>
      <S.Contador>{contador}</S.Contador>
      <S.Label>{legenda}</S.Label>
    </S.Card>
  )
}

export default FiltroCards
