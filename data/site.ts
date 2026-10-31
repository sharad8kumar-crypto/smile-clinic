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
  { slug: "cleaning-whitening", icon: "sparkles", title: "Cleaning & Whitening", desc: "Polish, scaling and safe whitening for a brighter smile.", price: "From ₹800" },
  { slug: "root-canal", icon: "stethoscope", title: "Root Canal (RCT)", desc: "Painless single-sitting root canal with modern rotary tools.", price: "From ₹3,500" },
  { slug: "braces-aligners", icon: "smile", title: "Braces & Aligners", desc: "Metal, ceramic and clear aligners to straighten your teeth.", price: "From ₹25,000" },
  { slug: "crowns-implants", icon: "crown", title: "Crowns & Implants", desc: "Long-lasting, natural-looking replacements for missing teeth.", price: "From ₹6,000" },
  { slug: "kids-dentistry", icon: "baby", title: "Kids Dentistry", desc: "Friendly, fear-free care for children of all ages.", price: "From ₹500" },
  { slug: "emergency-care", icon: "shield", title: "Emergency Care", desc: "Toothache or injury? Same-day appointments available.", price: "Call us" },
];

type ServiceDetail = {
  intro: string;
  duration: string;
  benefits: string[];
  steps: { title: string; desc: string }[];
};

export const serviceDetails: Record<string, ServiceDetail> = {
  "cleaning-whitening": {
    intro: "Professional scaling, polishing and safe whitening that remove plaque and stains, leaving your teeth cleaner, brighter and healthier.",
    duration: "About 45 minutes",
    benefits: ["Removes plaque, tartar and surface stains", "Helps prevent gum disease and bad breath", "A visibly brighter smile in a single visit"],
    steps: [
      { title: "Quick check-up", desc: "We examine your teeth and gums to plan the right cleaning." },
      { title: "Scaling & polishing", desc: "Ultrasonic cleaning gently removes plaque and tartar." },
      { title: "Whitening", desc: "A safe whitening gel brightens your smile without harming enamel." },
    ],
  },
  "root-canal": {
    intro: "A modern, comfortable procedure that saves an infected tooth instead of removing it, relieving pain and protecting your natural smile.",
    duration: "60 to 90 minutes",
    benefits: ["Relieves severe tooth pain", "Saves your natural tooth", "Usually completed in a single sitting"],
    steps: [
      { title: "Diagnosis & X-ray", desc: "A digital X-ray shows the exact condition of the tooth." },
      { title: "Painless cleaning", desc: "Under local anesthesia, the infected pulp is removed with rotary tools." },
      { title: "Seal & protect", desc: "The tooth is sealed and, if needed, protected with a crown." },
    ],
  },
  "braces-aligners": {
    intro: "Straighten your teeth with metal braces, ceramic braces or clear aligners, planned carefully around your face, bite and lifestyle.",
    duration: "Treatment plans usually run 8 to 18 months",
    benefits: ["Straighter teeth and a healthier bite", "Metal, ceramic and clear aligner options", "Easier cleaning and better gum health"],
    steps: [
      { title: "Consultation & scan", desc: "We assess your teeth and discuss your goals and budget." },
      { title: "Custom treatment plan", desc: "You see the planned timeline and the options before starting." },
      { title: "Regular adjustments", desc: "Short follow-up visits keep your treatment right on track." },
    ],
  },
  "crowns-implants": {
    intro: "Durable, natural-looking crowns and implants that restore chewing strength and bring back a complete, confident smile.",
    duration: "Usually 2 to 3 visits",
    benefits: ["Restores chewing strength and appearance", "Looks and feels like a natural tooth", "Long-lasting with proper care"],
    steps: [
      { title: "Assessment & planning", desc: "X-rays and a check-up decide the best option for you." },
      { title: "Placement", desc: "The crown is prepared or the implant is placed with care." },
      { title: "Final fit", desc: "Your new tooth is shaped and fitted to match your smile." },
    ],
  },
  "kids-dentistry": {
    intro: "Gentle, friendly dental care that helps children feel relaxed and builds healthy habits from an early age.",
    duration: "About 30 minutes",
    benefits: ["A gentle, fear-free approach", "Preventive care such as sealants and fluoride", "Simple brushing and diet guidance for parents"],
    steps: [
      { title: "Meet & greet", desc: "Your child gets comfortable with the clinic and the team first." },
      { title: "Gentle check-up", desc: "A quick, painless examination of teeth and gums." },
      { title: "Healthy habits", desc: "We show kids and parents easy ways to keep teeth strong." },
    ],
  },
  "emergency-care": {
    intro: "Severe toothache, swelling or an injury? We make room for urgent cases so you get relief as quickly as possible.",
    duration: "Same-day appointments",
    benefits: ["Same-day slots for urgent cases", "Fast relief from pain and swelling", "Care for broken, chipped or knocked-out teeth"],
    steps: [
      { title: "Call us", desc: "Tell us what happened and we will guide you right away." },
      { title: "Quick assessment", desc: "We find the cause of the problem without delay." },
      { title: "Immediate treatment", desc: "Pain relief first, then the right treatment plan." },
    ],
  },
};
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
export const whyUs = [
  { icon: "heart", size: "lg", title: "Gentle, painless care", desc: "Modern anesthesia, calm clinic atmosphere and a patient-first approach, so every visit feels comfortable from start to finish." },
  { icon: "scan", size: "sm", title: "Digital X-Ray", desc: "Instant, low-radiation imaging for accurate diagnosis." },
  { icon: "rupee", size: "sm", title: "Transparent pricing", desc: "Know the cost before treatment begins. No surprises." },
  { icon: "shield", size: "wide", title: "Hospital-grade sterilization", desc: "Every instrument is sterilized and sealed for each patient, following strict infection-control protocols." },
  { icon: "clock", size: "wide", title: "Same-day appointments", desc: "Toothache or emergency? We make room for urgent cases the same day." },
  { icon: "baby", size: "sm", title: "Kid-friendly", desc: "Fear-free dentistry for children." },
  { icon: "award", size: "sm", title: "Experienced specialists", desc: "12+ years of clinical experience." },
];
export const finder = {
  concerns: [
    { label: "Tooth pain or swelling", slug: "emergency-care" },
    { label: "Stained or yellow teeth", slug: "cleaning-whitening" },
    { label: "Crooked or gapped teeth", slug: "braces-aligners" },
    { label: "Missing or broken tooth", slug: "crowns-implants" },
    { label: "Deep cavity or sensitivity", slug: "root-canal" },
  ],
  childSlug: "kids-dentistry",
};