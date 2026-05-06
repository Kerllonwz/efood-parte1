import styled from 'styled-components'

import fundoPerfil from '../../assets/images/fundoPerfil.png'

export const Hero = styled.section`
  background-image: url(${fundoPerfil});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  color: var(--white);
  height: 280px;
`

export const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
  padding: 24px 0 32px;
`

export const Cuisine = styled.span`
  font-size: 32px;
  font-weight: 100;
  line-height: 38px;
`

export const RestaurantName = styled.h1`
  color: var(--white);
  font-size: 32px;
  font-weight: 900;
  line-height: 38px;
`

export const Menu = styled.main`
  background-color: var(--cream);
  padding: 56px 0 120px;
`

export const ProductGrid = styled.div`
  display: grid;
  gap: 32px;
  grid-template-columns: repeat(3, 320px);

  @media (max-width: 1080px) {
    grid-template-columns: 320px;
    justify-content: center;
    padding: 0 16px;
  }
`

export const ProductCard = styled.article`
  background-color: var(--red);
  color: var(--beige);
  padding: 8px;
  width: 320px;
`

export const ProductImage = styled.img`
  height: 167px;
  object-fit: cover;
  width: 304px;
`

export const ProductTitle = styled.h2`
  color: var(--beige);
  font-size: 16px;
  font-weight: 900;
  line-height: 19px;
  margin-top: 8px;
`

export const ProductDescription = styled.p`
  color: var(--beige);
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  margin: 8px 0;
`

export const AddButton = styled.button`
  background-color: var(--beige);
  border: 0;
  color: var(--red);
  cursor: pointer;
  font-size: 14px;
  font-weight: 900;
  height: 24px;
  line-height: 16px;
  width: 304px;
`
