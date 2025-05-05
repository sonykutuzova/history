import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Фикс для иконок маркеров
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
});

const HistoricalMap = () => {
  // Координаты центра СПб
  const center = [59.9343, 30.3351];
  
  // Исторические места
  const places = [
    {
      name: "Петропавловская крепость",
      position: [59.9500, 30.3167],
      description: "Историческое ядро города, основанное Петром I в 1703 году"
    },
    {
      name: "Зимний дворец",
      position: [59.9398, 30.3146],
      description: "Бывшая императорская резиденция, ныне Эрмитаж"
    },
    {
      name: "Исаакиевский собор",
      position: [59.9342, 30.3060],
      description: "Архитектурный памятник XIX века, крупнейший православный собор Петербурга"
    },
    {
      name: "Казанский собор",
      position: [59.9343, 30.3245],
      description: "Собор в стиле ампир, построен в честь победы над Наполеоном"
    },
    {
      name: "Спас на Крови",
      position: [59.9400, 30.3285],
      description: "Храм, возведённый на месте убийства Александра II"
    },
    {
      name: "Медный всадник",
      position: [59.9364, 30.3021],
      description: "Памятник Петру I, ставший символом Санкт-Петербурга"
    },
    {
      name: "Мариинский театр",
      position: [59.9260, 30.2965],
      description: "Знаменитый оперный и балетный театр России"
    },
    {
      name: "Летний сад",
      position: [59.9451, 30.3370],
      description: "Парк эпохи Петра I с фонтанами и скульптурами"
    },
    {
      name: "Александринский театр",
      position: [59.9332, 30.3343],
      description: "Один из старейших театров России, основан в 1756 году"
    },
    {
      name: "Аврора",
      position: [59.9551, 30.3377],
      description: "Крейсер, выстрел которого ознаменовал начало Октябрьской революции"
    },
    {
      name: "Смольный собор",
      position: [59.9511, 30.3966],
      description: "Шедевр барочной архитектуры, часть Смольного монастыря"
    }
  ];
  
  return (
    <MapContainer 
      center={center} 
      zoom={13} 
      style={{ height: '400px', width: '100%', borderRadius: '8px' }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      
      {places.map((place, index) => (
        <Marker key={index} position={place.position}>
          <Popup>
            <strong>{place.name}</strong><br/>
            {place.description}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default HistoricalMap;