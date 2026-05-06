import pizza from '../../assets/images/pizza.png'
import Header from '../../components/Header'
import {
  AddButton,
  Cuisine,
  Hero,
  HeroContent,
  Menu,
  ProductCard,
  ProductDescription,
  ProductGrid,
  ProductImage,
  ProductTitle,
  RestaurantName,
} from './styles'

const products = Array.from({ length: 6 }, (_, index) => ({
  id: index + 1,
  title: 'Pizza Marguerita',
  image: pizza,
  description:
    'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
}))

const Restaurant = () => (
  <>
    <Header variant="restaurant" />
    <Hero>
      <HeroContent className="container">
        <Cuisine>Italiana</Cuisine>
        <RestaurantName>La Dolce Vita Trattoria</RestaurantName>
      </HeroContent>
    </Hero>
    <Menu>
      <ProductGrid className="container">
        {products.map((product) => (
          <ProductCard key={product.id}>
            <ProductImage src={product.image} alt={product.title} />
            <ProductTitle>{product.title}</ProductTitle>
            <ProductDescription>{product.description}</ProductDescription>
            <AddButton type="button">Adicionar ao carrinho</AddButton>
          </ProductCard>
        ))}
      </ProductGrid>
    </Menu>
  </>
)

export default Restaurant
