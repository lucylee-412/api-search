# Zip Code Search
2022 Brooklyn College TTP - Assignment #6, Part 1

Using the http://ctp-zip-api.herokuapp.com/ API, our app displays cities associated with a user-given zip code.
This app is closely related to the app found at the [city-api](https://github.com/lucylee-412/city-api) repository, the second half of this assignment.

---
**View the app on GitHub Pages: https://lucylee-412.github.io/zip-api/**

*Group members:*  
* [Bryant Bardales](https://github.com/bryant-bardales)
* [Lucy Lee](https://github.com/lucylee-412)
* [Max Yedid](https://github.com/maxyedid)

---
## Changelog
*January 14, 2022:*

* Created a function to insert commas into the Population and Wages fields for readability.
* Thanks to TA Abi for sharing helpful links, I (Lucy) was able to deploy our app to GitHub Pages.

*January 13, 2022:*  

* See [Issue #5](/../../issues/5): Teammate Max fixed a bug where the previous results were not re-rendered when an invalid zip code was entered by adding in a \<div> element to rendered the error message, which was set with an initial state of null, and only updated upon a 404 error. Many thanks.

*January 12, 2022:*

* Teammate Bryant did a lovely job with the CSS and did the styling for all three of our group assignments together. Many thanks.

*January 11, 2022:*

* This was our first time working with React.js.
I (Lucy) closely followed the React.js documentation to create the form and set the state of the zipcode, which was appended to the end of the URL.
[The demo code provided by Jason Watmore's](https://stackblitz.com/edit/react-http-get-request-examples-fetch?file=App%2FApp.jsx) was very helpful with setting up the error handling for the promise.
TA Victor advised that React hooks would be easier to use in future React.js assignments.
