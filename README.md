# Youtube Entertainment App

This app tells you about the most searched result of a particular input you give. The input can be the name of a music artist or a computer course which you are interesed in. This app is made using Google Cloud Platform which is a pretty nice offering of Google.

## Installation

This App needs a Google Cloud Platform Account, so make sure you have one created and also the project in which you'll be working. I will show you the steps how to configure GCP inorder to run this application.

## Steps For Installation

### Step 1- Login to your Google Cloud Platform Console.

![](Images/dashboard.png)

### Step 2- Create an Actions Project
Visit- https://accounts.google.com/ServiceLogin/signinchooser?passive=1209600&osid=1&continue=https%3A%2F%2Fconsole.actions.google.com%2F&followup=https%3A%2F%2Fconsole.actions.google.com%2F&flowName=GlifWebSignIn&flowEntry=ServiceLogin

And Dashboard will look like this.

![](Images/step%202.png)


### Step 3- Click on NEW PROJECT and Import your project


![](Images/step%203.png)


### Step 4- Then follow the steps as below and click on BUILD.

![](Images/step%204.gif)

Then you will be asked to sign in and then you will reach the Dagnolflow Dahboard.


### Step 5- Name your project and click SAVE.

![](Images/step%205.png)

### Step 6- Then Click on Default Welcome Content and make sure Intents is selected on the left navigation menu. It will look as below.

![](Images/step%206.png)

### Step 7- Then move down to Responses section and delete the existing text written there.

Now Click ADD RESPONSES > Text Response. And type "Hello there and welcome to youtube Entertainment! What artist or educational courses are you searching for".
And click SAVE.

![](Images/step%207.png)

### Step 8- Click on the '+' beside intents in the left navigation menu.

![](Images/step%208%20edit.jpg)

### Step 9- Type the intent name and click 'Add Training and Phases'. Type in your training phase and press Enter and select that phase to assign it a entity. It will look as follows.

![](Images/step%209.png)

### Step 10- Enter multiple training phases and assign them entities as below.

![](Images/step%2010.png)

### Step 11- Now click below on 'Add Action and parameters' and check the box in front of 'any'. Now click on 'Define Prompt' and type in 'What do you want to look up  for?'. As below:-

![](Images/step%2011.png)

### Step 12- Now go on Responses section below and click '+' and add Google Assistant and check the 'Set the intent as end of conversation'. Then go on to Fulfillment section and enable it. Finally, it will look like this.

![](Images/step%2012.png)


### Step 13- Now move back to the console and go to 'API and Services' and enable the following API.

![](Images/step%2013.png)

### Step 14- Then again move back to 'API and services' and click on Create Credentials and select API key. Then a key will be provided to you so make sure you save it in a notepad.

![](Images/step%2014.png)

### Step 15- Now head to cloud functions and configure it as below. Make sure you select region according to yours. It will look something like this.

![](Images/step%2015.png)

### Click SAVE and hit NEXT.

### Step 16- Now in index.js, paste the code which have been provided in the Code folder of the repository. 

![](Images/step%2016.png)

### Also make sure to replace <YOUR_API_KEY_HERE> with the key you've saved.

### Step 17- Now in package.json, paste the code which have been provided in the folder. It will look as follows.

![](Images/step%2017.png)

### Also make sure to type the intent name in the EntryPoint above, which you gave in the dialogflow after clicking the '+'. 

### Step 18- Then click DEPLOY.

![](Images/step%2018.png)

### Step 19- Then go in the function and click on Trigger Tab and copy the URL shown there. Go back to dialogflow and in Fulfillment section, enable Webhook and paste that URL in the URL section. As shown.

![](Images/step%2019.png)


### Step 20- Visit:- https://myaccount.google.com/intro/activitycontrols, and enable 'Web and App Activity'. Then Close it.

![](Images/step%2020.png)

### Step 21- Now go back to Dialogflow and click on INTEGRATIONS > INTEGRATIONS SETTINGS > TEST. The page appears like this.

![](Images/step%2021.png)

## Congratulations, you have created your App. It works in a way as below.












