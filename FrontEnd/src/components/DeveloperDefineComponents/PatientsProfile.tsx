import { ArrowLeft, MoreVertical } from 'lucide-react';
import { Patient } from '../../types/patients';
import HealthResults from './HealthResults';
import PatientProfileActionCard from './PatientProfileActionCard';
import OverView from './OverView';
import ThemeContext from '../../contexts/theme/ThemeContext';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

const patientData: Patient = {
  id: "1",
  name: "Mr. Manish Rawat",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQH4Ui8-aKNWj9bB8P5rLObzIRt30lQ-wpIOg&s",
  contact: {
    phone1: "07723 456789",
    phone2: "01980 123456",
    email: "manishRawatOfficial01@gmail.com",
    address: "15 Trevelyan Avenue, Lundon, SW12 1J3"
  },
};

export default function PatientProfile() {
  const contextTheme = useContext(ThemeContext);
  
  const baseCardStyle = `
    ${contextTheme?.theme === 'light' ? 'bg-neutral-200' : 'bg-neutral-800'}
    rounded-lg
    shadow-input
    border-2
    border-blue-500
    shadow-blue-500/50
    hover:shadow-[0_0_10px_5px_rgba(0,119,255,1)]
    hover:border-blue-500
    transition-all
    duration-300
  `;

  const textColorClass = contextTheme?.theme === 'light' ? 'text-black' : 'text-white';

  return (
    <div className={`min-h-screen ${contextTheme?.theme === 'light' ? 'bg-white' : 'bg-black'} flex`}>
      <div className="flex-1 p-4 sm:p-6 lg:p-8 ml-0 sm:ml-24">
        {/* Header */}
        <div className="flex items-center gap-4 mb-6 sm:mb-8">
          <Link to='/home'>
            <button className={`p-2 ${contextTheme?.theme === 'light' ? 'hover:bg-gray-200' : 'hover:bg-gray-600'} rounded-lg`}>
              <ArrowLeft className={`w-5 h-5 sm:w-6 sm:h-6 ${textColorClass}`} />
            </button>
          </Link>
          <h1 className={`text-xl sm:text-2xl font-bold ${textColorClass}`}>Profile</h1>
        </div>

        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
          {/* Patient Info Card */}
          <div className={`${baseCardStyle} p-4 md:p-6`}>
            <div className="flex flex-col md:flex-row md:justify-between mb-4 md:mb-6">
              <div className="flex gap-4 mb-4 md:mb-0">
                <img
                  src={patientData.image}
                  alt={`${patientData.name}'s profile`}
                  className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover"
                />
                <div>
                  <h2 className={`${textColorClass} text-lg md:text-xl font-semibold`}>
                    {patientData.name}
                  </h2>
                  <p className="text-gray-500">Contact Details:</p>
                </div>
              </div>
              <button 
                className={`self-end md:self-start p-2 ${
                  contextTheme?.theme === 'light' ? 'hover:bg-gray-100' : 'hover:bg-gray-700'
                } rounded-lg transition-colors`}
              >
                <MoreVertical className="w-5 h-5 md:w-6 md:h-6" />
              </button>
            </div>

            <div className="space-y-2 md:space-y-3 text-sm md:text-base">
              {[
                { icon: '📱', value: patientData.contact.phone1 },
                { icon: '☎️', value: patientData.contact.phone2 },
                { icon: '✉️', value: patientData.contact.email },
                { icon: '📍', value: patientData.contact.address }
              ].map((item, index) => (
                <p key={index} className={`flex ${textColorClass} gap-2 items-start`}>
                  <span className="text-gray-500 min-w-[1.5rem]">{item.icon}</span>
                  <span className="flex-1 break-words">{item.value}</span>
                </p>
              ))}
            </div>
          </div>

          {/* Overview Card */}
          <div className="w-full">
            <OverView />
          </div>

          {/* Lab Results Card */}
          <div className="w-full">
            <HealthResults />
          </div>

          {/* Action Cards Grid */}
          <div className="w-full">
            <PatientProfileActionCard />
          </div>
        </div>
      </div>
    </div>
  );
}