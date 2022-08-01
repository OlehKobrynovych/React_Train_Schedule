import { useEffect, useState } from 'react';
import AppTable from '../../components/AppTable/AppTable';

function Home() {
    const date = [
        {id: 1, name: 305, from: 'Lviv', to: 'Kyiv', start: '12:00', finish: '16:00', price: 120 },
        {id: 2, name: 355, from: 'Lviv2', to: 'Rivne', start: '16:00', finish: '19:00', price: 150 },
        {id: 3, name: 255, from: 'Lviv3', to: 'Rivne12', start: '15:00', finish: '14:00', price: 250 },
      ];

    const [trains, setTrains] = useState([]);

    useEffect(() => {
        setTrains(date)
    }, []);

    // const handleChangeAngle = () => {
    //     let deg = (Math.atan(window.innerHeight/window.innerWidth) * 57.29577).toFixed();
    //     if (deg !== angle) {
    //         setAngle(() => deg); 
    //     }
    // }
    
    return (
        <div className="train-schedule">
            <AppTable items={trains}/>
            asd1
        </div>
    );
}

export default Home;