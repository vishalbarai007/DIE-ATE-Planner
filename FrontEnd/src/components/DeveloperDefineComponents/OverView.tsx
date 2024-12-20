import { MoreVertical } from "lucide-react"
import { PatientOverview } from "../../types/patients"
import ThemeContext from '../../contexts/theme/ThemeContext';
import { useContext } from 'react'


const OverView = () => {

  const contextTheme = useContext(ThemeContext);

    const PatientOverview: PatientOverview = {
        // overview: {
          gender: "Male",
          dateOfBirth: "10/03/1987",
          nextOfKin: "Dan Stevens",
          previousVisit: "25/11/2020",
          allergies: "Hayfever, crayfish",
          disease: "Thyroid"
        // },
      
      }

      
  return (
    <div>
          <div className={`${contextTheme?.theme === 'light' ? 'bg-neutral-200' : 'bg-neutral-800'} p-4 sm:p-6 rounded-lg border`}>
            <div className="flex justify-between mb-4 sm:mb-6">
              <h2 className={`${contextTheme?.theme === 'light' ? 'text-black' : 'text-white'} text-lg font-semibold`}>Overview:</h2>
              <button className={`p-2 ${contextTheme?.theme === 'light' ? 'hover:bg-gray-100' : 'hover:bg-gray-500'} rounded-lg`}>
                <MoreVertical className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 text-sm">
              <div>
                <p className="text-gray-500 mb-1">Gender:</p>
                <p className={`${contextTheme?.theme === 'light' ? 'text-black' : 'text-white'}`}>{PatientOverview.gender}</p>
              </div>
              <div>
                <p className="text-gray-500 mb-1">Date of Birth:</p>
                <p className={`${contextTheme?.theme === 'light' ? 'text-black' : 'text-white'}`}>{PatientOverview.dateOfBirth}</p>
              </div>
              <div>
                <p className="text-gray-500 mb-1">Next of Kin:</p>
                <p className={`${contextTheme?.theme === 'light' ? 'text-black' : 'text-white'}`}>{PatientOverview.nextOfKin}</p>
              </div>
              <div>
                <p className="text-gray-500 mb-1">Previous Visit:</p>
                <p className={`${contextTheme?.theme === 'light' ? 'text-black' : 'text-white'}`}>{PatientOverview.previousVisit}</p>
              </div>

              <div>
                <p className="text-gray-500 mb-1">Allergies:</p>
                <p className={`${contextTheme?.theme === 'light' ? 'text-black' : 'text-white'}`}>{PatientOverview.allergies}</p>
              </div>

              <div>
                <p className="text-gray-500 mb-1">Dieseas:</p>
                <p className={`${contextTheme?.theme === 'light' ? 'text-black' : 'text-white'}`}>{PatientOverview.disease}</p>
              </div>
            </div>
          </div>

 
      
    </div>
  )
}

export default OverView
