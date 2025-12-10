import { Quote } from 'lucide-react';

export default function PresidentMessage() {
  return (
    <section id="president-message" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            Başkanın Mesajı
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Yönetim Kurulu Başkanı"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-2xl font-bold mb-1">Ahmet Yılmaz</h3>
                <p className="text-blue-200">Yönetim Kurulu Başkanı</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <Quote className="absolute -top-4 -left-4 h-16 w-16 text-blue-200 opacity-50" />
            <div className="relative bg-white rounded-2xl p-8 shadow-xl">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Değerli Müşterilerimiz,
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Pastel İnşaat olarak, 25 yıllık tecrübemizle sektörün en kaliteli ve
                güvenilir projelerini hayata geçirmenin gururunu yaşıyoruz. Her bir projemizde,
                müşterilerimizin memnuniyetini ve yaşam kalitesini ön planda tutuyoruz.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Bu projemizde de, modern mimari anlayışı ve çağdaş yaşam standartlarını
                bir araya getirerek, sizler için özel bir yaşam alanı oluşturduk. Her detayı
                özenle planlanan bu proje, aileniz için güvenli, konforlu ve prestijli bir
                yaşam sunuyor.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Bizimle bu özel projenin bir parçası olduğunuz için teşekkür eder, sağlıklı
                ve mutlu günler dileriz.
              </p>
              <div className="mt-8 pt-6 border-t border-gray-200">
                <p className="text-xl font-bold text-slate-800">Ahmet Yılmaz</p>
                <p className="text-blue-600 font-medium">Yönetim Kurulu Başkanı</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
