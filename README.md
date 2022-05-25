# Table of contents

- [Tech stack](#tech-stack)
- [Running the app](#running-the-app)
- [Build and deploy the app](#build-and-deploy-the-app)
- [Structure](#structure)
  - [Pages](#pages)
    - [Creating new pages](#creating-new-pages)
    - [Existing screens](#existing-screens)
  - [Helpers](#helpers)
  - [Custom components](#custom-components)
    - [Styled components](#styled-components)
    - [Other components](#other-components)

# Tech stack

This app was built using **[Typescript](https://www.typescriptlang.org/)**, **[React](https://reactjs.org/)**, **[Redux](https://redux.js.org/)**, and **[Styled Components](https://styled-components.com/)**.

It uses **[React Router](https://reactrouter.com/)** for routing and [**Jest**](https://jestjs.io/) for testing.

It also uses **[ESLint](https://eslint.org/)** and **[Prettier](https://prettier.io/)** for code check and formatting.

# Running the app

There’re two ways of running this app, the first one is to clone the [**repo**](https://github.com/andredevsantos/powerpuff-girls-react) and run it locally. Alternatively, you can check out the version hosted on [**Netlify**](https://powerpuff-girls-react-code-test.netlify.app/show/1955).

**Clone repo.**

```
$ git clone <https://github.com/andredevsantos/powerpuff-girls-react.git>
```

**Nagivate to folder.**

```
$ cd ./powerpuff-girls-react/
```

**Install all dependencies.**

```
$ npm install
```

**To run the application go through the menu and select the platform which you
want to test.**

```
$ npm start
```

# Build and deploy the app

**Clone repo.**

```
$ npm run build
```

**Install and deploy.**

The app is currently hosted on Netlify and was deployed using their CLI, which you can install by running

```
$ npm install netlify-cli -g
```

You can then do a draft deploy or deploy directly for production

```
$ netlify deploy
or
$ netlify deploy --prod
```

When it asks for the folder, write *build.*

# Structure

The main file is the *App.tsx*. This component contains the router.

## Pages

Currently, the app has two pages, the Show page, and the Episode page.

### Creating new pages

To add new screens you simply create a new component and put it under the routes folder.

```
// NewScreenExample.tsx
const NewScreenExample = () => {

}
export default NewScreenExample;
```

You then go into the App’s component (App.tsx) and add a route with the created element.

```
// App.tsx
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
				...
        <Route path="/somepath" element={<NewScreenExample />} />
      </Routes>
    </BrowserRouter>
  );
};

```

### Existing screens

At the moment there are two screens, the ***ShowPage*** and the ***EpisodePage***.

The ***ShowPage*** component holds the show’s descriptions, seasons, and a preview of every episode.
It’s here that the Tv show details are fetched, as well as all the season's information.
***The show that is fetched is dependent on the URL.***
This component creates a ***Season*** component for each season. The ***Season*** component fetches all the episodes in the given season and maps each one to an ***EpisodeThumbnail*** component.
When the episode is clicked, the app will generate a URL for that episode and display that episode's info in ***EpisodePage*** component.

The ***EpisodeScreen*** component holds a single episode’s information.

To fetch different shows you simply have to replace the value after …/show/… (e.g: …/show/1955 or …/show/1).

## Helpers

Helpers are custom functions that help with common tasks. You can use them by importing them from *helpers.ts*

- **RemoveHtmlTags**
Removes any HTML tag in the text
    - **Parameters**
        - Text: ***string***
    - **Return value**
        - *string*


## Custom components

The components can be found under the *components* folder.

### Styled components

The **styled components** are stored under the *styled* folder

These are components that are meant to be reused.

- **Container**

    Meant to be the main wrapper on any given page.

    **Props:** children | className *(optional)*

    ```
    <Container>
    	...
    </Container>

    ```


- **Dropdown**

    A styled dropdown

    **Props:** children *(optional)* | onChange *(optional)* | name *(optional)* | id *(optional)* | value *(optional)*

    ```
    <Dropdown>
    	<option key={...} value={...}>
    		...
    	</option>
    	...
    </Dropdown>

    ```


### **Other components**

- **GenreTag**

    Tags used to display tv show genre
