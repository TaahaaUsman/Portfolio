In this project I will build a full responsive Portfolie application

  <div align='center'>
    <img src="https://img.shields.io/badge/-React_JS-black?style=for-the-badge&logoColor=white&logo=react&color=61DAFB" alt="react.js" />
    <img src="https://img.shields.io/badge/-Three_JS-black?style=for-the-badge&logoColor=white&logo=threedotjs&color=000000" alt="three.js" />
    <img src="https://img.shields.io/badge/-Tailwind_CSS-black?style=for-the-badge&logoColor=white&logo=tailwindcss&color=06B6D4" alt="tailwindcss" />
  </div>

<h1 align='center'>Steps for setUp</h1>

- Create React App
- Then Install tailwind CSS
- Then find the drive link and copy compnents, public and assets folder from there and replace in main project
- [The Link is here](https://drive.google.com/drive/folders/1KVU8iaH0E_JFtShNiR3BgCSA3pawXY4Z)
- Then Install dependencies
- npm install --legacy-peer-deps @react-three/fiber @react-three/drei maath react-tilt react-vertical-timeline-component @emailjs/browser framer-motion react-router-dom
- If want to learn about any package simple search on chatGPT
- Then create style.js file in `src` and copy code from project
- Then create `constants` and `utils` folders and also check inner file name and also copy code from the project or tutorial github
- [GitHub Code](https://github.com/adrianhajdin/project_3D_developer_portfolio)
- Then make all components import in `App.jsx` and also import `BrowserRouter from React-router-dom`

<h2 style='color:#915eff; font-weight: bold;'>Setting up the App.jsx</h2>

in `app.jsx` teacher make a speacial hirarchy and classes and call elements accordinly so please visit for more clear view.

<h2 style='color:#915eff; font-weight: bold;'>Creating NavBar.jsx</h2>

Then from there we move to `Navbar.jsx` and we make some imports and then teacher add some tailwind classes. I simply copy every thing and move forward. My primary goal is to compelete the project successfully.<br>
**Key Point**: in the Navbar teacher add a letter which was his logo for the website and also teacher how to create self logo by just going on [logo.com](https://logo.com/) website.

<h2 style='color:#915eff; font-weight: bold;'>Creating Hero.jsx</h2>

Then we create `Hero.jsx` in this hero section there is a main part of this component is just to manage the 3d model and render it accurately. <br />

**📋Hero section have 5 parts:**

1. Part one `Hero.jsx`:

In this part I write tailwind css and create name and description part.

2. Part two `ComputerCanvas.jsx`:

In this part we write code of three.js and all code about to render 3d model and then, I learn that the 3d model can be downloaded fron internet. And we simply render it in our project. This is what happened in this project as well. Tutor did not create the model, he simply use it. we can get 3d models by searching `3d model download free` on google.

3. Part three `Loader.jsx`:

This was very intresting topic we improve the performance of website. Before using it speed of website was very slow. But when i create this component we create a timer and when 3d model ready to present then present the model. Other components are present just in time.

4. Creating scroll down animation using framer motion

In this part we create a scrolling down animation using framer motion under the `hero.jsx` part.

5. Creating 3d model responsive to mobile devices

In this part we create a useEffect and a useState in `ComputerCanvas.jsx` and the useEffect checks that did my screen is less then 600px. If yes, it resize the 3d model and I simple pass this `isMobile` variable as a prop to `Computers`. Then we set `scale` and `position` according to screen size.

<h2 style='color:#915eff; font-weight: bold;'>About Section</h2>

Then we create `About.jsx` section. First of all in the components I go to About and then create the:

1. Introduction line
2. overview line
3. overview paragraph

And then I add some tailwind accordingly. Nothing more.

1. **Card Components:**

After that I just create cards. I use a map function and I already created a list of cards data inside `src\constants\index.js`. And I enlist all data accordingly. Use classes and also react tilt method.

2. **SectionWrapper:**

I create a `sectionWrapper.jsx` inside `src` I create `hoc` folder and create this section. This simply animate and turn elements into center.<br>

This was the whole `About` section.

<h2 style='color:#915eff; font-weight: bold;'>Experience Section</h2>

In the experience section I build `Experience.jsx` and in that section I took some steps and build it.<br />

**📋Part of Section:**

1. Make some imports

2. Create a `<motion.div>` and inside I add text of the section like `Work experience`.

3. Rapp using `SectionWrapper`

4. Then build `ExperienceCar` function which animates as well as add my work experience sections.

<h2 style='color:#915eff; font-weight: bold;'>Tech Section</h2>

In this tech section I build technologies which I know.<br>

**📋Parts of Section:**

1. First I create `Tech.jsx` and do some import and simply use map and loop all technologies which I know. And wrapper component with `SectionWrapper`.
2. Then create a `Ball.jsx` inside `canvas` folder and code over there every think.
3. Inside `Ball.jsx` I do some imports and then create another component `BallCanvas` and create a canvas inside it and copy that canvas from hero section `computerCanvas`.
4. Then set accordingly and inside `BallCanvas` I render `Ball` component and there I create other animation.

That's It...

<h2 style='color:#915eff; font-weight: bold;'>Work Section</h2>

In this section I create projects section and show my projects. <br>

**📋parts of Section:**

1. First of all create `works.jsx` and so some imports as usual. And wrapper data with `SectionWrapper`.
2. Then first heading lines just like `About` and other components(copy paste) with sliet changes.
3. Then loop on `projects` which is created in `index.js` and create `ProjectCard` component.
4. Use `Tilt` function and set `image`, `name of project`, `discription`, `hastage` etc.

That's all...

<h2 style='color:#915eff; font-weight: bold;'>Feedback Section</h2>

This was a great section. Mustly I build by myself. <br>

**📋Parts of Section:**

1. Frist of all create `Feedback.jsx` and then some imports as ususal and wrapper all componenet inside `SectionWrapper`.
2. Same Heading part and a loop for rendering `testimonials` from `constants` folder.
3. Then create `FeedbackCard` method and create cards and render data inside card and a lot of `tailwind` classes.
4. I use framer motion for animation in both `FeedbackCard` and `Feedbacks` components.

That's all...

<h2 style='color:#915eff; font-weight: bold;'>Contact & StarsCanvas Section</h2>

In this section I create a contact section where someone can send me an email. And also a very good looking 3d earth and also moving starts in the background.

**📋Steps of Section:**

1. First of all some import as usual also a important import is `emailjs` which help us to send email to us.The wrapper the section with `sectionWrapper`.
2. Create `Contact.jsx` and inside it first of all create just like before heading and its paragraph.
3. Then create a `motion.div` and create a form inside that form create `name`, `input`, and `message` fields. Then at last create a `motion.div` and inside it create a `EarthCanvas.jsx`.
4. Then We create `EarthCanvas.jsx` and inside it we render the 3d eath model and move the model. We create `Earth` and `EarthCanvas` components in section.
5. And at last we create `Stars.jsx` and inside that we create `starts` and `startCanvas` sections. which simply create the background `starts` section.
6. Also I create account on [EmailJs](https://dashboard.emailjs.com/admin) and which helps me to send and recieve emails using website. Also I code its parts and create form handler functions.

Soo that's all....

<h2>Debug and Launch the website...</h2>

# Steps for optimization

1. reduce image sizes all
2. convert all images to to webp format
3. Remove libraries of icons and animations
