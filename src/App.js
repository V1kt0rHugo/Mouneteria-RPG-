import { GlobalStyle } from './Components/Styles/Global.Styles';
import StrengthCalculator from './Components/Calculator/Strength';
import DexterityCalculator from './Components/Calculator/Dexterity';
import MagicCalculator from './Components/Calculator/Magic';
import AuraCalculator from './Components/Calculator/Aura';
import IntellectCalculator from './Components/Calculator/Intellect';
import AgilityCalculator from './Components/Calculator/Agility';
import EnduranceCalculator from './Components/Calculator/Endurance';

function App() {
  return (
    <>
      <GlobalStyle/>
    <div className='calculator-container'>
      <h1>Mouneteria Stats Calculator</h1>
     <div className='calculator-box'><StrengthCalculator/></div>
     <div className='calculator-box'><DexterityCalculator/></div>
     <div className='calculator-box'><MagicCalculator/></div>
     <div className='calculator-box'><AuraCalculator/></div>
     <div className='calculator-box'><IntellectCalculator/></div>
     <div className='calculator-box'><AgilityCalculator/></div>
     <div className='calculator-box'><EnduranceCalculator/></div>
     
    </div>
    </>
  );
}

export default App;
