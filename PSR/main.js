var totalOnline = 0;
var totalOffline = 0;

$('.submit').on('click', function(){
  var name = $('.username').val();
  console.log(name);
  $('.start').removeClass('active');
  $('.playbuttons').addClass('active');
  $('h2').text("Are you ready " + name + "?");
  $('h2').addClass('active');
  $('.paper').attr("disabled", true);
  $('.scissors').attr("disabled", true);
  $('.rock').attr("disabled", true);
  you = new player(name);
  console.log(you.name);

});





var player = function(name){
  this.name = name;
  this.life = 100;
  this.choice = function(selected){
    picked= selected;
    console.log("you picked: ", picked);
    return selected;

  };
};

$('.paper').on('click', function(){
    you.choice("paper");
    $('.yourPick').addClass('active');
    $('.yourPick').attr("src", "https://shop.aph.org/wcsstore/APHConsumerDirect/images/catalog/products_large/1-04560-00_Embossed_Writing_Paper_G.jpg");
});
$('.scissors').on('click', function(){
    you.choice("scissors");
    $('.yourPick').addClass('active');
    $('.yourPick').attr("src", "https://wkeithbrenton.files.wordpress.com/2012/05/scissors.png");
});
$('.rock').on('click', function(){
    you.choice("rock");
    $('.yourPick').addClass('active');
    $('.yourPick').attr("src", "https://outdoordesignbylucas.files.wordpress.com/2011/01/1-10-11-charcter-rocks.jpg");
});

$('.computer').on('click', function(){
        $('.computer').attr("disabled", true);
        $('.paper').attr("disabled", false);
        $('.scissors').attr("disabled", false);
        $('.rock').attr("disabled", false);

        setTimeout(function(){
          $('.display').addClass('active');
          $('.display').attr("src", "http://www.psdgraphics.com/file/red-number-3.jpg");
          $('.results').text("");
        }, 1000);
        setTimeout(function(){
          $('.display').addClass('active');
          $('.display').attr("src", "https://varungenius.files.wordpress.com/2012/01/red-number-2.jpg");
        }, 2000);
        setTimeout(function(){
          $('.display').addClass('active');
          $('.display').attr("src", "http://www.psdgraphics.com/file/red-number-1.jpg");
          computer();
        }, 3000);


        setTimeout(function(){
          console.log("time out!")
                $('.computer').attr("disabled", false);
                $('.paper').attr("disabled", true);
                $('.scissors').attr("disabled", true);
                $('.rock').attr("disabled", true);
                winner = new game(picked, comps);
                  if(winner.playersPick === "scissors" && winner.computersPick === "paper"){
                    console.log("you won!");
                    $('.display').attr("src", "http://ajournalofmusicalthings.com/wp-content/uploads/YouWin.png");
                    $('.results').text("Scissors beats Paper!");
                    return "you";
                  }
                  else if(winner.playersPick === "rock" && winner.computersPick === "paper"){
                    console.log("you lost!");
                    $('.display').attr("src", "http://img1.wikia.nocookie.net/__cb20141109223427/adventuretimewithfinnandjake/images/7/77/S2e16_You_lose.png");
                    $('.results').text("Rock loses to Paper!");
                    return "computer";
                  }
                  else if(winner.playersPick === "paper" && winner.computersPick === "paper"){
                    console.log("It's a Tie!");
                    $('.display').attr("src", "http://www.nae.edu/e4u/video/thumbs/noWinner.jpg");
                    $('.results').text("Paper ties with Paper!");
                    return "tie";
                  }
                  else if(winner.playersPick === "scissors" && winner.computersPick === "scissors"){
                    console.log("It's a Tie!");
                    $('.display').attr("src", "http://www.nae.edu/e4u/video/thumbs/noWinner.jpg");
                    $('.results').text("Scissors ties with Scissors!");
                    return "tie";
                  }
                  else if(winner.playersPick === "scissors" && winner.computersPick === "rock"){
                    console.log("you lost!");
                    $('.display').attr("src", "http://img1.wikia.nocookie.net/__cb20141109223427/adventuretimewithfinnandjake/images/7/77/S2e16_You_lose.png");
                    $('.results').text("Scissors loses to Rock!");
                    return "computer";
                  }
                  else if(winner.playersPick === "rock" && winner.computersPick === "rock"){
                    console.log("It's a tie!");
                    $('.display').attr("src", "http://www.nae.edu/e4u/video/thumbs/noWinner.jpg");
                    $('.results').text("Rock ties with Rock!");
                    return "tie";
                  }
                  else if(winner.playersPick === "rock" && winner.computersPick === "scissors"){
                    console.log("you win!");
                    $('.display').attr("src", "http://ajournalofmusicalthings.com/wp-content/uploads/YouWin.png");
                    $('.results').text("Rock beats Scissors!");
                    return "you";
                  }
                  else if(winner.playersPick === "paper" && winner.computersPick === "rock"){
                    console.log("you win!");
                    $('.display').attr("src", "http://ajournalofmusicalthings.com/wp-content/uploads/YouWin.png");
                    $('.results').text("Paper beats Rock!");
                    return "you";
                  }
                  else if(winner.playersPick === "paper" && winner.computersPick === "scissors"){
                    console.log("you lose!");
                    $('.display').attr("src", "http://img1.wikia.nocookie.net/__cb20141109223427/adventuretimewithfinnandjake/images/7/77/S2e16_You_lose.png");
                    $('.results').text("Paper loses to Scissors!");
                    return "computer";
                  }

        }, 4000);
});


var game= function(ypick, cpick){
  this.playersPick = ypick;
  this.computersPick = cpick;
};




var computer = function(){
  this.computerPick = Math.floor(Math.random() *(1 + 3 -1));
  if(this.computerPick === 0){
    console.log("computer picked paper");
    comps= "paper";
  }
  else if(this.computerPick === 1){
    console.log("computer picked scissors");
    comps = "scissors";
  }
  else if(this.computerPick === 2){
    console.log("computer picked rock");
    comps = "rock";
  }
};
