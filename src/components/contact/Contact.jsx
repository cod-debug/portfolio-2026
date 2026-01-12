import Container from "../Container";
import Separator from "../Separator";

import emailIconImg from "../../assets/icons/email.png";
import phoneIconImg from "../../assets/icons/phone.png";
import mappinIconImg from "../../assets/icons/mappin.png";

function Contact(){
    return(
        <Container id="contact">
            <div className="contact-section rounded-xl md:col-span-4 p-1 text-primary-accent my-8">
                <div className="contact-inner h-full rounded-xl p-4">
                    <div className="flex flex-col gap-4 h-full">
                        <div className="flex items-center font-bold gap-4">
                            <div className="flex gap-2">
                                <div className="skills-bullet"></div> 
                                <div className="skills-bullet"></div>
                            </div>
                            <div>GET IN TOUCH</div>
                            <Separator className="grow" />
                        </div>
                        <div className="grow">
                            <div className="grid grid-cols-1 md:grid-cols-3 text-muted-labels">
                                <div className="flex items-center gap-4 px-4 md:border-r border-muted-labels/30">
                                    <img src={emailIconImg} alt="Email Icon" className="w-6 h-6" />
                                    <a href="mailto:roy.duenas.sdtpnoli@gmail.com">roy.duenas.sdtpnoli@gmail.com</a>
                                </div>
                                <div className="flex items-center gap-4 px-4 md:border-r border-muted-labels/30">
                                    <img src={phoneIconImg} alt="Phone Icon" className="w-6 h-6" />
                                    <a href="tel:+639633205624">+639633205624</a>
                                </div>
                                <div className="flex items-center gap-4 px-4 ">
                                    <img src={mappinIconImg} alt="Map Pin Icon" className="w-6 h-6" />
                                    <div>Barangay Manalad, Ilog, Negros Occidental, Philippines 6109</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Contact;