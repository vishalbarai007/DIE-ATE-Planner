import { ActionCard } from './ActionCard'
import { Calendar, UserIcon as UserMd, Clipboard, Heart, User, CreditCard, FileText } from 'lucide-react'

const PatientProfileActionCard = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <ActionCard icon={Calendar} title="Appointments" className="bg-blue-50" />
            <ActionCard icon={UserMd} title="Doctors" className="bg-teal-50" />
            <ActionCard icon={Clipboard} title="Treatment" className="bg-green-50" />
            <ActionCard icon={FileText} title="Tests & Results" className="bg-purple-50" />
            <ActionCard icon={Heart} title="Vital Signs" className="bg-pink-50" />
            <ActionCard icon={User} title="Partner Profile" className="bg-yellow-50" />
            <ActionCard icon={CreditCard} title="Billing" className="bg-indigo-50" />
            <ActionCard icon={FileText} title="Consent Forms" className="bg-gray-50" />
        </div>
    )
}

export default PatientProfileActionCard
