window.onload = mobile_desktop;

function isMobileDevice() {
  console.log("ON LOAD WOKRED");
  return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
};

function mobile_desktop() {
  let root = document.documentElement;
  console.log("Before if");
  if (isMobileDevice()) {
    console.log("MOBILE");
    document.getElementsByClassName("main-col").style.width = "";
    document.getElementsByClassName("sidebar").style.width = "";
    document.getElementsByClassName("sidebar").style.float = "";
    root.style.setProperty("--bg-color-2", "#003594");
    root.style.setProperty("--accent-color", "#FFB81C");
  } else {
    console.log("Desktop Colors");
    root.style.setProperty("--bg-color-2", "#1C2957");
    root.style.setProperty("--accent-color", "#CDB87D");
  }
}

