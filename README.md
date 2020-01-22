# Curricula UI

![revature-logo](../assets/revature-logo-600x219.png "Logo")

![banner](../assets/curricula-banner.png "Banner")

This project established the frontend User Interface (UI) for the Curricula application.

## Introduction

Curricula is a project designed for business level users to be able to quickly visualize what high level skills are taught in which curricula we offer at Revature. Curricula allows for building new curricula and attaching high level skills to them. It puts high level skills in related categories for easy management. Curricula can also build compare contrast visualizations between multiple different curricula.

## Directory Structure

```bash
├── src
│   ├── _tests_
│   ├── action-mappers
│   ├── assets
│   ├── components
│   │   ├── create-category-component
│   │   ├── create-curriculum-page-component
│   │   ├── create-skill-component
│   │   ├── create-visualization-component
│   │   ├── navbar-component
│   │   ├── popup-component
│   │   ├── view-all-visualizations-component
|   │   │   └── visualization-link-component
│   │   ├── visualization-component
|   │   │   └── curricula-selection-component
│   ├── models
│   ├── reducers
│   ├── remote
│   ├── App.css
│   ├── App.test.tsx
│   ├── App.tsx
│   ├── colors.ts
│   ├── index.css
│   ├── index.tsx
│   ├── logo.svg
│   ├── react-app-env.d.ts
│   ├── serviceWorker.ts
│   ├── setupTest.ts
│   └── Store.ts
├── public
│   ├── favicon.ico
│   ├── index.html
│   ├── logo.png
│   ├── manifest.json
│   └── robots.txt
├── .gitignore
├── package.json
├── README.md
├── sonar-project.properties
├── tsconfig.json

```

## Code of Conduct

## Community

### Team

+ Alec Batson
+ Kenneth Bradley Davis
+ Mahmud Karim
+ Sam Mosca "Gao-Shan"
+ Justin  Massey
+ Saritha Karunanithi
+ Dane Vosmeier
+ Wes Oler
+ Naziia Travels
+ Joshua Roy
+ Harvey Mousad
+ Nikhil Singh
+ Jose Indriago
+ Jeffrey Chang

## Contribute

Contributions are welcome and gladly accepted.

## Documentation

*The Curricula UI styleguides may be found in the wiki documents in the Github repository.*

### Front End Development Standards

Any contributions should meet specific Front End Development requirements.

The guidelines and principles are available in:

+ [Front End Styleguide](https://github.com/revaturelabs/Curricula-UI/wiki/Styleguide:-Front-End)
+ [Accessibility](https://github.com/revaturelabs/Curricula-UI/wiki/Styleguide:-Accessibility)
+ [UI Documentation](https://github.com/revaturelabs/Curricula-UI/wiki/Styleguide:-UI-Documentation)
+ [Work and Development](https://github.com/revaturelabs/Curricula-UI/wiki/Styleguide:-Work-and-Development)

## Support

Please send all inquiries to the Project Manager for Curricula.

---

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Environment Variables

BASE_URL: This is the base url used to generate links. It should be the url the front end server will have.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
