
export interface SurfTrip {
  id: string;
  title: string;
  location: string;
  description: string;
  price: string;
  duration: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'All Levels';
  imageUrl: string;
  gallery: string[];
  features: string[];
}

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  trip: SurfTrip | null;
}
