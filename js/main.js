var quotes = [{ 'quotes': 'We accept the love we think we deserve.', 'author':'Stephen Chbosky.'},
{ 'quotes': 'Always forgive your enemies, nothing annoys them so much.', 'author':'Stephen Chbosky.'},
{ 'quotes': 'A friend is someone who knows all about you and still loves you', 'author':'Oscar Wilde'},
{ 'quotes': 'So many books, so little time.', 'author':'Frank Zappa.'},
{ 'quotes': 'Two things are infinite: the universe and human stupidity, and Im not sure about the universe.', 'author':'Albert Einstein.'},];


function randomQuote()
{
var randomlength = Math.floor(Math.random() * quotes.length);
document.getElementById('quotestex').innerHTML=quotes[randomlength].quotes;
document.getElementById('quotesauth').innerHTML=quotes[randomlength].author;
}