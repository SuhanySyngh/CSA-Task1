const quotes = [{
    quote: '"Be the change that you wish to see in the world"',
    writer: '-Mahatma Gandhi'
},
{
    quote: '"Your patience is your power"',
    writer: '-K.Tolnoe'
},
{
    quote: '"You are your home"',
    writer: '-Erin Hanson'
},
{
    quote: '"It is never too late to be what you might have been"',
    writer: '-George Eliot'
},
{
    quote: '"Turn the pain into power"',
    writer: '-Anonymous'
},
{
    quote: '"No pressure, no diamonds"',
    writer: '-Thomas Carlyle'
},
{
    quote: '"Whatever you are, be a good one"',
    writer: '-Abraham Lincoln'
},
{
    quote: '"A tiger does not lose sleep over the opinion of sheep"',
    writer: '-Shahir Zag'
},
{
    quote: '"Make each day your masterpiece"',
    writer: '-John Wooden'
},
{
    quote: '"You cannot cross the sea merely by standing and staring at the water"',
    writer: '-Rabindranath Tagore'
},
{
    quote: '"Where there is no struggle there is no strength"',
    writer: '-Oprah Winfrey'
},
{
    quote: '"Simplicity is the ultimate sophistication"',
    writer: '-Leonardo da Vinci'
},
{
    quote: '"You must be the best judge of your own happiness"',
    writer: '-Jane Austen'
},
{
    quote: '"Happiness is not by chance, but by choice"',
    writer: '-Jim Rohn'
},
{
    quote: '"Life is short, and it is here to be lived"',
    writer: '-Kate Winslet'
}
]

let btn = document.querySelector("#Qbtn");
let quote = document.querySelector(".quote");
let writer = document.querySelector(".writer");

btn.addEventListener("click", function(){
    let random = Math.floor(Math.ramdom() * quotes.length);
    quote.innerHTML = quotes[random].quote;
    writer.innerHTML = quotes[random].writer;
})