
/* Components */
import Header from '../Main_Components/Header';
import Footer from '../Main_Components/Footer';
import Button from '../Main_Components/Button';

import { useTranslation} from 'react-i18next';

function Buyers() {
    const { t, i18n } = useTranslation();
    return (
        <>
            <Header />

            <div className='title'>
                <h1>{t('BuyersPage.title')}</h1>
                <p>{t('BuyersPage.desc')}</p>
            </div>

            <div className='buyers'>
                <div className='buyer left'>
                    <img src={require('../images/buyers_images/1.jpeg')} />

                    <div className='number'>
                        <h1>1</h1>
                    </div>

                    <div className='pacmanGifs'>
                        <img className='pacmanGif' src={require('../images/Gifs/pacman.gif')} />
                        <img className='pacmanM1Gif' src={require('../images/Gifs/pacmanMonster1.gif')} />
                        <img className='pacmanM2Gif' src={require('../images/Gifs/pacmanMonster2.gif')} />
                        <img className='pacmanM3Gif' src={require('../images/Gifs/pacmanMonster3.gif')} />
                    </div>
                </div>

                <div className='buyer right'>
                    <img src={require('../images/buyers_images/2.jpeg')} />

                    <div className='number'>
                        <h1>2</h1>
                    </div>

                    <img className='zeldaGif gifs' src={require('../images/Gifs/zelda.gif')} />
                </div>

                <div className='buyer left'>
                    <img src={require('../images/buyers_images/3.jpeg')} />

                    <div className='number'>
                        <h1>3</h1>
                    </div>

                    <img className='luigiGif gifs' src={require('../images/Gifs/luigiKart.gif')} />
                </div>

                <div className='buyer right'>
                    <img src={require('../images/buyers_images/4.jpeg')} />

                    <div className='number'>
                        <h1>4</h1>
                    </div>

                    <img className='sonicGif gifs' src={require('../images/Gifs/sonic.gif')} />
                </div>

                <div className='buyer left'>
                    <img src={require('../images/buyers_images/5.jpeg')} />

                    <div className='number'>
                        <h1>5</h1>
                    </div>

                    <img className='ryuGif gifs' src={require('../images/Gifs/ryuGif.gif')} />
                </div>
            </div>

            <Footer />
        </>
    )
}

export default Buyers;