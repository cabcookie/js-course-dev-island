//help the cashier return the right of change


//Programme input:
    //Amount due
    var amountDue = prompt('Amound due')*1;
    // var amountDue = 73.25;
    console.log('Amount due:', amountDue.toFixed(2));

    //Amount paid by the customer
    var amountPaidByCustomer = prompt('Amount paid by the customer')*1;
    // var amountPaidByCustomer = 200;
    console.log('Amount paid by the customer:', amountPaidByCustomer.toFixed(2));

//Programme output:
    //Print change amount
    var changeAmount = amountPaidByCustomer - amountDue;
    console.log('Change amount:', changeAmount.toFixed(2));
    //Print change breakdown: notes and coins
    var nextNoteOrCoin;
    var noOfCurrentNoteOrCoin;

    nextNoteOrCoin = 50;
    noOfCurrentNoteOrCoin = Math.floor(changeAmount / nextNoteOrCoin);
    noOfCurrentNoteOrCoin > 0 ? console.log(nextNoteOrCoin+'€:', noOfCurrentNoteOrCoin) : '';
    changeAmount = changeAmount % nextNoteOrCoin;

    nextNoteOrCoin = 20;
    noOfCurrentNoteOrCoin = Math.floor(changeAmount / nextNoteOrCoin);
    noOfCurrentNoteOrCoin > 0 ? console.log(nextNoteOrCoin+'€:', noOfCurrentNoteOrCoin) : '';
    changeAmount = changeAmount % nextNoteOrCoin;

    nextNoteOrCoin = 10;
    noOfCurrentNoteOrCoin = Math.floor(changeAmount / nextNoteOrCoin);
    noOfCurrentNoteOrCoin > 0 ? console.log(nextNoteOrCoin+'€:', noOfCurrentNoteOrCoin) : '';
    changeAmount = changeAmount % nextNoteOrCoin;

    nextNoteOrCoin = 5;
    noOfCurrentNoteOrCoin = Math.floor(changeAmount / nextNoteOrCoin);
    noOfCurrentNoteOrCoin > 0 ? console.log(nextNoteOrCoin+'€:', noOfCurrentNoteOrCoin) : '';
    changeAmount = changeAmount % nextNoteOrCoin;

    nextNoteOrCoin = 2;
    noOfCurrentNoteOrCoin = Math.floor(changeAmount / nextNoteOrCoin);
    noOfCurrentNoteOrCoin > 0 ? console.log(nextNoteOrCoin+'€:', noOfCurrentNoteOrCoin) : '';
    changeAmount = changeAmount % nextNoteOrCoin;

    nextNoteOrCoin = 1;
    noOfCurrentNoteOrCoin = Math.floor(changeAmount / nextNoteOrCoin);
    noOfCurrentNoteOrCoin > 0 ? console.log(nextNoteOrCoin+'€:', noOfCurrentNoteOrCoin) : '';
    changeAmount = changeAmount % nextNoteOrCoin;

    nextNoteOrCoin = 0.5;
    noOfCurrentNoteOrCoin = Math.floor(changeAmount / nextNoteOrCoin);
    noOfCurrentNoteOrCoin > 0 ? console.log(nextNoteOrCoin*100+'p:', noOfCurrentNoteOrCoin) : '';
    changeAmount = changeAmount % nextNoteOrCoin;

    nextNoteOrCoin = 0.2;
    noOfCurrentNoteOrCoin = Math.floor(changeAmount / nextNoteOrCoin);
    noOfCurrentNoteOrCoin > 0 ? console.log(nextNoteOrCoin*100+'p:', noOfCurrentNoteOrCoin) : '';
    changeAmount = changeAmount % nextNoteOrCoin;

    nextNoteOrCoin = 0.1;
    noOfCurrentNoteOrCoin = Math.floor(changeAmount / nextNoteOrCoin);
    noOfCurrentNoteOrCoin > 0 ? console.log(nextNoteOrCoin*100+'p:', noOfCurrentNoteOrCoin) : '';
    changeAmount = changeAmount % nextNoteOrCoin;

    nextNoteOrCoin = 0.05;
    noOfCurrentNoteOrCoin = Math.floor(changeAmount / nextNoteOrCoin);
    noOfCurrentNoteOrCoin > 0 ? console.log(nextNoteOrCoin*100+'p:', noOfCurrentNoteOrCoin) : '';
    changeAmount = changeAmount % nextNoteOrCoin;

    nextNoteOrCoin = 0.02;
    noOfCurrentNoteOrCoin = Math.floor(changeAmount / nextNoteOrCoin);
    noOfCurrentNoteOrCoin > 0 ? console.log(nextNoteOrCoin*100+'p:', noOfCurrentNoteOrCoin) : '';
    changeAmount = changeAmount % nextNoteOrCoin;

    nextNoteOrCoin = 0.01;
    noOfCurrentNoteOrCoin = changeAmount.toFixed(2)*100;
    noOfCurrentNoteOrCoin > 0 ? console.log(nextNoteOrCoin*100+'p:', noOfCurrentNoteOrCoin) : '';


//EUR Example:
    //Banknotes:
    //50€ - 20€ - 10€ - 5€
    //Coins:
    //2€ - 1€ - 50p - 20p - 10p - 5p - 2p - 1p
