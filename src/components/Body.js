import React from 'react';
// Imágenes importadas
import provisionalImage from '../media/imgs/ej1.JPG';
import listImageUno from '../media/imgs/icon_1.svg';
import listImageDos from '../media/imgs/icon_2.svg';
import listImageTres from '../media/imgs/icon_3.svg';
import listImageCuatro from '../media/imgs/icon_4.svg';
import bodegon from '../media/imgs/bodegon_lbel.png';
import videoCaptura from '../media/imgs/prov_video.JPG';
import axios from 'axios';
import { translate, Trans } from "react-i18next";

class Body extends React.Component {
    constructor() {
        super();
        this.handleClick = this.handleClick.bind(this);
        
        }
        handleClick(){
          var idiomaSeleccionado = document.getElementById('comboIdioma').value;
          var paisFooter =document.getElementById('comboPais').value;
             if(paisFooter==='73')
            {
              console.log('Estoy en el país BRA');
                 axios.post
                  ('https://meunegocio.lbel.com.br/Enroll/Landing',
                    {
                      params: 
                      {
                          accountTypeId: 1,
                          resume: false,
                          upgrade: false,
                          countryID: paisFooter,
                          languageID: idiomaSeleccionado
                      }
                    }
                  ).then
                  ( function (response )
                  {
                        if (response.statusText='OK' )
                        {
                          console.log("mi codigo de iddioma es "+idiomaSeleccionado);
                          console.log("mi codigo de pais es "+paisFooter);
                            window.location.href="https://meunegocio.lbel.com.br/Enroll/Landing?accountTypeId=1&resume=false&upgrade=false&countryID="+paisFooter+"&languageID="+idiomaSeleccionado;
                        }
                  }
                  ) 
            }   
            else
            {
              console.log('Estoy en el país USA');
            
           
              axios.post
              ('https://enrollment.lbelusa.com/Enroll/Landing',
                {
                  params: 
                  {
                      accountTypeId: 1,
                      resume: false,
                      upgrade: false,
                      countryID: paisFooter,
                      languageID: idiomaSeleccionado,
                  }
                }
              ).then
              ( function (response )
              {
                    if (response.statusText='OK' )
                    {
                        console.log("mi codigo de iddioma es "+idiomaSeleccionado);
                        console.log("mi codigo de pais es "+paisFooter);
                        window.location.href="https://enrollment.lbelusa.com/Enroll/Landing?accountTypeId=1&resume=false&upgrade=false&countryID="+paisFooter+"&languageID="+idiomaSeleccionado;
                    }
              }
              ) 
            }
        };
       
        render() {

            const { t } = this.props;

            return(
            <div>
                <section className="firstSection">
                    {/* Section Desktop */}
                    <div className="container__desktop">
                        <img src={provisionalImage} alt="Imagen Provisional" />
                    <div className="container__desktop--overlay hidden-xs hidden-sm"></div>
                    <div className="container__desktop--overlayText">
                        <h1>
                            <span>{t("inicio")}</span> <br />
                            {t("inicio2")}
                        </h1>
                    </div>
                </div>        
                <div className="container">
                    {/* Section Mobile */}
                    <div className="firstSection__container__mobile">
                        <div className="firstSection__container__firstvideo hidden-md hidden-lg">
                            <div className="firstSection__container--overlay"></div>
                            <img className="firstSection__container--video" src="" alt="Imagen Consultora"/>
                        </div>
                        <div className="firstSection__container__title hidden-md hidden-lg">
                            <h1> {t("inicio3")}<br /> {t("inicio6")}</h1>
                            <p>
                            {t("inicio4")}
                            </p>
                            <a id="lnkQuieroSerConsultora" className="btn btn--registerMobile hidden-md hidden-lg" href="#" onClick={this.handleClick} >{t("inicio5")}</a>
                            <div className="clear"></div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Segunda sección */}
            <section className="secondSection">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="title">
                                <h2>{t("inicio7")}<span>{t("inicio8")}</span></h2>
                            </div>
                        </div>
                        <div className="col-md-5 col-md-offset-1">
                            <div className="description">
                                <h3>{t("inicio9")}<br />{t("inicio10")}</h3>
                                <p>{t("inicio11")}</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="listImage">
                            <div className="col-md-3 col-sm-6 col-xs-12">
                                <div className="listImageBlock">
                                    <div className="listImageBlock__image">
                                        <img src={listImageUno} alt=""/>
                                    </div>
                                    <p><strong>{t("inicio12")}</strong> {t("inicio13")}</p>
                                    <div className="clearfix visible-xs"></div>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6 col-xs-12">
                                <div className="listImageBlock">
                                    <div className="listImageBlock__image">
                                        <img src={listImageDos} alt=""/>
                                    </div>
                                    <p>{t("inicio14")} <strong>{t("inicio15")}</strong></p>
                                    <div className="clearfix visible-xs"></div>                                    
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6 col-xs-12">
                                <div className="listImageBlock">
                                    <div className="listImageBlock__image">
                                        <img src={listImageTres} alt=""/>
                                    </div>
                                    <p><strong>{t("inicio16")}</strong> {t("inicio17")}</p>
                                    <div className="clearfix visible-xs"></div>                                    
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6 col-xs-12">
                                <div className="listImageBlock">
                                    <div className="listImageBlock__image">
                                        <img src={listImageCuatro} alt=""/>
                                    </div>
                                    <p>{t("inicio18")} <strong>{t("inicio19")}</strong></p>
                                    <div className="clearfix visible-xs"></div>                                    
                                </div>
                            </div>
                            <div className="clearfix"></div>
                        </div>
                        <div className="clearfix"></div>
                        <div className="bodegon">
                            <img src={bodegon} alt="Bodegón L'bel" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="title">
                                <h2>{t("inicio18")}<span className="title--light">{t("inicio19")}</span></h2>
                            </div>
                        </div>
                        <div className="col-md-5 col-md-offset-1">
                            <div className="description">
                                <h3>{t("inicio20")}<br />{t("inicio21")}</h3>
                                <p>{t("inicio22")}<br/>{t("inicio23")}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="videoSection">
                <div className="videoContainer">
                    <img src={videoCaptura} alt="Video Consultora" />
                </div>
            </section>
            <section className="thirdSection">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="title">
                                <h2>{t("inicio24")}<span className="title--light">{t("inicio25")}</span></h2>
                            </div>
                        </div>
                        <div className="col-md-5 col-md-offset-1">
                            <div className="description">
                                <h3>{t("inicio26")}<br />{t("inicio27")}</h3>
                                <p>{t("inicio28")}<br/>{t("inicio29")}</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <h1>{t("inicio30")}</h1>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="title">
                                <h2>{t("inicio31")}<span className="title--light">{t("inicio32")}</span></h2>
                            </div>
                        </div>
                        <div className="col-md-5 col-md-offset-1">
                            <div className="description">
                                <h3>{t("inicio33")}<br />{t("inicio34")}</h3>
                                <p>{t("inicio35")}<br/> {t("inicio36")}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        );
    }
};

export default translate("translations")(Body);