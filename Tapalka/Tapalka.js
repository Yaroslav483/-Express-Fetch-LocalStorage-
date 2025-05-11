let totalCoins = 0; 
let coinsPerClick = 20; 
let passiveIncome = 5;
let coinsPerClickUpgradeCost = 100; 
let passiveIncomeUpgradeCost = 200; 

function upgradeCoinsPerClick() {
    if (totalCoins >= coinsPerClickUpgradeCost) {
        totalCoins -= coinsPerClickUpgradeCost;
        coinsPerClick += 10;
        coinsPerClickUpgradeCost *= 2;
        alert(`Coins per click upgraded to ${coinsPerClick}!`);
    } else {
        alert("Not enough coins to upgrade coins per click.");
    }
}

function upgradePassiveIncome() {
    if (totalCoins >= passiveIncomeUpgradeCost) {
        totalCoins -= passiveIncomeUpgradeCost;
        passiveIncome += 5; 
        passiveIncomeUpgradeCost *= 2; 
        alert(`Passive income upgraded to ${passiveIncome}!`);
    } else {
        alert("Not enough coins to upgrade passive income.");
    }
}


const clickButton = document.querySelector('.game-button');
const totalCoinsDisplay = document.querySelector('.stats-container div:first-child'); 
const userCoinsDisplay = document.querySelector('.user-info span:last-child');

clickButton.addEventListener('click', () => {
    totalCoins += coinsPerClick; 
    totalCoinsDisplay.innerHTML = `💰 ${totalCoins}<br>Total ClickCoins`; 
    userCoinsDisplay.innerHTML = `💰 ${totalCoins}`; 
});

setInterval(() => {
    totalCoins += passiveIncome;
    totalCoinsDisplay.innerHTML = `💰 ${totalCoins}<br>Total ClickCoins`; 
    userCoinsDisplay.innerHTML = `💰 ${totalCoins}`; 
}, 1000); 
document.querySelector('#upgrade-coins-per-click').addEventListener('click', upgradeCoinsPerClick);
document.querySelector('#upgrade-passive-income').addEventListener('click', upgradePassiveIncome);

setInterval(() => {
    totalCoins += passiveIncome;
    totalCoinsDisplay.innerHTML = `💰 ${totalCoins}<br>Total ClickCoins`; 
    userCoinsDisplay.innerHTML = `💰 ${totalCoins}`; 
}, 1000); 
