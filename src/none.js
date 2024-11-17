// Функция для генерации случайного кошелька
function generateRandomWallet() {
    const randomAddress = `EQ${Math.random().toString(36).substring(2, 10)}...`; // Генерация случайного адреса
    const randomAmount = (Math.random() * (100 - 0.2) + 0.2).toFixed(2); // Генерация случайной суммы от 0.2 до 100
    return { address: randomAddress, amount: randomAmount };
}

// Функция обновления сгенерированных кошельков
function getRandomWallet() {
    const wallet = generateRandomWallet();

    // Получаем элементы
    const walletAddressElement = document.getElementById('wallet-address');
    const walletAmountElement = document.getElementById('wallet-amount');

    // Обновляем текст
    walletAddressElement.textContent = wallet.address;
    walletAmountElement.textContent = `${wallet.amount} TON`;

    // Убираем предыдущую анимацию
    walletAddressElement.classList.remove('wallet-info');
    walletAmountElement.classList.remove('wallet-info');

    // Перезапускаем анимацию
    void walletAddressElement.offsetWidth;
    walletAddressElement.classList.add('wallet-info');

    void walletAmountElement.offsetWidth;
    walletAmountElement.classList.add('wallet-info');
}

// Запуск обновления кошельков каждые 5 секунд
function startWalletGeneration() {
    getRandomWallet(); // Запускаем сразу
    setInterval(getRandomWallet, 5000); // Обновляем каждые 5 секунд
}
