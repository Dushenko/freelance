$(document).ready(function () {
  
  $('.js-progressbar__box_common').each(function(){
    var firstTeam = parseInt($(this).find('.js-progressbar__first-team-count').html()),
    secondTeam = parseInt($(this).find('.js-progressbar__second-team-count').html()),
    teamLine = $(this).find('.js-progressbar__counter_first-team');


    if (firstTeam == 0 && secondTeam == 0) {
      teamLine.css('width', 50 + "%");
    } else if (firstTeam == 0 && secondTeam > 0){
      teamLine.css('width', 100 + "%");
    } else {
      var teamScore = firstTeam/(firstTeam + secondTeam)*100;
      teamLine.css('width', teamScore + "%");
    }
  });

  function scoreLine(teamFirst, teamSecond) {
    var teamOne = parseInt($(teamFirst)
      .find('.js-progressbar__score').html()),
    teamTwo = parseInt($(teamSecond)
      .find('.js-progressbar__score').html());
    $(teamFirst)
    .find('.js-progressbar__counter')
    .css('width', 50 + "%");
    if (teamOne == 0 && teamTwo == 0) {
      $(teamFirst)
      .find('.js-progressbar__counter')
      .css('width', 50 + "%");
      $(teamSecond)
      .find('.js-progressbar__counter')
      .css('width', 50 + "%")
    } else if(teamOne == 0 && teamTwo > 0) {
      $(teamSecond)
      .find('.js-progressbar__counter')
      .css('width', 100 + "%")
    } else {
      $(teamFirst)
      .find('.js-progressbar__counter')
      .css('width', (teamOne/(teamOne + teamTwo)*100) + "%");
      $(teamSecond)
      .find('.js-progressbar__counter')
      .css('width', (teamTwo/(teamOne + teamTwo)*100) + "%");
    }
  }

  scoreLine('#first-team-puck', '#second-team-puck');
  scoreLine('#first-team-throw', '#second-team-throw');

});