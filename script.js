function clearDisplay() {
    document.forms['mf'].elements['result'].value = '';
}

function appendToDisplay(value) {
    document.forms['mf'].elements['result'].value += value;
}

function calculateResult() {
    try {
        const expression = document.forms['mf'].elements['result'].value.replace(/x/g, '*');
        
        document.forms['mf'].elements['result'].value = eval(expression);
    } catch (e) {
        document.forms['mf'].elements['result'].value = 'Erro';
    }
}