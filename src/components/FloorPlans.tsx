import { useState } from 'react';
import { Home, Maximize2, Bath, Bed } from 'lucide-react';

interface FloorPlan {
  id: string;
  type: string;
  size: string;
  rooms: string;
  bathrooms: string;
  price: string;
  image: string;
}

export default function FloorPlans() {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  const plans: FloorPlan[] = [
    {
      id: '1',
      type: '3+1 Daireler',
      size: '125 m²',
      rooms: '3',
      bathrooms: '2',
      price: 'İletişime geçin',
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      id: '2',
      type: '4+1 Daireler',
      size: '165 m²',
      rooms: '4',
      bathrooms: '2',
      price: 'İletişime geçin',
      image: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      id: '3',
      type: '5+1 Dubleks',
      size: '220 m²',
      rooms: '5',
      bathrooms: '3',
      price: 'İletişime geçin',
      image: 'https://images.pexels.com/photos/1571471/pexels-photo-1571471.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
  ];

  return (
    <section id="floor-plans" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            Kat Planları
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            İhtiyacınıza uygun geniş daire seçenekleri ile hayalinizdeki evi bulun
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
              onClick={() => setSelectedPlan(plan.id)}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={plan.image}
                  alt={plan.type}
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-blue-600 text-white px-4 py-2 rounded-full font-semibold">
                  {plan.type}
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <Maximize2 className="h-5 w-5 text-blue-600" />
                    <span className="text-gray-700 font-medium">{plan.size}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Bed className="h-5 w-5 text-blue-600" />
                    <span className="text-gray-700 font-medium">{plan.rooms} Oda</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Bath className="h-5 w-5 text-blue-600" />
                    <span className="text-gray-700 font-medium">{plan.bathrooms} Banyo</span>
                  </div>
                </div>
                <div className="border-t pt-4">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-slate-800">{plan.price}</span>
                    <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                      Detay
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-6">
            Tüm dairelerimizde birinci sınıf malzemeler ve modern tasarım anlayışı
          </p>
          <button
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3 bg-slate-800 text-white rounded-lg font-semibold hover:bg-slate-700 transition-colors inline-flex items-center space-x-2"
          >
            <Home className="h-5 w-5" />
            <span>Detaylı Bilgi Alın</span>
          </button>
        </div>
      </div>
    </section>
  );
}
