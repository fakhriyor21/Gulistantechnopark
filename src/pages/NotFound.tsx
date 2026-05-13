
import Lottie from 'react-lottie';
import animationData from '../assets/animation/Animation - 1727778131433.json';
import { useMessages } from "@/contexts/LanguageContext";

export default function NotFound() {
    const m = useMessages();
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
            {m.common.notFound}
          </p>
        
      </main>
    </div>
  );
}
