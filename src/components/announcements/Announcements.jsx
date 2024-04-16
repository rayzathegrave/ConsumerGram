import './Announcements.css';

function Announcements(props) {
    return (
        <>
            <div className="AnnouncementsInner">
                <h1>{props.title}</h1>
                <p> {props.text}</p>
                <img src={props.src} alt={props.alt}/>


            </div>
        </>
    );
}

export default Announcements;