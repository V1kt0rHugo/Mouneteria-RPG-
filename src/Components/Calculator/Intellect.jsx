import { useState } from 'react' ;

export default function IntellectCalculator() {
    const [intellect, setIntellect] = useState(0);

    const costReduction = intellect
    const dice = 20 + Math.floor(intellect / 5) * 4;
    const bonus = Math.floor(intellect / 5 ) * 2;
    const blindSpot = Math.floor(intellect / 15 )

    return (
        <div>
            <label>
                Pontos em Intelecto {""}
                <input
                    type="number"
                    placeholder="0"
                    onChange={(e) => setIntellect(Number(e.target.value))}
                />
            </label>

            <h2>Dado de Intelecto : d{dice} + {bonus} </h2>
            <h2>Redução do Custo de Mana : {costReduction} </h2>
            <h2>Usos de Ponto Cego: d{blindSpot} </h2>

        </div>


    )


}