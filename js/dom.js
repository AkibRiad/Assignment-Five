// innervalue getting function 
function getInputValueById(id){
     return parseFloat(document.getElementById(id).value);
    
}
// innerText getting function 
function getInputTextById(id) {
    return parseFloat(document.getElementById(id).innerText); 
}

// remove hidden function 
function showInvalid(id){
    return document.getElementById(id).classList.remove('hidden');
}



// blog button section 
document.getElementById('blog-btn').addEventListener('click',function(){
    window.location.href='blog.html';
})
// blog button section end



// noakhali button section 
document.getElementById('donate-btn-one').addEventListener('click',function(event){
    event.preventDefault();
    // const mainbalance = parseFloat(document.getElementById('main-balance').innerText);
    // const inputOne = parseFloat(document.getElementById('input-one').value);
    // const noakhaliBalance = parseFloat(document.getElementById('noakhali-balance').innerText);

    // calling function 
    const mainBalance = getInputTextById('main-balance');
    
    const inputOne = getInputValueById("input-one");
    
    const noakhaliBalance = getInputTextById("noakhali-balance");
    

    
    if(inputOne <= 0 || isNaN(inputOne)){
        // document.getElementById('invalid-one').classList.remove("hidden");
        // calling hidden function 
        showInvalid("invalid-one");
        return;
    }
    if(inputOne > mainBalance){
        alert("You Don't Have Enough Money For Donate");
        return;
    }

    const newmainBalance = mainBalance - inputOne;
    const newNoakhaliBalance = noakhaliBalance + inputOne;
    document.getElementById('main-balance').innerText = newmainBalance;
    document.getElementById('noakhali-balance').innerText=newNoakhaliBalance;

    const historyContainer = document.createElement('div');
    historyContainer.className= 'bg-white shadow-lg rounded-lg p-4 border-2 border-cyan-300';
    
    historyContainer.innerHTML=`
    <p>${inputOne.toFixed(2)} Taka is Donate for Flood at Noakhali,Bangladesh</p>
    <p>${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}</p>  
    `
    const historyList =document.getElementById('history-list');
    historyList.appendChild(historyContainer)
    

})

//  feni section 
document.getElementById('donate-btn-two').addEventListener('click',function(event){
    event.preventDefault();
    // const mainbalance = parseFloat(document.getElementById('main-balance').innerText);
    // const inputTwo = parseFloat(document.getElementById('input-two').value);
    // const feniBalance = parseFloat(document.getElementById('feni-balance').innerText);
    // calling function
    const mainBalance = getInputTextById('main-balance');
    
    const inputTwo = getInputValueById("input-two");
    
    const feniBalance = getInputTextById("feni-balance");
    

    if(inputTwo <= 0 || isNaN(inputTwo)){
        // document.getElementById('invalid-two').classList.remove("hidden");
        // calling hidden function 
        showInvalid("invalid-two");
        return;
    }
    if(inputTwo > mainBalance){
        alert("You Don't Have Enough Money For Donate");
        return;
    }

    const newmainBalance = mainBalance - inputTwo;
    const newFeniBalance = feniBalance + inputTwo;
    document.getElementById('main-balance').innerText = newmainBalance;
    document.getElementById('feni-balance').innerText=newFeniBalance;

    const historyContainer = document.createElement('div');
    historyContainer.className= 'bg-white shadow-lg rounded-lg p-4 border-2 border-cyan-300';
    
    historyContainer.innerHTML=`
    <p>${inputTwo.toFixed(2)} Taka is Donate for Flood Relief in Feni,Bangladeshh</p>
    <p>${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}</p>  
    `
    const historyList =document.getElementById('history-list');
    historyList.appendChild(historyContainer)
    
})


// quota section 
document.getElementById('donate-btn-three').addEventListener('click',function(event){
    event.preventDefault();
    // const mainbalance = parseFloat(document.getElementById('main-balance').innerText);
    // const inputThree = parseFloat(document.getElementById('input-three').value);
    // const quotaBalance = parseFloat(document.getElementById('quota-balance').innerText);

    // calling function
    const mainBalance = getInputTextById('main-balance');
    
    const inputThree = getInputValueById("input-three");
    
    const quotaBalance = getInputTextById("quota-balance");
    

    if(inputThree <= 0 || isNaN(inputThree)){
        // document.getElementById('invalid-three').classList.remove("hidden");
        // calling hidden function 
        showInvalid("invalid-three");
        return;
    }
    if(inputThree > mainBalance){
        alert("You Don't Have Enough Money For Donate");
        return;
    }

    const newmainBalance = mainBalance - inputThree;
    const newQuotaBalance = quotaBalance + inputThree;
    document.getElementById('main-balance').innerText = newmainBalance;
    document.getElementById('quota-balance').innerText=newQuotaBalance;

    const historyContainer = document.createElement('div');
    historyContainer.className= ' bg-white shadow-lg rounded-lg p-4 border-2 border-cyan-300';
    
    historyContainer.innerHTML=`
    <p>${inputThree.toFixed(2)} Taka is Donate for Injured in the Quota Movement</p>
    <p>${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}</p>  
    `
    const historyList =document.getElementById('history-list');
    historyList.appendChild(historyContainer)
    
})


// history button section 
 document.getElementById('history').addEventListener('click',function(event){
    event.preventDefault();
    document.getElementById('donation').classList.remove("bg-cyan-500");
    document.getElementById('history').classList.add("bg-cyan-500");
    

    const historyList = document.getElementById('history-list');
    historyList.classList.remove('hidden');
    const mainBody = document.getElementById('main-body');
    mainBody.classList.add('hidden');
 })


//  donation button 

document.getElementById('donation').addEventListener('click',function(event){
event.preventDefault();
const historyList = document.getElementById('history-list');
    historyList.classList.add('hidden');
    const mainBody = document.getElementById('main-body');
    mainBody.classList.remove('hidden');

    document.getElementById('history').classList.remove("bg-cyan-500");
    document.getElementById('donation').classList.add("bg-cyan-500");

})

