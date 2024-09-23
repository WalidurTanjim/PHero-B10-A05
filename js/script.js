// noakhali donation validation
document.getElementById('noakhali-donation-button').addEventListener('click', function(event){
    event.preventDefault();

    const donationAmount = getInputValueById('noakhali-amount-field');
    const donationTitle = document.getElementById('noakhali-title').innerText;
    const accountBalance = getBalanceById('account-balance');
    const donationBalance = getBalanceById('noakhali-balance');
    // console.log("Donation amount: ", donationAmount, accountBalance, donationBalance) Congrates! Successfully

    if(isNaN(donationAmount)){
        document.getElementById('modal-heading').innerText = 'Sorry';
        document.getElementById('my_modal_1').showModal();
        document.getElementById('modal-title').innerText = `You have to enter any valid digit`;
        document.getElementById('confirmation').innerText = 'Donation Failed';
        return 
    }
    if(donationAmount > accountBalance){
        document.getElementById('modal-heading').innerText = 'Sorry';
        document.getElementById('my_modal_1').showModal();
        document.getElementById('modal-title').innerText = `Donation amount is grater than account balance`;
        document.getElementById('confirmation').innerText = 'Donation Failed';
        return
    }
    if(donationAmount <= 0){
        document.getElementById('modal-heading').innerText = 'Sorry';
        document.getElementById('my_modal_1').showModal();
        document.getElementById('modal-title').innerText = `Donation must be greater then 0`;
        document.getElementById('confirmation').innerText = 'Donation Failed';
        return
    }
    
    setNewBalanceById('noakhali-balance', donationAmount, donationBalance);
    decreaseAccountBalanceById('account-balance', donationAmount);


    // add history noakhali
    addHistory('historyContainer', donationAmount, donationTitle);

    // show modal
    document.getElementById('my_modal_1').showModal();
    document.getElementById('modal-heading').innerText = 'Congrates!';
    document.getElementById('modal-title').innerText = `You Have Donated For ${donationTitle}`;
    document.getElementById('confirmation').innerText = 'Successfully';
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
        document.getElementById('modal-heading').innerText = 'Sorry';
        document.getElementById('my_modal_1').showModal();
        document.getElementById('modal-title').innerText = `You have to enter any valid digit`;
        document.getElementById('confirmation').innerText = 'Donation Failed';
        return 
    }
    if(donationAmount > accountBalance){
        document.getElementById('modal-heading').innerText = 'Sorry';
        document.getElementById('my_modal_1').showModal();
        document.getElementById('modal-title').innerText = `Donation amount is grater than account balance`;
        document.getElementById('confirmation').innerText = 'Donation Failed';
        return
    }
    if(donationAmount <= 0){
        document.getElementById('modal-heading').innerText = 'Sorry';
        document.getElementById('my_modal_1').showModal();
        document.getElementById('modal-title').innerText = `Donation must be greater then 0`;
        document.getElementById('confirmation').innerText = 'Donation Failed';
        return
    }
    
    
    setNewBalanceById('feni-balance', donationAmount, donationBalance);
    decreaseAccountBalanceById('account-balance', donationAmount);


    // add history feni
    addHistory('historyContainer', donationAmount, donationTitle); 

    // show modal
    document.getElementById('my_modal_1').showModal();
    document.getElementById('modal-heading').innerText = 'Congrates!';
    document.getElementById('modal-title').innerText = `You Have Donated For ${donationTitle}`;
    document.getElementById('confirmation').innerText = 'Successfully';
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
        document.getElementById('modal-heading').innerText = 'Sorry';
        document.getElementById('my_modal_1').showModal();
        document.getElementById('modal-title').innerText = `You have to enter any valid digit`;
        document.getElementById('confirmation').innerText = 'Donation Failed';
        return 
    }
    if(donationAmount > accountBalance){
        document.getElementById('modal-heading').innerText = 'Sorry';
        document.getElementById('my_modal_1').showModal();
        document.getElementById('modal-title').innerText = `Donation amount is grater than account balance`;
        document.getElementById('confirmation').innerText = 'Donation Failed';
        return
    }
    if(donationAmount <= 0){
        document.getElementById('modal-heading').innerText = 'Sorry';
        document.getElementById('my_modal_1').showModal();
        document.getElementById('modal-title').innerText = `Donation must be greater then 0`;
        document.getElementById('confirmation').innerText = 'Donation Failed';
        return
    }
    
    
    setNewBalanceById('protest-balance', donationAmount, donationBalance);
    decreaseAccountBalanceById('account-balance', donationAmount);


    // add history protest
    addHistory('historyContainer', donationAmount, donationTitle);

    // show modal
    document.getElementById('my_modal_1').showModal();
    document.getElementById('modal-heading').innerText = 'Congrates!';
    document.getElementById('modal-title').innerText = `You Have Donated For ${donationTitle}`;
    document.getElementById('confirmation').innerText = 'Successfully';
})