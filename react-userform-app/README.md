# React UserForm App

This project is a simple React application that includes a `UserForm` component. The form allows users to input their name, surname, group code, and email. Upon submission, the entered data is displayed below the form in a list format.

## Project Structure

```
react-userform-app
├── src
│   ├── components
│   │   └── UserForm.jsx
│   ├── App.jsx
│   ├── index.js
│   └── styles
│       └── UserForm.css
├── package.json
├── README.md
└── public
    └── index.html
```

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd react-userform-app
   ```
3. Install the dependencies:
   ```
   npm install
   ```

## Usage

To start the application, run:
```
npm start
```
This will launch the app in your default web browser.

## UserForm Component

The `UserForm` component is responsible for rendering the form and managing the input state. It includes fields for:

- Name
- Surname
- Group Code
- Email

Upon submission, the data is displayed below the form.

## License

This project is licensed under the MIT License.