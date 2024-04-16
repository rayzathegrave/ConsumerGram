import './Card.css';


export function isWeekday() {
    const date = new Date();
    const day = date.getDay(); //geeft false als het weekend is
    return day >= 1 && day <= 5; // geeft true als de dag tussen maandag (1) en vrijdag (5) is
}

function Card(props) {
    return (
        <>
            <div className="cardboxInner">
                <h1>{props.title}</h1>
                <p> email: {props.email}</p>
                <p> tel: {props.number}</p>
                <p> Is available? {props.isWeekdayNow ? "Yes" : "No"}</p>
            </div>
        </>
    );
}

export default Card;