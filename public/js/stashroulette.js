window.StashRoulette = {
    loadModal: function( selector ){
        var $modal = $('.modal');
        $modal.empty(); 
        $modal.html( $( $(selector).html() ).clone() );
    },
    showModal: function(){
        $('.modal-background').addClass('open');
    },
    hideModal: function(){
        $('.modal-background').removeClass('open');
    }
};

$(function(){
    if( /signup=/.test( document.location.href ) ){
        StashRoulette.loadModal('.signup-modal-content');
        StashRoulette.showModal();
    }
    $('.modal-close').on('click', StashRoulette.hideModal);
});
