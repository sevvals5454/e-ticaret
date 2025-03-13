import React, { useEffect, useState } from 'react';
import cards from '../api/cards.json'; 

export default function Cards() {
  const [cardsData, setCardsData] = useState([]); 

  useEffect(() => { 
    setCardsData(cards); 
  }, []);

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 max-w-full px-4 md:px-0 gap-4">
        {cardsData.length > 0 && cardsData.map(card => (
            <div key={card.id} className="bg-white p-14 rounded-lg shadow-sm flex flex-col items-center text-center">
                <img className="w-[150px] h-[150px] mb-6" src={card.image} alt={card.title} />
                <h6 className="font-semibold text-lg text-primary-brand-color">{card.title}</h6>
                <p className="mt-2 text-sm text-gray-700">{card.description}</p>
            </div>
        ))}
    </div>
  );
}
