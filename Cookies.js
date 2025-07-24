window.onload = function() {
  if (!localStorage.getItem("cookiesAccepted")) {
    let banner = document.createElement("div");
    banner.innerHTML = `
      <div style="position: fixed; bottom: 0; width: 100%; background: #eee; padding: 1em; text-align: center; z-index: 1000;">
        We use cookies to improve your experience. 
        <button onclick="acceptCookies()">Accept</button>
      </div>
    `;
    document.body.appendChild(banner);
  }
};

function acceptCookies() {
  localStorage.setItem("cookiesAccepted", "true");
  document.querySelector("div").remove();
}
