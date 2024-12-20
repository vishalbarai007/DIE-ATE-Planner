import { ActionCard } from './ActionCard'
import { Calendar, UserIcon as UserMd, Clipboard, Heart, User, CreditCard, FileText } from 'lucide-react'
import ThemeContext from '../../contexts/theme/ThemeContext';
import { useContext } from 'react'

const PatientProfileActionCard = () => {

    const contextTheme = useContext(ThemeContext);

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <ActionCard icon={Calendar} title="Appointments" className={`${contextTheme?.theme === 'light' ? 'bg-neutral-200' : 'bg-neutral-800'}`} />
            <ActionCard icon={UserMd} title="Doctors" className={`${contextTheme?.theme === 'light' ? 'bg-neutral-200' : 'bg-neutral-800'}`} />
            <ActionCard icon={Clipboard} title="Treatment" className={`${contextTheme?.theme === 'light' ? 'bg-neutral-200' : 'bg-neutral-800'}`} />
            <ActionCard icon={FileText} title="Tests & Results" className={`${contextTheme?.theme === 'light' ? 'bg-neutral-200' : 'bg-neutral-800'}`} />
            <ActionCard icon={Heart} title="Vital Signs" className={`${contextTheme?.theme === 'light' ? 'bg-neutral-200' : 'bg-neutral-800'}`} />
            <ActionCard icon={User} title="Partner Profile" className={`${contextTheme?.theme === 'light' ? 'bg-neutral-200' : 'bg-neutral-800'}`} />
            <ActionCard icon={CreditCard} title="Billing" className={`${contextTheme?.theme === 'light' ? 'bg-neutral-200' : 'bg-neutral-800'}`} />
            <ActionCard icon={FileText} title="Consent Forms" className={`${contextTheme?.theme === 'light' ? 'bg-neutral-200' : 'bg-neutral-800'}`} />
        </div>
    )
}

export default PatientProfileActionCard
