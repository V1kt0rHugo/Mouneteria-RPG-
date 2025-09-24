import { useState } from 'react' ;

export default function DexterityCalculator() {
    const [dexterity, setDexterity] = useState(0);

    const weaponDamage = dexterity * 3;
    const dice = 15 + Math.floor(dexterity / 5) * 2;
    const insightDice = 10 + Math.floor(dexterity / 5) * 2;
    const bonus = Math.floor(dexterity / 10) * 2;

    return (
        <div>
            <label>
                Pontos em Destreza {""}
                <input
                    type="number"
                    placeholder="0"
                    onChange={(e) => setDexterity(Number(e.target.value))}
                />
            </label>

            <h2>Dano com Armas: {weaponDamage} </h2>
            <h2>Dado de Lutar: d{dice} + {bonus} </h2>
            <h2>Dado de Perspicácia: d{insightDice} + {bonus} </h2>

        </div>


    )


}