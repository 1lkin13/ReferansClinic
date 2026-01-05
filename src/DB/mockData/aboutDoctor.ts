import doctor1 from '../../assets/About/doctor1.png';
import doctor2 from '../../assets/About/doctor2.jpg';
import doctor3 from '../../assets/About/doctor3.jpg';
import doctor4 from '../../assets/About/doctor4.jpg';

export interface AboutDoctor {
  id: number;
  name: string;
  specialty: string;
  image: string;
}

export const aboutDoctors: AboutDoctor[] = [
  {
    id: 1,
    name: "Dr. Nigar Muradova",
    specialty: "Qulaq Burun Boğaz cərrahı, Otonevroloq",
    image: doctor1
  },
  {
    id: 2,
    name: "Dr. Nuray Şükürova",
    specialty: "Qulaq Burun Boğaz cərrahı",
    image: doctor2
  },
  {
    id: 3,
    name: "Dr. Kamilə Allahverdiyeva",
    specialty: "Qulaq Burun Boğaz həkimi",
    image: doctor3
  },
  {
    id: 4,
    name: "Dr. Mahtaban Qədiməli",
    specialty: "Qulaq Burun Boğaz cərrahı",
    image: doctor4
  }
];
