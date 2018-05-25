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

    var availableNotesCoines = [
        { value: 50,   type: 'note' },
        { value: 20,   type: 'note' },
        { value: 10,   type: 'note' },
        { value: 5,    type: 'note' },
        { value: 2,    type: 'coin' },
        { value: 1,    type: 'coin' },
        { value: 0.5,  type: 'coin' },
        { value: 0.2,  type: 'coin' },
        { value: 0.1,  type: 'coin' },
        { value: 0.05, type: 'coin' },
        { value: 0.02, type: 'coin' },
        { value: 0.01, type: 'coin' }
    ];
//Programme output:
    //Print change amount
    var changeAmount = (amountPaidByCustomer - amountDue).toFixed(2);
    console.log('Change amount:', changeAmount);
    var noteOrCoin;
    var noOfCurrentNoteOrCoin;
    var noteOrCoinStr;
    var noteOrCoinType;

    //Print change breakdown: notes and coins
    for (var i = 0; i < availableNotesCoines.length; i++) {
        noteOrCoin = availableNotesCoines[i].value;
        noteOrCoinType = availableNotesCoines[i].type;
        noOfCurrentNoteOrCoin = Math.floor(changeAmount / noteOrCoin);
        noteOrCoinStr = (noteOrCoin < 1 ? noteOrCoin.toFixed(2) + 'p ' : noteOrCoin + '€ ') + noteOrCoinType + ':';
        noOfCurrentNoteOrCoin > 0 ? console.log(noteOrCoinStr, noOfCurrentNoteOrCoin) : '';
        changeAmount = (changeAmount - noOfCurrentNoteOrCoin * noteOrCoin).toFixed(2);
    }

//EUR Example:
    //Banknotes:
    //50€ - 20€ - 10€ - 5€
    //Coins:
    //2€ - 1€ - 50p - 20p - 10p - 5p - 2p - 1p
