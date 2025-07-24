$(document).ready(function(){
  $('#contactForm').on('submit', function(e){
    e.preventDefault();
    let valid = true;
    $('#formError').text('');

    $('input, textarea').each(function(){
      if (!this.checkValidity()) {
        valid = false;
        $(this).addClass('invalid');
      } else {
        $(this).removeClass('invalid');
      }
    });

    if (!valid) {
      $('#formError').text('Please correct the highlighted fields.');
      return;
    }

    alert('Thank you for your message, ' + $('#name').val() + '!');
    this.reset();
  });

  // Cookie banner
  if (!localStorage.getItem('cookiesAccepted')) {
    $('#cookieAccept').show().on('click', function(){
      localStorage.setItem('cookiesAccepted', 'yes');
      $(this).hide();
    });
  } else {
    $('#cookieAccept').hide();
  }
});
