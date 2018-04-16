# Project-Two

<h1>Technologies Used:</h1>
<ul><li>Html</li> <li>Css</li> <li>JavaScript</li> <li>jquery</li> <li>bootstrap</li></ul> 
<h1>Links:</h1>
<ul><li>https://www.w3schools.com/</li> 
<li>https://stackoverflow.com</li> 
<li>https://www.google.com/</li>
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