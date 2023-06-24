function copyText() {
    var inputElement = document.createElement('input');
    inputElement.value = 'callNotification("bottom-right", "correct", "Good. This is an example for popup!", 10000, "check", true)';
    document.body.appendChild(inputElement);
    inputElement.select();
    document.execCommand('copy');
    document.body.removeChild(inputElement);
}