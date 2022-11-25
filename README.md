# 👽 Get IEN Home
A simple game to help IEN the alien return home using HTML, CSS, and JavaScript to make my first "game"!

IEN is an extra&dash;terrestrial being from a distant red planet. We are tasked to guide IEN toward the orbital position that will allow IEN to return home. To tell IEN when to teleport home, we will use the controls in our spacecraft to tell him when to stop and go.

**‼ Note:** _Still a work in progress as the initial version is designed for 1366-pixel wide viewport (the average screen size for most laptops). Will improve this and other bugs soon!_

## 🔮 Project Premise
Get IEN Home was inspired by one of my CSS animation assignments using GSAP Timeline by GreenSock to control when and how quick an object moves on a path. The language I wanted to learn how to integrate is JavaSript to congratulate users when they get IEN home successfully. The questions I wanted to answer were, "How to use JavaScript to identify the targeted position to trigger a congratulations animation?" and "How do I set the targeted position?"

## 💭 Plan, Design, Develop
I started organizing the interface with pen-and-paper to plan where IEN's character and the planet would be and how they would move. For the development portion&comma; I read through the GSAP Timeline Documentation to determine how to determine a targeted position. I also researched more about [Element&period;getBoundingClientRect();](https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect) to trigger a congratulations animation.

My original GSAP animation was entertaining but difficult to add interactions and feedback for the intended game experience. My revision simplified the animation to translating only along the x-axis and only having one button&period; With these changes, the game was more replayable with a simple, intuitive design and the project goal was achieved with fewer lines of JavaScript.

## ⏭ Next Steps
One way to expand the game is to add more movement for IEN's character to travel across the x- and y-axes with keyboard controls. Another aspect is to integrate environmental obstacles to include consequences for hitting an obstacle that will make the game more "relayable."

## ⚒ **Tools & Languages**
* HTML
* CSS
* JavaScript
