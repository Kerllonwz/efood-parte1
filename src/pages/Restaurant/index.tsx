import { useParams } from 'react-router-dom'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import MenuList from '../../components/MenuList'
import { mockRestaurants } from '../../data/mockData'
import * as S from './styles'

const Restaurant = () => {
  const { id } = useParams<{ id: string }>()
  const restaurant = mockRestaurants.find((r) => r.id === Number(id))

  if (!restaurant) {
    return (
      <>
        <Header variant="simple" />
        <div className="container">
          <p style={{ textAlign: 'center', padding: '80px 0' }}>
            Restaurante não encontrado.
          </p>
        </div>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Header variant="simple" />
      <S.Banner style={{ backgroundImage: `url(${restaurant.capa})` }}>
        <S.BannerContent>
          <S.Category>{restaurant.tipo}</S.Category>
          <S.Name>{restaurant.titulo}</S.Name>
        </S.BannerContent>
      </S.Banner>
      <div className="container">
        <MenuList items={restaurant.cardapio} />
      </div>
      <Footer />
    </>
  )
}

export default Restaurant
