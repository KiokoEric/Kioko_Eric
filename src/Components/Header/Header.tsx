import Button from "../Common/Button/Button";
import { BsFillSunFill } from "react-icons/bs";
import { BsFillMoonFill } from "react-icons/bs";
import React, { useEffect, useState } from 'react';

const Header: React.FC = () => {

    const [Color, setColor] = useState(false)
    const [Theme, setTheme] = useState("Dark-Theme");

    const ToggleTheme = () => {
        if (Theme === "Dark-Theme") {
            setTheme("Light-Theme")
        }
        else {
            setTheme("Dark-Theme")
        }
    }; 

    useEffect(() => {
        document.documentElement.className = Theme;
        localStorage.setItem("Values", JSON.stringify(Theme))
    },[Theme])

    const OnScroll = () => {
        if (window.scrollY > 0) {
            setColor(true)
        } else {
            setColor(false)
        }
    }
    window.addEventListener("scroll", OnScroll)

return (
    <header className={Color ? "Header HeaderScroll" : "Header"} id='Header'> 
        <div className="flex justify-between m-auto px-2.5 py-1 shadow-xl sticky z-20">
            <section>
                <h3 className="font-bold text-3xl" >Eric Kioko.</h3>
            </section>
            <Button
                onClick={ToggleTheme}
                Children={Theme === "Dark-Theme" ? <BsFillMoonFill size="1.3rem" className="cursor-pointer" /> : <BsFillSunFill size="1.3rem" className="cursor-pointer"/> }
            />
        </div>
    </header> 
)
}

export default Header