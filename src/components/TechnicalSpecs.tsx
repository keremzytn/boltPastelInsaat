import { Building2, Home, Ruler, Trees, Car, Shield, Zap, Droplets } from 'lucide-react';

export default function TechnicalSpecs() {
  const specs = [
    {
      icon: Building2,
      title: 'Blok Bilgileri',
      items: [
        '3 Adet Blok',
        'Her blokta 12 Kat',
        'Toplam 144 Daire',
        'Zemin + 11 Kat Yükseklik'
      ]
    },
    {
      icon: Home,
      title: 'Daire Tipleri',
      items: [
        '2+1: 95-110 m²',
        '3+1: 130-145 m²',
        '4+1: 180-200 m²',
        'Dubleks: 220-250 m²'
      ]
    },
    {
      icon: Ruler,
      title: 'Arsa Bilgileri',
      items: [
        'Toplam Alan: 15.000 m²',
        'İnşaat Alanı: 8.500 m²',
        'Yeşil Alan: 4.500 m²',
        'Sosyal Tesis: 2.000 m²'
      ]
    },
    {
      icon: Trees,
      title: 'Peyzaj',
      items: [
        'Geniş Yeşil Alanlar',
        'Yürüyüş Parkurları',
        'Çocuk Oyun Alanları',
        'Oturma Alanları'
      ]
    },
    {
      icon: Car,
      title: 'Otopark',
      items: [
        '200 Araçlık Kapalı Otopark',
        'Her daireye 2 araçlık alan',
        'Ziyaretçi otoparkı',
        'Elektrikli araç şarj ünitesi'
      ]
    },
    {
      icon: Shield,
      title: 'Güvenlik',
      items: [
        '7/24 Güvenlik',
        'Kamera Sistemi',
        'Kartlı Geçiş Sistemi',
        'Yangın Alarm Sistemi'
      ]
    },
    {
      icon: Zap,
      title: 'Alt Yapı',
      items: [
        'Jeneratör Sistemi',
        'Fiber İnternet Alt Yapısı',
        'Merkezi Uydu Sistemi',
        'Akıllı Ev Sistemleri'
      ]
    },
    {
      icon: Droplets,
      title: 'Yapı Sistemi',
      items: [
        'A+ Enerji Sınıfı',
        'Isı ve Ses Yalıtımı',
        'Merkezi Isıtma Sistemi',
        'Yerden Isıtma'
      ]
    }
  ];

  const materials = [
    { title: 'Dış Cephe', detail: 'Isı Yalıtımlı Cephe Sistemleri, Doğal Taş Kaplama' },
    { title: 'İç Kapılar', detail: 'Amerikan Panel Kapı, Beyaz Lakli' },
    { title: 'Pencereler', detail: 'PVC Doğrama, Çift Cam, Sineklik' },
    { title: 'Zemin', detail: 'Salon-Oda: Laminant Parke, Mutfak-Banyo: 1. Sınıf Seramik' },
    { title: 'Mutfak', detail: 'Granit Tezgah, Ankastre Set (Fırın, Ocak, Davlumbaz)' },
    { title: 'Banyo', detail: '1. Sınıf Seramik, Duşakabin, Klozet, Lavabo, Bataryalar' },
    { title: 'Boyalar', detail: 'Plastik İç Cephe Boyası, Alçı Tavan' },
    { title: 'Elektrik', detail: 'Bakır Kablolu Tesisat, A Kalite Anahtar/Priz' }
  ];

  return (
    <section id="technical-specs" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            Teknik Özellikler
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Projenin tüm detayları ve kullanılan kaliteli malzemeler
          </p>
        </div>

        {/* Genel Özellikler */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {specs.map((spec, index) => {
            const Icon = spec.icon;
            return (
              <div
                key={index}
                className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="bg-blue-600 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-4">{spec.title}</h3>
                <ul className="space-y-2">
                  {spec.items.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Kullanılan Malzemeler */}
        <div className="bg-gradient-to-br from-slate-800 to-blue-900 rounded-2xl p-8 md:p-12 text-white">
          <h3 className="text-3xl font-bold mb-8 text-center">Kullanılan Malzemeler</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {materials.map((material, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-colors"
              >
                <h4 className="text-xl font-bold text-blue-300 mb-2">{material.title}</h4>
                <p className="text-gray-200">{material.detail}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Teslim Bilgileri */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <div className="bg-blue-600 rounded-xl p-6 text-white text-center">
            <div className="text-4xl font-bold mb-2">2025</div>
            <div className="text-xl">Teslim Tarihi</div>
          </div>
          <div className="bg-slate-800 rounded-xl p-6 text-white text-center">
            <div className="text-4xl font-bold mb-2">Anahtar Teslim</div>
            <div className="text-xl">Teslim Şekli</div>
          </div>
          <div className="bg-blue-600 rounded-xl p-6 text-white text-center">
            <div className="text-4xl font-bold mb-2">2 Yıl</div>
            <div className="text-xl">Yapı Garantisi</div>
          </div>
        </div>
      </div>
    </section>
  );
}
