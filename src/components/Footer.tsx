import React from 'react';
import FooterCol from "./FooterCol";

const Footer = () => {

    const footerLinksOne = [
        'Audio Description',
        'Investor Relations',
        'Legal Notice'
    ]

    const footerLinksTwo = [
        'Help Center',
        'Jobs',
        'Cookie Preferences',
    ]

    const footerLinksThree = [
        'Gift Cards',
        'Terms of Use',
        'Corporate Information',
    ]

    const footerLinksFour = [
        'Media Center',
        'Privacy',
        'Contact Us'
    ]

    return (
        <div className={'w-full h-[300px] bg-[#141414] flex flex-row items-center justify-center'}>
            <div className={'w-2/3 h-full flex flex-col justify-center items-start'}>
                <div className={'h-fit w-full flex flex-row justify-start gap-4 px-2'}>
                    <a href="/"><i className="fa-brands fa-facebook text-3xl text-white"></i></a>
                    <a href="/"><i className="fa-brands fa-instagram text-3xl text-white"></i></a>
                    <a href="/"><i className="fa-brands fa-youtube text-3xl text-white"></i></a>
                </div>
                <div className={'w-full flex flex-row justify-center items-center'}>
                    <FooterCol items={footerLinksOne}/>
                    <FooterCol items={footerLinksTwo}/>
                    <FooterCol items={footerLinksThree}/>
                    <FooterCol items={footerLinksFour}/>
                </div>
            </div>
        </div>
    );
};

export default Footer;