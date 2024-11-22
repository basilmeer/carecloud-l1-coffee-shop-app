# CareCloud L1 Technical Interview Coffee Shop Application | Frontend

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) to save
development time as the frontend part was optional, however, I felt it appropriate to have it set up to make
it easier to test.

## Tech Stack
- React 18.3
- React Router 7
- TypeScript 4.9
- TailwindCSS 3.4

## Thoughts &amp; Decisions

### Using TypeScript

The purpose behind using TS was to purely keep my own development as error free as possible while working across
the frontend and the backend. It is arguable that I could have leveraged more what TS offers but for a project of 
this scale, I have used whatever I felt necessary to keep my development smooth.

### Tailwind

While I do have a decent amount of experience with Bootstrap, I find Tailwind to be easier to prototype with.
There didn't seem to be any hard requirement since the frontend portion was optional to begin with, thus I
decided to take the liberty to use Tailwind.

### Non-Responsive

My sole focus in the past 48 hours has been to make the application functional and testable. As such, I have opted
to not make the design mobile-responsive.

## Oversights

### No 'Remove From Cart' Button

I had planned to add one near the end of the project however I glossed over it in pursuit of making the rest look
and behave functional.


## Getting Started

Since the project was bootstrapped with Create React App, all you would really need to do is:

```sh
$ cp .env.example .env
$ npm i
$ npm start
```

This should run the project at `http://localhost:3001` and expect the backend to be running at port 3000 (which has been
configured for it by default).

