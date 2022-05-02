import Card from "./Card";
import {useEffect, useState} from "react";

export default function Cards(props){

    //cardJson => liste des cartes (contient l'état) / setCardsJson => méthode qui permet de définir la nouvelle valeur de cardsJson
    const [cardsJson, setCardsJson] = useState([]);

    const [search, setSearch] = useState("");

    //Est appeler au premier affichage du return
    useEffect(() => {
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Host': 'omgvamp-hearthstone-v1.p.rapidapi.com',
                'X-RapidAPI-Key': '8cf44b880fmshe3a833fd1c7d83cp17171fjsn49f07da8bb87'
            }
        };

        fetch('https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/sets/Classic?locale=frFR', options)
            .then(response => response.json())
            .then(response => setCardsJson(response))
            .catch(err => console.error(err));
    }, [])

    return(
        <div>
            {/* Barre de recherche */}
            <input className={"inputSearch"} placeholder={"Rechercher une carte ..."} type={"text"} onInput={(e) => setSearch(e.target.value)} value={search} />
            <div className={"allCards"}>
                {cardsJson.map((cardJson, idx) => {
                    if(search === ""){
                        //Renvoie toutes les cartes
                        return <Card key={idx} id={cardJson.cardId} name={cardJson.name} text={cardJson.text}/>
                    }
                    else{
                        //Renvoie les cartes selon la recherche effectuer
                        if(cardJson.name.toLowerCase().includes(search.toLowerCase())){
                            return <Card key={idx} id={cardJson.cardId} name={cardJson.name} text={cardJson.text}/>
                        }
                    }
                })}
              </div>
        </div>
    );
}