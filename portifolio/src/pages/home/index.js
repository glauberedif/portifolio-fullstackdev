import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';

import logo from './images/logo.png';
import artTop from './images/arte_top.png';

import logoNode from './images/nodeLogo.png';
import logoAngular from './images/angular.png';
import logoReact from './images/icons8-react-native.png';

//styles --------------------------------------
import './style.css';

function Home() {
    const opcsMenu = ['HOME', 'PORTIFÓLIO', 'DEPOIMENTOS'];
    const techs = [
        { img: logoNode, txt: 'Com o NodeJs suas aplicações ficam mais rápidas, pois é uma tecnologia que processa suas requisições em paralelo, sendo mais performático que outras tecnologias que processam suas requisições em fila, como o PHP ou ASP.' },
        { img: logoAngular, txt: 'Tenha todo o poder dos webComponentes em suas aplicações. Com o Angular é possível criar aplicações robustas e com uma interface amigável e bonita. As SPAs criadas com o Angular tem performance incrível, além de serem de muito fácil manutenção. Além de ser um framework criado e mantido pela Google.' },
        { img: logoReact, txt: 'Com o react conseguimos desenvolver desde aplicações web e aplicativos Mobile nativos até aplicações desktop nativas. Sem dúvida sua estrutura de desenvolvimento é o que existe de mais tecnológico quando o assunto são aplicações multiplataforma.' }
    ]
    return (
        <>
            <div className="row">
                <div className="col s12 ct-top">
                    <div className="row">
                        <div className="col s1">
                            <div className="logo">
                                <img src={logo} alt="" srcset="" />
                            </div>
                        </div>

                        <div className="col s11">
                            <div className="opcsMenu">
                                {opcsMenu.map(opc => <div className="btnMenu">{opc}</div>)}
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col s6">
                            <div className="ctTexto">
                                <h4 className="textoTop">
                                    Tenha as principais tecnologias trabalhando a seu favor. Torne suas aplicações mais rápidas e seguras.
                            </h4>

                                <h4 className="textoTop">
                                    Tecnologias que são utilizadas pela Google, Facebook, Airbnb, Netflix.
                            </h4>

                                <h4 className="textoTop">
                                    Venha para o futuro.
                            </h4>
                            </div>

                        </div>
                        <div className="col s6">
                            <div className="ctImageTop">
                                <img className="arteTop" src={artTop} alt="" srcset="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col s12 no-padding">
                    <div className="separador"></div>
                </div>
            </div>

            <div className="row">
                {
                    techs.map(tech => {
                        return (
                            <div className="col s4">
                                <div className="ctImageTech">
                                    <img src={tech.img} alt="" />
                                </div>
                                <div className="ctTxtTech">
                                    {tech.txt}
                                </div>
                            </div>
                        )
                    })
                }
            </div>

            <div className="col s12 no-padding">
                <div className="separador2"></div>
            </div>

            <div className="row no-padding ctAbout">
                <div className="col s8"></div>
                <div className="col s8"></div>
            </div>

        </>
    );
}

export default Home;