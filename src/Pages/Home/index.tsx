import BotaoAdd from '../../components/BotaoAdicionar/Index'
import BarraLateral from '../../containers/BarraLateral'
import ListaDeContatos from '../../containers/ListaDeContatos'

const Home = () => (
  <>
    <BarraLateral mostrarFiltros={true} />
    <ListaDeContatos />
    <BotaoAdd />
  </>
)

export default Home
