// location map 
const findMapId = document.getElementById("map");
if(findMapId){
  var map;
  function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 9.0820, lng: 8.6753},
      zoom: 6,
      styles:[
        {
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#ebe3cd"
            }
          ]
        },
        {
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#523735"
            }
          ]
        },
        {
          "elementType": "labels.text.stroke",
          "stylers": [
            {
              "color": "#f5f1e6"
            }
          ]
        },
        {
          "featureType": "administrative",
          "elementType": "geometry",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "administrative",
          "elementType": "geometry.stroke",
          "stylers": [
            {
              "color": "#c9b2a6"
            }
          ]
        },
        {
          "featureType": "administrative.land_parcel",
          "elementType": "geometry.stroke",
          "stylers": [
            {
              "color": "#dcd2be"
            }
          ]
        },
        {
          "featureType": "administrative.land_parcel",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#ae9e90"
            }
          ]
        },
        {
          "featureType": "landscape.natural",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#dfd2ae"
            }
          ]
        },
        {
          "featureType": "poi",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "poi",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#dfd2ae"
            }
          ]
        },
        {
          "featureType": "poi",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#93817c"
            }
          ]
        },
        {
          "featureType": "poi.park",
          "elementType": "geometry.fill",
          "stylers": [
            {
              "color": "#a5b076"
            }
          ]
        },
        {
          "featureType": "poi.park",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#447530"
            }
          ]
        },
        {
          "featureType": "road",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#f5f1e6"
            }
          ]
        },
        {
          "featureType": "road",
          "elementType": "labels.icon",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "road.arterial",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#fdfcf8"
            }
          ]
        },
        {
          "featureType": "road.highway",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#f8c967"
            }
          ]
        },
        {
          "featureType": "road.highway",
          "elementType": "geometry.stroke",
          "stylers": [
            {
              "color": "#e9bc62"
            }
          ]
        },
        {
          "featureType": "road.highway.controlled_access",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#e98d58"
            }
          ]
        },
        {
          "featureType": "road.highway.controlled_access",
          "elementType": "geometry.stroke",
          "stylers": [
            {
              "color": "#db8555"
            }
          ]
        },
        {
          "featureType": "road.local",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#806b63"
            }
          ]
        },
        {
          "featureType": "transit",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "transit.line",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#dfd2ae"
            }
          ]
        },
        {
          "featureType": "transit.line",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#8f7d77"
            }
          ]
        },
        {
          "featureType": "transit.line",
          "elementType": "labels.text.stroke",
          "stylers": [
            {
              "color": "#ebe3cd"
            }
          ]
        },
        {
          "featureType": "transit.station",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#dfd2ae"
            }
          ]
        },
        {
          "featureType": "water",
          "elementType": "geometry.fill",
          "stylers": [
            {
              "color": "#b9d3c2"
            }
          ]
        },
        {
          "featureType": "water",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#92998d"
            }
          ]
        }
      ]
    });
    const userLocations = [
      {lat: 6.5391, lng: 3.3849},
      {lat: 6.4703, lng: 3.2818},
      {lat: 6.4698, lng: 3.5852},
      {lat: 6.9980, lng: 3.4737},
      {lat: 6.3350, lng: 5.6037},
      
      {lat: 4.824167, lng: 7.033611},
      {lat: 11.833333, lng: 13.150000},
      {lat: 12.000000, lng: 8.516667},
      {lat:12.985531, lng: 7.617144},
      {lat: 6.010519, lng: 6.910345},
      {lat: 6.264092, lng: 6.201883},
      {lat: 6.605874, lng: 3.349149},
      {lat: 5.500187, lng: 5.993834},
      {lat: 7.250771, lng: 5.210266},
      {lat:4.982873, lng: 8.334503},
      {lat: 5.879698, lng: 5.700531},
      {lat: 7.536318, lng: 3.418143},
      {lat: 11.794242, lng: 8.839032},
      {lat: 6.141312, lng: 6.802949},
      {lat: 11.085541, lng: 7.719945},
      {lat: 9.896527, lng: 8.858331},
      {lat: 9.583555, lng: 6.546316},
      {lat: 7.629209, lng: 4.187218},
      {lat: 9.203496, lng: 12.495390},
      {lat: 6.339185, lng: 5.617447},
      {lat: 7.100005, lng: 4.841694},
      {lat: 5.544230, lng: 5.760269},
      {lat: 9.890224, lng: 8.878927},

    ]
    userLocations.map((data)=>{
      let addMarker = (coords)=>{
        let marker = new google.maps.Marker({
          position:coords,
          map:map,
          icon:"img/marker.svg"
        })
      }
      addMarker(data);
    }
    )
  }
}
$(document).ready(function() {

// loan data table 
const loanDataTable = document.getElementById("loan_table");
if(loanDataTable){
    $('#loan_table').DataTable();
}
// industry data table 
const industryDataTable = document.getElementById("industry_table");
if(industryDataTable){
    $('#industry_table').DataTable();
}
// dashboard users data table 
const usersDataTable = document.getElementById("users_table");
if(usersDataTable){
    $('#users_table').DataTable();
}
// tracking data table 
const trackingDataTable = document.getElementById("tracking_table");
if(trackingDataTable){
    $('#tracking_table').DataTable();
}
// tracking data tab 
const trackingDataTab = document.getElementById("nav-tab");
if(trackingDataTab){
  // data tab one 
    $('#tracking_1').DataTable();
     // data tab two 
     $('#tracking_2').DataTable();
// make the table in the tab responsive 
  $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
      $($.fn.dataTable.tables(true)).DataTable()
         .columns.adjust()
         .responsive.recalc();
  }); 
}
})

