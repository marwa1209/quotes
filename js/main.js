/** @format */

function quote() {
  var quotes = [
    {
      quote: "“Be yourself; everyone else is already taken.”",
      author: "--Oscar Wilde",
    },
    {
      quote:
        "“In three words I can sum up everything I've learned about life: it goes on.”",
      author: "-- Robert Frost",
    },
    {
      quote: "“Be yourself; everyone else is already taken.”",
      author: "--Oscar Wilde",
    },
    {
      quote: "“So many books, so little time.”",
      author: "--Oscar Wilde",
    },
    {
      quote: "“Be yourself; everyone else is already taken.”",
      author: "--Frank Zappa",
    },
    {
      quote: "“If you tell the truth, you don't have to remember anything.”",
      author: "--Mark Twain",
    },
    {
      quote:
        "“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”",
      author: "--Dr. Seuss",
    },
  ];

  var num = Math.floor(Math.random() * quotes.length);
  document.getElementById("quote").innerHTML = quotes[num].quote;
  document.getElementById("author").innerHTML = quotes[num].author;
}
