function getInputValueById(id){
        const inputValue = document.getElementById(id).value ;
        const inputNumber = parseFloat(inputValue)
        return inputNumber ;
}

function getTextValueById(id){
        const TextValue = document.getElementById(id).innerText ;
        const TextNumber = parseFloat(TextValue)
        return TextNumber ;
}

function showSectionById(id){
        // hide all the section
        
        document.getElementById('donation-section').classList.add('hidden');
        document.getElementById('history-section').classList.add('hidden');
        
// show the section
        document.getElementById(id).classList.remove('hidden')
}