// Get the modal
var modal = document.getElementById("myModal");

// Get all links that opens the modal
let openModalBtn = document.querySelectorAll(".open_modal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close_modal")[0];

if(modal){
  for (const element of openModalBtn) {
    console.log(element);
        // When a user's name is clicked, open the modal 
      element.onclick = ()=> {
    console.log(element);

      modal.style.display = "block";
    }
  }
  

  // When the user clicks on <span> (x), close the modal
  span.onclick = ()=> {
    modal.style.display = "none";
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = (event)=> {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }


        // volume, purchase and monthly sales charts
      var options = {
        series: [{
        data: [400, 448, 540, 690, 1200, 200, 500, 260, 560, 900, 260, 500, 130, 200, 700, 300, 500, 620, 500, 500, 540, 500, 500, 1000, 500, 400, 500, 200, 500, 500],

      }],
        chart: {
        type: 'bar',
        height: 300
      },
      // colors: ['#F2994A'],
      colors: ['#00cc00'],
  
      dataLabels: {
        enabled: false,
      },
      xaxis: {
        categories: ['Jan 1', 'Jan 2',  'Jan 3', 'Jan 4',  'Jan 5',  'Jan 6',  'Jan 7',  'Jan 8',  'Jan 9',  'Jan 10',  'Jan 11',  'Jan 12',  'Jan 13',  'Jan 14',  'Jan 15',  'Jan 16',  'Jan 17',  'Jan 18',  'Jan 19',  'Jan 20',  'Jan 21',  'Jan 22',  'Jan 23',  'Jan 24',  'Jan 25',  'Jan 26',  'Jan 27',  'Jan 28',  'Jan 29',  'Jan 30'],
      }
      };
      var purchaseChart = new ApexCharts(document.querySelector("#purchase_tracking_new"), options);
      var salesVolume = new ApexCharts(document.querySelector("#sales_volume"), options);
      var monthlySalesChart = new ApexCharts(document.querySelector("#monthly_sales_new"), options);
      var salesAmount = new ApexCharts(document.querySelector("#sales_amount"), options);
      purchaseChart.render();
      salesVolume.render();
      monthlySalesChart.render();
      salesAmount.render();
  
}

// overview page charts
const overviewPage = document.getElementById("overview");
if(overviewPage){
  var options = {
    series: [{
      name: "Desktops",
      data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
  }],
    chart: {
    height: 200,
    type: 'line',
    zoom: {
      enabled: false
    }
  },
  dataLabels: {
    enabled: false
  },
  responsive: [{
    breakpoint: 676,
    options: {
      chart: {
        height: 300,
      },
    }
  },
  {
    breakpoint: 426,
    options: {
      chart: {
        height: 210,
      },
    }
  }],
  stroke: {
    curve: 'straight'
  },
  grid: {
    row: {
      colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
      opacity: 0.5
    },
  },
  xaxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
  }
  };
  // backlog chart 
  let backlogChart = new ApexCharts(document.querySelector("#backlog_chart"), options);
  backlogChart.render();
  // performance chart 
  let performanceChart = new ApexCharts(document.querySelector("#performance_chart"), options);
  performanceChart.render();
  // review chart 
  let reviewChart = new ApexCharts(document.querySelector("#review_chart"), options);
  reviewChart.render();

  var options = {
    series: [{
      name: "Desktops",
      data: [10, 41, 35, 51, 49, 62, 69]
  }],
    chart: {
    height: 200,
    type: 'line',
    zoom: {
      enabled: false
    }
  },
  responsive: [{
    breakpoint: 676,
    options: {
      chart: {
        height: 300,
      },
    },
  
  },
{
  breakpoint: 426,
  options: {
    chart: {
      height: 210,
    },
  }
}],
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: 'straight'
  },
  colors: ['#F2994A'],
  grid: {
    row: {
      colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
      opacity: 0.5
    },
  },
  xaxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
  }
  };
  // account chart 
  let accountChart = new ApexCharts(document.querySelector("#account_chart"), options);
  accountChart.render();
  // overview chart 
  let overviewChart = new ApexCharts(document.querySelector("#overview_chart"), options);
  overviewChart.render();
  // overview chart 
  let closedCasesChart = new ApexCharts(document.querySelector("#closed_cases_chart"), options);
  closedCasesChart.render();
}
var svgCharts = document.querySelector(".charts");
if(svgCharts){
    // charts 
  // volume chart
  var options = {
    series: [{
    data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380, 500, 400]
  }],
    chart: {
    type: 'bar',
    height: 250
  },
  dataLabels: {
    enabled: false
  },
  xaxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  }
  };
