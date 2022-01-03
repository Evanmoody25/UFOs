# Using javascript, Bootstrap, and HTML to visualize UFO data

## Background
Dana’s webpage and dynamic table are working as intended, but she’d like to provide a more in-depth analysis of UFO sightings by allowing users to filter for multiple criteria at the same time. In addition to the date, you’ll add table filters for the city, state, country, and shape.

## Resources

* Data.js (a pre-made array of UFO sightings and their detailings in JavaScript)
* Tools used this module: Jupyter Notebook, HTML, JavaScript. ECMAScript, Python, and MongoDB
* specifically, this module layed the foundation for an understanding in ES6 and how to incorporate JavaScript into your HTML 

## what is JavaScript? 

JavaScript is one of the powerhouse languages out in the wild today. While its strength is in creating visually appealing and dynamic content, it is starting to grow into other fields as well. Tensorflow, a popular machine learning tool, even has its own JavaScript library now.

It's pretty easy to start feeling daunted by everything JavaScript can do, so Dana is more interested in examples of similar websites—ones that use filters on lots of data.

*Online shopping websites: These are a great example of dynamic content. They contain filters for departments, and then filters for items within those departments. Filters on top of filters!
*Ecological data: The National Ecological Observatory Network (NEON) (Links to an external site.) has very large and diverse datasets; these are also displayed on their website as dynamic tables with multiple filters.
*Weather data: The National Snow & Ice Data Center (NSIDC) (Links to an external site.) also has very large datasets presented in table format on their website. These tables include filters and parameters that can be applied to their table.

## What is ES6? 

It is important to understand what ES6 is becasue it helped to "standardize" JavaScript. It was a major update to JavaScript that provided guidlines and rules for JavaScript to follow. It helped to fix bugs, update code, and provide general quality of life developments for developer. 

## What are the benefits to the ES6 update? 

We've briefly mentioned that the ES6 update was useful, but let's talk a bit more about why it was such a big deal.

Imagine two laptops, one old and one new, side by side. They're similar enough: they're close in size and shape and can complete many of the same tasks, but the newer laptop has an edge. It is faster and can perform tasks with greater efficiency than the older model.

JavaScript after the ES6 update is like the newer computer. This update included many updates to the syntax, which streamlined the code and made it easier to both read and write. Additional, quality of life improvements were implemented as well, such as adding Python-like generators and for...of loops. Even functions were updated and streamlined!

## what will we be using in JavaScript? (syntax)

One major component of each coding language is its syntax. For example, Python is a pretty clean and easy-to-read language; there aren't many semicolons, and the indentation and spacing makes sense. SQL, on the other hand, includes semicolons, but it also has guidelines and requirements when it comes to indentation and spacing.

JavaScript is no different: there are guidelines and requirements for writing it. But because JavaScript can be added to an HTML page, there are more guidelines and requirements than for languages that can only live in a .js file or Jupyter notebook such as Python. There are a few important things to remember about JavaScript syntax. We'll start with the following:

* Case sensitivity (in JavaScript, for example, saturn and Saturn could be different variables if you were to include them in your code)
* Semicolons (it is good practice to end statments with a semicolon)
* Statements and expressions (statments store expressions, expressioins create values)
* Code blocks (denoted by curley brackets)

## Deliverables for this challenge

* Deliverable 1: 

Using JavaScript and HTML, you’ll modify the code in your index.html file to create more table filters. In addition to the date filter you created in this module, you’ll add filters for the city, state, country, and shape, as shown in the following image:

![image](https://user-images.githubusercontent.com/89880015/147957226-e8d5dc92-ab52-4c38-bdfb-b52f28cb7e29.png)

## Deliverable 1 Requirements

* The list element that creates the button is removed, and there are five list elements for filtering in the index.html file. (20 pt)
* The event listener is modified to detect changes to each filter in the app.js file. (10 pt)
* The updateFilters() function saves the element, value, and the id of the filter that was changed. (20 pt)
* The filterTable() function loops through all of the filters and keeps any data that matches the filter values. (20 pt)
* The webpage filters the table correctly based on user input. (20 pt)
* Deliverable 2: A written report on the UFO

* Deliverable 2: 

A written analysis

## Deliverable 2 Requirments 

The written analysis has the following structure, organization, and formatting:

* There is a title, and there are multiple paragraphs. (2 pt)
* Each paragraph has a heading. (2 pt)
* There are subheadings to break up text. (2 pt)
* Images are formatted and displayed where appropriate. (2 pt)

The written analysis has the following:

* The purpose is well defined (2 pt)
* There is a description of how to perform a search, with images. (4 pt)
* The summary addresses one drawback of this webpage (2 pt)
* The summary addresses two additional recommendations for further development (4 pt)

## Deliverable 1

* The list element that creates the button is removed, and there are five list elements for filtering in the index.html file. (20 pt)

![image](https://user-images.githubusercontent.com/89880015/147958058-b8d1e946-575a-489f-951f-73d4772970e9.png)

* The event listener is modified to detect changes to each filter in the app.js file. (10 pt)

![image](https://user-images.githubusercontent.com/89880015/147958265-58040569-3927-4703-9a41-384ef4cce345.png)

* The updateFilters() function saves the element, value, and the id of the filter that was changed. (20 pt)

![image](https://user-images.githubusercontent.com/89880015/147958385-44099ad4-d9e3-4390-b983-3bfbe9c6ba18.png)

* The filterTable() function loops through all of the filters and keeps any data that matches the filter values. (20 pt)

![image](https://user-images.githubusercontent.com/89880015/147958578-a7fd6314-c3a8-4bb4-bb47-420fbea3f1d4.png)

* The webpage filters the table correctly based on user input. (20 pt)

![image](https://user-images.githubusercontent.com/89880015/147958715-7ac5d3dc-d48f-488d-81ce-156f3d50451f.png)

example: 

![image](https://user-images.githubusercontent.com/89880015/147958845-6bdc7a3f-18ef-4413-8d02-00e1842042a3.png)

# Deliverable 2: 

# How can we wrap up what we have learned and how can we improve? 

So, over the course of this week I have gone and acquired knowledge surrounding JavaScript, ES6, and built up greater knowledge on a language I still find very challenging which is HTML. Nevertheless, we created an app.js to create a dynamic table for which we can store in an HTML, a style.css which allows us to customize the webpage, and modified HTML to show our work in the webpage.

In terms of what we can improve on, 

* you could use git hub pages to turn everything into an actual website and make this information acceccible to the public. It is not doing much sitting in my directory. 
* In my opinion, the dataset is still incomplete and makes it seem like UFOs are only an american phenomenon. Perhaps there are other data sources we can pull in from in the future to make this project wider in scope and international. 

## Full Webpage

![image](https://user-images.githubusercontent.com/89880015/147962842-08e1feb5-631a-4266-b8ae-f638f5705c4f.png)

![image](https://user-images.githubusercontent.com/89880015/147962922-91c27d3d-b417-4c49-ad46-e586899db1c8.png)

Module 11, Evan Moody. 

