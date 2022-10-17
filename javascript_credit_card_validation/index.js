let attemptsCounter = 0;

const luhnAlgorithm = (ccNumber) => {
    const length = ccNumber.length;
    let count = 0;

    /** Traverse the whole credit card number. */
    for(let i = length - 1 ; i >= 0; i--)
    {
        let currentDigit = parseInt(ccNumber[i]);

        // if ( (i+2) % 2 === 0)
        //     if((currentDigit *= 2) > 9)
        //         currentDigit -= 9;
        if ((i - 1) % 2 == 0) // I only want to double every other number, starting with the first number. I don't want to double the last number.
        {
            if ((currentDigit *= 2) > 9)
            {
                // Separate the number into component parts and then add them together.
                let trailingNumber = currentDigit % 10;
                let firstNumber = parseInt(currentDigit / 10);

                // If currentDigit was 18 then currentDigit is now 9.
                currentDigit = firstNumber + trailingNumber;
            }
        }
        
        count += currentDigit;
    }

    return (count % 10) === 0;
}

const checkCC = () => {
    const elCCNumber = document.getElementById('ccNumber');
    const elCCValidation = document.getElementById('ccValidator');
    const elAttempts = document.getElementById('attempts');
    let message = "";

    // Calls the Luhn algorithm. Fails if the Luhn algorithm returns false.
    if( luhnAlgorithm(elCCNumber.value) )
        message = "Well, it looks like that worked! Your CC is valid!";
    else
        message = "CC verification failed :(";
    
    // Initialize the display textbox with content.
    elCCValidation.textContent = message;
    // Clear the credit card field.
    elCCNumber.value = null;

    elAttempts.textContent = ++attemptsCounter;
};
