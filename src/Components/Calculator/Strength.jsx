import { useState } from 'react';


export default function StrengthCalculator() {
    const [strength, setStrength] = useState(0);

    const physicalDamage = strength * 3;
    const dice = 15 + Math.floor(strength / 5) * 2;
    const bonus = Math.floor(strength / 10) * 2;

    return (
        <div>

            <label>
                Pontos em Força:{" "}
                <input
                    type="number"
                    placeholder="0"
                    onChange={(e) => setStrength(Number(e.target.value))}
                />
            </label>

            <h2>Dano Bruto: {physicalDamage}</h2>
            <h2>
                Dado de lutar: d{dice} + {bonus}
            </h2>
        </div>


    );
}
