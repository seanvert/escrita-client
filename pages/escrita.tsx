import React from "react";
import Atividade from "../lib/Atividades"
import Main from "../layouts/Main";

const Escrita: React.FC = (props) => {
    return (
        <Main title="Atividade">
                <Atividade />
        </Main>
    );
}

export default Escrita;
