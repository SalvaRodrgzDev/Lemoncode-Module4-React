import React from "react";
import { useParams } from "react-router-dom";
import { CharacterContext } from "../core/character-provider";

export const CardDetail: React.FC = () => {
    const { id } = useParams<Record<string, string>>();
    const corporation = React.useContext(CharacterContext)
    return (
        <>
            <h2>Hello from Detail page</h2>
            <h3>User Id: {id}</h3>
        </>
    )
}