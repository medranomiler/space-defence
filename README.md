# space-defence

## Description

This is an in-browser Tower Defense game. The goal of the game is to defend your tower from invaders by stragtegically placing weapons around your base to kill the enemy. Players can create a unique username, play the game, and save their highscore. Players can return to the game at a later point and login using their credentials. 

## Table of Contents
- [Getting Started](#getting-started)
- [Technologies](#technologies)
- [Contributors](#contributors)
- [License](#license)
- [Installation](#installation)
- [Usage](#usage)

## Getting Started
Visit the deployed app at this url: [space-defence.herokuapp.com](https://space-defence.herokuapp.com/) </br>
Slide-show presentation: [Space Defence](https://www.canva.com/design/DAFaeGQBdt4/vJ30noykPs_Lz1OTTVYs3g/view?utm_content=DAFaeGQBdt4&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton)

## Technologies 
- [![JavaScript](https://img.shields.io/badge/-JavaScript-F7DF1E?style=flat-square&logo=JavaScript&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [![Unreal Engine](https://img.shields.io/badge/-Unreal%20Engine-47A8D1?style=flat-square&logo=Unreal%20Engine&logoColor=white)](https://www.unrealengine.com/)
- [![Itch.io](https://img.shields.io/badge/Itch-%23FF0B34.svg?style=for-the-badge&logo=Itch.io&logoColor=white)](https://itch.io)
- [![Handlebars](https://img.shields.io/badge/-Handlebars-F5A623?style=flat-square&logo=Handlebars.js&logoColor=white)](https://handlebarsjs.com/)
- [![Bootstrap](https://img.shields.io/badge/-Bootstrap-563D7C?style=flat-square&logo=Bootstrap&logoColor=white)](https://getbootstrap.com/)
- [![Heroku](https://img.shields.io/badge/heroku-%23430098.svg?style=for-the-badge&logo=heroku&logoColor=white)](https://heroku.com)
- [![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)](https://npmjs.com)
- [![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org)
- [![Insomnia](https://img.shields.io/badge/Insomnia-black?style=for-the-badge&logo=insomnia&logoColor=5849BE)](https://insomnia.rest)
- [![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)](https://expressjs.com)
- [![MySQL](https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white)](https://mysql.com)
- [![Sequelize](https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white)](https://sequelize.com)
- [![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)](https://code.visualstudio.com)

## Contributors
- [Connor Bodin](https://github.com/connorbodin)
- [Darren Medrano](https://github.com/medranomiler)
- [Dominique Nix](https://github.com/Dominique216)
- [Leister Marvin Maynard](https://github.com/lmmay0)

## License
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Installation
1. Clone the github repo onto your computer by copying the SSH key.
2. To run this program you will need to install bycrpt, dotenv, express, express-handlebars, express-session, mysql2, and sequelize to your package.json file. 
3. Open the .env.EXAMPLE file and rename it to .env, then go in and input your mysql username and password.
4. Go to the schema.sql file and open the integrated terminal. Run mysql and type source schema.sql, then quit.
5. If you want to add some pre-filled data to your database, then open the integrated terminal on server.js and run node seeds/seed.js
6. Lastly, in the server.js integrated terminal run node server.js and open the application.


## Usage
Upon opening the website you will be propmted to login. Click that button to either login in or sign up. You will then be directed to a page that will allow you to either view the highscores or play the game. If you chose to play the game, you will be redirected to the game page. At the end of the game, your score will be recorded and then you'll be redirected to the highscores page. From there you can choose to add your score to the list, or play the game again.

![1](https://user-images.githubusercontent.com/117382111/218797087-3d6b833f-a244-4a8b-a0d1-bce8121f93a1.png)

![2](https://user-images.githubusercontent.com/117382111/218797300-d783b434-b093-4921-8c88-b237cbc8408b.png)

![3](https://user-images.githubusercontent.com/117382111/218797528-e0845a3e-2b7c-48ed-841d-b6e2474bfe38.png)

![4](https://user-images.githubusercontent.com/117382111/218797794-670dd2ba-4388-4dd3-a2cd-d4bb99fb7d34.png)





