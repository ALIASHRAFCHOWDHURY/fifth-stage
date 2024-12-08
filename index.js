/***Nav bar Blog */

document.getElementById('blog-section').addEventListener('click', function(){
        window.location.href = 'home.html';
})

/***donation part */
document.getElementById('btn-add-money').addEventListener('click', function(event){
        event.preventDefault();
        const addMoney = getInputValueById('add-money-input') ;  
        
        // if (isNaN(addMoney) || addMoney <= 0 ) {
        //         alert('failed to donate money!!');
        //         return;
        //     }
        if (isNaN(addMoney) || addMoney <= 0 ) {
                alert('failed to donate money!!');
                return;
        }  

        const donationFund = getTextValueById('donation-fund');
        const donatedMoney =  addMoney + donationFund;
        const myAccountBalance = getTextValueById('account-balance');

        if( addMoney > myAccountBalance){
                alert("You don't have sufficient balance!!");
                return;
        }
        const availableBalance = myAccountBalance - addMoney ;
        document.getElementById('account-balance').innerText = availableBalance
        document.getElementById('donation-fund').innerText = donatedMoney ;

        // added to history
        const div = document.createElement('div');
        div.classList.add('container', 'mx-auto',  'md:w-8/12',  'border-2',  'border-gray-200', 'flex', 'justify-center' ,'my-5' , 'p-8', 'rounded-xl')
        div.innerHTML= `
                <div>
                        <h1 class=' text-xl font-bold'> Added ${addMoney} Taka is Donate for Flood at Noakhali, Bangladesh.Now your available balance ${availableBalance} Taka. </h1>
                        ${new Date()}
                </div>
        `
        
        document.getElementById('history-container').appendChild(div)

})
document.getElementById('btn-add-money-two').addEventListener('click', function(event){
        event.preventDefault();
        const addMoney = getInputValueById('add-money-input-two') ;  
        
        // if (isNaN(addMoney) || addMoney <= 0 ) {
        //         alert('failed to donate money!!');
        //         return;
        //     }
        if (isNaN(addMoney) || addMoney <= 0 ) {
                alert('failed to donate money!!');
                return;
        }  

        const donationFund = getTextValueById('donation-fund-two');
        const donatedMoney =  addMoney + donationFund;
        const myAccountBalance = getTextValueById('account-balance');

        if( addMoney > myAccountBalance){
                alert("You don't have sufficient balance!!");
                return;
        }
        const availableBalance = myAccountBalance - addMoney ;
        document.getElementById('account-balance').innerText = availableBalance
        document.getElementById('donation-fund-two').innerText = donatedMoney ;

         // added to history
         const div = document.createElement('div');
         div.classList.add('container', 'mx-auto',  'md:w-8/12',  'border-2',  'border-gray-200', 'flex', 'justify-center' ,'my-5' , 'p-8', 'rounded-xl')
         div.innerHTML= `
                 <div>
                         <h1 class=' text-xl font-bold'> Added ${addMoney} Taka is Donate for Flood Relief in Feni,Bangladesh.Now your available balance ${availableBalance} Taka. </h1>
                         ${new Date()}
                 </div>
         `
         
         document.getElementById('history-container').appendChild(div)

})
document.getElementById('btn-add-money-three').addEventListener('click', function(event){
        event.preventDefault();
        const addMoney = getInputValueById('add-money-input-three') ;  
        
        // if (isNaN(addMoney) || addMoney <= 0 ) {
        //         alert('failed to donate money!!');
        //         return;
        //     }
        if (isNaN(addMoney) || addMoney <= 0 ) {
                alert('failed to donate money!!');
                return;
        }  

        const donationFund = getTextValueById('donation-fund-three');
        const donatedMoney =  addMoney + donationFund;
        const myAccountBalance = getTextValueById('account-balance');

        if( addMoney > myAccountBalance){
                alert("You don't have sufficient balance!!");
                return;
        }
        const availableBalance = myAccountBalance - addMoney ;
        document.getElementById('account-balance').innerText = availableBalance
        document.getElementById('donation-fund-three').innerText = donatedMoney ;

                // added to history
        const div = document.createElement('div');
        div.classList.add('container', 'mx-auto',  'md:w-8/12',  'border-2',  'border-gray-200', 'flex', 'justify-center' ,'my-5' , 'p-8', 'rounded-xl')
        div.innerHTML= `
                <div>
                        <h1 class=' text-xl font-bold'> Added ${addMoney} Taka is Aid for Injured in the Quota Movement.Now your available balance ${availableBalance} Taka. </h1>
                        ${new Date()}
                </div>
        `
        
        document.getElementById('history-container').appendChild(div)

        
})


const donationButton = document.getElementById('donation-button');
const historyButton = document.getElementById('history-button');

function changeColor(button) {
  
  donationButton.style.backgroundColor = '';
  historyButton.style.backgroundColor = '';

  button.style.backgroundColor = 'green';
}
donationButton.addEventListener('click', function() {
  changeColor(donationButton);
});
historyButton.addEventListener('click', function() {
  changeColor(historyButton);
});