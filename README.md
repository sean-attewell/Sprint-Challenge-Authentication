# Sprint Challenge: Authentication - Dad Jokes
<!-- edit -->
This challenge allows you to practice the concepts and techniques learned over the past week and apply them in a concrete project. This Sprint explored Authentication. During this Sprint, you studied Introduction to Authentication, Using Sessions and Cookies, Using JSON Web Tokens (JWT), and Client-side Authentication. In your challenge this week, you will demonstrate proficiency by creating an application that will give you a list of random dad jokes, as long as you are authorized.

- **DISCLAIMER** Authentication is a subject that many people spend a large amount time throughout their careers obtaining knowledge over. This is not something we expect you to have a mastery over, rather, we're preparing you to be able have an intelligent conversation about the subject.

## Instructions

**Read these instructions carefully. Understand exactly what is expected _before_ starting this Sprint Challenge.**

This is an individual assessment. All work must be your own. Your challenge score is a measure of your ability to work independently using the material covered through this sprint. You need to demonstrate proficiency in the concepts and objectives introduced and practiced in preceding days.

You are not allowed to collaborate during the Sprint Challenge. However, you are encouraged to follow the twenty-minute rule and seek support from your PM and Instructor in your cohort help channel on Slack. Your work reflects your proficiency w/ Authentication and your command of the concepts and techniques in the Introduction to Authentication, Using Sessions and Cookies, Using JSON Web Tokens (JWT), and Client-side Authentication modules.

You have three hours to complete this challenge. Plan your time accordingly.

## Commits

Commit your code regularly and meaningfully. This helps both you (in case you ever need to return to old code for any number of reasons and your project manager.

## Description

In this challenge, you build a real wise-guy application. _Dad jokes_ are all the rage these days. Currently the application is trying to receive some `Dad Jokes`, however we are currently locked out.

Implement an User Authentication System in order to access the jokes from the Jokes API that we want to consume. You will need to ensure that your system uses `bcrypt` for hashing and encrypting your user's passwords, as well as JWT for handling the authorization aspect of the app.

## Self-Study/Essay Questions

Demonstrate your understanding of this week's concepts by answering the following free-form questions. Edit this document to include your answers after each question. Make sure to leave a blank line above and below your answer so it is clear and easy to read by your project manager.

1. What is the purpose of using _sessions_?

To persist a client’s authentication information until expiry/logout. This means that new requests the client makes to the server do not require the user to re-enter credentials.

1. What does bcrypt do to help us store passwords in a secure manner.

Bcrypt makes a cryptographically strong hash of the password that cannot be reversed. Bcrypt has salts built into the generated hashes to prevent rainbow table attacks. A rainbow table assumes that either there’s no secret/salt, or the salt is the same for everyone. If each salt is different – hashes can only be done one at a time.

1. What does bcrypt do to slow down attackers?

It lets you specify the number of hashing rounds used. Having an algorithm that hashes the information multiple times (rounds) means an attacker needs to have the hash, know the algorithm used, and how many rounds were used to generate the hash in the first place. As attackers get faster at brute-forcing, we can simply increase the number of hashing rounds and increase security, without forcing users to change password.

1. What are the three parts of the JSON Web Token?

Header (declares the type and hashing algorithm)
Payload (carries the JWT claims - registered claim names, public claim names, and private claim names)
Signature (Made up of a hash of the header, payload and secret).

## Project Set Up

Follow these steps to set up and work on your project:

- [X] Create a forked copy of this project.
- [X] Add PM as collaborator on Github.
- [X] Clone your OWN version of Repo (Not Lambda's by mistake!).
- [X] Create a new Branch on the clone: git checkout -b `<firstName-lastName>`.
- [X] Implement the project on this Branch, committing changes regularly.
- [X] Push commits: git push origin `<firstName-lastName>`.

Follow these steps for completing your project:

- [X] `cd` into the root of the project and run `yarn` to install dependencies.
- [X] Once you have your `node_modules` go ahead and run `yarn server` or `npm run server` to start your node server.
- [X] Submit a Pull-Request to merge <firstName-lastName> Branch into master (student's  Repo).
- [X] Add your Project Manager as a Reviewer on the Pull-request
- [X] PM then will count the HW as done by  merging the branch back into master.

Helpful Tip on Testing this Project:

- [X] **TEST** this project using **`POSTMAN`**.

## Minimum Viable Product

- [X] Implement the `register` function inside `/config/routes.js`.
- [X] Implement the `login` function inside `/config/routes.js`.
- [X] Use JSON Web Tokens for authentication.

**Note** The migrations and a database with empty users is already included

- [X] Add the authentication related code. If everything is done correctly, visiting `/api/jokes` should return a list of jokes.

## Stretch Problem: Build a front end to interface with your User Auth System

- Add a React client that connects to your API and has pages for `Sign Up`, `Sign In` and showing a list of `Jokes`.
- Once you have the functionality down, style it!
