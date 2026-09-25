(function(){
  var footer=document.querySelector('.footer');
  if(footer&&!footer.querySelector('.footer-brand')){
    footer.outerHTML=[
      '<footer class="footer">',
      '<div class="footer-brand"><img src="images/ffp-logo-2026.png" alt="Fun Fetal Photos — 3D-4D Ultrasounds"><p>Precious moments, beautifully seen.</p></div>',
      '<div><span class="footer-label">Explore</span><a href="about.html">Our Story</a><a href="prices.html">Pricing</a><a href="gallery.html">Gallery</a><a href="map.html">Visit</a></div>',
      '<div><span class="footer-label">Hours</span><p>Mon–Fri · 11am–7pm<br>Saturday · 9am–5pm<br>By appointment only</p></div>',
      '<div><span class="footer-label">Follow</span><a href="https://www.facebook.com/funfetalphotosva">Facebook</a><a href="https://www.instagram.com/funfetalphotos/">Instagram</a></div>',
      '<small>© 2007–2026 Fun Fetal Photos. All rights reserved.</small>',
      '</footer>'
    ].join('');
  }

  var toggle=document.querySelector('.nav-toggle')||document.querySelector('#header__icon');
  var menu=document.querySelector('.menu');
  if(!toggle||!menu)return;
  toggle.addEventListener('click',function(event){
    event.preventDefault();
    var open=menu.classList.toggle('open');
    toggle.setAttribute('aria-expanded',String(open));
  });
  menu.addEventListener('click',function(){menu.classList.remove('open');toggle.setAttribute('aria-expanded','false');});
})();
