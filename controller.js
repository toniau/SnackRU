$(document).ready(function(){
    document.getElementById("dashTab").addEventListener('click', function(){
        $('#fundraiser').fadeToggle('fast');
        $('#snack-dash').fadeToggle('fast');
    });

    document.getElementById("fundraiserTab").addEventListener('click', function(){
        $('#snack-dash').fadeToggle('fast');
        $('#fundraiser').fadeToggle('fast');
    });
    
    var ctx = document.getElementById("myChart");
    var myChart = new Chart(ctx, {
        type: 'horizontalBar',
        data: {
            labels: ["Sat Lunch", "Sat Dinner", "Midnight Surprise", "Midnight Meal", "Sun Breakfast", "Sun Lunch"],
            datasets: [{
                label: '# of Helpings',
                data: [1, 0, 3, 2, 2, 1],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255,99,132,1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero:true
                    }
                }]
            }
        }
    });
    
    Date.prototype.timeNow = function () {
        return ((this.getHours() < 10)?"0":"") + this.getHours() +":"+ ((this.getMinutes() < 10)?"0":"") + this.getMinutes() +":"+ ((this.getSeconds() < 10)?"0":"") + this.getSeconds();
    }
    var datetime = new Date().timeNow();
    
});

var scaleSettings = {
    startValue: -50,
    endValue: 50,
    majorTick: {
        color: 'black',
        tickInterval: 10
    },
    minorTick: {
        visible: true,
        color: 'black',
        tickInterval: 1
    }
};

var rangesArray =  [{
    startValue: -50,
    endValue: 0,
    color: 'blue'
}, {
    startValue: 0,
    endValue: 50,
    color: 'red'
}];

$(function () {
    $("#gaugeContainer").dxCircularGauge({
        scale: scaleSettings,
        value: 24,
        valueIndicator: { color: 'red', spindleGapSize: 5 },
        subvalues: [19],
        subvalueIndicator: { color: 'green' },
        rangeContainer: {
            ranges: rangesArray,
            offset: 5
        }
    });

    $("#linearGaugeContainer").dxLinearGauge({
        geometry: {
            orientation: 'vertical'
        },
        scale: scaleSettings,
        value: 24,
        valueIndicator: { color: 'red', offset: 10 },
        subvalues: [19],
        subvalueIndicator: { color: 'green', offset: -5 },
        rangeContainer: {
            ranges: rangesArray,
            offset: -5
        }
    });

    $("#barGaugeContainer").dxBarGauge({
        startValue: -50,
        endValue: 50,
        label: {
            format: 'decimal',
            customizeText: function () {
                return this.valueText + '&deg;C'
            }
        },
        palette: 'Bright',
        tooltip: {
            enabled: true,
            format: 'decimal',
            customizeText: function () {
                var cityName;
                switch (this.index) {
                    case 0: cityName = 'London'
                        break;
                    case 1: cityName = 'Berlin'
                        break;
                    case 2: cityName = 'New York'
                        break;
                    case 3: cityName = 'Moscow'
                        break;
                    case 4: cityName = 'Bangkok'
                        break;
                    default: cityName = undefined
                        break;
                }
                return cityName + ': ' + this.valueText + '&deg;C';
            }
        }
    });
});

$(function(){
  $('.text-box').keyup(function(){
    if ($('.text-box').val() == '') {
      $('.circle-inner, .gauge-copy').css({
        'transform' : 'rotate(-45deg)' 
      });
      $('.gauge-copy').css({
        'transform' : 'translate(-50%, -50%) rotate(0deg)'
      });
      $('.percentage').text('0 %');
    } else if($('.text-box').val() >= 0 && $('.text-box').val() <= 2000) {
          var dVal = $(this).val();
          var newVal = dVal * 1.8 - 45;
          $('.circle-inner, .gauge-copy').css({
            'transform' : 'rotate(' + newVal + 'deg)' 
          });
          $('.gauge-copy').css({
            'transform' : 'translate(-50%, -50%) rotate(' + dVal * 1.8 + 'deg)'
          });
          $('.percentage').text(dVal + ' %');
    } else {
      $('.percentage').text('Invalid input value');
    }
  });
});