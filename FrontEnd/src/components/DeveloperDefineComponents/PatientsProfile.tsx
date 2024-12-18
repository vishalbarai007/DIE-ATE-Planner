import { ArrowLeft, MoreVertical, Upload, Calendar, UserIcon as UserMd, Clipboard, Heart, User, CreditCard, FileText, FileIcon as FilePdf } from 'lucide-react'
import { Patient } from '../../types/patients'
import { ActionCard } from './ActionCard'
import { SidebarNav } from './Sidebar-nav'
import HealthResults from './HealthResults'
import { SidebarDemo } from '../AceternityComponents/main/SideBar'
// import { SidebarNav } from '@/components/sidebar-nav'
// import { ActionCard } from '@/components/action-card'
// import type { Patient } from '@/types/patient'

const patientData: Patient = {
  id: "1",
  name: "Mrs. Vishal Barai",
  image: "/placeholder.svg",
  contact: {
    phone1: "07723 456789",
    phone2: "01980 123456",
    email: "VishalBaraiOfficial01@gmail.com",
    address: "15 Trevelyan Avenue, London, SW12 1J3"
  },
  overview: {
    gender: "Male",
    dateOfBirth: "10/03/1987",
    nextOfKin: "Dan Stevens",
    previousVisit: "25/11/2020",
    allergies: "Hayfever, crayfish",
    disease: "Thyroid"
  },
  
}

export default function PatientProfile() {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* <SidebarNav /> */}
      <SidebarDemo/>

      
      <div className="flex-1 p-4 sm:p-6 lg:p-8 ml-0 sm:ml-24">
        <div className="flex items-center gap-4 mb-6 sm:mb-8">
          <button className="p-2 hover:bg-gray-100 rounded-lg">
            <ArrowLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
          <h1 className="text-xl sm:text-2xl font-bold text-blue-900">Patient Profile</h1>
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
          <div className="bg-white p-4 sm:p-6 rounded-lg border">
            <div className="flex justify-between mb-4 sm:mb-6">
              <h2 className="text-lg font-semibold">Overview:</h2>
              <button className="p-2 hover:bg-gray-100 rounded-lg">
                <MoreVertical className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 text-sm">
              <div>
                <p className="text-gray-500 mb-1">Gender:</p>
                <p>{patientData.overview.gender}</p>
              </div>
              <div>
                <p className="text-gray-500 mb-1">Date of Birth:</p>
                <p>{patientData.overview.dateOfBirth}</p>
              </div>
              <div>
                <p className="text-gray-500 mb-1">Next of Kin:</p>
                <p>{patientData.overview.nextOfKin}</p>
              </div>
              <div>
                <p className="text-gray-500 mb-1">Previous Visit:</p>
                <p>{patientData.overview.previousVisit}</p>
              </div>
              
              <div>
                <p className="text-gray-500 mb-1">Allergies:</p>
                <p>{patientData.overview.allergies}</p>
              </div>

              <div>
                <p className="text-gray-500 mb-1">Dieseas:</p>
                <p>{patientData.overview.disease}</p>
              </div>
            </div>
          </div>

          {/* Lab Results Card */}
          <div>
            <HealthResults/>
          </div>

          {/* Action Cards Grid */}
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
        </div>
      </div>
    </div>
  )
}
