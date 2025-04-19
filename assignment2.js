function palindrome(str) {
    let longest = "";

    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j <= str.length; j++) {
            let sub = str.slice(i, j);
            if (sub === [...sub].reverse().join("") && sub.length > longest.length) {
                longest = sub;
            }
        }
    }
    return longest;
}

console.log(palindrome("bananan"));