let volumeChart = new ApexCharts(document.querySelector("#volume_sales"), options);
volumeChart.render();

  // Total sales chart
  var options = {
      series: [{
      data: [400, 448, 540, 690, 1200, 500],

    }],
      chart: {
      type: 'bar',
      height: 250
    },
    colors: ['#F2994A'],
 
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: ['Jan', 'Mar',  'May', 'Jul',  'Sep',  'Nov', ],
    }
    };
  let totalSalesChart = new ApexCharts(document.querySelector("#total_sales"), options);
  totalSalesChart.render();

    // Monthly growth chart
    var options = {
      series: [44, 55, 13, 43],
      chart: {
      type: 'pie',
    },
    legend: {
      position: 'bottom'
    },
    labels: ['Jan-Mar', 'Apr-Jun', 'Jul-Sep', 'Oct-Dec'],
    };
  
  let monthlyGrowthChart = new ApexCharts(document.querySelector("#monthly_sales"), options);
  monthlyGrowthChart.render();

  // Purchase tracking chart 
  var options = {
      series: [{
      name: 'series1',
      data: [31, 40, 28, 51, 42, 109, 100]
    }, {
      name: 'series2',
      data: [11, 32, 45, 32, 34, 52, 41]
    }],
      chart: {
      height: 310,
      type: 'area'
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth'
    },
    xaxis: {
      type: 'datetime',
      categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
    },
    tooltip: {
      x: {
        format: 'dd/MM/yy HH:mm'
      },
    },
    };

    var purchaseTrackingChart = new ApexCharts(document.querySelector("#purchase_tracking"), options);
    purchaseTrackingChart.render();
}
