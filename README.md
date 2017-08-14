# marvel-api
Playing around with the Marvel comics API

I want to play with the Marvel API to build some kind of cool application.

Doco on the Marvel API is here https://developer.marvel.com/documentation/getting_started

What I would like to do
Learn new stuff!
- Play with React/Redux some more
- Build a boilerplate from scratch myself (use Yeoman?)
- Build a wicked UI that displays comic artwork
- Maybe look at d3 around data visualisation of character appearances

To get working, you will need a Marvel API key. You can get one here https://developer.marvel.com/

To get working
- Clone this repo
- Install npm packages `npm i`
- Create a .env file in the root directory with the following details
`PUBLIC_KEY='asdasdasdasd'
PRIVATE_KEY='asdasdasdas'
URL='https://gateway.marvel.com'
`
- Run `npm run dev`
- Browse to http://localhost:3000
- Search for a character

* Next steps
- List last x amount of comics the character was in
- Better error handling
- Show covers of the last few comics the character has been in.
