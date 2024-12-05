import { useCharStates } from "../Context";

const Footer = () => {
  const { state } = useCharStates();

  return (
    <footer className={!state.theme && "dark-nav"} >
        <img src="images/DH.png" alt='DH-logo' /> 
        <h2>Powered by Lorena Trujillo</h2>
        <div className="social-section">
          <img src="images/ico-facebook.png" alt='facebook-icon' />
          <img src="images/ico-instagram.png" alt='intagram-icon' />
          <img src="images/ico-tiktok.png" alt='tiktok-icon' />
          <img src="images/ico-whatsapp.png" alt='whatsapp-icon' />
        </div>
    </footer>
  )
}

export default Footer