// blog button section 
document.getElementById('blog-btn').addEventListener('click',function(){
    window.location.href='blog.html';
})
// blog button section end



// noakhali button section 
document.getElementById('donate-btn-one').addEventListener('click',function(event){
    event.preventDefault();
    const mainbalance = parseFloat(document.getElementById('main-balance').innerText);
    const inputOne = parseFloat(document.getElementById('input-one').value);
    const noakhaliBalance = parseFloat(document.getElementById('noakhali-balance').innerText);

    const newmainBalance = mainbalance - inputOne;
    const newNoakhaliBalance = noakhaliBalance + inputOne;
    document.getElementById('main-balance').innerText = newmainBalance;
    document.getElementById('noakhali-balance').innerText=newNoakhaliBalance;
    
})

//  feni section 
document.getElementById('donate-btn-two').addEventListener('click',function(event){
    event.preventDefault();
    const mainbalance = parseFloat(document.getElementById('main-balance').innerText);
    const inputTwo = parseFloat(document.getElementById('input-two').value);
    const feniBalance = parseFloat(document.getElementById('feni-balance').innerText);

    const newmainBalance = mainbalance - inputTwo;
    const newfeniBalance = feniBalance + inputTwo;
    document.getElementById('main-balance').innerText = newmainBalance;
    document.getElementById('feni-balance').innerText=newfeniBalance;
    
})


// quota section 
document.getElementById('donate-btn-three').addEventListener('click',function(event){
    event.preventDefault();
    const mainbalance = parseFloat(document.getElementById('main-balance').innerText);
    const inputThree = parseFloat(document.getElementById('input-three').value);
    const quotaBalance = parseFloat(document.getElementById('quota-balance').innerText);

    const newmainBalance = mainbalance - inputThree;
    const newQuotaBalance = quotaBalance + inputThree;
    document.getElementById('main-balance').innerText = newmainBalance;
    document.getElementById('quota-balance').innerText=newQuotaBalance;
    
})


// donate button section 
 document.getElementById('history').addEventListener('click',function(event){
    event.preventDefault();
    document.getElementById('donation').classList.remove("bg-cyan-500");
    document.getElementById('history').classList.add("bg-cyan-500");
    console.log(999999)
 })

