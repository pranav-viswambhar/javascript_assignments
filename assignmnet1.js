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


console.log(formatCurrency(1234567.89, 'USD')); // $1,234,567.89 (en-US)
console.log(formatCurrency(1234567.89, 'EUR')); // €1,234,567.89 (en-US)
console.log(formatCurrency(1234567.89, 'INR')); // ₹12,34,567.89 (en-IN)
console.log(formatCurrency(1234567.89, 'JPY')); // ¥1,234,568 (no decimals)

