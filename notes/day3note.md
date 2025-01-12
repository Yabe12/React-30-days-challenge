In JavaScript, **truthy** and **falsy** values determine how expressions are evaluated in conditional statements (`if`, `while`, etc.) or any other context where a boolean value is expected.

### **Truthy Values:**
A **truthy value** is any value that is considered `true` when evaluated in a boolean context. This means that when a truthy value is used in an `if` statement or similar structure, the condition will evaluate to `true`, and the code inside the block will run.

- All values are truthy **except** those that are falsy.
- **Examples of truthy values**:
  - Any non-zero number (positive or negative) like `1`, `-1`, `100`, `3.14`.
  - Any non-empty string like `"hello"`, `" "` (a string with spaces).
  - `true`.
  - Objects and arrays, even if they are empty, are truthy (`{}`, `[]`).
  
**Example:**
```javascript
if (42) {
  console.log("This will run because 42 is truthy.");
}
```
Output: `This will run because 42 is truthy.`

### **Falsy Values:**
A **falsy value** is any value that is considered `false` when evaluated in a boolean context. This means that when a falsy value is used in an `if` statement or similar structure, the condition will evaluate to `false`, and the code inside the block will not run.

- **Examples of falsy values**:
  - `false` (boolean `false`).
  - `0` (the number zero).
  - `""` (an empty string).
  - `null`.
  - `undefined`.
  - `NaN` (Not-a-Number).
  
**Example:**
```javascript
if (0) {
  console.log("This will NOT run because 0 is falsy.");
} else {
  console.log("This will run because 0 is falsy.");
}
```
Output: `This will run because 0 is falsy.`

### Summary:
- **Truthy** values are those that evaluate to `true` in a boolean context. Examples include non-zero numbers, non-empty strings, objects, and arrays.
- **Falsy** values are those that evaluate to `false` in a boolean context. Examples include `false`, `0`, `""` (empty string), `null`, `undefined`, and `NaN`.

These evaluations of truthy and falsy values help in writing efficient and concise conditional logic in JavaScript.

### **Difference Between `alert()` and `prompt()` Methods in JavaScript**

Both `alert()` and `prompt()` are built-in methods in JavaScript for interacting with the user, but they serve different purposes and have different behaviors. Let's explore each method:

---

### **1. `alert()` Method**
- **Purpose**: Displays a message to the user in a pop-up dialog box.
- **Functionality**: It is used to show information to the user. The user cannot provide any input or interact with the dialog, except by closing it.
- **Return Value**: It does not return any value. It simply shows the message and waits for the user to close the dialog.
- **Use Case**: When you want to display an alert or information to the user, but don't need any input from them.

**Example:**
```javascript
alert("Hello, this is an alert!");
```
- This will pop up a dialog box with the message `"Hello, this is an alert!"`.

---

### **2. `prompt()` Method**
- **Purpose**: Displays a dialog box that asks the user for input.
- **Functionality**: It shows a message along with a text input field. The user can enter some text in the input field and then press "OK" or "Cancel."
- **Return Value**: It returns the value entered by the user as a string if the user presses "OK," or `null` if the user presses "Cancel."
- **Use Case**: When you need to gather input from the user, such as a name, age, or other information.

**Example:**
```javascript
let userName = prompt("What is your name?");
alert("Hello, " + userName + "!");
```
- This will prompt the user for their name. If the user enters a name and presses "OK", it will show an alert greeting them with their entered name. If they press "Cancel", it will return `null`.

---

### **Key Differences**
| Feature          | `alert()`                            | `prompt()`                               |
|------------------|--------------------------------------|------------------------------------------|
| **Purpose**      | To display a message to the user.    | To get input from the user.              |
| **Input**        | No input from the user.              | Takes input from the user.               |
| **Return Value** | No return value (undefined).         | Returns the input string or `null`.      |
| **Interaction**  | The user just closes the dialog.     | The user can enter a value and click "OK" or "Cancel". |
| **Use Case**     | To show an alert or message.         | To ask for information or get input.     |

---

### **Simplicity**

- **`alert()`** is simpler as it only displays a message, requiring no input from the user.
- **`prompt()`** is a bit more complex because it allows users to provide input, and you need to handle the value they enter.

---

### **Conclusion**

- **Use `alert()`** when you just need to show a simple message or warning to the user. It’s a one-way interaction with no input.
- **Use `prompt()`** when you need the user to input some information, and you need to capture that input for further use in your script.

Both methods are blocking, meaning they halt the execution of further code until the user interacts with the pop-up. However, for user experience purposes, it’s generally better to use more modern alternatives (like modal dialogs) in production applications.

### **`confirm()` Method in JavaScript**

The `confirm()` method is another built-in method in JavaScript, used to interact with the user. It is similar to `alert()` and `prompt()`, but it serves a different purpose.

---

### **1. `confirm()` Method**
- **Purpose**: Displays a dialog box with a message and **two buttons**: "OK" and "Cancel." It is typically used when you want to ask the user to confirm something, such as confirming an action or choice.
- **Functionality**: The dialog box will show a message, and the user can choose either "OK" or "Cancel."
- **Return Value**: It returns a **boolean value**:
  - `true` if the user clicks "OK."
  - `false` if the user clicks "Cancel."
- **Use Case**: When you need to ask the user to confirm something, like confirming whether to delete a record or proceed with a critical action.

