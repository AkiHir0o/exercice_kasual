import Card from "./Card";
import {useEffect, useState} from "react";

export default function Cards(props){

    //cardJson => liste des cartes (contient l'état) / setCardsJson => méthode qui permet de définir la nouvelle valeur de cardsJson
    const [cardsJson, setCardsJson] = useState([]);

    const [search, setSearch] = useState("");

    //Est appeler au premier affichage du return
    useEffect(() => {
        // Call API
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