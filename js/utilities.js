// getInputValueById
function getInputValueById(id) {
    const inputField = document.getElementById(id);
    const inputFieldValue = inputField.value;
    const inputFieldValueNumber = parseFloat(inputFieldValue);
    inputField.value = '';

    return inputFieldValueNumber;
}


// getBalanceById
function getBalanceById(id) {
    const amountField = document.getElementById(id);
    const amountValue = amountField.innerText;
    const amountNumber = parseFloat(amountValue);
    
    return amountNumber;
}


// setNewBalanceById
function setNewBalanceById(id, donationAmount, donationBalance){
    const donationField = document.getElementById(id);
    const newBalance = donationAmount + donationBalance;
    donationField.innerText = newBalance;
}


// decreaseAccountBalanceById
function decreaseAccountBalanceById(id, donationAmount){
    const accountBalance = document.getElementById(id);
    const accountBalanceValue = accountBalance.innerText;
    const accountBalanceNumber = parseFloat(accountBalanceValue);

    const newBalance = accountBalanceNumber - donationAmount;
    accountBalance.innerText = newBalance
    // console.log(newBalance)
}


// addHistory
function addHistory(id, donationAmount, donationTitle){
    const container = document.getElementById(id);
    const div = document.createElement('div');
    div.style.cssText = "padding: 15px; border: 1px solid gray; border-radius: 10px; margin-bottom: 10px;";

    const h1 = document.createElement('h1');
    h1.innerText = `${donationAmount} taka donated for ${donationTitle}`;
    h1.style.cssText = "margin-bottom: 10px; font-size: 20px; font-weight: 700";
    div.appendChild(h1);

    const p = document.createElement('p');
    p.innerText = Date();
    div.appendChild(p);

    container.appendChild(div);
}