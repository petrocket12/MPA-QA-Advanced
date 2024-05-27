function delayedLog(text, milliseconds) {
    setTimeout(function() {
        console.log(text);
    }, milliseconds);
}

// Використання функції
delayedLog('Do not delay!', 3000); 