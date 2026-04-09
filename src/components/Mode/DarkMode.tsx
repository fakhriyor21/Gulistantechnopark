import { useTheme } from '../provider/theme-provider'
import { Button } from '../ui/button'
import { MdDarkMode, MdLightMode } from "react-icons/md";
export default function DarkMode() {
    const { theme, setTheme } = useTheme();
    
    const toggleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };
    const className = `font-bold text-xl ${theme === "dark" ? "text-white" : "text-blue-500"}`
    return (
        <div>
            <Button variant="outline" onClick={toggleTheme}>
                {theme === "dark" ?  <MdDarkMode className = {className} />  : <MdLightMode className = {className}/> }
            </Button>
        </div>
    );
}
