
import Lottie from 'react-lottie';
import animationData from '../assets/animation/Animation - 1727778131433.json';
export default function NotFound() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };
    
  return (
    <div className="h-screen flex justify-center items-center">
      <main>

            <Lottie 
                options={defaultOptions}
            
            />
          <p className="max-w-3xl text-center text-2xl font-semibold text-blue-900 dark:text-blue-200">
            Kechirasiz, biz Siz qidirayotgan sahifani topa olmadik. <br /> Afsuski, Siz
            izlagan sahifa mavjud emas. Eng yaxshisi, bosh sahifamizga qaytib,
            navigatsiya va qidiruvdan foydalanish yoki URL manzilini kiritishda
            xatolik borligini tekshirgan ma'qul. Sizga katta rahmat,
            tashrifingizdan juda xursandmiz!
          </p>
        
      </main>
    </div>
  );
}
