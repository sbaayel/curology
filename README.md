# README
_ Describe your data schema and how it relates to the purchasing of magic
potions.

The data schema here fundamentaly shows the skeletal structure that represents the logical view of the entire database.

In this database there are three tables named Magic, Address and Payments.
Payment and Addres tables have a belongs_to association to Magic. This means that Magic table has_one Adress and has_one Payment. This will show Address and Payment as objects in the Magic JSON file.

_Describe how this could scale over time.

The project can be scaled up to include creating and managing product, displaying all products, storing and securing payment
information through integrate a service ect.

The project can be scaled up to include user login/logout and signup pages.

The UI can be scalled up to be dynamic and user friendly

_ Describe your front end architecture and why you chose to create it as you did.
Include details about form validation, error handling etc.

src _
     components _
                  Form.jsx : This component contains the form that allows user input 
                  Form.css : This component contains the styling for the front end
                  Main.jsx : This is the component that handles routing
     services _ 
               api-helper.js This component contains data point refferences 

_ Describe the API architecture

Make HTTP POST request to Magic (202 ACCEPTED respones) or (404 FAILURE respons)

_ With more time or in a different environment, what would you do differently?

With more time I will re-organise my code base to make it cleaner than it looks now

I will create unite testing for each route

I will create a better and responsive UI

_ What would you do to improve or scale the application?

To improve or scale up the application I will create a list of very specific funtional requirements with the aim to maximise efficiency.
    

## Overview
This app is based on a react js front end and a a ruby on rails backend.

_To run the app make sure you have ruby on rails configured then  do the following: 

_ Open your terminal 

_ Create a new directory on your local 

_ Navigate into the new directory you just created

_ Copy, past and run the following in your terminal:  git clone https://github.com/sbaayel/curology.git

_ When git clone is complete navigate to the client inside the curology folder and do : npm i 
  This should install all the dependancies need to run the react frontend for the app.

_ Stay in the current directory and open a new window in terminal. 

  Stay in the to the current directory in the second terminal window you just opened and run this command: rails server or rails s.

  This will start the backend and give the app access to the apps database .

_ In the first terminal window run the this command navigate into the client directory: npm start 
  This command will start the react front-end server and open in your local browser.
