import timpanometriya from '../../assets/FactSection/Timpanometriya.jpg';
import skrining from '../../assets/FactSection/Image2.png';
import bogaz from '../../assets/FactSection/bogaz.jpg';
import anesteziya from '../../assets/FactSection/image4.jpg';


export interface NewsImage {
  id: number;
  image: string;
}

export const newsImages: NewsImage[] = [
  { id: 1, image: timpanometriya },
  { id: 2, image: skrining },
  { id: 3, image: bogaz },
  { id: 4, image: anesteziya }, 
  { id: 5, image: skrining }, 
  { id: 6, image: bogaz }, 
];
