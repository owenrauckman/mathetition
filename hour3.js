var teams = [
  ["TBR", 0],
  ["Sages", 3],
  ["Panthers", 3],
  ["DAWC", 2],
  ["Nothing", 0],
  ["Farrah Abraham", 2]
];

//blank array to fill
var sortedTeams = [];

//sorts teams by score
sortedTeams = teams.sort(function(a, b) {
    return a[1] - b[1];
});
//sort high to low instead
sortedTeams = sortedTeams.reverse();



$(document).ready(function(){

  $('#how-to').click(function(){
    $('.container-points ul').slideToggle();
  });

  for(var i = 0; i < sortedTeams.length; i++){
    $('.flex-container').append(

      "<div class='flex-item'>" +
        "<div class='score'>" +
          "<h1>" + sortedTeams[i][1] + "</h1>" +
        "</div>" +
        "<div class='team-name'>" +
          "<div class='place'>" +
            "<p>" + (i+1) + "</p>" +
          "</div>" +
          "<div class='name'>" +
            sortedTeams[i][0] +
          "</div>" +
        "</div>" +
      "</div>"

    );
  }
});
