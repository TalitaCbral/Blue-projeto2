import Navbar from '../Components/Navbar/Navbar';
import Slider from '../Components/Slider/Slider';
import Card from '../Components/Card/Card';
import Container from '../Components/Container/Container';
import Footer from '../Components/Footer/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <Slider 
        imageLink='https://cdn2.unrealengine.com/egs-farmingsimulator22preorderbundle-giantssoftware-s3-2560x1440-fe0f2c2e5147.jpg'
        alt='Farming Simulator 22'
      /> 
      <Container title='JOGOS POPULARES DE RV'>
        <Card 
          image='https://cdn.akamai.steamstatic.com/steam/apps/1358140/header_292x136.jpg?t=1636464660'
          title='Cooking Simulator VR'
          preco='47,49'
        />
      </Container>
      <Footer />
    </>
  )
}