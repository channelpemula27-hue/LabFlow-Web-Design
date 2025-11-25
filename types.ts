export interface NavItem {
  label: string;
  href: string;
}

export interface ServiceItem {
  id: number;
  title: string;
  description: string;
  iconName: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  image?: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isThinking?: boolean;
}