import Navbar from '../Components/Navbar/Navbar';
import Slider from '../Components/Slider/Slider';
import Search from '../Components/Search/Search';
import Card from '../Components/Card/Card';
import Container from '../Components/Container/Container';
import Footer from '../Components/Footer/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <Slider 
        imageLink='https://assets.nintendo.com/image/upload/c_fill,f_auto,h_693,q_auto,w_1920/ncom/en_US/merchandising/center-stage-banner/Metroid%20Dread/Centerstages_Ncom_1366x493_desktop_metroid'
        alt='Metroid Dread'
        classificationNumber='10'
        classificationText='Violência, Conteúdo Sexual'
      />
      <Search />
      <Container title='Mais vendidos'>
        <Card 
          image='https://assets.nintendo.com/image/upload/c_pad,f_auto,h_613,q_auto,w_1089/ncom/pt_BR/games/switch/m/mario-kart-8-deluxe-switch/hero?v=2021111315'
          title='Mario Kart™ 8 Deluxe'
          preco='299,00'
        />
      </Container>
      <Footer />
    </>
  )
}