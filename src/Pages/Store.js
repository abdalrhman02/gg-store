
/* Components */
import Header from '../Main_Components/Header';
import Footer from '../Main_Components/Footer';
import Button from '../Main_Components/Button';
import ProductCard from '../Main_Components/Product';

import { useTranslation} from 'react-i18next';

function Store() {
    const { t, i18n } = useTranslation();
    return (
        <>
            <Header />

            <div className='store'>
                <div className='title'>
                    <h1>{t("StorePage.title")}</h1>
                    <p>{t("StorePage.desc")}</p>
                </div>

                <div className='container'>
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

            <Footer />
        </>
    )
}

export default Store;