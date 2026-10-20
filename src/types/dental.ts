export interface Doctor {
  id: string;
  name: string;
  title: string;
  credentials: string[];
  bio: string;
  specialties: string[];
  experienceYears: number;
  education: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  category: 'Cosmetic' | 'Restorative' | 'Preventative' | 'Emergency' | 'Orthodontics';
  shortDesc: string;
  fullDesc: string;
  benefits: string[];
  whatToExpect: string;
  duration: string;
  idealFor: string;
  image?: string;
}

export interface Testimonial {
  id: string;
  author: string;
  location: string;
  treatment: string;
  rating: number;
  date: string;
  comment: string;
  doctorSeen: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export interface AppointmentRequest {
  serviceId: string;
  doctorId: string;
  preferredDate: string;
  preferredTime: string;
  fullName: string;
  phone: string;
  email: string;
  isEmergency: boolean;
  hasInsurance: boolean;
  insuranceProvider?: string;
  notes?: string;
}
