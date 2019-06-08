window.onload = mobile_desktop;

function isMobileDevice() {
  return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
};

function mobile_desktop() {
  if (isMobileDevice()) {
    document.getElementsByClassName("main-col").style.width = "100%";
    document.getElementsByClassName("sidebar").style.width = "100%";
    document.getElementsByClassName("sidebar").style.float = "left";
  }
}

