import Container from "../Container";
import Separator from "../Separator";

function Contact(){
    return(
        <Container>
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
                            <p className="text-muted-labels">Contact info here soon...</p>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Contact;