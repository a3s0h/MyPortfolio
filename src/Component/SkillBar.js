import { useEffect, useState } from "react";

export const SkillBar = ({icon,name,percentage})=>{
    const [style,setStyle] = useState();
    useEffect(()=>{
        setTimeout(()=>{
            const newStyle = {
                opacity:1,
                width:`${percentage}`,
            }
            setStyle(newStyle);
        },1000);
    },[percentage])
    


    return(
        <div className="child">
            <div className="content">
                <div className="left">
                    {icon}
                </div>
                <div className="right">
                    <h1>{name}</h1>
                    <div className="skill-bar">
                        <div className="progress" style={style}>
                            <span>{percentage}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}