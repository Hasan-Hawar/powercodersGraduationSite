(function() {
    "use strict";

    let messages = [
        "Willkommen",
        "أهلاً بكم",
        "lkdsfmgblk"
    ];





    let msgContainer = document.querySelector("header h3");
    let counter = 0;


    setInterval(animateMessage, 1500);

    function animateMessage() {
        msgContainer.innerHTML = messages[counter];
        counter++;
        if (counter >= messages.length) {
            counter = 0;
        }
    }

    /*   -----------   check if secition is in viewport and then change the url in the adress bar*/
    let sections = decumnet.querySelectorAll("section" + window.location.hash);
    sections.forEach(function(e1) {
        let url = "#" + e1.id;
        if (lementInViewport(el, 0)) {
            history.pushState('', '', url);
        }
    });

})();

var map;

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 47.3739089, lng: 8.5328035 },
        zoom: 17
    });
    var marker = new google.maps.Marker({
        position: { lat: 47.3739089, lng: 8.5328035 },
        map: map
    });
}


// var form = document.querySelector("form"),
//     xhr = new XMLHttpRequest(),
//     url = "https://script.google.com/macros/s/AKfycbyE0XbL82HmzV2SJawS34Oj2UVkm2h57GXaNgjX-LI_3qqyyGY/exec";

// var params = [].filter.call(form.elements, function(el) {
//         return (el.type != 'checkbox' && el.type != 'radio') || el.checked;
//     }).filter(function(el) { return !!el.name; }) //Nameless elements die.
//     .filter(function(el) { return !el.disabled; }) //Disabled elements die.
//     .map(function(el) {
//         return encodeURIComponent(el.name) + '=' + encodeURIComponent(el.value);
//     }).join('&');
// console.log(params);

// xhr.open("GET", url, true);
// xhr.setRequestHeader("Content-type", "application/json");

// xhr.onreadystatechange = function() { //Call a function when the state changes.
//     if (xhr.readyState === 4 && xhr.status === 200) { //submission in order 

//     }
// }
// xhr.send(params);

// document.querySelectorAll("form").forEach(function(e1) {
//     e1.setAttribute("noValidate", true);
//     e1.oninvalid = function(e) {
//         e1.preventDefault();
//     }

//     e1.querySelectorAll("input").forEach(function(input) {
//         input.addEventListener('blur', function(event) {
//             var error = hasError(event.target);
//             if (error) {
//                 showError(event.target, error);
//                 return;
//             }
//             removeError(event.target);
//         }, true);
//     });


//     function hasError() {

//     }

//     function showError() {
//         field.classList.add('error');
//         var id = field.id || field.name;
//         if (!id) return;

//         var message = field.form.querySelector('.error-message#error-for-' + id);
//         if (!message) {
//             message = document.createElement('small');
//             message.className = 'error-message';
//             message.id = 'error-for-' + id;
//             field.nextSibling.insertAdjacentElement('beforeend', message);
//         }

//         field.setAttribute('aria-describedby', 'error-for-' + id);
//         message.innerHTML = error;
//         message.style.display = 'inline';
//         message.style.visibility = 'visible';
//     };
// }

// function removeError() {

// }

// e1.addEventListener("submit", function() {
//     e1.preventDefault();
//     sendAjaxRequest(e1);
// }, true);
// });
// }