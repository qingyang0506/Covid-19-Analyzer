#  Covid-19 Analytic

# Introduction

This is a data visualization project which is analysis the covid-19 data all around the world. This is web application which is built by the react with Typescript. No backend or database tech stack, all the data in this app are fetched from the third party API.

# How To Run

1. Download or clone this project on your local folder

2. Redirect  to project folder, inside it you can see there is a folder called frontend, then redirect into frondend folder

3. Ensure that the node has already installed on your laptop, then run below commands to run the app

   ```npm
   npm install
   npm run dev
   ```

4. if you run app successfully, there will a website address give to you to open the app.

# How to use the app

1. For the sidebar, you can collapse it by clicking the three strips button on the top-right of the sidebar. When the page in small screen, the sidebar will disappear, but you can click the same button to toggle the sidebar.
2. On the top-right of the page, there are three buttons, the first one is the information button, click it there is a small dialog will appear to show the information of this page, for the different page, the content will different. The second button is setting button, you can click to open drawer, in there you can set the theme to light or dark mode. The third one is the light bulb button. This is no special functionality, just for fun, every time you click this button, it will toggle the bulb.
3. You can view the page following the sidebar. This is navigation. You can see from here, I use geomap, line chart, bar chart, pie chart to display the data. I also list some resources I used and instructions in the extra information section, you can follow and see it when you use this app.
4. All  the data I used are fetched from the third party API,  which is Covid-19 API. It has the free open API for every one, But it has some restrictions. You can not request the API too much in a short period time, otherwise, it will throw a http 429 Too Many Requests error, and you will not get data successfully.  Therefore, when you use this app, if you wait loading for very long time for some pages, that means the serve in this Covid-19 API will throw the 429 error as you request too often in short period. You should reload / refresh the page to  fetch the data again. But this is frequently happen for line chart and bar chart. As it will let user to choose the country, then it will send the new request according to the country. But for other pages who used data, the response are quickly. As it is not changed, I fetched the data at first time and then store the data into local storage to cache them. 
5. The big feature of this app is that you can change the theme mode as you like. This setting can be found when you click the setting button on the top-right  page.  To achieve this, I set a range of the colors in my theme.ts file. For each colors I create a 9 similar colors from shallow to deep. And then you can set the opposite color brightness in the dark and light mode. For example, you can set green[900] in the light mode is same as the green[100] in dark mode. but the green[900] in dark is opposite color brightness of green[900] in the light mode. the color also the same. Therefore, this will achieve the different colors or brightness for the different theme mode. 
6.  I try to make the app more responsive even if  in the small screen. I use some relative units, such as %, rem, vh,vw to define some text size, height, or width. And also use the flex and grid layout to make the page more responsive. You can shrink the window size to see the change and behavior inside the page.  But for some parts, It is not fully responsive. There are also some issues for the layout when in the small screen or in mobile mode. 
7. As I use Typescript to implement this project. when you fetch the data from the third party API, You should specify the type of data to be received, and its name should ideally be consistent with the name provided. I define all my types in my type.ts file, you can see all the types I used in this project. But some of them are not used for the API, it is used for define a type for passing the properties between different  components.

# Related technologies and Library.

1. [React](https://react.dev/learn): front-end framework

2. [Typescript](https://www.typescriptlang.org/): front-end programming language

3. [Material UI](https://mui.com/material-ui/getting-started/overview/): UI framework

4. [Nivo](https://nivo.rocks/): Data visualization Library, using for line chart, bar chart, map, etc.

5. [React Pro Sidebar](https://www.npmjs.com/package/react-pro-sidebar) : Sidebar Library, mainly used for the sidebar (Navigation Bar)

6. [Covid-19 API](https://documenter.getpostman.com/view/10808728/SzS8rjbc#81415d42-eb53-4a85-8484-42d2349debfe): Third party API,  used the data from this API.

7. [Axios](https://axios-http.com/docs/intro): JS library used to sending and receiving data for HTTP network request.

   ​