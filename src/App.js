import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
    const [balance, setBalance] = useState(0);
    const [isPopupVisible, setIsPopupVisible] = useState(false);

    // Загружаем баланс из локального хранилища при загрузке компонента
    useEffect(() => {
        const storedBalance = localStorage.getItem('userBalance');
        if (storedBalance) {
            setBalance(parseFloat(storedBalance));
        }
    }, []);

    // Функция для обновления баланса
    const updateBalance = (amount) => {
        const newBalance = balance + amount;
        setBalance(newBalance);
        localStorage.setItem('userBalance', newBalance); // Сохраняем баланс в локальное хранилище
    };

    const handleButtonClick = () => {
        setIsPopupVisible(true);
        setTimeout(() => {
            setIsPopupVisible(false);
        }, 2000); // Скрыть всплывающее окно через 2 секунды
    };

    const handleTopUp = () => {
        // Проверьте, что tonConnectUI доступен в глобальной области видимости
        if (window.tonConnectUI) {
            window.tonConnectUI.sendTransaction({
                validUntil: Math.round(Date.now() / 1000) + 600, // 10 минут
                messages: [
                    {
                        address: 'UQDOTWT4TqDxyzDT62Khya1GnNNm-THQNsZO83S_ViBxw1ob',
                        amount: '10000000', // 1 TON в нанотонах (0.01)
                        stateInit: ''
                    }
                ]
            }).then(response => {
                console.log('Transaction successful', response);
                // Например, добавляем 1 TON после успешной транзакции
                updateBalance(1);
            }).catch(error => {
                console.error('Transaction failed', error);
            });
        } else {
            console.error('TON Connect UI is not available');
        }
    };

    return (
        <div className="App">
            <header className="App-header">
                <img src="lottery-button.png" alt="Lottery Button" className="lottery-image" onClick={handleButtonClick} />
                <div className={isPopupVisible ? 'popup popup-show' : 'popup'}>Попробуй еще раз</div>
                <button className="top-up-button" onClick={handleTopUp}>Пополнить баланс</button>
                <div className="balance-display">Баланс: {balance} TON</div>
            </header>
        </div>
    );
}

export default App;
