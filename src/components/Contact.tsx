import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Telefon',
      content: '+90 (224) 123 45 67',
      link: 'tel:+902241234567',
    },
    {
      icon: Mail,
      title: 'E-posta',
      content: 'info@pastelinsaat.com.tr',
      link: 'mailto:info@pastelinsaat.com.tr',
    },
    {
      icon: MapPin,
      title: 'Adres',
      content: 'Bursa, Nilüfer',
      link: '#',
    },
  ];

  return (
    <section id="contact" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            İletişim
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hayalinizdeki eve kavuşmak için bizimle iletişime geçin
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {contactInfo.map((info, index) => (
            <a
              key={index}
              href={info.link}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center group"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full mb-4 group-hover:bg-blue-700 transition-colors">
                <info.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-2">{info.title}</h3>
              <p className="text-gray-600">{info.content}</p>
            </a>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h3 className="text-2xl font-bold text-slate-800 mb-6">Bize Ulaşın</h3>
            {submitted ? (
              <div className="bg-green-50 border border-green-200 text-green-800 px-6 py-4 rounded-lg">
                <p className="font-medium">Mesajınız başarıyla gönderildi!</p>
                <p className="text-sm mt-1">En kısa sürede size dönüş yapacağız.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Ad Soyad
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    E-posta
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Telefon
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Mesajınız
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
                >
                  <Send className="h-5 w-5" />
                  <span>Gönder</span>
                </button>
              </form>
            )}
          </div>

          <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl shadow-xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-6">Satış Ofisi</h3>
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold mb-2">Çalışma Saatleri</h4>
                <p className="text-blue-100">Pazartesi - Cumartesi: 09:00 - 18:00</p>
                <p className="text-blue-100">Pazar: 10:00 - 17:00</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Adres</h4>
                <p className="text-blue-100">
                  Pastel İnşaat Satış Ofisi<br />
                  Nilüfer, Bursa<br />
                  Türkiye
                </p>
              </div>
              <div className="pt-6 border-t border-blue-400">
                <p className="text-sm text-blue-100 mb-4">
                  Ofisimize gelerek proje hakkında detaylı bilgi alabilir ve örnek daireleri gezebilirsiniz.
                </p>
                <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                  Randevu Al
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
