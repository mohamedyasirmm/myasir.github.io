(function(){
    //Show Modal
   $('#open-modal').on('show.bs.modal', function (e) {
     console.log('show');
     $('.container').addClass('modalBlur');
   })
   
   //Remove modal
   $('#open-modal').on('hide.bs.modal', function (e) {
      console.log('hide');
     $('.container').removeClass('modalBlur');
   })
 })();
 (function(){
  //Show Modal
 $('#open-modal2').on('show.bs.modal', function (e) {
   console.log('show');
   $('.container').addClass('modalBlur');
 })
 
 //Remove modal
 $('#open-modal2').on('hide.bs.modal', function (e) {
    console.log('hide');
   $('.container').removeClass('modalBlur');
 })
})();

(function(){
  //Show Modal
 $('#open-modal3').on('show.bs.modal', function (e) {
   console.log('show');
   $('.container').addClass('modalBlur');
 })
 
 //Remove modal
 $('#open-modal3').on('hide.bs.modal', function (e) {
    console.log('hide');
   $('.container').removeClass('modalBlur');
 })
})();

(function(){
  //Show Modal
 $('#open-modal4').on('show.bs.modal', function (e) {
   console.log('show');
   $('.container').addClass('modalBlur');
 })
 
 //Remove modal
 $('#open-modal4').on('hide.bs.modal', function (e) {
    console.log('hide');
   $('.container').removeClass('modalBlur');
 })
})();
(function(){
  //Show Modal
 $('#open-modal5').on('show.bs.modal', function (e) {
   console.log('show');
   $('.container').addClass('modalBlur');
 })
 
 //Remove modal
 $('#open-modal5').on('hide.bs.modal', function (e) {
    console.log('hide');
   $('.container').removeClass('modalBlur');
 })
})();
(function(){
  //Show Modal
 $('#open-modal6').on('show.bs.modal', function (e) {
   console.log('show');
   $('.container').addClass('modalBlur');
 })
 
 //Remove modal
 $('#open-modal6').on('hide.bs.modal', function (e) {
    console.log('hide');
   $('.container').removeClass('modalBlur');
 })
})();
 $('#open-modal7').on('show.bs.modal', function (e) {
   console.log('show');
   $('.container').addClass('modalBlur');
 })
 
 //Remove modal
 $('#open-modal7').on('hide.bs.modal', function (e) {
    console.log('hide');
   $('.container').removeClass('modalBlur');
 })
})();

 
 //based on from https://taitems.github.io/UX-Lab/ModalBlur/index.html

 $(document).ready(function(){
  $('.modal-dialog').each(function(){
          var src = $(this).find('video').attr('src');

      $('.bts').on('click', function(){

          $(this).find('video').attr('src', '');
          $(this).find('video').attr('src', src);

      });
  });
});

