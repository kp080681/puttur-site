(function(){
  var URL_ = 'https://script.google.com/macros/s/AKfycbyHO--Fo_Av8f8h7m4N6_OzR28x_pHTwAuYT-SIwWJw-Enp74COt7gQehj1RpCLk0Lbog/exec';
  document.addEventListener('submit', function(e){
    var f = e.target;
    if (!f.classList || !f.classList.contains('elementor-form')) return;
    e.preventDefault(); e.stopPropagation(); e.stopImmediatePropagation();
    if (!f.reportValidity()) return;
    var btn = f.querySelector('button[type=submit]'), label = btn ? btn.innerHTML : '';
    if (btn) { btn.disabled = true; btn.innerHTML = '<span class="elementor-button-text">Sending...</span>'; }
    var msg = f.querySelector('.pt-form-msg');
    if (!msg) { msg = document.createElement('p'); msg.className = 'pt-form-msg'; msg.setAttribute('role','alert'); f.appendChild(msg); }
    msg.textContent = '';
    fetch(URL_, {method:'POST', mode:'no-cors', body: new URLSearchParams(new FormData(f))})
      .then(function(){ window.location.href = '/thank-you-page/'; })
      .catch(function(){
        if (btn) { btn.disabled = false; btn.innerHTML = label; }
        msg.textContent = 'Your message could not be sent. Please call us on 8296296888.';
      });
  }, true);
})();
