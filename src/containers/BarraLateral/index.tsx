import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import FiltroCards from '../../components/FiltroCards'
import * as S from './styles'
import { RootReducer } from '../../store'
import { alteraTermo } from '../../store/reducers/filtro'
import * as enums from '../../utils/enums/Contato'

import { Botao, Campo } from '../../styles'

type Props = {
  mostrarFiltros: boolean
}

const BarraLateral = ({ mostrarFiltros }: Props) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { termo } = useSelector((state: RootReducer) => state.filtro)
  return (
    <S.Aside>
      <div>
        {mostrarFiltros ? (
          <>
            <Campo
              type="text"
              placeholder="Buscar contato"
              value={termo}
              onChange={(evento) => dispatch(alteraTermo(evento.target.value))}
            />
            <S.Filtros>
              <FiltroCards
                valor={enums.Local.TRABALHO}
                criterio="local"
                legenda="Trabalho"
              />
              <FiltroCards
                valor={enums.Local.FACULDADE}
                criterio="local"
                legenda="Faculdade"
              />
              <FiltroCards
                valor={enums.Grau.PARENTE}
                criterio="grau"
                legenda="Parente"
              />
              <FiltroCards
                valor={enums.Grau.AMIGO}
                criterio="grau"
                legenda="Amigo"
              />
              <FiltroCards
                valor={enums.Grau.COLEGA}
                criterio="grau"
                legenda="Colega"
              />
              <FiltroCards criterio="Todos" legenda="Todos" />
            </S.Filtros>
          </>
        ) : (
          <Botao onClick={() => navigate('/')} type="button">
            Voltar à lista de contatos
          </Botao>
        )}
      </div>
    </S.Aside>
  )
}
export default BarraLateral
