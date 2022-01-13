const luhnAlgorithm = (ccNumber) => {
    const length = ccNumber.length;
    let count = 0;

    /** Traverse the whole credit card number. If index + 1 is even, double the value. 
     If above 9 then adjust value.*/
    for(let i = 0; i < length; i++) {
        let currentDigit = parseInt(ccNumber[i]);

        if ( (i+2) % 2 === 0)
            if((currentDigit *= 2) > 9)
                currentDigit -= 9;
        
        count += currentDigit;
    }

    return (count % 10) === 0;
}

const checkCC = () => {
    const elCCNumber = document.getElementById('ccNumber');
    const elCCValidation = document.getElementById('ccValidator');
    let message = "";

    if( luhnAlgorithm(elCCNumber.value) )
        message = "Well, it looks like that worked! Your CC is valid!";
    else
        message = "CC verification failed :(";
    
    elCCValidation.textContent = message;
    elCCNumber.value = null;
};