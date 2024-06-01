
# NoteApp

Welcome to the NoteApp project! This is a simple yet powerful application designed to help you manage your tasks efficiently. It features a user-friendly interface where you can add, edit, delete, and mark tasks as complete.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgements](#acknowledgements)

## Installation

### Prerequisites
- Node.js (>=14.x)
- npm (>=6.x)

### Steps
1. Clone the repository:
   ```sh
   git clone https://github.com/HakYam/NoteApp.git
   cd NoteApp
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Run the application:
   ```sh
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:3000`

## Usage

Once the application is running, you can:
- Add new tasks using the input form.
- Edit existing tasks.
- Delete tasks that are no longer needed.
- Mark tasks as complete by clicking on them.

## Features

- **Add Tasks**: Quickly add new tasks using the input form.
- **Edit Tasks**: Modify existing tasks.
- **Delete Tasks**: Remove tasks that are no longer needed.
- **Complete Tasks**: Mark tasks as complete by clicking on them.
- **Persistent Storage**: Tasks are saved in the browser's local storage.

## Project Structure

```
NoteApp/
│
├── public/
│   ├── vite.svg
│   └── ...
│
├── src/
│   ├── assets/
│   │   └── react.svg
│   │
│   ├── components/
│   │   ├── Todo.jsx
│   │   ├── TodoForm.jsx
│   │   ├── TodoList.jsx
│   │   └── ...
│   │
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   ├── main.jsx
│   └── ...
│
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── ...
```

## Contributing

Contributions are welcome! Please follow these steps:
1. Fork the repository.
2. Create your feature branch: `git checkout -b feature/your-feature-name`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature/your-feature-name`
5. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Acknowledgements

- Special thanks to the [React](https://reactjs.org/) team for their UI library.
- Thanks to the [Vite](https://vitejs.dev/) team for the development environment.
