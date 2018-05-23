import React from 'react';
import axios from 'axios';
import { translate, Trans } from "react-i18next";
class Header extends React.Component {
    constructor(prop) {
    super(prop);
    this.state = {value: '',
                  idioma: '',
                  codigoISO : ""
                };
    this.handleClick = this.handleClick.bind(this);

    this.handleChange = this.handleChange.bind(this);

   // this.handleLoad = this.handleLoad.bind(this);


    
    }
    componentDidMount() 
    {

        
        var lng="";
        axios.get('http://api.wipmania.com/json?callback=')
        .then(res => 
        {
     
          if(res.statusText=='OK')
          {
              
              const {  i18n } = this.props;
              var valor =  res.data.address.country_code;
              valor="US"
              var lng="";
            
              console.log("Codigo ISO primera alternativa: "+ valor );
            
              this.setState({ codigoISO : valor });
              if( valor=='PE' )
              {
                  this.setState({ idioma : '5' });
                  lng='ESP'
              }
              if( valor=='BR' )
              {
                  this.setState({ idioma : '1' });

                  var comboIdioma =document.getElementById("comboIdioma");
                    
                  comboIdioma.hidden=true;

                  lng='POR'
              }
              if( valor=='US' )
              {
                  this.setState({ idioma : '4' });
                  lng='ESP'
                  
                  var comboIdioma =document.getElementById("comboIdioma");
                   comboIdioma.remove(2);

              }
              
              i18n.changeLanguage(lng);  
        
          }
          else
          {

            this.alternativaDos.bind()
            this.alternativaDos();

          }
        })
    };

    alternativaDos(){

      axios.get('https://api.ipify.org/?format=json')
      .then(response => 
      {
           var ipCliente;
          ipCliente =  response.data.ip;
          console.log("IP CLIENTE:::"+ipCliente)
          this.buildhtml.bind(response)
          this.buildhtml(response);
        
      })

    }

    buildhtml(res){
      
        const {  i18n } = this.props;

        console.log('Obtener')
        var ipObtenido =res.data.ip;
        console.log('Obtener los resultados ::'+ipObtenido);
        axios.get('http://localhost:59019/api/pais/GetCodigoIsoPorIp',
        {
          params: 
          {
               ip: ipObtenido
          }

        }
                
        ).then(res=>
        {
            
            var lang="";
            var codigoISOObtenido="";
            console.log("My IP :"+ res.data.codigoIso);
            codigoISOObtenido=res.data.codigoIso;
            

            if( codigoISOObtenido=='PE' )
              {
                  this.setState({ idioma : '5' });
                  lang='ESP'
              }
              if( codigoISOObtenido=='BR' )
              {
                  this.setState({ idioma : '1' });
                  lang='POR'
              }
              if( codigoISOObtenido=='US' )
              {
                  this.setState({ idioma : '4' });
                  lang='ENG'
              }
              
              i18n.changeLanguage(lang); 

        })

    }

    /*handleLoad(){
      var items = [];
      axios
      .get('http://api.wipmania.com/jsonp?callback=')
      .then(({ array })=> {
      	this.setState({ 
          items: array
          
        }
        
      );
      console.log("Mi resultado" + items); 
      console.log("Mi resultado setado" + this.state.data);

      })
      
     
    }*/

    handleClick(){
      var idiomaSeleccionado = this.state.idioma;
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
    handleChange(event) {
      this.setState({idioma: event.target.value});
     
      var lng ='';
      var codigo =document.getElementById('comboIdioma').value;

      const { t, i18n } = this.props;
      
      if(codigo=='1')
      {
        console.log("Idioma :::"+this.state.idioma);
        lng ='POR';
      }
      if(codigo=='4')
      {
        console.log("Idioma :::"+this.state.idioma);
        lng ='ENG';
      }
      if(codigo=='5')
      {
        console.log("Idioma :::"+this.state.idioma);
        lng ='ESP';
      }

        i18n.changeLanguage(lng);

    }

    render() {
      
      const { t } = this.props;
      
        return(
          <header className="header">
            <nav>
              <div className="logoHeader">
                <h1>
                  L'bel
                </h1>
              </div>
              <div className="bloqueDerecho">
                <div className="bloqueDerecho__dropdown">
                  <select onChange={this.handleChange} id="comboIdioma" value={this.state.idioma} >
                  <option value="5">{t("inicio37")}</option>
                  <option value="4">{t("inicio38")}</option>
                  <option value="1">{t("inicio39")}</option>
                </select>
                </div>
                <div className="bloqueDerecho__boton">
                  <button  onClick={this.handleClick}>
                  {t("inicio40")}
                  </button>
                </div>
              </div>
              <div className="clearfix"></div>
            </nav>
           
            
          
          </header>
        );
    }
};

export default translate("translations")(Header);