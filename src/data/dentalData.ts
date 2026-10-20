import { Doctor, ServiceItem, Testimonial, FAQItem } from '../types/dental';

export const CLINIC_INFO = {
  name: "Orlando Dental Center",
  tagline: "World-Class Cosmetic, Implant & Family Dentistry",
  address: "300 Gatlin Ave",
  cityStateZip: "Orlando, FL 32806",
  phone: "(407) 851-7740",
  cleanPhone: "4078517740",
  email: "care@orlandodentalcenter.com",
  googleMapsUrl: "https://maps.google.com/?q=Orlando+Dental+Center+300+Gatlin+Ave+Orlando+FL+32806",
  hours: [
    { days: "Monday – Thursday", time: "7:45 AM – 5:00 PM" },
    { days: "Friday", time: "7:45 AM – 1:30 PM" },
    { days: "2nd & 4th Saturdays", time: "7:45 AM – 1:30 PM" },
    { days: "Sunday", time: "Closed (Emergency On-Call)" }
  ],
  verifiedRating: 4.9,
  verifiedReviewsCount: 380,
  yearsServingOrlando: 18,
};

export const IMAGES = {
  hero: "/assets/images/hero_orlando_dental_1792477717906.jpg",
  team: "/assets/images/dentist_doctor_team_1792477718911.jpg",
  cosmetic: "/assets/images/cosmetic_smile_artistry_1792477718596.jpg",
  implant: "/assets/images/implant_technology_suite_1792477720634.jpg",
  lounge: "/assets/images/clinic_reception_lounge_1792477720770.jpg",
};

