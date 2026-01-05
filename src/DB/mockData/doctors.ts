import doctor1 from '../../assets/DoctorSection/image1.png';
import doctor2 from '../../assets/DoctorSection/image2.png';
import doctor3 from '../../assets/DoctorSection/image3.png';

export interface Doctor {
  id: number;
  image: string;
}

export const doctors: Doctor[] = [
  { 
    id: 1, 
    image: doctor1 
  },
  { 
    id: 2, 
    image: doctor2 
  },
  { 
    id: 3, 
    image: doctor3 
  },
  { 
    id: 4, 
    image: doctor1 
  },
  { 
    id: 5, 
    image: doctor2 
  },
  { 
    id: 6, 
    image: doctor3 
  },
  { 
    id: 7, 
    image: doctor1 
  },
  { 
    id: 8, 
    image: doctor2 
  },
];
