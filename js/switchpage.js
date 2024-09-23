// donation btn validation
document.getElementById('donation-btn').addEventListener('click', function(event){
    event.preventDefault();

    document.getElementById('cardContainer').classList.remove('hidden')
    document.getElementById('cardContainer').classList.add('active')
    document.getElementById('historyContainer').classList.add('hidden')
    document.getElementById('historyContainer').classList.remove('active')


    // toggle btn bg-color validation
    if(document.getElementById('cardContainer').classList.value.includes('active')){
        document.getElementById('donation-btn').style.backgroundColor = '#B4F461';
    }
    if(document.getElementById('historyContainer').classList.value.includes('hidden')){
        document.getElementById('history-btn').style.backgroundColor = '#F9F7F3'
    }
})

// history btn validation
document.getElementById('history-btn').addEventListener('click', function(event){
    event.preventDefault();

    document.getElementById('cardContainer').classList.add('hidden')
    document.getElementById('cardContainer').classList.remove('active')
    document.getElementById('historyContainer').classList.add('active')
    document.getElementById('historyContainer').classList.remove('hidden')
    
    
    // // toggle btn bg-color validation
    if(document.getElementById('historyContainer').classList.value.includes('active')){
        document.getElementById('history-btn').style.backgroundColor = '#B4F461';
    }
    if(document.getElementById('cardContainer').classList.value.includes('hidden')){
        document.getElementById('donation-btn').style.backgroundColor = '#F9F7F3';
    }
})