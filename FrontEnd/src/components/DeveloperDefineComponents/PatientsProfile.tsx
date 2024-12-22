import { ArrowLeft, MoreVertical } from 'lucide-react'
import { Patient } from '../../types/patients'
import HealthResults from './HealthResults'
import { SidebarDemo } from '../AceternityComponents/main/SideBar'
import PatientProfileActionCard from './PatientProfileActionCard'
import OverView from './OverView'
import ThemeContext from '../../contexts/theme/ThemeContext';
import { useContext } from 'react'
import { Link } from 'react-router-dom'



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

}

export default function PatientProfile() {
  const contextTheme = useContext(ThemeContext);
  return (
    <div className={`min-h-screen ${contextTheme?.theme === 'light' ? 'bg-white' : 'bg-black'} flex`}>
      {/* <SidebarNav /> */}
      <SidebarDemo />


      <div className="flex-1 p-4 sm:p-6 lg:p-8 ml-0 sm:ml-24">
        <div className="flex items-center gap-4 mb-6 sm:mb-8">
          <Link to='/home'>
            <button className={`p-2 ${contextTheme?.theme === 'light' ? 'hover:bg-gray-200' : 'hover:bg-gray-600'} rounded-lg`}>
              <ArrowLeft className={`w-5 h-5 sm:w-6 sm:h-6 ${contextTheme?.theme === 'light' ? 'text-black' : 'text-white'}`} />
            </button>
          </Link>
          <h1 className={`text-xl sm:text-2xl font-bold ${contextTheme?.theme === 'light' ? 'text-black' : 'text-white'}`}> Profile</h1>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:gap-6">
          {/* Patient Info Card */}
          <div className={`${contextTheme?.theme === 'light' ? 'bg-neutral-200' : 'bg-neutral-800'} p-4 sm:p-6 rounded-lg border`}>
            <div className="flex flex-col sm:flex-row sm:justify-between mb-4 sm:mb-6">
              <div className="flex gap-4 mb-4 sm:mb-0">
                <img
                  src={patientData.image}
                  alt=""
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h2 className={`${contextTheme?.theme === 'light' ? 'text-black' : 'text-white'} text-lg sm:text-xl font-semibold`}>{patientData.name}</h2>
                  <p className="text-gray-500">Contact Details:</p>
                </div>
              </div>
              <button className={`self-end sm:self-start p-2 ${contextTheme?.theme === 'light' ? 'hover:bg-gray-100' : 'hover:bg-gray-500'} rounded-lg`}>
                <MoreVertical className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </div>

            <div className="space-y-2 sm:space-y-3 text-sm">
              <p className={`flex ${contextTheme?.theme === 'light' ? 'text-black' : 'text-white'} gap-2`}>
                <span className="text-gray-500">📱</span>
                {patientData.contact.phone1}
              </p>
              <p className={`flex ${contextTheme?.theme === 'light' ? 'text-black' : 'text-white'} gap-2`}>
                <span className="text-gray-500">☎️</span>
                {patientData.contact.phone2}
              </p>
              <p className={`flex ${contextTheme?.theme === 'light' ? 'text-black' : 'text-white'} gap-2`}>
                <span className="text-gray-500">✉️</span>
                {patientData.contact.email}
              </p>
              <p className={`flex ${contextTheme?.theme === 'light' ? 'text-black' : 'text-white'} gap-2`}>
                <span className="text-gray-500">📍</span>
                {patientData.contact.address}
              </p>
            </div>
          </div>

          {/* Overview Card */}
          <div>
            <OverView />
          </div>

          {/* Lab Results Card */}
          <div>
            <HealthResults />
          </div>

          {/* Action Cards Grid */}
          <div>
            <PatientProfileActionCard />
          </div>
        </div>
      </div>
    </div>
  )
}