export const DOCTORS: Doctor[] = [
  {
    id: "dr-marouf",
    name: "Dr. Firas Marouf, DMD",
    title: "Lead Cosmetic & Restorative Dentist",
    credentials: ["DMD, Doctor of Dental Medicine", "Member, American Dental Association (ADA)", "Member, Florida Dental Association (FDA)", "Advanced Aesthetic Restorations Specialist"],
    education: "Doctor of Dental Medicine with honors in clinical prosthodontics and smile architecture",
    bio: "With over 18 years of clinical excellence in Central Florida, Dr. Firas Marouf is recognized for his master-level artistic precision in smile makeovers and restorative dentistry. He emphasizes compassionate, zero-anxiety patient communication and mercury-free, biomimetic materials.",
    specialties: ["Custom Porcelain Veneers", "Smile Reconstruction", "Metal-Free Crowns", "Minimally Invasive Dentistry"],
    experienceYears: 18,
  },
  {
    id: "dr-jadun",
    name: "Dr. Ibrahim Jadun, DMD",
    title: "Surgical & Implant Dentistry",
    credentials: ["DMD, Doctor of Dental Medicine", "International Congress of Oral Implantologists (ICOI) Fellow", "Fellow, Academy of General Dentistry (FAGD)"],
    education: "Postgraduate clinical fellowship in surgical implantology and bone augmentation",
    bio: "Dr. Ibrahim Jadun focuses on advanced dental implant surgery, computerized 3D bone mapping, and immediate-load restorative techniques. His approach ensures patients regain strong, permanent, natural-looking biting function with minimal post-operative downtime.",
    specialties: ["3D Guided Dental Implants", "Surgical Tooth Extractions", "Bone Grafting", "Full Arch Rehabilitation"],
    experienceYears: 14,
  },
  {
    id: "dr-berrios",
    name: "Dr. Beatriz C. Berrios Ouslan, DMD",
    title: "Preventative, Periodontal & Aesthetic Care",
    credentials: ["DMD, Doctor of Dental Medicine", "American Academy of Cosmetic Dentistry (AACD)", "Periodontal Health & Soft Tissue Certification"],
    education: "Advanced dental medicine degree with comprehensive preventative and cosmetic restorative focus",
    bio: "Dr. Beatriz C. Berrios Ouslan is devoted to long-term periodontal health, gentle preventative cleanings, and natural aesthetic enhancements. She is celebrated by patients of all ages for her gentle touch, patient-centered explanations, and bilingual care.",
    specialties: ["Comprehensive Dental Hygiene", "Periodontal Therapy", "Teeth Whitening", "Pediatric & Family Care"],
    experienceYears: 12,
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: "cosmetic-veneers",
    title: "Porcelain Veneers & Smile Makeovers",
    category: "Cosmetic",
    shortDesc: "Ultra-thin, handcrafted ceramic laminates designed to correct gaps, chips, discoloration, and asymmetry with natural luminescence.",
    fullDesc: "Our bespoke porcelain veneers represent the pinnacle of cosmetic dental artistry. Custom-crafted from premium e.max porcelain or layered zirconia, each veneer is tailored to your unique facial geometry, skin undertone, and smile line for a permanently radiant, natural appearance.",
    benefits: [
      "Custom shade matching to your natural aesthetic",
      "Stain-resistant high-density ceramic glaze",
      "Minimally invasive tooth preparation preserving natural enamel",
      "Durable longevity lasting 15–20+ years with proper hygiene"
    ],
    whatToExpect: "Initial 3D digital smile scan and mock-up trial, followed by master-lab fabrication and precision bonding with zero-gap margins.",
    duration: "2 appointments over 2–3 weeks",
    idealFor: "Patients with worn enamel, deep intrinsic discoloration, minor crowding, or chipped teeth desiring a camera-ready smile.",
    image: IMAGES.cosmetic
  },
  {
    id: "dental-implants",
    title: "Permanent Dental Implants",
    category: "Restorative",
    shortDesc: "State-of-the-art biocompatible titanium and zirconia implants replacing missing teeth from root to crown for permanent strength.",
    fullDesc: "A dental implant is the gold standard for tooth replacement. Acting as an artificial tooth root that fuses directly with your jawbone through osseointegration, implants preserve your natural bone structure and restore 100% of your chewing force without altering adjacent healthy teeth.",
    benefits: [
      "Prevents bone loss and facial collapse after tooth loss",
      "Feels, bites, and brushes exactly like a natural tooth",
      "No slippage or dietary restrictions compared to traditional bridges",
      "Computer-guided 3D surgical placement for maximum safety"
    ],
    whatToExpect: "3D CBCT digital cone-beam planning, gentle surgical placement under local anesthesia or sedation, healing phase, and custom crown placement.",
    duration: "Single-day placement with final restoration in 3–4 months",
    idealFor: "Adults missing one, several, or all teeth looking for a lifelong permanent restoration.",
    image: IMAGES.implant
  },
  {
    id: "metal-free-crowns",
    title: "Metal-Free Crowns & Ceramic Bridges",
    category: "Restorative",
    shortDesc: "High-strength, 100% metal-free porcelain and solid zirconia crowns restoring damaged teeth with zero dark margins at the gumline.",
    fullDesc: "We eliminate outdated metal-fused crowns that leave dark lines near your gums. Our all-ceramic, monolithic zirconia and e.max crowns provide unmatched structural durability while matching the translucency of natural living tooth enamel.",
    benefits: [
      "No dark metal edges or metallic taste",
      "100% biocompatible and hypoallergenic materials",
      "High fracture resistance even under heavy molar chewing force",
      "Precision digital fit protecting against recurrent micro-leakage"
    ],
    whatToExpect: "Gentle preparation of the decayed or fractured tooth, 3D optical scan (no uncomfortable putty), and secure adhesive cementation.",
    duration: "1 to 2 visits",
    idealFor: "Teeth with large fractures, deep decay, root canal treated teeth, or old failing metal crowns."
  },
  {
    id: "emergency-dentistry",
    title: "Emergency Dentistry & Walk-Ins",
    category: "Emergency",
    shortDesc: "Same-day emergency dental relief for severe toothaches, fractured teeth, knocked-out teeth, and lost crowns in Orlando.",
    fullDesc: "Dental emergencies can strike without warning. At Orlando Dental Center, we prioritize same-day emergency appointments and walk-in patients during practice hours to relieve acute pain, treat infections, and save your natural tooth.",
    benefits: [
      "Same-day emergency diagnosis and rapid pain relief",
      "On-site digital X-rays and 3D imaging for instant triage",
      "Gentle emergency root canals, extractions, or temporary crowns",
      "Flexible financing options so cost never delays critical emergency care"
    ],
    whatToExpect: "Immediate examination, emergency radiograph, diagnosis, and direct pain-relief treatment.",
    duration: "Same-day immediate emergency relief",
    idealFor: "Severe toothaches, swelling, dental abscess, broken teeth, or sports trauma."
  },
  {
    id: "hygiene-cleanings",
    title: "Comprehensive Dental Hygiene & Periodontics",
    category: "Preventative",
    shortDesc: "Gentle ultrasonic cleanings, comprehensive oral cancer screenings, and specialized periodontal therapies for lifelong oral health.",
    fullDesc: "Preventative care is the foundation of dental longevity. Our hygienists utilize gentle piezo-ultrasonic scaling tools to eliminate stubborn calculus and biofilm without discomfort, paired with thorough digital periodontal health charting.",
    benefits: [
      "Pain-free ultrasonic tartar and stain removal",
      "Early detection of gum disease and systemic inflammation",
      "Comprehensive oral mucosal and soft-tissue cancer screening",
      "Enamel remineralization treatments and personalized home care guidance"
    ],
    whatToExpect: "60-minute thorough clinical checkup, digital low-radiation bitewing imaging, ultrasonic polishing, and doctor examination.",
    duration: "45–60 minutes",
    idealFor: "Every individual every 6 months to maintain optimal health and freshness."
  },
  {
    id: "mercury-free-fillings",
    title: "Mercury-Free Composite Fillings",
    category: "Restorative",
    shortDesc: "Tooth-colored, BPA-safe composite resin fillings chemically bonded to preserve tooth structure with invisible borders.",
    fullDesc: "We exclusively place mercury-free, biomimetic composite resins that blend seamlessly with your tooth shade. Unlike old silver amalgam fillings that expand and crack teeth over time, composite fillings bond intimately with enamel to seal out bacteria.",
    benefits: [
      "Zero mercury, zero silver, 100% tooth-colored aesthetics",
      "Preserves maximum healthy tooth structure",
      "Direct chemical bond strengthens weakened tooth walls",
      "Hardened instantly with cool LED curing lights"
    ],
    whatToExpect: "Comfortable numbing, removal of decay, shade selection, micro-layering composite, and high-shine polish.",
    duration: "30–45 minutes",
    idealFor: "New cavities, minor chipped edges, or replacing old dark amalgam fillings."
  },
  {
    id: "teeth-whitening",
    title: "Professional In-Office Teeth Whitening",
    category: "Cosmetic",
    shortDesc: "Advanced chairside dental whitening delivering up to 8 shades brighter results in just 60 minutes with minimal sensitivity.",
    fullDesc: "Safe, medical-grade prescription whitening activated by specialized wavelengths breaks down decades of coffee, tea, and aging stains safely and evenly without damaging your enamel.",
    benefits: [
      "Up to 8 shades whiter in a single 60-minute visit",
      "Desensitizing buffering agents to protect sensitive gums",
      "Far more effective and even than over-the-counter whitening strips",
      "Includes custom take-home touch-up maintenance trays"
    ],
    whatToExpect: "Gum barrier application, prescription whitening gel application in three 15-minute intervals, and instant shade measurement.",
    duration: "60 minutes",
    idealFor: "Patients preparing for weddings, events, or simply desiring a luminous, youthful smile."
  },
  {
    id: "dentures-partials",
    title: "Custom Dentures & Precision Partials",
    category: "Restorative",
    shortDesc: "Natural-looking, lightweight full and partial dentures designed for comfortable suction, stability, and lifelike aesthetics.",
    fullDesc: "Modern dentures look remarkably authentic and feel comfortable to wear. We craft custom premium acrylic and flexible partial dentures that support your facial muscles, restore clear speech, and allow you to enjoy your favorite foods with confidence.",
    benefits: [
      "High-impact, lightweight and shatter-resistant materials",
      "Natural gum tinting and anatomical tooth contouring",
      "Options for implant-stabilized overdentures (snap-in dentures)",
      "Restores natural facial lip fullness and profile"
    ],
    whatToExpect: "Detailed anatomic impressions, bite registration, aesthetic wax try-in for your approval, and final delivery.",
    duration: "3 to 4 visits for optimal fit",
    idealFor: "Patients with multiple missing teeth desiring affordable, non-surgical smile restoration."
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    author: "Elena Vasquez",
    location: "Orlando, FL (Near Gatlin Ave)",
    treatment: "Porcelain Veneers & Smile Makeover",
    rating: 5,
    date: "March 2026",
    comment: "Dr. Marouf is a true artist. I was self-conscious about my smile for over a decade. From the 3D scan to the final placement, he took time to ensure every tooth looked natural and fit my face. The office on Gatlin Ave is gorgeous, and the entire team treated me like family.",
    doctorSeen: "Dr. Firas Marouf, DMD"
  },
  {
    id: "t2",
    author: "Marcus Richardson",
    location: "SoDo / Downtown Orlando",
    treatment: "Dental Implant & Crown Restoration",
    rating: 5,
    date: "February 2026",
    comment: "I lost a molar due to a fractured root. Dr. Jadun explained the 3D implant procedure clearly with zero pressure. The surgery was completely painless, and my new implant tooth feels as sturdy as my original tooth. Plus, they helped me navigate my CareCredit plan effortlessly.",
    doctorSeen: "Dr. Ibrahim Jadun, DMD"
  },
  {
    id: "t3",
    author: "Sofia Hernandez",
    location: "Orlando, FL",
    treatment: "Emergency Same-Day Walk-In",
    rating: 5,
    date: "January 2026",
    comment: "Woke up on a Thursday morning in excruciating dental pain. Orlando Dental Center took me in within 45 minutes of my call. Dr. Berrios identified the problem, relieved the pain immediately, and explained everything with such kindness. I have found my forever dental home!",
    doctorSeen: "Dr. Beatriz C. Berrios Ouslan, DMD"
  },
  {
    id: "t4",
    author: "David Chen",
    location: "Conway / Orlando",
    treatment: "Hygiene Cleaning & Metal-Free Crowns",
    rating: 5,
    date: "April 2026",
    comment: "Having Saturday morning appointment hours is an absolute lifesaver for my busy work schedule. The ultrasonic cleaning was the most gentle I have ever experienced, and replacing my old silver filling with composite was seamless. Highly recommend Orlando Dental Center!",
    doctorSeen: "Dr. Firas Marouf, DMD"
  }
];

