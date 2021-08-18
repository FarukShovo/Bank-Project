function getInputValue(inputId) {
    const input = document.getElementById(inputId);
    const inputAmountText = input.value;
    input.value = '';
    const amountValue = parseFloat(inputAmountText)

    return amountValue;
}

function updateTotalField(totaldFieldId, amount) {
    // debugger;
    const totalElement = document.getElementById(totaldFieldId);

    const totalText = totalElement.innerText;

    const priviousTotal = parseFloat(totalText);
    totalElement.innerText = priviousTotal + amount;

}

function getCurrentBalance() {
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const balanceTotalAmount = parseFloat(balanceTotalText);
    return balanceTotalAmount;
}

function updateBalance(amount, isAdd) {
    const balanceTotal = document.getElementById('balance-total');
    /*const balanceTotalText = balanceTotal.innerText;
    const balanceTotalAmount = parseFloat(balanceTotalText); */
    const balanceTotalAmount = getCurrentBalance();
    if (isAdd == true) {
        balanceTotal.innerText = balanceTotalAmount + amount;
    } else {
        balanceTotal.innerText = balanceTotalAmount - amount;
    }

}





document.getElementById('deposit-button').addEventListener('click', function () {

    //deposit
    /* const depositInput = document.getElementById('deposit-input');
    const depositAmountText = depositInput.value;

    const depositAmount = parseFloat(depositAmountText) */

    //console.log(depositAmount);
    // const depositAmount = getInputValue('deposit-input');

    /*  const depositTotal = document.getElementById('deposit-total');
 
     const priviousDepositText = depositTotal.innerText;
 
     const priviousDepositTotal = parseFloat(priviousDepositText);
     depositTotal.innerText = priviousDepositTotal + depositAmount; */

    // updateTotalField('deposit-total', depositAmount);

    // console.log(priviousDepositTotal);

    //balance

    /*  const balanceTotal = document.getElementById('balance-total');
     const balanceTotalText = balanceTotal.innerText;
      const balanceTotalAmount = parseFloat(balanceTotalText);
     balanceTotal.innerText = balanceTotalAmount + depositAmount; */

    const depositAmount = getInputValue('deposit-input');
    if (depositAmount > 0) {
        updateTotalField('deposit-total', depositAmount);
        updateBalance(depositAmount, true);
    }



})

//withdraw

document.getElementById('Withdraw-button').addEventListener('click', function () {
    /*   const WithdrawInput = document.getElementById('Withdraw-input');
      const withdrawAmountText = WithdrawInput.value;
      const withdrawAmount = parseFloat(withdrawAmountText); */

    // const withdrawAmount = getInputValue('Withdraw-input');

    /* const WithdrawTotal = document.getElementById('Withdraw-total');

    const WithdrawTotalText = WithdrawTotal.innerText;

    const WithdrawTotalAmount = parseFloat(WithdrawTotalText);

    WithdrawTotal.innerText = withdrawAmount + WithdrawTotalAmount; */

    // updateTotalField('Withdraw-total', withdrawAmount);



    // console.log(WithdrawTotalAmount);

    /* const accountBalanceTotal = document.getElementById('balance-total');
    const accountBalanceText = accountBalanceTotal.innerText;

    const accountBalance = parseFloat(accountBalanceText);

    accountBalanceTotal.innerText = accountBalance - withdrawAmount; */

    const withdrawAmount = getInputValue('Withdraw-input');
    const currentBalance = getCurrentBalance();
    if (withdrawAmount > 0 && withdrawAmount < currentBalance) {
        updateTotalField('Withdraw-total', withdrawAmount);
        updateBalance(withdrawAmount, false);
    }

    if (withdrawAmount > currentBalance) {
        console.log('You can not withdraw such money whaich you donot have.. ')
        window.alert("'You can not withdraw such money whaich you donot have.. ");
    }


})