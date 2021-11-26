import Navbar from '../../Components/Navbar/Navbar';
import Slider from '../../Components/Slider/Slider';
import Card from '../../Components/Card/Card';
import Container from '../../Components/Container/Container';
import Footer from '../../Components/Footer/Footer';
import axios from "axios";
import { useEffect, useState } from "react";

export default function Home() {
    const [games, setGames] = useState([]);
    const [mounted, setMounted] = useState(false);

    const getData = async () => {
        await axios.get("/game/findMany").then((response) => {
            if (mounted) {
                setGames(response.data);
            }
        });
    };

    useEffect(() => {
        setMounted(true);
        getData();
    }, [mounted]);
    return (
        <>
            <Navbar />
            <Slider
                image="https://cdn2.unrealengine.com/egs-farmingsimulator22preorderbundle-giantssoftware-s3-2560x1440-fe0f2c2e5147.jpg"
                alt="Farming Simulator 22"
                classificationNumber="L"
                classificationText="Coordenação de Classificação Indicativa"
            />

            <Container title="Jogos no Steam">
                <Card
                    image="https://i2.wp.com/manualdosgames.com/wp-content/uploads/2021/06/Battlefield-2042-2-1170x780.jpg"
                    title="Battlefield™ 2042"
                    preco="249,00"
                />
                <Card
                    image="https://i2.wp.com/manualdosgames.com/wp-content/uploads/2021/06/Battlefield-2042-2-1170x780.jpg"
                    title="Battlefield™ 2042"
                    preco="249,00"
                />
                <Card
                    image="https://i2.wp.com/manualdosgames.com/wp-content/uploads/2021/06/Battlefield-2042-2-1170x780.jpg"
                    title="Battlefield™ 2042"
                    preco="249,00"
                />
            </Container>
            <Footer />
        </>
    );
}