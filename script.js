// Adiciona um valor ao visor da calculadora
function appendToDisplay(value) {
    const display = document.getElementById('display');
    display.value += value;
}

// Limpa o visor da calculadora
function clearDisplay() {
    const display = document.getElementById('display');
    display.value = '';
}

// Calcula o resultado da expressão
function calculateResult() {
    const display = document.getElementById('display');
    try {
        // Avalia a expressão matemática e exibe o resultado
        display.value = eval(display.value);
    } catch (e) {
        // Se ocorrer um erro, exibe uma mensagem de erro
        display.value = 'Erro';
    }
}
