import { useState } from 'react'

export default function EnduranceCalculator() {
    const [endurance, setEndurance] = useState(0);

    const Health = 10 + Math.floor(endurance * 10);
    const baseDefense = Math.floor(endurance / 5 ) * 2;
    const blockDice = 6 + Math.floor(endurance / 10) * 5
    const blockDiceBonus =  Math.floor(endurance / 10) * 5
    const stamina = 1 + Math.floor(endurance / 15 )
    return(
        
        <div>
            <label>
                Pontos em Vigor : {""}
                <input
                    type="number"
                    placeholder="0"
                    onChange={(e) => setEndurance(Number(e.target.value))}
                />
            </label>

            <h2>Vida : {Health}</h2>
            <h2>Defesa Base : {baseDefense}</h2>
            <h2>Dado de Defesa : {blockDice} + {blockDiceBonus}</h2>
            <h2>Fôlego : {stamina}</h2>

        </div>

    )

}