**Example:**
```javascript
let result = confirm("Are you sure you want to delete this item?");
if (result) {
  alert("Item deleted!");
} else {
  alert("Action canceled!");
}
```
- This will display a confirmation dialog asking if the user is sure they want to delete an item. If the user clicks "OK," it shows `"Item deleted!"`. If the user clicks "Cancel," it shows `"Action canceled!"`.

---

### **Key Differences Between `alert()`, `prompt()`, and `confirm()`**

| Feature           | `alert()`                          | `prompt()`                              | `confirm()`                          |
|-------------------|------------------------------------|-----------------------------------------|--------------------------------------|
| **Purpose**       | To display a message to the user.  | To get input from the user.             | To confirm an action or choice.      |
| **Input**         | No input from the user.            | Takes input from the user.              | No input, only a choice of "OK" or "Cancel". |
| **Return Value**  | Undefined (no return value).       | A string value or `null`.               | `true` (OK) or `false` (Cancel).     |
| **Buttons**       | One button ("OK").                 | One input field and a button ("OK").    | Two buttons ("OK" and "Cancel").     |
| **Use Case**      | To show an alert or message.       | To gather input from the user.          | To ask the user to confirm an action. |

---

### **Simplicity**

- **`alert()`**: The simplest, just for displaying messages.
- **`prompt()`**: Requires user input.
- **`confirm()`**: Requires the user to confirm or cancel an action, returning a boolean value to indicate the user's choice.

---

### **Conclusion**

- **Use `alert()`** to simply show information or alert the user about something.
- **Use `prompt()`** when you need the user to provide input.
- **Use `confirm()`** when you need the user to confirm or reject an action, like a delete operation or proceeding with a decision.

Each method is useful for different scenarios:
- `alert()` is used for displaying messages.
- `prompt()` is used for asking the user to input information.
- `confirm()` is used for confirming decisions with the user.

In JavaScript, the `Date` object provides a powerful way to work with dates and times. You can use it to create date-time objects, extract information about specific components (like year, month, hours, etc.), and manipulate the date-time values.

### **Creating a Date Object**
To create a new date-time object, simply use the `Date` constructor:

```javascript
const now = new Date();
console.log(now); // Outputs the current date and time
```
This will print the current date and time based on your computer's system clock.

---

### **Extracting Information from a Date Object**
Once you've created a `Date` object, you can extract various pieces of information using the `get` methods:

1. **Getting Full Year**
   - This method returns the full year (e.g., `2020`).
   ```javascript
   const now = new Date();
   console.log(now.getFullYear()); // 2020
   ```

2. **Getting Month**
   - This method returns the month as a number (0 for January, 1 for February, etc.).
   ```javascript
   const now = new Date();
   console.log(now.getMonth()); // 0 (January)
   ```

3. **Getting Date**
   - This method returns the day of the month (1-31).
   ```javascript
   const now = new Date();
   console.log(now.getDate()); // 4
   ```

4. **Getting Day of the Week**
   - This method returns the day of the week as a number (0 for Sunday, 1 for Monday, etc.).
   ```javascript
   const now = new Date();
   console.log(now.getDay()); // 6 (Saturday)
   ```

5. **Getting Hours**
   - This method returns the hour of the day (0-23).
   ```javascript
   const now = new Date();
   console.log(now.getHours()); // 0 (midnight)
   ```

6. **Getting Minutes**
   - This method returns the minutes (0-59).
   ```javascript
   const now = new Date();
   console.log(now.getMinutes()); // 56
   ```

7. **Getting Seconds**
   - This method returns the seconds (0-59).
   ```javascript
   const now = new Date();
   console.log(now.getSeconds()); // 41
   ```

8. **Getting Time (Milliseconds Since 1970)**
   - You can get the time in milliseconds since January 1, 1970 (Unix time).
   ```javascript
   const now = new Date();
   console.log(now.getTime()); // e.g., 1578092201341
   ```

   - Alternatively, you can use `Date.now()` to get the current Unix time:
   ```javascript
   console.log(Date.now()); // e.g., 1578092201341
   ```

---

### **Formatting the Date and Time**
To format the date and time in a human-readable format, you can combine the values returned by the `get` methods. For example:

```javascript
const now = new Date();
const year = now.getFullYear();
const month = now.getMonth() + 1; // Adding 1 because getMonth() returns 0-11
const date = now.getDate();
const hours = now.getHours();
const minutes = now.getMinutes();

console.log(`${date}/${month}/${year} ${hours}:${minutes}`); // Output: "4/1/2020 0:56"
```

This will give you a formatted date like `4/1/2020 0:56`, where you can adjust the format as needed.

---

### **Summary of Methods**
- `getFullYear()`: Gets the full year (e.g., `2020`).
- `getMonth()`: Gets the month (0 for January, 1 for February, etc.).
- `getDate()`: Gets the day of the month (1-31).
- `getDay()`: Gets the day of the week (0 for Sunday, 1 for Monday, etc.).
- `getHours()`: Gets the hours (0-23).
- `getMinutes()`: Gets the minutes (0-59).
- `getSeconds()`: Gets the seconds (0-59).
- `getTime()`: Gets the Unix time (milliseconds since January 1, 1970).
- `Date.now()`: Gets the current Unix time.

With these methods, you can easily work with date and time information in JavaScript.