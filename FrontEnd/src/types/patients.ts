export interface PatientContact {
    phone1: string;
    phone2: string;
    email: string;
    address: string;
  }
  
  export interface PatientOverview {
    gender: string;
    dateOfBirth: string;
    nextOfKin: string;
    previousVisit: string;
    nextVisit: string;
    allergies: string;
  }
  
  export interface LabResult {
    name: string;
    size: string;
    type: string;
  }
  
  export interface Patient {
    id: string;
    name: string;
    image: string;
    contact: PatientContact;
    overview: PatientOverview;
    labResults: LabResult[];
  }
  
  