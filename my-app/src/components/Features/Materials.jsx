// src/components/InterestingMaterials.jsx
import { useState } from "react";
import materials from "./DocumentData";
import s from "./Materials.module.css";

const InterestingMaterials = () => {
    const [openedId, setOpenedId] = useState(null);
  
    const toggleCard = (id) => {
      setOpenedId(openedId === id ? null : id);
    };
  
    return (
      <div className={s.container}>
        <div className={s.grid}>
          {materials.map((item) => (
            <div key={item.id} className={`${s.card} ${openedId === item.id ? s.active : ''}`}>
              <div 
                className={s.cardHeader} 
                onClick={() => toggleCard(item.id)}
              >
                <h3>{item.title}</h3>
                <span className={s.arrowIcon}>▲</span>
              </div>
              
              <div className={s.cardContentWrapper}>
                <div className={s.cardContent}>
                  {item.image && (
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className={s.image}
                    />
                  )}
                  {/* <p>{item.content}</p> */}
                  <div dangerouslySetInnerHTML={{ __html: item.content }} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default InterestingMaterials;