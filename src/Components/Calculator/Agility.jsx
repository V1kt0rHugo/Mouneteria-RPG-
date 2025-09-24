import { useState } from 'react'

export default function AgilityCalculator() {
    const [agility, setAgility] = useState(0);

    const metersPerShift = Math.floor(agility / 2);
    const dice = 15 + Math.floor(agility / 5) * 2;
    const bonus = Math.floor(agility / 5);

    return (
        <div>
            <label>
                Pontos em Agilidade : {""}
                <input
                    type="number"
                    placeholder="0"
                    onChange={(e) => setAgility(Number(e.target.value))}
                />
            </label>

            <h2>Metros por Turno: {metersPerShift}</h2>
            <h2>Dado de Agilidade/Esquiva : {dice} + {bonus}</h2>

        </div>

    )

}