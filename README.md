# frontend_progressbar

Primary task: Using RactiveJS (Node JS  OR angular JS), implement the following (you can make it look however you like):

http://scott.maclure.com.au/test/progress-bars-demo.ogv

Requirements:
· Behaviours 
· Multiple bars
· One set of controls that can control each bar on the fly
· Can't go under 0
· Can go over 100, but limit the bar itself and change its colour
· Display usage amount, centred
· Write tests for your code (hint: TDD strongly preferred)
· Implement a responsive solution: testing it on mobile, tablet, etc. Getting it working nicely.
· Animate the bar change, make sure it works well when you tap buttons quickly.
· Publish your code online somewhere: GitHub or something like plnkr.co, jsfiddle.net

Bonus points for implementing "production quality" code, using practices such as:
· Setting it up as a project
· Setting up some automated tools
· Version control (git)
· Linting, code quality, etc
· JavaScript/CSS minification, packaging, etc
· Using a CSS pre-processor like SASS/SCSS
· Styling it to a production quality level

Assumption: The below tools are installed on client side: 
 - Grunt
 - Gradle
 - Java
 - NodeJS

Instruction:
 - To compile sass to css : grunt sass
 - To run qunit : grunt qunit
 - To minified js : grunt minifed
 - To start node server : grunt execute
 - To execute all 4 above tasks : grunt
 - To run functional test : gradle cucumber

Room for enhancement:
 - Make Grunt execute cucumber test after deploying NodeJS
