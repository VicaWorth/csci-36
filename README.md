# Welcome to the Butte College SLO (student learning objectives) Tracker! #

## Project Purpose ##
- Scrapes the Butte College programs page
- Scrapes from https://butte.curriqunet.com/Account/Logon?ReturnUrl=%2f
- Displays department and program information
- Displays information on when a learning objective should be updated
- Allows users to submit forms regarding when a program learning objective should be updated
- Allows users to view those submissions later

## Project Summary ##
We had hosted our project on AWS Cloud9. Its possible to use Docker, 
but we never tried to use that. 

This project uses npm, NodeJS, and ExpressJS for it's server functionalities.
We used EJS for our pages and Cheerio for scraping.

Express uses a model-view-controller setup.
Models are js files that create tables in our database.
Views are EJS files that create pages the user can view.
Controllers are routes that allow User's to navigate to pages.
Controllers send data to Views. 
For more information, please reference [the ExpressJS documentation](https://expressjs.com)

## Setup
These guides helps you set up GitHub, MySQL, and start the scraper.

### Video Help ###
[A video was created to aid with setup](https://www.youtube.com/watch?v=Ni4ZJvIjiOE)

## Documentation ##
Please view the documentation folder for the following documents:
Those folders include:
- Database Design ERD
- Software C4 Design
- Software Requirements and Specifications
- Project Design
- Bug list
- Notes for you (The future class)

To view the archived Discord: [FA-22](https://discord.gg/2hMQsFR6Ak)

## Appendix ##
- LO: Learning outcome
- PLO: Program Learning Outcome
- SLO: Student Learning Outcome
- PLO and SLO are sometimes used interchangeably on Butte's pages. 
