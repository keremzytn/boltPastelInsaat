import { Dumbbell, Waves, Trees, ShoppingBag, Coffee, Bike, Shield, Activity } from 'lucide-react';

export default function Amenities() {
  const amenities = [
    {
      icon: Dumbbell,
      title: 'Fitness Center',
      description: 'Son teknoloji ekipmanlarla donatılmış modern spor salonu',
    },
    {
      icon: Waves,
      title: 'Yüzme Havuzu',
      description: 'Kapalı ve açık yüzme havuzları ile 4 mevsim keyif',
    },
    {
      icon: Trees,
      title: 'Yeşil Alanlar',
      description: 'Geniş peyzaj alanları ve çocuk oyun parkları',
    },
    {
      icon: ShoppingBag,
      title: 'Alışveriş Merkezi',
      description: 'Kapınızın önünde modern alışveriş imkanları',
    },
    {
      icon: Coffee,
      title: 'Cafe & Restaurant',
      description: 'Sosyal yaşam alanları ve lezzetli yemek seçenekleri',
    },
    {
      icon: Bike,
      title: 'Bisiklet Yolları',
      description: 'Güvenli bisiklet yolları ve park alanları',
    },
    {
      icon: Shield,
      title: '7/24 Güvenlik',
      description: 'Kameralı güvenlik sistemi ve profesyonel güvenlik ekibi',
    },
    {
      icon: Activity,
      title: 'Spor Alanları',
      description: 'Basketbol, tenis ve voleybol sahaları',
    },
  ];

  return (
    <section id="amenities" className="py-20 bg-gradient-to-br from-slate-800 to-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Sosyal Olanaklar
          </h2>
          <div className="w-24 h-1 bg-blue-400 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Hayatınızı kolaylaştıran ve keyifli kılan birbirinden özel sosyal tesisler
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {amenities.map((amenity, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2 border border-white/20"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 bg-blue-500 rounded-full mb-4">
                <amenity.icon className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">{amenity.title}</h3>
              <p className="text-gray-300 text-sm">{amenity.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-400 mb-2">15,000 m²</div>
              <div className="text-gray-300">Sosyal Tesis Alanı</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-400 mb-2">25,000 m²</div>
              <div className="text-gray-300">Yeşil Alan</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-400 mb-2">500+</div>
              <div className="text-gray-300">Araç Kapasiteli Otopark</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
