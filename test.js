$(document).ready(function() {
  setTimeout(function() {
    var name = prompt("Please Enter First And Last Name");
    if (name == null || name == "") {
      $('#firstTest').html("Please input useable data!");
    }
    else {
      $('#firstTest').html("Hello " + name + " and welcome to my website! <br> This website was not made for you so I do not know how you got here or how you even found this URL but either way it was not made for you so please leave!");
      if (name == "Ashlyn Credeur" || name == "ashlyn credeur") {
        $('#secondTest').html("Hello, if you are seeing this then you must be Ashlyn Credeur! P.S. (I Love You ❤️) <br> I love you so much baby. I know that sometimes I can really be an asshole sometimes but I hope you do always know that I really do love you with all of my heart. And that is why I love you as much as I do. You are always there for me and will always be there for me. You always put up with me especially in my bad days. I wish I didn't have those days and when I have those days I am truly sorry. I one day want to marry you. I know that I already call you mine but one day I want to be able to call you more than that. I also want to be able to wake up to you every morning and get to see you. At that point is when I'll know that my life is set in stone and how I want to live it. When that day comes I will be overwhelmed with joy to be able to call you my wife and my lover and even the mother of my kids. You make me the happiest person in the world. You're the everything I could of asked for. From your head to your toes you're perfect in every way possible. You're the love of my life and I will always love you. You're the love of my life and I want to spend the rest of my life with you. You make my heart skip a beat when I see you smile. I love you so so so so so much baby.")
      }
    }
  }, 1000);
});
