import React from 'react';
import { translate, Trans } from "react-i18next";
class Footer extends React.Component {
    constructor() {
        super();
        this.state = {value: '73' };
    
        this.handleChange = this.handleChange.bind(this);
        
        }
        handleChange(event) {
          this.setState({value: event.target.value});
          if(document.images)
          {
            console.log("estoy en document images");
            if(this.state.value===73)
            {
             document.images['cambio'].src='images/brasil.png';
            }
            else
            {
                document.images['cambio'].src='images/eua.png';
            }
            
          }

        }

    render() {

        const { t } = this.props;
        return(
            <footer className="footer">
                    <div className="bloqueDerecho">
                            <div className="bloqueDerecho__dropdown">
                                <select onChange={this.handleChange} id="comboPais" value={this.state.value}>
                                    <option value="73">{t("inicio41")}</option>
                                    <option value="1">{t("inicio42")}</option>
                                </select>

                            </div>
                            <img src="images/brasil.png" name="cambio" alt=""/>
                    </div>
            </footer>
        );
    }
};

export default translate("translations")(Footer);