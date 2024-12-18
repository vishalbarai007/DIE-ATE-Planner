import { ArrowLeft, MoreVertical, Upload, Calendar, UserIcon as UserMd, Clipboard, Heart, User, CreditCard, FileText, FileIcon as FilePdf } from 'lucide-react'
import { Patient } from '../../types/patients'
import { ActionCard } from './ActionCard'
import { SidebarNav } from './Sidebar-nav'
// import { SidebarNav } from '@/components/sidebar-nav'
// import { ActionCard } from '@/components/action-card'
// import type { Patient } from '@/types/patient'

const patientData: Patient = {
  id: "1",
  name: "Ms. Jane Moore",
  image: "/placeholder.svg",
  contact: {
    phone1: "07723 456789",
    phone2: "01980 123456",
    email: "jane.moore@hello.com",
    address: "15 Trevelyan Avenue, London, SW12 1J3"
  },
  overview: {
    gender: "Female",
    dateOfBirth: "10/03/1987",
    nextOfKin: "Dan Stevens",
    previousVisit: "25/11/2020",
    nextVisit: "09/12/2020",
    allergies: "Hayfever, crayfish"
  },
  labResults: [
    { name: "Ovarian Scan", size: "2.7 MB", type: "pdf" },
    { name: "XYV Blood Tests", size: "0.7 MB", type: "pdf" },
    { name: "Blood Tests XYZ", size: "0.7 MB", type: "pdf" }
  ]
}

export default function PatientProfile() {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      <SidebarNav />
      
      <div className="flex-1 p-4 sm:p-6 lg:p-8 ml-0 sm:ml-24">
        <div className="flex items-center gap-4 mb-6 sm:mb-8">
          <button className="p-2 hover:bg-gray-100 rounded-lg">
            <ArrowLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
          <h1 className="text-xl sm:text-2xl font-bold text-blue-900">Patient Profile</h1>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:gap-6">
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
                <p className="text-gray-500 mb-1">Next Visit:</p>
                <p>{patientData.overview.nextVisit}</p>
              </div>
              <div>
                <p className="text-gray-500 mb-1">Allergies:</p>
                <p>{patientData.overview.allergies}</p>
              </div>
            </div>
          </div>

          {/* Lab Results Card */}
          <div className="bg-white p-4 sm:p-6 rounded-lg border">
            <div className="flex justify-between mb-4 sm:mb-6">
              <h2 className="text-lg font-semibold">Latest Lab Results:</h2>
              <button className="p-2 hover:bg-gray-100 rounded-lg">
                <MoreVertical className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </div>

            <div className="space-y-3 sm:space-y-4">
              {patientData.labResults.map((result, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="p-2 bg-orange-100 rounded">
                    <FilePdf className="w-4 h-4 sm:w-5 sm:h-5 text-orange-500" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium">{result.name}</p>
                    <p className="text-xs sm:text-sm text-gray-500">{result.size}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 mt-4 sm:mt-6">
              <button className="flex items-center justify-center gap-2 px-4 py-2 text-sm text-teal-500 hover:bg-teal-50 rounded-lg">
                <Upload className="w-4 h-4" />
                Upload Files
              </button>
              <button className="flex items-center justify-center gap-2 px-4 py-2 text-sm text-teal-500 hover:bg-teal-50 rounded-lg">
                View All
              </button>
            </div>
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
