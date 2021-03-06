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
//= require toastr
//= require bootstrap-datepicker
//= require social-share-button
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
    
    toastr.options = {
      "closeButton": true,
      "debug": false,
      "newestOnTop": false,
      "progressBar": false,
      "positionClass": "toast-top-right",
      "preventDuplicates": false,
      "onclick": null,
      "showDuration": "300",
      "hideDuration": "1000",
      "timeOut": "1500",
      "extendedTimeOut": "1000",
      "showEasing": "swing",
      "hideEasing": "linear",
      "showMethod": "fadeIn",
      "hideMethod": "fadeOut"
    }
    
    showSpinner = (elem) => {
        elem.innerHTML = `
            <div class="spinner-grow spinner-grow-sm text-light" role="status">
                <span class="sr-only">Loading...</span>
            </div>
        `;
    }
    
    showAlert = (type, text) => {
        let alertBar = document.querySelector('.alert');
        let msg = document.querySelector('.alert span');
        
        alertBar.classList.add(`alert-${type}`);
        msg.innerHTML = text;
        alertBar.style.display = 'block';
    }
});