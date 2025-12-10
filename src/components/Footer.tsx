import { Home, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    kurumsal: [
      { label: 'Hakkımızda', href: '#about' },
      { label: 'Projelerimiz', href: '#floor-plans' },
      { label: 'Kurumsal', href: '#' },
      { label: 'Kariyer', href: '#' },
    ],
    hizmetler: [
      { label: 'Satış', href: '#contact' },
      { label: 'Kiralama', href: '#' },
      { label: 'Danışmanlık', href: '#' },
      { label: 'Yönetim', href: '#' },
    ],
    yasal: [
      { label: 'Gizlilik Politikası', href: '#' },
      { label: 'Kullanım Koşulları', href: '#' },
      { label: 'KVKK', href: '#' },
      { label: 'Çerez Politikası', href: '#' },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Youtube, href: '#', label: 'Youtube' },
  ];

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Home className="h-8 w-8 text-blue-400" />
              <span className="text-2xl font-bold">İnallar Hayat</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Bursa'nın en prestijli yaşam kompleksi. Modern mimari, lüks detaylar ve
              sosyal yaşam alanlarıyla hayalinizdeki evi sunuyoruz.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="bg-slate-800 p-3 rounded-full hover:bg-blue-600 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Kurumsal</h3>
            <ul className="space-y-2">
              {footerLinks.kurumsal.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Hizmetler</h3>
            <ul className="space-y-2">
              {footerLinks.hizmetler.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Yasal</h3>
            <ul className="space-y-2">
              {footerLinks.yasal.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            {currentYear} İnallar Hayat. Tüm hakları saklıdır.
          </p>
          <p className="text-gray-400 text-sm">
            30 yıllık güven ve kalite
          </p>
        </div>
      </div>
    </footer>
  );
}
