function getInputValue() {
    const depositInput = document.getElementById('deposit-input');
    const depositAmountText = depositInput.value;
    depositInput.value = '';
    const depositAmount = parseFloat(depositAmountText)

    return depositAmount;
}







document.getElementById('deposit-button').addEventListener('click', function () {

    //deposit
    /* const depositInput = document.getElementById('deposit-input');
    const depositAmountText = depositInput.value;

    const depositAmount = parseFloat(depositAmountText) */

    //console.log(depositAmount);
    const depositAmount = getInputValue();

    const depositTotal = document.getElementById('deposit-total');

    const priviousDepositText = depositTotal.innerText;

    const priviousDepositTotal = parseFloat(priviousDepositText);
    const newTotalDeposit = priviousDepositTotal + depositAmount;
    depositTotal.innerText = newTotalDeposit;

    // console.log(priviousDepositTotal);

    //balance

    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;


    const balanceTotalAmount = parseFloat(balanceTotalText);
    // console.log(balanceTotalAmount)
    const newBalanceTotal = balanceTotalAmount + depositAmount;

    balanceTotal.innerText = newBalanceTotal;


})

//withdraw

document.getElementById('Withdraw-button').addEventListener('click', function () {
    const WithdrawInput = document.getElementById('Withdraw-input');
    const withdrawAmountText = WithdrawInput.value;
    const withdrawAmount = parseFloat(withdrawAmountText);

    const WithdrawTotal = document.getElementById('Withdraw-total');

    const WithdrawTotalText = WithdrawTotal.innerText;

    const WithdrawTotalAmount = parseFloat(WithdrawTotalText);

    const newWithdrawTotal = withdrawAmount + WithdrawTotalAmount;

    WithdrawTotal.innerText = newWithdrawTotal;

    // console.log(WithdrawTotalAmount);

    const accountBalanceTotal = document.getElementById('balance-total');
    const accountBalanceText = accountBalanceTotal.innerText;

    const accountBalance = parseFloat(accountBalanceText);

    const currentAccountBalance = accountBalance - withdrawAmount;

    accountBalanceTotal.innerText = currentAccountBalance;


    WithdrawInput.value = '';
})