export const site = {
  name: "SmileCare Dental Clinic",
  tagline: "Painless dentistry. Confident smiles.",
  phone: "+91 98765 43210",
  whatsapp: "919876543210",
  email: "hello@smilecare.in",
  address: "Near City Mall, Mathura, Uttar Pradesh",
  timings: [
    { day: "Mon - Sat", time: "10:00 AM - 8:00 PM" },
    { day: "Sunday", time: "Closed" },
  ],
};
export const services = [
  { icon: "sparkles", title: "Cleaning & Whitening", desc: "Polish, scaling and safe whitening for a brighter smile.", price: "From ₹800" },
  { icon: "stethoscope", title: "Root Canal (RCT)", desc: "Painless single-sitting root canal with modern rotary tools.", price: "From ₹3,500" },
  { icon: "smile", title: "Braces & Aligners", desc: "Metal, ceramic and clear aligners to straighten your teeth.", price: "From ₹25,000" },
  { icon: "crown", title: "Crowns & Implants", desc: "Long-lasting, natural-looking replacements for missing teeth.", price: "From ₹6,000" },
  { icon: "baby", title: "Kids Dentistry", desc: "Friendly, fear-free care for children of all ages.", price: "From ₹500" },
  { icon: "shield", title: "Emergency Care", desc: "Toothache or injury? Same-day appointments available.", price: "Call us" },
];
export const doctor = {
  name: "Dr. Aarav Sharma",
  title: "BDS, MDS (Endodontics)",
  experience: "12+ years experience",
  bio: "Dr. Sharma believes dental visits should never be scary. With modern equipment and a patient-first approach, he has treated over 5,000 patients with gentle, long-lasting results.",
  credentials: ["Root Canal Specialist", "Implant Certified", "Painless Dentistry"],
};

export const testimonials = [
  {
    name: "Priya Verma",
    treatment: "Root Canal",
    rating: 5,
    quote: "I was very scared of RCT, but the doctor made it completely painless. Finished in one sitting!",
  },
  {
    name: "Rahul Gupta",
    treatment: "Braces",
    rating: 5,
    quote: "Clear pricing, no hidden charges, and my smile has changed so much in 8 months. Highly recommended.",
  },
  {
    name: "Neha Singh",
    treatment: "Kids Dentistry",
    rating: 5,
    quote: "My 6 year old actually asks to go to the dentist now. The staff is so friendly with kids.",
  },
];
export const beforeAfter = {
  treatment: "Teeth Whitening & Cleaning",
  note: "Drag the slider to see the difference. Results may vary from patient to patient.",
};

export const faqs = [
  {
    q: "Is a root canal treatment painful?",
    a: "Not at all. With modern anesthesia and rotary tools, a root canal is almost painless, and most cases are completed in a single sitting.",
  },
  {
    q: "How do I book an appointment?",
    a: "You can use the booking form on this page, message us on WhatsApp, or simply call the clinic. Same-day slots are usually available.",
  },
  {
    q: "How much will my treatment cost?",
    a: "Starting prices are listed in our Services section. The final cost is confirmed after your check-up, and there are never any hidden charges.",
  },
  {
    q: "Do you treat children?",
    a: "Yes. Our kids dentistry service offers a friendly, fear-free experience for children of all ages.",
  },
  {
    q: "What should I do in a dental emergency?",
    a: "If you have severe pain, swelling or an injury, call us right away. We see emergency cases on the same day.",
  },
];
export const timeSlots = [
  "10:00 AM", "11:00 AM", "12:00 PM", "01:00 PM",
  "03:00 PM", "04:00 PM", "05:00 PM", "06:00 PM", "07:00 PM",
];
export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";