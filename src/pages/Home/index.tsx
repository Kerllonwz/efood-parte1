import Header from '../../components/Header'
import RestaurantCard from '../../components/RestaurantCard'
import { Container, Main, RestaurantGrid } from './styles'

const restaurants = [
  {
    id: 1,
    titulo: 'Hioki Sushi',
    destacado: true,
    tipo: 'Japonesa',
    avaliacao: 4.9,
    descricao: 'Peça já o melhor da culinária japonesa no conforto da sua casa!...',
    capa: 'https://via.placeholder.com/344x167',
  },
  {
    id: 2,
    titulo: 'La Dolce Vita Trattoria',
    destacado: false,
    tipo: 'Italiana',
    avaliacao: 4.6,
    descricao: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você!...',
    capa: 'https://via.placeholder.com/344x167',
  },
  {
    id: 3,
    titulo: 'Hioki Sushi',
    destacado: true,
    tipo: 'Japonesa',
    avaliacao: 4.9,
    descricao: 'Peça já o melhor da culinária japonesa no conforto da sua casa!...',
    capa: 'https://via.placeholder.com/344x167',
  },
  {
    id: 4,
    titulo: 'La Dolce Vita Trattoria',
    destacado: false,
    tipo: 'Italiana',
    avaliacao: 4.6,
    descricao: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você!...',
    capa: 'https://via.placeholder.com/344x167',
  },
]

const Home = () => (
  <>
    <Header />
    <Main>
      <Container>
        <RestaurantGrid>
          {restaurants.map((restaurant) => (
            <RestaurantCard key={restaurant.id} restaurant={restaurant} />
          ))}
        </RestaurantGrid>
      </Container>
    </Main>
  </>
)

export default Home
