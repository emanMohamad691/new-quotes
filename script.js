var allQuotes = [
  `“Be yourself; everyone else is already taken.”
― Oscar Wilde`,
  `“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”
― Marilyn Monroe`,
  `“So many books, so little time.”
― Frank Zappa`,
  `“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”
― Albert Einstein`,
  `“A room without books is like a body without a soul.”
― Marcus Tullius Cicero`,
  `“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”
― Bernard M. Baruch`,
  `“You've gotta dance like there's nobody watching,
Love like you'll never be hurt,
Sing like there's nobody listening,
And live like it's heaven on earth.”
― William W. Purkey`,
  `“You only live once, but if you do it right, once is enough.”
― Mae West`,
  `“Be the change that you wish to see in the world.”
― Mahatma Gandhi`,
  `“In three words I can sum up everything I've learned about life: it goes on.”
― Robert Frost`,
`“If you tell the truth, you don't have to remember anything.”
― Mark Twain`,
`“To live is the rarest thing in the world. Most people exist, that is all.”
― Oscar Wilde`,
`“Always forgive your enemies; nothing annoys them so much.”
― Oscar Wilde`,
`“Live as if you were to die tomorrow. Learn as if you were to live forever.”
― Mahatma Gandhi`,
`“Without music, life would be a mistake.”
― Friedrich Nietzsche, Twilight of the Idols'`,
`“To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.”
― Ralph Waldo Emerson`
];

function quotes() {
    if(allQuotes.length === 0){
        document.getElementById("quote").innerText="Sorry, You Read All Quotes";
        return;
    }
    var indexNum = Math.trunc(Math.random()*allQuotes.length);     
    var myQuote=allQuotes.splice(indexNum,1)[0];
    document.getElementById("quote").innerText=myQuote;
}


