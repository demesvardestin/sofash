// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require tinymce
//= require bootstrap-datepicker
//= require_tree .

console.log('DripRent has suspended all operations, effective September 1st.');

toggleBox = (id) => {
    $(`#${id}`).toggleClass("active");
};

$(document).on("turbolinks:load", function() {
    // let goodbyeBtn = document.querySelector('#goodbye-btn');
    // let modalOpen = document.querySelector('body');
    // let searchBox = document.querySelector('#search-results-box');
    
    // goodbyeBtn.click();
    
    // modalOpen.addEventListener('click', e => {
    //     goodbyeBtn.click();
    // });
    
    function hideTimes() {
        $('#times').hide();
    }
    
    function chooseTime(elem) {
        var hour = elem.id.split("-")[1];
        $('#chosen-time').text(hour);
        updateReservationParams();
        
        hideTimes();
    }
});