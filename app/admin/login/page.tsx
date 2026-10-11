import { tours } from '@/data/site';
import ToursExplorer from '@/components/ToursExplorer';

export const metadata = {
  title: 'Journeys | Cambodia Compass Travel',
  description: 'Browse curated cultural, nature, beach, and adventure tours across Cambodia.',
};

export default function ToursPage() {
  return <ToursExplorer tours={tours} />;
}
