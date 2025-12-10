import { Building2, Award, Users, TrendingUp } from 'lucide-react';

export default function About() {
  const features = [
    {
      icon: Building2,
      title: '30 Yıllık Tecrübe',
      description: 'Otomotiv, sigorta ve inşaat sektörlerinde güvenilir hizmet',
    },
    {
      icon: Award,
      title: 'Kalite Standartları',
      description: 'Uluslararası kalite ve güvenlik sertifikaları',
    },
    {
      icon: Users,
      title: 'Mutlu Müşteriler',
      description: '1000+ mutlu aile bizim için en büyük başarı',
    },
    {
      icon: TrendingUp,
      title: 'Değer Artışı',
      description: 'Lokasyon ve kalite ile garanti edilmiş yatırım',
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            Hakkımızda
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            İnallar Grubu olarak 30 yılı aşkın süredir farklı sektörlerde hizmet veriyor,
            güven ve kalite anlayışımızla sizlere hayalinizdeki yaşamı sunuyoruz.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-xl bg-gradient-to-br from-slate-50 to-blue-50 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full mb-4">
                <feature.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-bold text-slate-800 mb-6">
              Modern Yaşamın Merkezi
            </h3>
            <p className="text-gray-600 mb-4 leading-relaxed">
              İnallar Hayat, Bursa'nın en değerli lokasyonunda konumlanmış, sosyal yaşam
              alanları ve modern mimarisiyle öne çıkan bir yaşam kompleksidir.
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              3+1'den 5+1'e kadar değişen daire seçenekleri, geniş sosyal tesisler,
              spor alanları ve yeşil alanlarıyla ailenize hak ettiği yaşam konforunu sunuyoruz.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Her detayı düşünülmüş iç mekan tasarımları, kaliteli malzeme seçimleri ve
              güvenli yaşam alanlarıyla geleceğinize yatırım yapın.
            </p>
          </div>
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Modern Building"
              className="rounded-2xl shadow-2xl w-full h-96 object-cover"
            />
            <div className="absolute -bottom-6 -left-6 bg-blue-600 text-white p-6 rounded-xl shadow-xl">
              <div className="text-4xl font-bold">1000+</div>
              <div className="text-sm">Mutlu Aile</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
