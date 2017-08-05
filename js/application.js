    //   google.charts.load('current', {'packages':['timeline']});
    //   google.charts.setOnLoadCallback(drawChart);
    //   function drawChart() {
    //     var container = document.getElementById('timeline');
    //     var chart = new google.visualization.Timeline(container);
    //     var dataTable = new google.visualization.DataTable();

    //   dataTable.addColumn({ type: 'string', id: 'Position' });
    //   dataTable.addColumn({ type: 'string', id: 'Company' });
    //   dataTable.addColumn({ type: 'date', id: 'Start' });
    //   dataTable.addColumn({ type: 'date', id: 'End' });
    //   dataTable.addRows([
    //     [ 'Career', 'Systems Engineer', new Date(2006, 06, 00), new Date(2008, 11, 01) ],
    //     [ 'Career', 'Storage Engineer', new Date(2008, 11, 01), new Date(2012, 01, 30) ],
    //     [ 'Career', 'Storage Engineer', new Date(2012, 01,30), new Date(2012, 11, 01) ],
    //     [ 'Career', 'Senior Network Engineer', new Date(2012, 11,01), new Date(2016, 05, 01) ],
    //     [ 'Career', 'Sabbatical', new Date(2016, 05,01), new Date(2017, 04, 18) ],
    //     [ 'Career', 'Devbootcamp', new Date(2017, 04,18), new Date(2017, 08, 25) ],
    //     ]);

    //   var options = {
    //     timeline: { groupByRowLabel: true,
    //     showRowLabels: false },
    //     // backgroundColor: "blue",

    //   };

    //   chart.draw(dataTable, options);
    // }
$(document).ready(function() {
  $(".star").on('click', function(event){
    event.preventDefault();
    var circle = $(this);
    var test =  $(circle).parent().siblings().find("p");

    if (test.hasClass("hidden")){
       $(test).removeClass("hidden");
      $(circle).css( "color", "white");

    }else{
      $(circle).css( "color", "#0E7C7B");
      $(test).addClass("hidden");
    }
  })
})

