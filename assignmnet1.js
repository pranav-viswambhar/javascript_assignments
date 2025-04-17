function formatCurrency(amount, currencyCode) {
    try {
        const formatter = new Intl.NumberFormat(undefined, {
            style: 'currency',
            currency: currencyCode,
        });

        return formatter.format(amount);
    } catch (error) {
        return `Invalid currency code: ${currencyCode}`;
    }
}


console.log(formatCurrency(1234567.89, 'USD')); 
console.log(formatCurrency(1234567.89, 'EUR')); 
console.log(formatCurrency(1234567.89, 'INR')); 
console.log(formatCurrency(1234567.89, 'JPY')); 

