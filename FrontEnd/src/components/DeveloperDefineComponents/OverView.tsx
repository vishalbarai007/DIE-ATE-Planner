import { MoreVertical } from "lucide-react"
import { PatientOverview } from "../../types/patients"


const OverView = () => {

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
                <p>{PatientOverview.gender}</p>
              </div>
              <div>
                <p className="text-gray-500 mb-1">Date of Birth:</p>
                <p>{PatientOverview.dateOfBirth}</p>
              </div>
              <div>
                <p className="text-gray-500 mb-1">Next of Kin:</p>
                <p>{PatientOverview.nextOfKin}</p>
              </div>
              <div>
                <p className="text-gray-500 mb-1">Previous Visit:</p>
                <p>{PatientOverview.previousVisit}</p>
              </div>

              <div>
                <p className="text-gray-500 mb-1">Allergies:</p>
                <p>{PatientOverview.allergies}</p>
              </div>

              <div>
                <p className="text-gray-500 mb-1">Dieseas:</p>
                <p>{PatientOverview.disease}</p>
              </div>
            </div>
          </div>

 
      
    </div>
  )
}

export default OverView
