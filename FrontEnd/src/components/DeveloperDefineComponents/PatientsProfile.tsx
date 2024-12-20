import { ArrowLeft, MoreVertical } from 'lucide-react'
import { Patient } from '../../types/patients'
import HealthResults from './HealthResults'
import { SidebarDemo } from '../AceternityComponents/main/SideBar'
import PatientProfileActionCard from './PatientProfileActionCard'
import OverView from './OverView'



const patientData: Patient = {
  id: "1",
  name: "Mrs. Vishal Barai",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQH4Ui8-aKNWj9bB8P5rLObzIRt30lQ-wpIOg&s",
  contact: {
    phone1: "07723 456789",
    phone2: "01980 123456",
    email: "VishalBaraiOfficial01@gmail.com",
    address: "15 Trevelyan Avenue, London, SW12 1J3"
  },

}

export default function PatientProfile() {
  return (
    <div className="min-h-screen bg-zinc-900 flex">
      {/* <SidebarNav /> */}
      <SidebarDemo />


      <div className="flex-1 p-4 sm:p-6 lg:p-8 ml-0 sm:ml-24">
        <div className="flex items-center gap-4 mb-6 sm:mb-8">
          <button className="p-2 hover:bg-gray-100 rounded-lg">
            <ArrowLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
          <h1 className="text-xl sm:text-2xl font-bold text-blue-900"> Profile</h1>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:gap-6">
          {/* Patient Info Card */}
          <div className="bg-white p-4 sm:p-6 rounded-lg border">
            <div className="flex flex-col sm:flex-row sm:justify-between mb-4 sm:mb-6">
              <div className="flex gap-4 mb-4 sm:mb-0">
                <img
                  src={patientData.image}
                  alt=""
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h2 className="text-lg sm:text-xl font-semibold">{patientData.name}</h2>
                  <p className="text-gray-500">Contact Details:</p>
                </div>
              </div>
              <button className="self-end sm:self-start p-2 hover:bg-gray-100 rounded-lg">
                <MoreVertical className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </div>

            <div className="space-y-2 sm:space-y-3 text-sm">
              <p className="flex gap-2">
                <span className="text-gray-500">📱</span>
                {patientData.contact.phone1}
              </p>
              <p className="flex gap-2">
                <span className="text-gray-500">☎️</span>
                {patientData.contact.phone2}
              </p>
              <p className="flex gap-2">
                <span className="text-gray-500">✉️</span>
                {patientData.contact.email}
              </p>
              <p className="flex gap-2">
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