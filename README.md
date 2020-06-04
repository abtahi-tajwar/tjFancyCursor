# Fancy Mouse & Hover effect 
- by tj
*author: Abtahi Tajwar*

##How to use
###Required Files
-tjFancyCursor.js
-tjFancyCursor.css
*Also provided with an index.js file for support *
##Adding Cursor:
- Create an html file example: index.html
- Include script tjFancyCursor.js at the end of the body example: <script src="tjFancyCursor.js"></script>
- Link tjFancyCursor.css at head example: <link rel="stylesheet" href="tjFancyCursor.css">
- Create a div with class tj-cursor example: <div class="tj-cursor"></div>
- Create a script file and include it after 'tjFancyCursor.js'
- In script file call functions below to create buttons and effects
 -tjFancyCursor(*height*, *width*, *button color HTML CSS value*); //Creating Fancy Hover Button

DONE!

##Adding Fancy Button
- Create an html file example: index.html
- Include script tjFancyCursor.js at the end of the body example: <script src="tjFancyCursor.js"></script>
- Link tjFancyCursor.css at head example: <link rel="stylesheet" href="tjFancyCursor.css">
- Create a div with class tj-cursor example: <div class="classname"></div>
- Create a script file and include it after 'tjFancyCursor.js'
- In script file call functions below to create buttons and effects
 - initTJFloatingContainer(*container class name*, *Link of the button*, *button color HTML CSS value*); //Creating Fancy Hover Button
 - mouseMoveEffect(*container class name*);  //Adding floating effect to the button