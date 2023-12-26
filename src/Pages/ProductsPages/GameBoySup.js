
/* Components */
import Header from '../../Main_Components/Header';
import Footer from '../../Main_Components/Footer';
import ProductPage from '../../Main_Components/ProductPage';

import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

function GameBoySup() {
    const { t, i18n } = useTranslation();
    
    let [vidsCounting , setVidsCounting] = useState(1);
    let videosList = document.querySelectorAll('.vid');
    let img = document.getElementById('image')
    useEffect(() => {
        videosList.forEach((v) => {
            v.style.display = 'none';
            img.style.display = 'none';
        
            if(v.id == vidsCounting) {
                v.style.display = 'flex';
            }
        });
        
    }, [vidsCounting]);

    function plus() {
        setVidsCounting((prevCount) => (prevCount < videosList.length ? prevCount + 1 : prevCount));
    }

    function increment() {
        setVidsCounting((prevCount) => (prevCount > 1 ? prevCount - 1 : prevCount));
    }


    return (
     <>
        <Header />

        <ProductPage 
            prName='Game Boy Sup'
            prImage={require('../../images/products_images/Sup/1.png')}
            prTitle={t('SupProductPage.prTitle')}
            prFeatures1={t('SupProductPage.prF1')}
            prFeatures2={t('SupProductPage.prF2')}
            prFeatures3={t('SupProductPage.prF3')}
            prFeatures4={t('SupProductPage.prF4')}
            prPrice='80₪'>
            </ProductPage>

            <div className='productGamesVideos'>
                    <div class='text'>
                        <h2>{t('SupProductPage.gamesList')}</h2>
                        <h5>{t('SupProductPage.gamesList2')}</h5>
                    </div>
                    <img className='arrow arLeft' id='arrowLeft' onClick={increment} src={require('../../images/icons/arrow.png')}/>

                    <div className='theVideos' id='allVideos'>

                        <img src={require('../../images/logoWithoutBackground.png')} id='image'/>

                        <video className='vid' id='1' poster={require('../../images/products_images/Sup/GamesVideos/vids-thumbnail/superMarioBros.png')} controls>
                            <source src={require('../../images/products_images/Sup/GamesVideos/super-mario-bros.mp4')} />
                        </video>

                        <video className='vid' id='2' poster={require('../../images/products_images/Sup/GamesVideos/vids-thumbnail/mario3.png')}  controls>
                            <source src={require('../../images/products_images/Sup/GamesVideos/mario3.mp4')} />
                        </video>

                        <video className='vid' id='3' poster={require('../../images/products_images/Sup/GamesVideos/vids-thumbnail/contra.png')} controls>
                            <source src={require('../../images/products_images/Sup/GamesVideos/contra.mp4')} />
                        </video>

                        <video className='vid' id='4' poster={require('../../images/products_images/Sup/GamesVideos/vids-thumbnail/pacman.png')} controls>
                            <source src={require('../../images/products_images/Sup/GamesVideos/pacman.mp4')} />
                        </video>

                        <video className='vid' id='5' poster={require('../../images/products_images/Sup/GamesVideos/vids-thumbnail/adventureIsland.png')} controls>
                            <source src={require('../../images/products_images/Sup/GamesVideos/adventure-island.mp4')} />
                        </video>

                        <video className='vid' id='6' poster={require('../../images/products_images/Sup/GamesVideos/vids-thumbnail/galaga.png')} controls>
                            <source src={require('../../images/products_images/Sup/GamesVideos/galaga.mp4')} />
                        </video>

                        <video className='vid' id='7' poster={require('../../images/products_images/Sup/GamesVideos/vids-thumbnail/tank90.png')}  controls>
                            <source src={require('../../images/products_images/Sup/GamesVideos/tank90.mp4')} />
                        </video>

                        <video className='vid' id='8' controls >
                            <source src={require('../../images/products_images/Sup/GamesVideos/kage.mp4')}  />
                        </video>

                        <video className='vid' id='9' poster={require('../../images/products_images/Sup/GamesVideos/vids-thumbnail/donkeyKong.png')} controls>
                            <source src={require('../../images/products_images/Sup/GamesVideos/donkey-kong.mp4')} />
                        </video>
                    </div>

                    <img className='arrow arRight' id='arrowRight' onClick={plus} src={require('../../images/icons/arrow.png')} />
                </div>


        <Footer />
     </>   
    )
}

export default GameBoySup;