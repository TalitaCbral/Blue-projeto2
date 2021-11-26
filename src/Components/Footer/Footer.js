import './Footer.css';
import { FaFacebookSquare, FaInstagramSquare, FaTwitterSquare, FaYoutubeSquare} from 'react-icons/fa';

export default function Footer() {
  return (
    <div className='footer'>
      <div className='social'>
        <FaFacebookSquare />
        <FaInstagramSquare />
        <FaTwitterSquare />
        <FaYoutubeSquare />
      </div>
      <span>© 2021 Steam. Os jogos são propriedade de seus respectivos donos nos EUA e em outros países.</span>
      <span>IVA incluso em todos os preços onde aplicável.   Política de Privacidade   |   Termos Legais   |   Acordo de Assinatura do Steam   |   Reembolsos   |   Cookies
</span>
    </div>
  )
}