import "./Slider.css";
import { FaAngleRight } from "react-icons/fa";
import axios from 'axios'
import { useState, useEffect  } from "react";

export default function Slider(props) {
    const [game, setGame] = useState([]);
    const [mounted, setMoounted] = useState(false);

    const getData = async () => {
        await axios.get(`/game/find/${props.id}`).then((response) => {
            if (mounted) {
                setGame(response.data);
            }
        });
    };

    useEffect(() => {
        setMoounted(true);
        getData();
    }, [mounted]);

    return (
        <div>
            <img className="image" src="https://cdn2.unrealengine.com/egs-farmingsimulator22preorderbundle-giantssoftware-s3-2560x1440-fe0f2c2e5147.jpg" alt={game.name} />
            <div className="bar">
                <span className="disponivel">Já está disponível</span>
                <button className="mais">
                    <a href={props.cardLink}>
                        Saiba mais <FaAngleRight />{" "}
                    </a>
                </button>
                <div className="classification">
                    <div className="square">{props.classificationNumber}</div>
                    <span className="class-text">
                        {props.classificationText}
                    </span>
                </div>
            </div>
        </div>
    );
}