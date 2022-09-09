
$('input[type="range"]').rangeslider({

    polyfill: false,

    // Default CSS classes
    rangeClass: 'rangeslider',
    disabledClass: 'rangeslider--disabled',
    horizontalClass: 'rangeslider--horizontal',
    verticalClass: 'rangeslider--vertical',
    fillClass: 'rangeslider__fill',
    handleClass: 'rangeslider__handle',

    // Callback function
    onInit: function() {},

    // Callback function
    onSlide: function(position, value) {},

    // Callback function
    onSlideEnd: function(position, value) {}
});


const range = document.getElementById('relationship-status-slider');
const toggle = document.getElementById('switch');
const pageViewsElement = document.getElementsByClassName('viewAmount');
const priceElement = document.getElementsByClassName('cashAmount');
const toggleElement = document.getElementById('switch');
const cashAmount = document.getElementsByClassName('cashAmount');
const subPeriod = document.getElementsByClassName('pageviews-period');

let viewAmount = 
    $(pageViewsElement).text('10k');
let priceAmount = 
    $(priceElement).text('8');

let subTime =
    $(subPeriod).text('/ month');


let toggleEvent = false;
let rangeValue = range.value;

// $(range, toggleElement).on('input change', function (priceChange) {

    
    
//     let rangeValue = ($(this).val());

//     if (rangeValue == 0) {
//         viewAmount = $(pageViewsElement).text('10k');
//         priceAmount = $(priceElement).text(8);
//     } else if (rangeValue == 25) {
//         viewAmount = $(pageViewsElement).text('50k');
//         priceAmount = $(priceElement).text(12);
//     } else if (rangeValue == 50) {
//         viewAmount = $(pageViewsElement).text('100k');
//         priceAmount = $(priceElement).text(16);
//     } else if (rangeValue == 75) {
//         viewAmount = $(pageViewsElement).text('500k');
//         priceAmount = $(priceElement).text(24);
//     } else {
//         viewAmount = $(pageViewsElement).text('1m');
//         priceAmount = $(priceElement).text(36);
//     }
//     let priceYear = $(priceElement).text() * 9;

//     if (toggleElement.checked) {
//         priceAmount = $(priceElement).text(priceYear);
//         subTime = $(subPeriod).text('/ year');
//     } else {
//         priceAmount = $(priceElement).text();
//         subTime = $(subPeriod).text('/ month');
//     }
// });
 


function priceChange() {
    let rangeValue = ($(range).val());

    if (rangeValue == 0) {
        viewAmount = $(pageViewsElement).text('10k');
        priceAmount = $(priceElement).text(8);
    } else if (rangeValue == 25) {
        viewAmount = $(pageViewsElement).text('50k');
        priceAmount = $(priceElement).text(12);
    } else if (rangeValue == 50) {
        viewAmount = $(pageViewsElement).text('100k');
        priceAmount = $(priceElement).text(16);
    } else if (rangeValue == 75) {
        viewAmount = $(pageViewsElement).text('500k');
        priceAmount = $(priceElement).text(24);
    } else {
        viewAmount = $(pageViewsElement).text('1m');
        priceAmount = $(priceElement).text(36);
    }

    let priceYearDiscounted = $(priceElement).text() * 9;
    if (toggleElement.checked) {
        priceAmount = $(priceElement).text(priceYearDiscounted);
        subTime = $(subPeriod).text('/ year');
    } else {
        priceAmount = $(priceElement).text();
        subTime = $(subPeriod).text('/ month');
    }
    
}

$(toggleElement).on('change', priceChange);
$(range).on('change input', priceChange);

 



//
// if (rangeValue == 0 && checked) {
//         viewAmount = $(pageViewsElement).text('10k');
//         priceAmount = $(priceElement).text(8*9);
//         subTime = $(subPeriod).text('/ year');
//     } else if (rangeValue == 25) {
//         viewAmount = $(pageViewsElement).text('50k');
//         priceAmount = $(priceElement).text(12*9);
//         subTime = $(subPeriod).text('/ year');
//     } else if (rangeValue == 50) {
//         viewAmount = $(pageViewsElement).text('100k');
//         priceAmount = $(priceElement).text(16*9);
//         subTime = $(subPeriod).text('/ year');
//     } else if (rangeValue == 75) {
//         viewAmount = $(pageViewsElement).text('500k');
//         priceAmount = $(priceElement).text(24*9);
//         subTime = $(subPeriod).text('/ year');
//     } else {
//         viewAmount = $(pageViewsElement).text('1m');
//         priceAmount = $(priceElement).text(36);
//         subTime = $(subPeriod).text('/ year');
// }
//

// $(toggleElement).on('change', function (toggleCheck) {
    
//     if (toggleElement.checked == true) {
//         let valueC = cashAmount.innerHTML;
//         console.log(valueC);
//     }
// });


const prices = [
    {
        viewsAmount: '10k',
        price: 8
    },
    {
        viewsAmount: '50k',
        price: 12
    },
    {
        viewsAmount: '100k',
        price: 16
    },
    {
        viewsAmount: '500k',
        price: 24
    },
    {
        viewsAmount: '1m',
        price: 36
    }
]