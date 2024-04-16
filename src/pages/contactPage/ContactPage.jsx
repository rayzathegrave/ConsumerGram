import './ContactPage.css';
import Card from "../../components/card/Card.jsx";
import {isWeekday} from "../../components/card/Card.jsx";
import Announcements from "../../components/announcements/Announcements.jsx";
import Callcenter from "./../../assets/young-friendly-operator-woman-agent-600nw-712414813.webp"
import Sad from "./../../assets/1000_F_112439022_Sft6cXK9GLnzWjjIkVMj2Lt34RcKUpxm.jpg"
function ContactPage() {

    const isWeekdayNow = isWeekday();

    return (
        <>


            <article className="pimsouterbox">
                <section className="cardboxOuter">


                    <Card title="complaints" email="pim@gmail.com" number="0657615798" isWeekdayNow={isWeekdayNow}/>
                    <br/>
                    <Card title="feedback" email="reza@gmail.com" number="0657615734" isWeekdayNow={isWeekdayNow}/>
                    <br/>
                    <Card title="questions" email="reza@gmail.com" number="0657615734" isWeekdayNow={isWeekdayNow}/>
                    <br/>

                </section>
            </article>


            <article className="underbox">


                <section className="AnnouncementsboxOuter">
                    <Announcements title="Neem gratis contact op" text="Ons callcenter staat voor u klaar" src={Callcenter} alt="foto callcenter" />
                    <Announcements title="ConsumerGram stopt" text="Het geld is op" src={Sad} alt="sad smiley" />
                </section>


            </article>


        </>
    );
}

export default ContactPage;