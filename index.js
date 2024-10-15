// Get value Function
function getInputValueById(id){
return parseFloat(document.getElementById(id).value);

}

function showError (id){
document.getElementById(id).classList.remove("hidden")

}

function formatCurrency(ammount){
return `${ammount.toFixed(2)}`

}

function addToHistory (income,totalExpense,balance){
  const historyItem = document.createElement("div")
  historyItem.className = 'bg-white p-3 rounded-md border-l-2 border-indigo-500'
  historyItem.innerHTML = `
  <p>Serial :${count}</P>
  <p class="text-xs text-gray-500">${new Date().toLocaleDateString()}</p>
  <p class="text-xs text-gray-500">Income :${formatCurrency(income)}</p>
  <p class="text-xs text-gray-500">Expense :${formatCurrency(totalExpense)}</p>
  <p class="text-xs text-gray-500">Balance :${formatCurrency(balance)}</p>
  
  
  
  `;
  const Historycontainer = document.getElementById('history-list')
  
  Historycontainer.insertBefore(historyItem,Historycontainer.firstChild);

}

let count = 0
const calculateButton=document.getElementById('calculate')
calculateButton.addEventListener('click',function(){
count +=1

// getting all the value 

// const income = parseFloat(document.getElementById('income').value)

const income = getInputValueById("income")
console.log(income)
// const Software = parseFloat(document.getElementById('software').value)

const Software = getInputValueById("software")
console.log(Software)
 
// const courses = parseFloat(document.getElementById('courses').value)

const courses = getInputValueById("courses")
console.log(courses)



// const internet = parseFloat(document.getElementById('internet').value)

const internet = getInputValueById('internet')
console.log(internet)

const totalExpense = Software + courses + internet;
const balance = income - totalExpense;

if (income <=0 || isNaN(income)){
// document.getElementById('income-error').classList.remove('hidden')
showError("income-error")
return;
}

if (Software <=0 || isNaN(Software)){
  // document.getElementById('software-error').classList.remove('hidden')
showError("software-error")

  return;
  }

 
  if (courses <=0 || isNaN(courses)){
    document.getElementById('courses-error').classList.remove('hidden')
    return;
    }  

    if (internet  <=0 || isNaN(internet)){
      document.getElementById('internet-error').classList.remove('hidden')
      return;
      }  
if (totalExpense > income){
// document.getElementById('logic-error').classList.remove('hidden')

showError("logic-error")
return;

}
const totalExpenseElement = document.getElementById('total-expenses')
totalExpenseElement.innerText = totalExpense;

const balanceElement = document.getElementById('balance')
balanceElement.innerText = balance

const result = document.getElementById('results');
result.classList.remove('hidden')


// const historyItem = document.createElement("div")
// historyItem.className = 'bg-white p-3 rounded-md border-l-2 border-indigo-500'
// historyItem.innerHTML = `
// <p>Serial :${count}</P>
// <p class="text-xs text-gray-500">${new Date().toLocaleDateString()}</p>
// <p class="text-xs text-gray-500">Income :${formatCurrency(income)}</p>
// <p class="text-xs text-gray-500">Expense :${formatCurrency(totalExpense)}</p>
// <p class="text-xs text-gray-500">Balance :${formatCurrency(balance)}</p>



// `;
// const Historycontainer = document.getElementById('history-list')

// Historycontainer.insertBefore(historyItem,Historycontainer.firstChild);

addToHistory(income,totalExpense,balance);
})

const calculateSavingButton = document.getElementById('calculate-savings')
calculateSavingButton.addEventListener('click',function(){

  // getting all the value 
const income = parseFloat(document.getElementById('income').value)

const Software = parseFloat(document.getElementById('software').value)

const courses = parseFloat(document.getElementById('courses').value)

const internet = parseFloat(document.getElementById('internet').value)

const SavingPercentage = parseFloat(document.getElementById('savings').value);
console.log(SavingPercentage)

const totalExpense = Software + courses + internet;
const balance = income - totalExpense;
const savingsAmmount = (SavingPercentage * balance)/100
console.log(savingsAmmount)

const savingElement = document.getElementById('savings-amount')
savingElement.innerText = savingsAmmount.toFixed(2)
const remainingBalanceAmmount = balance - savingsAmmount
const remainingBalance = document.getElementById('remaining-balance')
remainingBalance.innerText = remainingBalanceAmmount 
})

//  history tab dunctionality

const historyTab = document.getElementById('history-tab');

const assistantTab = document.getElementById('assistant-tab')

historyTab.addEventListener('click',function(){

historyTab.classList.add('text-white', 'font-semibold', 'bg-gradient-to-r', 'from-blue-500' ,'to-purple-600')

historyTab.classList.remove('text-gray')
assistantTab.classList.add('text-gray-600')
assistantTab.classList.remove('text-white', 'font-semibold', 'bg-gradient-to-r', 'from-blue-500' ,'to-purple-600')



document.getElementById('expense-form').classList.add('hidden')
document.getElementById('history-list').classList.remove('hidden')
})
assistantTab.addEventListener('click',function(){

assistantTab.classList.add('text-white', 'font-semibold', 'bg-gradient-to-r', 'from-blue-500' ,'to-purple-600')

historyTab.classList.remove('text-white', 'font-semibold', 'bg-gradient-to-r', 'from-blue-500' ,'to-purple-600')
document.getElementById('expense-form').classList.remove('hidden')
})

// Live Validation For Income

document.getElementById('income').addEventListener('input',function(){


const inputValue= parseFloat(document.getElementById('income').value);

if (isNaN(inputValue) || inputValue <= 0){
document.getElementById('income-error').classList.remove('hidden')
return;

}

})