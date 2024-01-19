# Key logger

![Screenshot](https://s6.uupload.ir/files/screen_shot_1402-10-29_at_23.07.43_q9n9.png)

### Overview

This project implements a simple key logging system to capture user input and display it in a textarea. The system provides comprehensive information to the user during input, allowing tracking of entered words whenever the space or Enter key is pressed. The primary components include HTML for the user interface, CSS for styling, and JavaScript for the key logging functionality.

### Project Structure

- **HTML File (`index.html`):**
  - Defines the structure of the web page.
  - Includes an input field for password entry, a "Check" button, and a textarea for displaying the log.
  - Links to the CSS file for styling and the JavaScript file for functionality.

- **CSS File (`style.css`):**
  - Provides styling for the user interface, creating an aesthetically pleasing layout.
  - Applies a dark theme to the entire page.

- **JavaScript File (`script.js`):**
  - Implements the key logging functionality using two main functions:
    - `startLogger(inputSelector, inputType = 'id', callback)`: Initializes the key logger for a specified input element.
      - Parameters:
        - `inputSelector`: The selector for the input element (ID or class).
        - `inputType='id'`: The type of input selector. Defaults to 'id'. Accepts values 'id' or 'class'.
        - `callback`: The callback function to handle the received information.
      - Throws an error if the input type is incorrect.
    - `updateTextArea(arr)`: Updates a textarea element with an array of strings.
      - Parameters:
        - `arr`: An array of strings to be displayed in the textarea.
      - Updates the content of the textarea identified by the 'logTextarea' ID with the joined strings from the provided array.
      - Additionally, adjusts the textarea height to a fixed value (15em).

  - Utilizes event listeners to track input changes, blur events, and Enter key presses.

### How to Use

1. Open `index.html` in a web browser.

2. Enter text into the password input field.

3. Press the space key or Enter key to capture entered words.

4. The captured words will be displayed in the textarea.

### Additional Information

- The project includes a screenshot (`screen_shot_1402-10-29_at_23.07.43.png`) for reference.

- Ensure to provide valid `inputSelector` and a `callback` function when using the `startLogger` function.

- This project is intended for educational purposes and showcases a basic key logging implementation.

Feel free to explore, modify, and use the code as needed! If you have any questions or suggestions, please reach out.
