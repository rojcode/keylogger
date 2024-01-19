/**
 * Initializes a logger for user input, allowing the user to receive comprehensive information during the call.
 * 
 * @param {string} inputSelector - The selector for the input element (ID or class).
 * @param {string} [inputType='id'] - The type of input selector. Defaults to 'id'. Accepts values 'id' or 'class'.
 * @param {function} callback - The callback function to handle the received information.
 * 
 * The callback function receives an array containing the entered words whenever a space or Enter key is pressed.
 * 
 * @throws {Error} Incorrect input type. Please enter either an ID or a class.
 * 
 * Usage example:
 * startLogger('myInput', 'id', (data) => {
 *    // Handle the received data
 *    console.log('Received data:', data);
 * });
 * 
 * Note: Make sure to provide a valid inputSelector and callback function.
 */
const startLogger = (inputSelector, inputType = 'id', callback) => {
    let inputElement;

    switch (inputType) {
        case 'id':
            inputElement = document.querySelector('#' + inputSelector);
            break;
        case 'class':
            inputElement = document.querySelector('.' + inputSelector);
            break;

        default:
            throw new Error('Incorrect input type. Please enter either an ID or a class.');
    }

    if (inputElement) {
        let currentText = '';
        let wordArray = [];

        inputElement.addEventListener('input', (event) => {
            const newText = event.target.value;
            if (event.inputType === 'insertText' && event.data === ' ' && newText.trim() !== '') {
                wordArray.push(newText.trim());
                event.target.value = '';

                if (typeof callback == 'function') {
                    callback(wordArray);
                }
            }
            currentText = newText;
        });

        inputElement.addEventListener('blur', () => {
            if (currentText.trim() !== '') {
                wordArray.push(currentText.trim());
                inputElement.value = '';

                if (typeof callback === 'function') {
                    callback(wordArray);
                }
            }
        });

        inputElement.addEventListener('keypress', (event) => {
            if (event.key === 'Enter' && currentText.trim() !== '') {
                wordArray.push(currentText.trim());
                inputElement.value = '';

                if (typeof callback === 'function') {
                    callback(wordArray);
                }
            }
        });
    }
};

/**
 * Updates a textarea element with an array of strings.
 * 
 * @param {Array} arr - An array of strings to be displayed in the textarea.
 * 
 * Updates the content of the textarea identified by the 'logTextarea' ID with the joined strings from the provided array.
 * Additionally, adjusts the textarea height to a fixed value (15em).
 * 
 * Usage example:
 * const dataArray = ['Item 1', 'Item 2', 'Item 3'];
 * updateTextArea(dataArray);
 * 
 * Note: Make sure to provide a valid array as input.
 */
const updateTextArea = (arr) => {
    const textArea = document.querySelector('#logTextarea');
    textArea.value = arr.join('\n');
    textArea.style.height = '15em';
};




startLogger('myInput', 'id', (data) => {
    updateTextArea(data);
});
