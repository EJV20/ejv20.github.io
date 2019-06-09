window.onload = mobile_desktop;

function isMobileDevice() {
  console.log("ON LOAD WOKRED");
  return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
};

function mobile_desktop() {
  let root = document.documentElement;
  console.log("Before if");
  if (isMobileDevice()) {
    console.log("mobile by id");
    let art = document.getElementById('main-col');
    let asi = document.getElementById('sidebar');
    art.style.width = '100%';
    asi.style.width = '100%';
    asi.style.float = 'left';
  }
}

