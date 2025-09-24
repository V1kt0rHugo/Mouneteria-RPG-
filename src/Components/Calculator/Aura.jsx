import { useState } from "react";

export default function AuraCalculator() {
  const [aura, setAura] = useState(0);

  const totalAura = aura * 3;

  // Base do dado (d10)
  const baseDice = 10;

  // Buff de dado a cada 5 pontos de aura (+3 no dado)
  const diceBuff = Math.floor(aura / 5) * 3;

  // Buff no bônus a cada 10 pontos de aura (+3 no bônus)
  const bonusBuff = 2 + Math.floor(aura / 10) * 3;

  // Dado final
  const finalDice = baseDice + diceBuff;

  return (
    <div>
      <h2>Aura: {aura}</h2>
      <h3>Total Aura: {totalAura}</h3>
      <h3>
        Dado Presença/Encantamento: d{finalDice} + {bonusBuff}
      </h3>

      <input
        type="number"
        value={aura}
        onChange={(e) => setAura(Number(e.target.value))}
      />
    </div>
  );
}
