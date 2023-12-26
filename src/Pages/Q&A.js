
import Header from '../Main_Components/Header';
import Footer from '../Main_Components/Footer';
import Button from '../Main_Components/Button';

import React, { useEffect } from 'react';
import { useTranslation} from 'react-i18next';

function Questions() {
    const { t, i18n } = useTranslation();

    useEffect(() => {
        const handleChooseQuestion = (eve) => {
            let questionClicked = eve.target.closest('.question');
            let questionClickedId = questionClicked.id;

            let answers = document.querySelectorAll('.answer')
      
            answers.forEach((e) => {
                e.style.display = 'none';
                if(e.classList.contains(questionClickedId)) {
                    e.style.display = 'block';
                }
            })
        }
    
        document.getElementById('questions').addEventListener('click', handleChooseQuestion)
    }, [])

    

    return (
        <>
            <Header />

            <div className='title'>
                <h1>{t("QuestionsPage.title")}</h1>
                <p>{t("QuestionsPage.desc")}</p>
            </div>


            <div className='questions-Answers'>
                <div className='questions' id='questions'>
                    <h3>Questions</h3>

                    <div className='question' id='crash'>
                        <div className='image'>
                            <img className='profilePic' src={require('../images/q&a_images/crashProfile.png')} />
                        </div>

                        <div className='theQ'>
                            <h4 className='name'>Crash</h4>
                            <p className='msg'>{t("CrashQuestion.crash")}</p>
                        </div>

                        <h5 className='msgTime'>Yesterday</h5>
                    </div>

                    <div className='question' id='mario'>
                        <div className='image'>
                            <img className='profilePic' src={require('../images/q&a_images/mario.png')} />
                        </div>

                        <div className='theQ'>
                            <h4 className='name'>Mario</h4>
                            <p className='msg'>{t("MarioQuestion.mario")}</p>
                        </div>

                        <h5 className='msgTime'>Yesterday</h5>
                    </div>

                    <div className='question' id='sonic'>
                        <div className='image'>
                            <img className='profilePic' src={require('../images/q&a_images/sonic.png')} />
                        </div>

                        <div className='theQ'>
                            <h4 className='name'>Sonic</h4>
                            <p className='msg'>{t("SonicQuestion.sonic")}</p>
                        </div>

                        <h5 className='msgTime'>Yesterday</h5>
                    </div>

                    <div className='question' id='rayman'>
                        <div className='image'>
                            <img className='profilePic' src={require('../images/q&a_images/rayman.png')} />
                        </div>

                        <div className='theQ'>
                            <h4 className='name'>Rayman</h4>
                            <p className='msg'>{t("RaymanQuestion.rayman")}</p>
                        </div>

                        <h5 className='msgTime'>Yesterday</h5>
                    </div>
                </div>


                <div className='answers' id='answers'>
                    <div className='answer crash'>
                        <div className='profile'>
                            <div className='image'>
                                <img className='profilePic' src={require('../images/q&a_images/crashProfile.png')} />
                            </div>

                            <div className='username'>
                                <h3>Crash</h3>
                                <h4>Last Seen 1h ago</h4>
                            </div>
                        </div>

                        <div className='msgs'>
                            <div className='msg userMsg'>
                                <h4 className='theMsg'>{t("CrashQuestion.crash")}</h4>
                                <p className='timeMsgSent'>13:22 am</p>
                            </div>

                            <div className='msg myMsg'>
                                <h4 className='theMsg'>{t("CrashQuestion.myMsg1")}</h4>
                                <p className='timeMsgSent'>13:24 am</p>
                            </div>

                            <div className='msg myMsg'>
                                <h4 className='theMsg'>{t("CrashQuestion.myMsg2")}</h4>
                                <p className='timeMsgSent'>13:24 am</p>
                            </div>
                        </div>

                        <div className='sentMsg'>
                            <button>Send</button>
                            <input type='text' placeholder='' />
                        </div>
                    </div>


                    <div className='answer mario'>
                        <div className='profile'>
                            <div className='image'>
                                <img className='profilePic' src={require('../images/q&a_images/mario.png')} />
                            </div>

                            <div className='username'>
                                <h3>Crash</h3>
                                <h4>Last Seen 4h ago</h4>
                            </div>
                        </div>

                        <div className='msgs'>
                            <div className='msg userMsg'>
                                <h4 className='theMsg'>{t("MarioQuestion.mario")}</h4>
                                <p className='timeMsgSent'>9:50 am</p>
                            </div>

                            <div className='msg myMsg'>
                                <h4 className='theMsg'>{t("MarioQuestion.myMsg1")}</h4>
                                <p className='timeMsgSent'>9:57 am</p>
                            </div>

                            <div className='msg myMsg'>
                                <h4 className='theMsg'>{t("MarioQuestion.myMsg2")}</h4>
                                <p className='timeMsgSent'>9:57 am</p>
                            </div>
                        </div>

                        <div className='sentMsg'>
                            <button>Send</button>
                            <input type='text' placeholder='' />
                        </div>
                    </div>

                    <div className='answer sonic'>
                        <div className='profile'>
                            <div className='image'>
                                <img className='profilePic' src={require('../images/q&a_images/sonic.png')} />
                            </div>

                            <div className='username'>
                                <h3>Sonic</h3>
                                <h4>Last Seen 2h ago</h4>
                            </div>
                        </div>

                        <div className='msgs'>
                            <div className='msg userMsg'>
                                <h4 className='theMsg'>{t("SonicQuestion.sonic")}</h4>
                                <p className='timeMsgSent'>17:20 am</p>
                            </div>

                            <div className='msg myMsg'>
                                <h4 className='theMsg'>{t("SonicQuestion.myMsg1")}</h4>
                                <p className='timeMsgSent'>17:28 am</p>
                            </div>
                        </div>

                        <div className='sentMsg'>
                            <button>Send</button>
                            <input type='text' placeholder='' />
                        </div>
                    </div>

                    <div className='answer rayman'>
                        <div className='profile'>
                            <div className='image'>
                                <img className='profilePic' src={require('../images/q&a_images/rayman.png')} />
                            </div>

                            <div className='username'>
                                <h3>Rayman</h3>
                                <h4>Last Seen 16h ago</h4>
                            </div>
                        </div>

                        <div className='msgs'>
                            <div className='msg userMsg'>
                                <h4 className='theMsg'>{t("RaymanQuestion.rayman")}</h4>
                                <p className='timeMsgSent'>17:20 am</p>
                            </div>

                            <div className='msg myMsg'>
                                <h4 className='theMsg'>{t("RaymanQuestion.myMsg1")}</h4>
                                <p className='timeMsgSent'>17:28 am</p>
                            </div>

                            <div className='msg myMsg'>
                                <h4 className='theMsg'>{t("RaymanQuestion.myMsg2")}</h4>
                                <p className='timeMsgSent'>17:28 am</p>
                            </div>
                        </div>

                        <div className='sentMsg'>
                            <button>Send</button>
                            <input type='text' placeholder='' />
                        </div>
                    </div>
                </div>
            </div>


            <Footer />
        </>
    )
}

export default Questions;