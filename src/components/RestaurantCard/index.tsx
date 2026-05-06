import estrela from '../../assets/images/estrela.png'
import { Button, Card, Content, Cover, Description, Rating, Star, Tag, Tags, Title, TitleLine } from './styles'

export type Restaurant = {
  id: number
  title: string
  image: string
  tags: string[]
  rating: number
  description: string
}

type Props = {
  restaurant: Restaurant
}

const RestaurantCard = ({ restaurant }: Props) => (
  <Card>
    <Cover src={restaurant.image} alt={restaurant.title} />

    <Tags>
      {restaurant.tags.map((tag) => (
        <Tag key={tag}>{tag}</Tag>
      ))}
    </Tags>

    <Content>
      <TitleLine>
        <Title>{restaurant.title}</Title>
        <Rating>
          {restaurant.rating.toFixed(1)}
          <Star src={estrela} alt="estrela" />
        </Rating>
      </TitleLine>

      <Description>{restaurant.description}</Description>

      <Button to={`/restaurante/${restaurant.id}`}>Saiba mais</Button>
    </Content>
  </Card>
)

export default RestaurantCard
