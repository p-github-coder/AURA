import PlanBelow from '../components/PlanBelow';
import PlanHero from '../components/PlanHero';
import PopularTrip from '../components/PopularTrip';
import StartPlanning from '../components/StartPlanning';


function Plan() {
  return (
    <main>
      <PlanHero />
       <StartPlanning />
     <PopularTrip />
     <PlanBelow/> 
    </main>
  );
}

export default Plan;