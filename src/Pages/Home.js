
import { useTranslation } from 'react-i18next';
import Header from '../Components/Header'

function Home() {

  const { t, i18n } = useTranslation();

  return (
    <>
      <Header />

      <div className='landing'>
        <div className='container'>
          <div className='landingContent'>
            <h2>{t("landingTitle")}</h2>
            <p>{t("landingTitle")}</p>

            <a href="#">
              <button>{t("landingBtn")}</button>
            </a>
          </div>
        </div>
      </div>

      <div className='productsSection'>
        <div className='productCard'>
          <h2 className='productName'>Game Stick Lite</h2>
          <img src={require('../Images/p1.jpeg')} />
          <ul>
            <li></li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Home;
