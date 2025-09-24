import { useState } from 'react'

export default function MagicCalculator() {
    const [magic, setMagic] = useState(0);

    const magicDamage = magic * 4;
    const mana = magic * 3;
    const bonus = Math.floor(magic / 5) * 2;
    const dice = 16 + Math.floor(magic / 10) * 2;
    

    return (
        <div>
            <label>
                Pontos em Magia: {""}
                <input
                    type="number"
                    placeholder="0"
                    onChange={(e) => setMagic(Number(e.target.value))}
                />
            </label>

            <h2>Dano Mágico: {magicDamage}</h2>
            <h2>Mana: {mana}</h2>
            <h2> Dado de Magia: d{dice} + {bonus}</h2>
        </div>

    )

}