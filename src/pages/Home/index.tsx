import massa from '../../assets/images/massa.png'
import sushi from '../../assets/images/sushi.png'
import Header from '../../components/Header'
import RestaurantCard, { type Restaurant } from '../../components/RestaurantCard'
import { Main, RestaurantGrid } from './styles'

const sushiDescription =
  'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!'

const pastaDescription =
  'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!'

const restaurants: Restaurant[] = [
  {
    id: 1,
    title: 'Hioki Sushi',
    image: sushi,
    tags: ['Destaque da semana', 'Japonesa'],
    rating: 4.9,
    description: sushiDescription,
  },
  {
    id: 2,
    title: 'La Dolce Vita Trattoria',
    image: massa,
    tags: ['Italiana'],
    rating: 4.6,
    description: pastaDescription,
  },
  {
    id: 3,
    title: 'La Dolce Vita Trattoria',
    image: massa,
    tags: ['Italiana'],
    rating: 4.6,
    description: pastaDescription,
  },
  {
    id: 4,
    title: 'La Dolce Vita Trattoria',
    image: massa,
    tags: ['Italiana'],
    rating: 4.6,
    description: pastaDescription,
  },
  {
    id: 5,
    title: 'La Dolce Vita Trattoria',
    image: massa,
    tags: ['Italiana'],
    rating: 4.6,
    description: pastaDescription,
  },
  {
    id: 6,
    title: 'La Dolce Vita Trattoria',
    image: massa,
    tags: ['Italiana'],
    rating: 4.6,
    description: pastaDescription,
  },
]

const Home = () => (
  <>
    <Header />
    <Main>
      <RestaurantGrid className="container">
        {restaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.id} restaurant={restaurant} />
        ))}
      </RestaurantGrid>
    </Main>
  </>
)

export default Home
