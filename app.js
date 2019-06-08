window.onload = mobile_desktop;

function isMobileDevice() {
  return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
};

function mobile_desktop() {
  if (isMobileDevice()) {
    window.alert("MOBILE!")
    document.getElementsByClassName("main-col").style.width = "";
    document.getElementsByClassName("sidebar").style.width = "";
    document.getElementsByClassName("sidebar").style.float = "";
  }
}

