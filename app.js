window.onload = mobile_desktop;

function isMobileDevice() {
  console.log("ON LOAD WOKRED");
  return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
};

function mobile_desktop() {
  console.log("Before if");
  if (isMobileDevice()) {
    console.log("MOBILE");
    document.getElementsByClassName("main-col").style.width = "";
    document.getElementsByClassName("sidebar").style.width = "";
    document.getElementsByClassName("sidebar").style.float = "";
  } else {
    console.log("DESKTOP");
  }
}

