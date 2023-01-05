---
title: 'React Best Practices'
excerpt: 'General Pointers'
source: 'Thank u Google'
---

## Functional Components and Hooks >> Classes
1. Functional components and hooks result in more concise and readable code compared to classes.

## Avoid using State
1. React state keeps track of the data which when changed triggers the React component to re-render. 
2. Minimize tge yse of state by declaring it only when necessary and storing whole objects in the state.

## Files related to the Same Component? Same Folder.
1. Avoids code duplication 
2. Reuse, share, and debug your code :^)

## Fragments >> Divs
1. Using <div> increases the DOM size. The more tags or DOM nodes you have, the more memory your website needs and the more power a browser uses to load your website. (lower page speed === stinky user experience)

## Naming conventions 
1. BEM for CSS Modules
2. PascalCase for Components
3. camelCase for Functions

## Object Destructuring For Props

const Button = (props) => { ... } 

is worse than,

const Button = ({text}) => { ... }

## References
https://www.makeuseof.com/must-follow-react-practices/ finally posted
