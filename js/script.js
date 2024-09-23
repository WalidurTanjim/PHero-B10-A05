// noakhali donation validation
document.getElementById('noakhali-donation-button').addEventListener('click', function(event){
    event.preventDefault();

    const donationAmount = getInputValueById('noakhali-amount-field');
    const donationTitle = document.getElementById('noakhali-title').innerText;
    const accountBalance = getBalanceById('account-balance');
    const donationBalance = getBalanceById('noakhali-balance');
    // console.log("Donation amount: ", donationAmount, accountBalance, donationBalance)

    if(isNaN(donationAmount)){
        console.log('Not number');
        return 
    }
    if(donationAmount > accountBalance){
        console.log('Donation amount is grater than account balance');
        return
    }
    
    setNewBalanceById('noakhali-balance', donationAmount, donationBalance);
    decreaseAccountBalanceById('account-balance', donationAmount);


    // add history noakhali
    addHistory('historyContainer', donationAmount, donationTitle);

    // show modal
    document.getElementById('my_modal_1').showModal();
})


// feni donation validation
document.getElementById('feni-donation-button').addEventListener('click', function(event){
    event.preventDefault();

    const donationAmount = getInputValueById('feni-amount-field');
    const donationTitle = document.getElementById('feni-title').innerText;
    const accountBalance = getBalanceById('account-balance');
    const donationBalance = getBalanceById('feni-balance');
    // console.log("Donation amount: ", donationAmount, accountBalance, donationBalance)

    if(isNaN(donationAmount)){
        console.log('Not number');
        return 
    }
    if(donationAmount > accountBalance){
        console.log('Donation amount is grater than account balance');
        return
    }
    
    
    setNewBalanceById('feni-balance', donationAmount, donationBalance);
    decreaseAccountBalanceById('account-balance', donationAmount);


    // add history feni
    addHistory('historyContainer', donationAmount, donationTitle);

    // show modal
    document.getElementById('my_modal_1').showModal();
})


// protest donation validation
document.getElementById('protest-donation-button').addEventListener('click', function(event){
    event.preventDefault();

    const donationAmount = getInputValueById('protest-amount-field');
    const donationTitle = document.getElementById('protest-title').innerText;
    const accountBalance = getBalanceById('account-balance');
    const donationBalance = getBalanceById('protest-balance');
    // console.log("Donation amount: ", donationAmount, accountBalance, donationBalance)

    if(isNaN(donationAmount)){
        console.log('Not number');
        return 
    }
    if(donationAmount > accountBalance){
        console.log('Donation amount is grater than account balance');
        return
    }
    
    
    setNewBalanceById('protest-balance', donationAmount, donationBalance);
    decreaseAccountBalanceById('account-balance', donationAmount);


    // add history protest
    addHistory('historyContainer', donationAmount, donationTitle);

    // show modal
    document.getElementById('my_modal_1').showModal();
})