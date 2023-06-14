# Welcome to the Butte College SLO Tracker! #

## This website does the following: ##
- Scrapes the Butte College programs page
- Scrapes from https://butte.curriqunet.com/Account/Logon?ReturnUrl=%2f
- Displays department and program information
- Displays information on when a LO should be 
- Allows users to submit forms regarding when a PLO should be updated
- Allows users to view those submissions later

## What should I know before working on this project? ##
**YOU MUST TAKE WEB DEV 1 BEFORE WORKING ON THIS PROJECT.**
Those who have not taken Web Dev 2 can still manage.
Those who have taken Web Dev 2 will be the most prepared.

Also having some students who are taking or have taken Bus 18 will be helpful to you.

We had hosted our project on AWS Cloud9. Its possible to use Docker, 
but we never tried to use that. 

This project uses npm, NodeJS, and ExpressJS for it's server functionalities.
We used EJS for our pages and Cheerio for scraping.

Express uses a model-view-controller setup.
Models are js files that create tables in our database.
Views are EJS files that create pages the user can view.
Controllers are routes that allow User's to navigate to pages.
Controllers send data to Views. 
For more information, please spend some time reading [the ExpressJS documentation](https://expressjs.com)

## Setup
These guides helps you set up GitHub, MySQL, and start the scraper.

### GitHub
```
ssh-keygen -t ed25519 -C "your_email@example.com"

eval "$(ssh-agent -s)"

ssh-add ~/.ssh/id_ed25519

cat ~/.ssh/id_ed25519.pub

git init

git remote add origin git@github.com:VicaWorth/csci-36.git

git pull origin master 

git checkout -b VicaWorth

git push origin VicaWorth

git add .

git commit -m "My first commit"

git push origin VicaWorth
```
#### Setting up MySQL ####
```
sudo apt-get update

sudo apt-get install mysql-server

sudo mysql_secure_installation
```
#### Password I used ####
```
superDUPER@m3

sudo service mysql status

sudo mysql -u root -p

CREATE USER 'csci36'@'localhost' IDENTIFIED BY 'superDUPER@m3';

GRANT ALL PRIVILEGES ON *.* TO 'csci36'@'localhost';

<<<<<<< HEAD
CREATE DATABASE home;
=======
CREATE DATABASE home ;
>>>>>>> 8e0f62d3e3e032c346400deb2a8f74ed40fd7179
```

#### AFTER STARTING SERVER ####
```
USE home;

SHOW TABLES;
```
### Video Help ###
[A video was created to aid with setup](https://www.youtube.com/watch?v=Ni4ZJvIjiOE)

NOTE: The 'end' result after setting up MySQL and starting the server will be
**CONSIDERIBLY** different. This is because the video was created at the 
start of our project, so we hadn't yet updated it. 

## Documentation ##
In almost every folder there is a README.md explaining more about what's going
on inside of it. Most complex pages have many comments to help guide you
through the code.

You can also view the documentation folder for both fa22 and fa20's docs.
Those folders include:
- Database Design ERD
- Software C4 Design
- Software Requirements and Specifications
- Project Design
- Bug list
- Notes for you (The future class)

Here is our archived discord: [FA-22](https://discord.gg/2hMQsFR6Ak)

## Appendix ##
- LO: Learning outcome
- PLO: Program Learning Outcome
- SLO: Student Learning Outcome
- PLO and SLO are sometimes used interchangeably on Butte's pages. 
