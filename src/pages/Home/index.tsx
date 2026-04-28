import Header from '../../components/Header'
import Footer from '../../components/Footer'
import RestaurantList from '../../components/RestaurantList'
import { mockRestaurants } from '../../data/mockData'

const Home = () => {
  return (
    <>
      <Header variant="hero" />
      <div className="container">
        <RestaurantList restaurants={mockRestaurants} />
      </div>
      <Footer />
    </>
  )
}

export default Home
