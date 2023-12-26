
/* i18next framework */
import { useTranslation} from 'react-i18next';

/* Components */
import Header from '../Main_Components/Header';
import Footer from '../Main_Components/Footer';
import Button from '../Main_Components/Button';
import ProductCard from '../Main_Components/Product';

function goDown() {
    window.scrollTo({
        top:750,
        left:0,
        behavior: "smooth"
    });
}

function Home() {    
    const { t, i18n } = useTranslation();
    
    return (
        <>
            <Header />

            <div className='landing'>
                <div className='landingDiv'>
                    <h1>{t('HomePage.landingSectionTitle')}</h1>
                    <p>{t('HomePage.landingSectionDescreption')}</p>
                    <Button buttonText={t('HomePage.landingSectionButton')} theLink='gg-store/src/Pages/Store'/>
                </div>

                <img className='arrowDown' onClick={goDown} src={require('../images/pixels_images/downArrow.png')}/>
            </div>


            <div className='shopSection' id='goDown'>
                <div className='container'>
                    <div className='title'>
                        <h1>{t('HomePage.productsSectionTitle')}</h1>
                    </div>

                    <div className='products'>
                    <ProductCard
                            productName='Game Boy Sup'
                            productImage={require('../images/products_images/Sup/1.png')}
                            info1={t("SupProductCard.feature1")}
                            info2={t("SupProductCard.feature2")}
                            info3={t("SupProductCard.feature3")}
                            link='GameBoySup'
                        />

                        <ProductCard
                            productName='Game Stick Lite'
                            productImage={require('../images/products_images/Game_Stick_Lite/1.png')}
                            info1={t("StickLiteProductCard.feature1")}
                            info2={t("StickLiteProductCard.feature2")}
                            info3={t("StickLiteProductCard.feature3")}
                            link='GameStickLite'
                        />

                        <ProductCard
                            productName='Mini Game Box'
                            productImage={require('../images/products_images/Mini_Game_Box/1.png')}
                            info1={t("MiniBoxProductCard.feature1")}
                            info2={t("MiniBoxProductCard.feature2")}
                            info3={t("MiniBoxProductCard.feature3")}
                        />
                    </div>
                </div>
            </div>


            <div className='aboutSection'>
                <div className='container'>
                    <div className='about-us'>
                        
                        <div className='text'>
                            <h2>{t('HomePage.aboutus')}</h2>
                            <h3>{t('HomePage.websiteName')}</h3>

                            <p>{t('HomePage.aboutusDesc')}</p>
                        </div>

                        <div className='image'>
                            <img className='ryuImg' src={require('../images/RYU.png')}/>
                        </div>

                        <div className='gif'>
                            <img className='stFighter' src={require('../images/Gifs/streetfighter1.gif')} />
                        </div>
                    </div>
                </div>
            </div>


            <Footer />
        </>
    )
}

export default Home;