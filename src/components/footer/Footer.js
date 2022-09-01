import FooterNav from "./FooterNav";
import LeftWidget from "./LeftWidget";
import FooterWidget from "./Widget";

export default function Footer() {

    const footerBgImg = "img/bg-img/1.jpg";
    const footerBgShape = "img/core-img/shape1.png";

    return(
        <footer className="footer-area pb-120 pt-120" style={{backgroundImage: `url('${process.env.PUBLIC_URL}/${footerBgImg}')`}}>
            
            {/* Background Shape */}
            <img className="footer-bg-shape" src={`${process.env.PUBLIC_URL}/${footerBgShape}`} alt="Shape" />
            
            <div className="container">
                <div className="row">
                    {/* Footer Widget */}
                    <LeftWidget 
                        lightLogo="img/core-img/logo-nft.png" 
                        darkLogo="img/core-img/logo-nft.png" 
                        subText="Final project presented for the Ethereum Developer Program course at Platzi." 
                        contactInfo=""                        
                        socialVisibility="hidden" // try 'visible' or 'hidden'
                        socialTitle="" 
                        socialLists={[
                            {
                                tootipPosition: "top",
                                title: "Facebook",
                                icon: "img/core-img/icons8-facebook.svg",
                                url: "/"
                            },
                            {
                                tootipPosition: "top",
                                title: "Twitter",
                                icon: "img/core-img/icons8-twitter.svg",
                                url: "/"
                            },
                            {
                                tootipPosition: "top",
                                title: "Instagram",
                                icon: "img/core-img/icons8-instagram.svg",
                                url: "/"
                            },
                            {
                                tootipPosition: "top",
                                title: "Slack",
                                icon: "img/core-img/icons8-slack.svg",
                                url: "/"
                            },
                            {   
                                tootipPosition: "top",
                                title: "Youtube",
                                icon: "img/core-img/icons8-player.svg",
                                url: "/"
                            }
                        ]} 
                        newsletterVisibility="hidden" // try 'visible' or 'hidden'
                    />

                    {/* Footer Widget */}
                    <div className="col-12 col-lg-7">
                        <div className="row g-4">

                            {/* Single Widget */}
                            <FooterWidget
                                widgetTitle="Team" 
                                navList={[
                                    {
                                        text: "Anas Bouhanassa",
                                        url: ""
                                    },
                                    {
                                        text: "Santiago Somoza",
                                        url: ""
                                    },
                                    {
                                        text: "Aitor Zaldua",
                                        url: ""
                                    },
                                    {
                                        text: "Renny Petit",
                                        url: ""
                                    },
                                    {
                                        text: "Andrés Diaz ",
                                        url: ""
                                    },
                            
                                ]}
                            />

                            

                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="copywrite-wrapper d-lg-flex align-items-lg-center justify-content-lg-between">
                    
                    {/* Copywrite Text */}
                    <div className="copywrite-text text-center text-lg-start mb-3 mb-lg-0">
                        <p className="mb-0">{new Date().getFullYear()} Creado con mucha ilusión. <a href="https://themeforest.net/user/designing-world/portfolio" target="_blank" rel="noreferrer">Gracias!</a></p>
                    </div>

                    {/* Footer Nav */}
                    <FooterNav 
                        navList={[
                            {
                                title: "Contact",
                                link: "/contact"
                            },
                            {
                                title: "About Us",
                                link: "/about"
                            }
                        ]}
                    />
                    
                </div>
            </div>
        </footer>
    )
}