# StackOverflow Tags Browser README

## Demo
[[LINK](https://emil-owczarek.github.io/stackTags/?page=1&pagesize=5&order=asc&sort=name&inname=)]

## Project Overview

This project is a user interface built with React, designed to browse tags provided by the StackOverflow API. It features a paginated table of tags along with the number of related posts.

### Features

- **MUI Components Library**
- **Storybook Integration**
- **Responsive Design**
- **Debouncing on Inputs**
- **URL Parameters Handling**

### Getting Started

To run this project locally, ensure you have Node.js installed on your system. Then, follow these steps:

1. Clone the repository to your local machine.
2. Navigate to the project directory in your terminal.
3. Run `npm ci` to install the project dependencies.
4. To start the development server, execute `npm start`. Your default web browser will open the application.
5. For component exploration, run `npm run storybook` to launch Storybook.

### Why KY and MobX?

This project opts for KY over alternatives like Axios for data fetching due to its leaner API and better performance. Similarly, MobX is chosen for state management over Redux to benefit from its simpler and more efficient state updates, enhancing the application's responsiveness and speed.

### Contribution

Contributions are welcome. If you're interested in improving the StackOverflow Tags Browser, please fork the repository and submit a pull request.

### License

This project is open-source and available under the MIT License.

---
