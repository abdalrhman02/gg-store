
/* Components */
import Header from '../../Main_Components/Header';
import Footer from '../../Main_Components/Footer';
import ProductPage from '../../Main_Components/ProductPage';
import { useState, useEffect } from 'react';

import { useTranslation } from 'react-i18next';

function GameBoySup() {
    const { t, i18n } = useTranslation();
    
    let [vidsCounting , setVidsCounting] = useState(0);
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
            prName='Game Stick Lite'
            prImage={require('../../images/products_images/Game_Stick_Lite/1.png')}
            prTitle='Wireless Game Arcade Console'
            prFeatures1='More than 10,000+ Game'
            prFeatures2='9 consoles on 1'
            prFeatures3='Plug in any TV (Has HDMI)'
            prFeatures4='Many different type of games'
            prPrice='200₪'>
        </ProductPage>

            <div className='productGamesVideos'>
                    <div class='text'>
                        <h2>{t('SupProductPage.gamesList')}</h2>
                        <h5>{t('SupProductPage.gamesList2')}</h5>
                    </div>
                    <img className='arrow arLeft' id='arrowLeft' onClick={increment} src={require('../../images/icons/arrow.png')}/>

                    <div className='theVideos' id='allVideos'>

                        <img src={require('../../images/logoWithoutBackground.png')} id='image'/>

                        <video className='vid' id='1' poster={require('../../images/products_images/Game_Stick_Lite/GamesVideos/vids-thumbnail/zelda.png')} controls>
                            <source src={require('../../images/products_images/Game_Stick_Lite/GamesVideos/Zelda.mp4')} />
                        </video>

                        <video className='vid' id='2' poster={require('../../images/products_images/Game_Stick_Lite/GamesVideos/vids-thumbnail/streetfighter.png')} controls>
                            <source src={require('../../images/products_images/Game_Stick_Lite/GamesVideos/StreetFighter.mp4')} />
                        </video>

                        <video className='vid' id='3' poster={require('../../images/products_images/Game_Stick_Lite/GamesVideos/vids-thumbnail/supermariobros2.png')} controls>
                            <source src={require('../../images/products_images/Game_Stick_Lite/GamesVideos/MarioBros2.mp4')} />
                        </video>

                        <video className='vid' id='4' poster={require('../../images/products_images/Game_Stick_Lite/GamesVideos/vids-thumbnail/tarzan.png')} controls>
                            <source src={require('../../images/products_images/Game_Stick_Lite/GamesVideos/Tarzan.mp4')} />
                        </video>

                        <video className='vid' id='5' poster={require('../../images/products_images/Game_Stick_Lite/GamesVideos/vids-thumbnail/gta2.png')} controls>
                            <source src={require('../../images/products_images/Game_Stick_Lite/GamesVideos/GTA2.mp4')} />
                        </video>

                        <video className='vid' id='6' poster={require('../../images/products_images/Game_Stick_Lite/GamesVideos/vids-thumbnail/chocoboRacing.png')} controls>
                            <source src={require('../../images/products_images/Game_Stick_Lite/GamesVideos/ChocoboRacing.mp4')} />
                        </video>

                        <video className='vid' id='7' poster={require('../../images/products_images/Game_Stick_Lite/GamesVideos/vids-thumbnail/castlevania4.png')} controls>
                            <source src={require('../../images/products_images/Game_Stick_Lite/GamesVideos/castlevania 4.mp4')} />
                        </video>
                    </div>

                    <img className='arrow arRight' id='arrowRight' onClick={plus} src={require('../../images/icons/arrow.png')} />
                </div>


        <Footer />
     </>   
    )
}

export default GameBoySup;