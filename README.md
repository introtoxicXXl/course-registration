## Project Features
- Utilized simulated JSON data for this project.
- Implemented dynamic addition of each card.
- This site is all about Vite and React doing their thing together. Oh, and Tailwind CSS made it look snazzy.
- Used some React Icons, they're awesome and come in millions of flavors.
- Oh yeah, almost forgot about DaisyUI, that's where the cool cards come from.


## How I managed state in my project

The application comprises two distinct sections: the card section and the Cart section. The core functionality of the project revolves around the selection of a card, which consequently displays the card's title, price, and associated credit in the Cart section. Additionally, a credit hour threshold of 20 is established, triggering a notification if the remaining credit falls below zero.

Considering the unidirectional nature of data flow in React, a centralized state is defined within the common parent component of both the Card and Cart components. This state management enables the implementation of the handleAddToCart function, which is passed as a parameter to the card's button via props drilling. Upon clicking the select button, the function processes the card information, facilitating the computation of various attributes such as price, remaining hours, and allocated credit.

The computed data is then passed to the Cart component for rendering, displaying all pertinent information for the user's reference and convenience.
