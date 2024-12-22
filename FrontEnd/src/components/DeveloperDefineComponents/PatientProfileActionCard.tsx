import { useContext } from 'react';
import { ActionCard } from './ActionCard';
import { 
  Calendar, 
  UserIcon as UserMd, 
  Clipboard, 
  Heart, 
  User, 
  CreditCard, 
  FileText 
} from 'lucide-react';
import ThemeContext from '../../contexts/theme/ThemeContext';

const PatientProfileActionCard = () => {
  const contextTheme = useContext(ThemeContext);
  
  const cardClassName = `
    w-full
    ${contextTheme?.theme === 'light' ? 'bg-neutral-200' : 'bg-neutral-800'}
     shadow-input border-2 border-blue-500 shadow-blue-500/50 hover:shadow-[0_0_10px_5px_rgba(0,119,255,1)] hover:border-blue-500 transition-all duration-300 
    p-4
  `;

  const actions = [
    { icon: Calendar, title: "Appointments" },
    { icon: UserMd, title: "Doctors" },
    { icon: Clipboard, title: "Treatment" },
    { icon: FileText, title: "Tests & Results" },
    { icon: Heart, title: "Vital Signs" },
    { icon: User, title: "Partner Profile" },
    { icon: CreditCard, title: "Billing" },
    { icon: FileText, title: "Consent Forms" }
  ];

  return (
    <div className="w-full p-4">
      <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4 md:gap-6">
        {actions.map((action, index) => (
          <div key={index} className="w-full">
            <ActionCard
              icon={action.icon}
              title={action.title}
              className={cardClassName}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PatientProfileActionCard;