export const FAQS: FAQItem[] = [
  {
    category: "Appointments & Emergencies",
    question: "Do you accept emergency walk-in patients in Orlando?",
    answer: "Yes, absolutely! We prioritize same-day emergency dental appointments and walk-in patients experiencing severe toothaches, chipped or knocked-out teeth, or broken restorations during our regular office hours (Monday–Thursday 7:45 AM–5:00 PM, Friday 7:45 AM–1:30 PM, and 2nd/4th Saturdays 7:45 AM–1:30 PM). Please call us immediately at (407) 851-7740 so we can prepare a treatment room for your arrival."
  },
  {
    category: "Appointments & Emergencies",
    question: "Are you open on weekends?",
    answer: "Yes. For our patients' convenience, Orlando Dental Center is open on the second and fourth Saturday of every month from 7:45 AM to 1:30 PM. Saturday appointments fill quickly, so we recommend requesting your preferred date in advance."
  },
  {
    category: "Insurance & Financing",
    question: "What dental insurances do you accept?",
    answer: "We accept and file claims with most major PPO dental insurance plans, including Delta Dental, MetLife, Cigna, Aetna, Guardian, Humana, Florida Blue, United Healthcare, and many more. Our experienced insurance coordinators will verify your benefits in advance and provide clear, upfront estimates so there are never any financial surprises."
  },
  {
    category: "Insurance & Financing",
    question: "What if I do not have dental insurance?",
    answer: "We believe quality dental care should be accessible to everyone. We offer flexible zero-interest and low-interest monthly financing through CareCredit and Sunbit. We also offer our in-house Orlando Dental Center Membership Plan, which includes your bi-annual cleanings, exams, and digital X-rays plus 15–20% savings on restorative and cosmetic procedures."
  },
  {
    category: "Treatments & Comfort",
    question: "Will my dental treatment be painful?",
    answer: "Patient comfort is our top priority. We utilize modern topical numbing agents, computerized local anesthesia delivery, and gentle ultrasonic technology that virtually eliminates discomfort. For nervous or anxious patients, we also provide calming amenities and mild oral relaxation options to ensure your visit is calm and stress-free."
  },
  {
    category: "Cosmetics & Implants",
    question: "How long do porcelain veneers and dental implants last?",
    answer: "High-grade porcelain veneers typically last 15 to 20+ years with proper oral hygiene and regular cleanings. Dental implants integrate directly with your jawbone and are designed to last a lifetime with proper routine preventative maintenance."
  }
];
