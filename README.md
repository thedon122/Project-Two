# Project-Two
This is a full stack website that use a server, database, and live hosting site to support and display an app. The app is a party planner that 
<h1>Technologies Used:</h1>
<ul><li>express</li><li>mongo</li><li>heroku</li><li>Html</li> <li>Css</li> <li>JavaScript</li> <li>jquery</li> <li>bootstrap</li></ul> 
<h1>Links:</h1>
<ul>
<li>https://www.w3schools.com/</li> 
<li>https://stackoverflow.com</li> 
<li>https://www.google.com/</li>
<li>https://github.com/thedon122/Project-Two</li>
<li>https://trello.com/b/9WCZly7F/party-time</li>
<h1>Used Projects</h1>
<li>https://github.com/danielpinoga/gift-returns</li>
<li>https://git.generalassemb.ly/jamieking/soda-app-unit-2</li>
<h1>Frame Work</h1>

<h2> data model</h2>
Schema Party{ <br>
    Party Name: String, <br>
    Host: String, <br>
    Location: String, <br>
    Date: String, <br>
    Time: String, <br>
    Theme: String, <br>
    Picture: url <br>
}

Schema Host{ <br>
    Name: String, <br>
    Contact Email: String, <br>
    Contact Number: String, <br>
    Picture: url, <br>
    Host: [Party]
}

Schema Party Goer{ <br>
    Name: String, <br>
    Costume: String, <br>
    Food: String, <br>
    Gift: String, <br>
    Contact Email: String, <br>
    Contact Number: String, <br>
    Picture: url <br>
} <br>