var page = require('webpage').create();
                     page.open('http://fantasy.premierleague.com/a/team/1537030/event/38', function () {
                     console.log(page.content); //page source
                     phantom.exit();
                     });
