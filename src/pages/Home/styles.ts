import styled from 'styled-components'

export const Main = styled.main`
  background-color: #FFF8F2;
  padding: 80px 0 120px;
`

export const Container = styled.div`
  margin: 0 auto;
  max-width: 1366px;
  padding: 0 40px;
`

export const RestaurantGrid = styled.div`
  display: grid;
  gap: 32px 80px;
  grid-template-columns: repeat(2, minmax(0, 1fr));

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
  }
`
