import { MessageCircle } from 'lucide-react';

const whatsappNumber = '084 278 5134';
const whatsappUrl = 'https://wa.me/27842785134?text=Hi%2C%20I%20need%20a%20quote';

export default function WhatsAppFloat() {
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-emerald-600 px-5 py-4 font-semibold text-white shadow-xl transition-colors hover:bg-emerald-700"
      aria-label={`WhatsApp us on ${whatsappNumber}`}
    >
      <MessageCircle className="h-5 w-5" />
      WhatsApp us
    </a>
  );
}
