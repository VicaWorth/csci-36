# Welcome to Utilities! #

The utilities folder is used for 'prescraping' the website. 
Essentially our process used to work like this:

- Fetch program page 1 (network call)
- Scrape into variables (local)
- Put it into the database (local)
- Fetch program page 2 (network call)
- and so on...

We decided to chunk our processes into this:

- Fetch all program pages (network call)
- Save the html into .txt files (found in dev-programs)
- Scrape the pages into objects (local)
- Take objects and push them into database. (local)

The processes being chunked in this way does not improve performance much.
The biggest performance issue is with the network calls. 

network < reading and writing < ram < cpu

We hadn't worried much about performance with the scraper because ultimately
it really would only need to scrape 4 times a year (every semester),
or if you wanted to keep it especially updated once a month.

