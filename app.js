window.onload = mobile_desktop;

function isMobileDevice() {
  return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
};

function isIndex() {
  let pn = window.location.pathname;
  let fs = pn.indexOf("index.html");
  if ( fs === -1)
    return 0;
  else
    return 1;
}

function mobile_desktop() {
  let root = document.documentElement;
  if (isMobileDevice()) {
    if (isIndex()) {
      root.style.setProperty("--box-width", "100%");
    } else {
      let art = document.getElementById('main-col');
      let asi = document.getElementById('sidebar');
      art.style.width = '100%';
      asi.style.width = '100%';
      asi.style.float = 'left';
    }
  }
}

