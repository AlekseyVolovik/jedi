$(document).ready(function() {
    $('.menu-link').on('click', function() {
        $('.menu-link').removeClass('active');
        $(this).addClass('active');
    });
});

$(".main-banner_slider").slick({
    arrows: true,
    adaptiveHeight: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000
});

jQuery(function($){
    const activeTab = $('.tab.active');
    if (activeTab.length) {
      const activeTabId = activeTab.data('tab');
      openTab(activeTabId);
    } 
    $('.tab').on('click', function() {
      const tabId = $(this).data('tab');
      openTab(tabId);
    });
    function openTab(tabId) {
        $('.tab-content').removeClass('active');    
        $('.tab').removeClass('active');
        $(`.tab[data-tab="${tabId}"]`).addClass('active');
        $(`#${tabId}`).addClass('active');
    }
});

jQuery(function($){
    $('.header-burger_item').on('click', function() {
        $('.header-navigation').toggleClass('active');
    });
});

jQuery(function($){
    $(document).ready(function() {
        function validateEmail(email) {
            let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
            return emailPattern.test(email);
        }
        function validateName(name) {
            let namePattern = /^[a-zA-Zа-яА-ЯёЁ]+$/;
            return namePattern.test(name);
        }
        $('form').on('submit', function(event) {
            event.preventDefault();
           
            let emailField = $('.email');
            let emailValue = emailField.val();
            let nameField = $('.name');
            let nameValue = nameField.val();
            let isValid = true;

            if (!validateEmail(emailValue)) {
                emailField.addClass('invalid');
                isValid = false;
            } else {
                emailField.removeClass('invalid');
            }
            if (!validateName(nameValue)) {
                nameField.addClass('invalid');
                isValid = false;
            } else {
                nameField.removeClass('invalid');
            }      
        });
    });
});