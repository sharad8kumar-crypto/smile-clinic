import { MessageCircle, Phone, CalendarCheck } from "lucide-react";
import { site } from "@/data/site";

export default function FloatingActions() {
  const tel = `tel:${site.phone.replace(/\s/g, "")}`;
  const wa = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
    "Hi, I would like to book an appointment."
  )}`;

  return (
    <>
      {/* WhatsApp button */}
      <a
        href={wa}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed right-5 bottom-24 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl transition hover:scale-110 md:bottom-6"
      >
        <MessageCircle size={28} />
      </a>

      {/* Mobile bottom bar */}
      <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-3 border-t border-brand/10 bg-white/95 p-3 backdrop-blur md:hidden">
        <a href={tel} className="flex items-center justify-center gap-2 rounded-full border border-brand/30 py-3 text-sm font-semibold">
          <Phone size={16} /> Call Now
        </a>
        <a href="#appointment" className="flex items-center justify-center gap-2 rounded-full bg-brand py-3 text-sm font-semibold text-white">
          <CalendarCheck size={16} /> Book
        </a>
      </div>
    </>
  );
}