import { useEffect, useState } from 'react'

import {
  Button,
  Card,
  Content,
  Cover,
  Description,
  ImageArea,
  Rating,
  Star,
  Tag,
  Tags,
  Title,
  TitleLine,
} from './styles'

type Restaurant = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
}

type Props = {
  restaurant: Restaurant
}

const fallbackCover = (restaurant: Restaurant) => {
  const label = restaurant.tipo
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="688" height="334" viewBox="0 0 688 334">
      <rect width="688" height="334" fill="#FFEBD9"/>
      <g fill="none" stroke="#E66767" stroke-width="10" stroke-linecap="round" stroke-linejoin="round" opacity=".28">
        <path d="M190 70v70M220 70v70M250 70v70M220 70v194M182 150c0 42 24 72 38 72s38-30 38-72"/>
        <path d="M440 70c50 58 50 134 0 194M488 70v194"/>
      </g>
      <text x="344" y="177" text-anchor="middle" fill="#E66767" font-family="Roboto, Arial, sans-serif" font-size="44" font-weight="700">${label}</text>
    </svg>
  `

  return `data:image/svg+xml,${encodeURIComponent(svg)}`
}

const RestaurantCard = ({ restaurant }: Props) => {
  const [coverSrc, setCoverSrc] = useState(restaurant.capa)

  useEffect(() => {
    let didLoad = false
    const image = new Image()
    const fallbackTimer = window.setTimeout(() => {
      if (!didLoad) {
        setCoverSrc(fallbackCover(restaurant))
      }
    }, 1200)

    image.onload = () => {
      didLoad = true
      window.clearTimeout(fallbackTimer)
      setCoverSrc(restaurant.capa)
    }

    image.onerror = () => {
      window.clearTimeout(fallbackTimer)
      setCoverSrc(fallbackCover(restaurant))
    }

    image.src = restaurant.capa

    return () => {
      window.clearTimeout(fallbackTimer)
    }
  }, [restaurant])

  return (
    <Card>
      <ImageArea>
        <Cover src={coverSrc} alt={restaurant.titulo} />
        <Tags>
          {restaurant.destacado && <Tag>Destaque da semana</Tag>}
          <Tag>{restaurant.tipo}</Tag>
        </Tags>
      </ImageArea>

      <Content>
        <TitleLine>
          <Title>{restaurant.titulo}</Title>
          <Rating>
            {restaurant.avaliacao.toFixed(1)}
            <Star aria-hidden="true">★</Star>
          </Rating>
        </TitleLine>

        <Description>{restaurant.descricao}</Description>

        <Button to={`/restaurante/${restaurant.id}`}>Saiba mais</Button>
      </Content>
    </Card>
  )
}

export default RestaurantCard
