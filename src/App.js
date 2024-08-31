import React, { useState } from 'react';
import './App.css';

function App() {
    const [isPopupVisible, setIsPopupVisible] = useState(false);

    const handleButtonClick = () => {
        setIsPopupVisible(true);
        setTimeout(() => {
            setIsPopupVisible(false);
        }, 2000); // Скрыть всплывающее окно через 2 секунды
    };

    return (
        <div className="App">
            <header className="App-header">
                <img src="lottery-button.png" alt="Lottery Button" className="lottery-image" onClick={handleButtonClick} />
                <div className={isPopupVisible ? 'popup popup-show' : 'popup'}>Попробуй еще раз</div>
            </header>
        </div>
    );
}

export default App;