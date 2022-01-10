- # Table of contents
- [Running the app](#running-the-app)
- [Structure](#structure)
  - [Screens](#screens)
    - [Changing default screen](#changing-default-screen)
    - [Creating new screens](#creating-new-screens)
    - [Existing screens](#existing-screens)
  - [Custom components](#custom-components)
    - [Animations](#animations)
    - [**Native components**](#native-components)
    - [**Other components**](#other-components)

# Running the app

There’re 2 ways of running this app, the first one is to clone the repo and run it locally. The second way is running the version hosted on [**Snack**](https://snack.expo.dev/@andredevsantos/curious-truffles).

**Clone repo.**

```jsx
$ git clone https://github.com/andredevsantos/powerpuff-girls-code-test.git
```

**Nagivate to folder.**

```jsx
$ cd ./powerpuff-girls-code-test/
```

**Install all dependencies.**

```jsx
$ npm install
```

**To run the application go through the menu and select the platform which you 
want to test.**

```jsx
$ expo start
```

**Alternatively, you can directly choose the application platform. Keep in mind that to
run the app on the mobile platforms you need to configure each one according to the
requirements.**

These can be found in the **[Expo docs](https://docs.expo.dev/workflow/android-studio-emulator/)**.

```jsx
$ npm run web
or
$ npm run android
```

# Structure

The main file is the *App.tsx*. This component controls which screen is currently displayed.

## Screens

### Changing default screen

You can change the default screen by changing the string prop in the <Stack.Navigator> component.

### Creating new screens

Each screen has 3 props, the key (which is added automatically), the name and the component.

To add new screens you simply create a new component and put it under the screens folder.

```tsx
// NewScreenExample.tsx
const NewScreenExample: React.FunctionComponent<IStackScreenProps> = (props) => {
	const { navigation, route } = props;
}
```

You then go into the route’s component (routes.tsx) and add a new object with the respective screen name and component name.

```tsx
// routes.tsx
const routes: IRouteProps[] = [
    {
        name: 'Home',
        component: HomeScreen
    },
    {
        name: 'New screen',
        component: NewScreenExample
    }
];
```

### Existing screens

At the moment there are two screens, the ***Home screen*** and the ***Episode screen***.

The ***HomeScreen*** component holds the show’s descriptions, seasons, and a preview of every episode.
It’s here that the Tv show details are fetched, as well as all the seasons information.
To search for a new show, change the variable ***tvShowID**.*
This component creates a ***Season*** component for each season. The ***Season*** component fetches all the episodes in the given season and maps each one to an ***EpisodeThumb*** component.
When the *‘Read more’* button is pressed, the ***EpisodeThumb*** component returns an object with all that episode’s info to the ***HomeScreen***, which is turn passes it to the ***EpisodeScreen.***

The ***EpisodeScreen*** component holds a single episode’s information.

## Custom components

The components can be found under the components folder.

### Animations

The **animation** components are stored under the *animated* folder

- **FadeUp**
    
    Reveals wrapped components from down to up while making them visible.
    
    **Props:** Duration - optional | Delay - optional
    
    ```tsx
    <FadeUp delay={200} duration={1000} style={{width: 500}}>
    	<Text>I'm a revealing text</Text>
    </FadeUp>
    ```
    

### **Native components**

The **styled components** are stored under the *styled* folder

- **Text components**
    
    Different styled text components
    ```tsx
    <TitleText> | <SubTitle> | <BodyText> | <DetailText> | <SmallText>
    ```

### **Other components**

- **GenreTag**
    
    Tags used to display tv show genre