import SmartCard from "./components/SmartCard";
import { cardData } from "./data";


const App=()=> {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl text-blue-700 font-serif text-center font-extrabold mb-2">SmartCard UI</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {cardData.map((card) => (
          <SmartCard
            key={card.id}
            title={card.title}
            description={card.description}
            imageUrl={card.imageUrl}
          >
          </SmartCard>
        ))}
      </div>
    </div>
  );
}
export default App;


