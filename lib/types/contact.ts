import { LucideIcon } from 'lucide-react';

export interface ContactInfo {
  icon: LucideIcon;
  label: string;
  value: string;
  href: string | null;
}

export interface ContactButton {
  type: 'phone' | 'whatsapp' | 'email';
  label: string;
  value: string;
  href: string;
  icon: LucideIcon;
  color: 'red' | 'teal' | 'green';
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}
