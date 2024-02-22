
import { useRef } from 'react';
import { useTranslation } from 'react-i18next'; 

function Header() {

    let langBar = useRef();
    const openLang = () => {
        if(langBar.current.classList.contains('disNone')) {
            langBar.current.classList.remove('disNone');
            langBar.current.classList.add('disFlex');
        } else {
            langBar.current.classList.add('disNone');
            langBar.current.classList.remove('disFlex');
        }
    }

    let body = document.querySelector('body');
    const { t, i18n } = useTranslation();
    const changeEN = () => {
        i18n.changeLanguage("en");
        body.style.cssText = "font-family: Retro Gaming";
    }
    const changeAR = () => {
        i18n.changeLanguage("ar");
        body.style.cssText = "font-family: Arabic Pixel 2";
    }

    return (
        <header>
            <div className="container">
                <div className="logo">
                    <img src={require('../Images/logoNoBackground.png')} />
                </div>

                <nav>
                    <ul>
                        <a href="#"><li>{t("headerNav1")}</li></a>
                        <a href="#"><li>{t("headerNav2")}</li></a>
                        <a href="#"><li>{t("headerNav3")}</li></a>
                        <a href="#"><li>{t("headerNav4")}</li></a>
                    </ul>

                    {/* <a href="#"><img src={require('../Images/Icons/instagram.png')} className='insta-icon' /></a> */}
                    <div className='changeLang' onClick={openLang}>
                        <img src={require('../Images/Icons/down-arrow.png')} className='downArrow-icon' />
                        <img src={require('../Images/Icons/global.png')} className='global-icon' />

                        <div className='langs disNone' ref={langBar}>
                            <button onClick={changeEN}>English</button>
                            <button onClick={changeAR}>العربية</button>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Header;