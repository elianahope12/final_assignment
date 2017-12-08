$(document).ready(function() {

// set up two vars and never use var again for these
  var textnow;
  var visualnow;
  var counter = 0;
  var intro_text = $("#textbox").html();

  var female_singles = $("#female_singles");
  var male_singles = $("#male_singles");
  var pairs = $("#pairs");
  var ice_dance = $("#ice_dance");
  var last = $("#last");


//when the button is clicked the intro hides
   $('#next').click(function() {
     counter++;
     switch (counter) {
       case 2:
        textnow = female_singles;
        $("#textbox").html(textnow);
        visualnow = $("<div id='female_chart'></div>");
        $("#visual").html(visualnow);
        makeFeChart();
        break;
      case 3:
       textnow = male_singles;
       $("#textbox").html(textnow);
       visualnow = $("<div id='male_chart'></div>");
       $("#visual").html(visualnow);
       makeMaChart();
       break;
      case 4:
       textnow = pairs;
       $("#textbox").html(textnow);
       visualnow = $("<div id='pairs_chart'></div>");
       $("#visual").html(visualnow);
       makePaChart();
        break;
      case 5:
       textnow = ice_dance;
       $("#textbox").html(textnow);
       visualnow = $("<div id='dancer_chart'></div>");
       $("#visual").html(visualnow);
       makeDaChart();
        break;
      case 6:
         textnow = last;
         $("#textbox").html(textnow);
         visualnow = $('<img id="ashley" src="images/ashley.jpg" alt="Womens Singles Skater">');
         $("#visual").html(visualnow);
         break;
      } // end of switch

    }); /*  end of next button  */

// start of back button
$('#back').click(function() {
   counter--;
   if(counter <= 0){
     counter = 0;
   }
   switch (counter) {
     case 1:
      textnow = intro_text; // this variable defined near top
      $("#textbox").html(textnow);
      visualnow = $('<img id="intro_pic" src="images/rink_large.png" alt="Womens Singles Skater">');
      $("#visual").html(visualnow);
      break;
     case 2:
      textnow = female_singles;
      $("#textbox").html(textnow);
      visualnow = $("<div id='female_chart'></div>");
      $("#visual").html(visualnow);
      makeFeChart();
      break;
     case 3:
      textnow = male_singles;
      $("#textbox").html(textnow);
      visualnow = $("<div id='male_chart'></div>");
      $("#visual").html(visualnow);
      makeMaChart();
      break;
     case 4:
      textnow = pairs;
      $("#textbox").html(textnow);
      visualnow = $("<div id='pairs_chart'></div>");
      $("#visual").html(visualnow);
      makePaChart();
      break;
     case 5:
      textnow = ice_dance;
      $("#textbox").html(textnow);
      visualnow = $("<div id='dancer_chart'></div>");
      $("#visual").html(visualnow);
      makeDaChart();
      break;
     case 6:
      textnow = last;
      $("#textbox").html(textnow);
      break;
   }
 }); // end of back button

}); // end of document ready


// everything below is Highcharts - do not touch

Highcharts.setOptions({
  colors: ['#E2F2EE', '#F2E2EA', '#8D9593', '#24CBE5', '#64E572', '#FF9655', '#FFF263', '#6AF9C4']
 });

// female chart

function makeFeChart() {
  Highcharts.chart('female_chart', {

  title: {
    text: 'Leading Female Figure Skaters '
  },

  subtitle: {
    text: 'Internation Scores of 2017'
  },

  xAxis: {
    categories: ['Ashley Wagner', 'Gracie Gold','Mirai Nagasu']
  },

  yAxis: {
    title: {
      text:'Season Total Points'
    }
  },

  series: [{
    type: 'column',
    colorByPoint: true,
    data: [2806, 1892, 2969],
    showInLegend: false,
    name: 'Score'
  }]

});
} // end female chart function

// male chart
function makeMaChart() {
  Highcharts.chart('male_chart', {

  title: {
    text: 'Leading Male Figure Skaters '
  },

  subtitle: {
    text: 'Internation Scores of 2017'
  },

  xAxis: {
    categories: ['Nathan Chen', 'Jason Brown','Adam Rippon']
  },

  yAxis:{
    title:['Season Total Points']
  },

  yAxis: {
    title: {
      text:'Season Total Points'
    }
  },

  series: [{
    type: 'column',
    colorByPoint: true,
    data: [3165, 2927, 2720],
    showInLegend: false,
    name: 'Score'
  }]

});
} //end of male chart function

// pairs chart
function makePaChart() {
     Highcharts.chart('pairs_chart', {

     title: {
       text: 'Leading Pairs Figure Skaters '
     },

     subtitle: {
       text: 'Internation Scores of 2017'
     },

     xAxis: {
       categories: ['Alexa Scimeca Knierim and Chris Knierim', 'Ashley Cain and Timothy Leduc','Haven Denney and Brandon Frazier']
     },

     yAxis:{
       title:['Season Total Points']
     },

     yAxis: {
       title: {
         text:'Season Total Points'
       }
     },

     series: [{
       type: 'column',
       colorByPoint: true,
       data: [2435, 1279, 1924],
       showInLegend: false,
       name: 'Score'
     }]

   });
} //end of pairs

// dancer chart
function makeDaChart() {
     Highcharts.chart('dancer_chart', {

     title: {
       text: 'Leading Ice Dancer Skaters '
     },

     subtitle: {
       text: 'Internation Scores of 2017'
     },

     xAxis: {
       categories: ['Madison Hubbell and Zachary Donohue', 'Lorraine Mcnamara and Quinn Carpenter','Rachel Parsons and Michael Parsons']
     },

     yAxis:{
       title:['Season Total Points']
     },

     yAxis: {
       title: {
         text:'Season Total Points'
       }
     },

     series: [{
       type: 'column',
       colorByPoint: true,
       data: [3763, 2177, 2322],
       showInLegend: false,
       name: 'Score'
     }]

   });
} //end of ice dance
// end of charts
