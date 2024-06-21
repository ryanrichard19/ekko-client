# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However, we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Test Users

All users have the same password: `Pa$$W0rd`.

| Name             | Email                   | Role              |
|------------------|-------------------------|-------------------|
| Ryan Richard     | ryan@ekko.com           | Admin             |
| Etienne          | etienne@ekko.com        | Manager           |
| Jon Bon Jovi     | jon@ekko.com            | Senior Developer  |
| Robert Plant     | ledzeppelin@ekko.com    | Senior Developer  |
| Freddie Mercury  | queen@ekko.com          | Team Lead         |
| Mick Jagger      | rollingstones@ekko.com  | Junior Developer  |
| Steven Tyler     | aerosmith@ekko.com      | QA Lead           |
| Bruce Springsteen| springsteen@ekko.com    | QA Engineer       |
| David Bowie      | bowie@ekko.com          | Product Owner     |
| Axl Rose         | gunsnroses@ekko.com     | Scrum Master      |

## Role Hierarchy Explanation

The role hierarchy in this application defines how roles are structured and how permissions are inherited across different levels. Here's a breakdown of the roles and their hierarchy:

1. **Admin**
   - Highest level role with full access to the system.
2. **Manager**
   - Reports to Admin.
   - Manages Team Leads and oversees their tasks.
3. **Team Lead**
   - Reports to Manager.
   - Manages Senior Developers, QA Leads, and oversees their tasks.
4. **Senior Developer**
   - Reports to Team Lead.
   - Manages Developers and oversees their tasks.
5. **Developer**
   - Reports to Senior Developer.
   - Works on development tasks.
6. **Junior Developer**
   - Reports to Developer.
   - Assists in development tasks.
7. **QA Lead**
   - Reports to Team Lead.
   - Manages QA Engineers and oversees testing tasks.
8. **QA Engineer**
   - Reports to QA Lead.
   - Works on testing tasks.
9. **Product Owner**
   - Reports to Admin.
   - Defines the product vision and works with all teams to ensure the product meets the requirements.
10. **Scrum Master**
    - Reports to Admin.
    - Facilitates scrum processes and ensures the team follows agile practices.

This hierarchy ensures a clear chain of command and responsibility, allowing for efficient management and delegation of tasks.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
