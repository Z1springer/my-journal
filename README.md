# my-journal

## Author: Zach Springer

## Table of Contents

    - [Description]
    - [Installation]
    - [Known Limitations]
    - [Future Development Plans]

## Description

### home.ejs

    - The first web-page that the user sees upon launching the application.
    - As of now the inspirational quote generator is not functional due to issues with the API link, will be fixed at a future date.
    - Provides a list of helpful mental health websites should the user be in need of helpful coping mechanisms, contact with a mental health professional, or helpful strategies to better manage stress.
    - Displays three buttons to help the user navigate the application, these buttons allow the user to create a new journal entry, view a log of all previous journal entries, or takes the user to a website of the most current baby animals to have been born in American zoos.

### new-entry.ejs

    - The user enters their name, the word that best describes their current feeling when making the entry, and whatever they wish to write down.

### entry-confirm.ejs

    - View that the user is taken to after filling out the new-entry page

### prev-entries.ejs

    - List of all entries made on a local device

## Installation

    - Before attempting to launch application, type: 'npm install' (without quotation marks) into the VScode git bash terminal
    - After installing the needed dependancies, type: 'npx nodemon' into the terminal to run the application

## Known Limitations

    - At this time the user cannot use quotation marks in the new-entry text box, this will cause an error.

## Future Development Plans

    - Figure out how to fix the styling issue so that the responsivness does not require commenting out so much code
    - The user will be able to have a private account that they can log into for added security and privacy
    - The list for what the user is feeling at the time they make the new entry into their journal will be expanded to enclude more specified emotions
    - The user will be able to search for specific previous journal entries based on key words or sorting based on the feeling
    - The user will be able to use the quote generator
