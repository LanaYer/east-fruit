var min_id = 0;

$( document ).ready(function() {

    $('.east-header-hamburger').on('click',function () {

        $( '.east-menu' ).slideToggle( "slow", function() {

        });
    });

    $('.east-header-username').on('click',function () {

        $( '.east-header-personal_menu' ).slideToggle( "slow", function() {

        });
    });



    //---------------------------------------------------------------------------------------

    /* 4. Calendar */
    $('#calendar').datepicker({
        dateFormat : "yy-mm-dd",
        minDate: new Date($('#hiddendelivdate').val()),
        monthNames : ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
        dayNamesMin : ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'],
    });
});

//---------------------------------------------------------------

	
