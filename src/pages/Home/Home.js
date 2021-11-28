import Navbar from '../../Components/Navbar/Navbar';
import Slider from '../../Components/Slider/Slider';
import Card from '../../Components/Cards/Card';
import Search from '../../Components/Search/Search';
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
                image="https://cdn1.epicgames.com/offer/52f57f57120c440fad9bfa0e6c279317/EGS_Battlefield2042_DICE_S1_2560x1440-36f16374c9c29a18a46872795b483d72_2560x1440-36f16374c9c29a18a46872795b483d72"
                alt="Battle Field 2042"
                classificationNumber="16"
                classificationText="Contém violência e conteúdo sexual"
            />


            <Container title="Jogos no Steam">
                <Card
                    image="https://playreplay.com.br/wp-content/uploads/2019/08/no-mans-sky-beyond-vr-ps4-xbox-pc-1-e1566943409940.jpg"
                    title="No Men Sky"
                    preco="150,00"
                />
                <Card
                    image="https://playreplay.com.br/wp-content/uploads/2019/08/no-mans-sky-beyond-vr-ps4-xbox-pc-1-e1566943409940.jpg"
                    title="No Men Sky"
                    preco="150,00"
                />
                <Card
                    image="https://playreplay.com.br/wp-content/uploads/2019/08/no-mans-sky-beyond-vr-ps4-xbox-pc-1-e1566943409940.jpg"
                    title="No Men Sky"
                    preco="150,00"
                />
            </Container>
            <Footer />
        </>
    );
}