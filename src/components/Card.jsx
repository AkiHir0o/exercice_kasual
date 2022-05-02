import {useState} from "react";

export default function Card(props){

    const [visible, setVisible] = useState(true);

    if(visible){
        return(
            <div className={"tableCards"}>
                <h5 className={"cardName"}> Nom: {props.name} </h5>
                <img className={"cardImg"} onError={() => setVisible(false)} src={"https://art.hearthstonejson.com/v1/render/latest/frFR/256x/" + props.id + ".png"}/>
            </div>
        );
    }
    else{
        return(
            <div className={"tableCardsError"}>
                <h5  className={"cardNameError"}>   Nom: {props.name} <br/> <br/>  Description: {props.text} </h5>
                <img className={"cardImgError"} onError={() => setVisible(false)} src={"/img-error.png"} />
                <p className={"msgError"}> Cette carte ne contient pas d'image</p>
            </div>
        );
    }

}