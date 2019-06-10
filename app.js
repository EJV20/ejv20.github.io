window.onload = mobile_desktop;

function isMobileDevice() {
  return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
};

function isIndex() {
  let pn = window.location.pathname;
  let fs = pn.indexOf("index.html");
  if ( fs === -1 || pn === "http://ejv20.github.io")
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

function theme_change() {
  let e = document.getElementById('ddm');
  let nc = e.options[e.selectedIndex].value;
  let root = document.documentElement;

  switch (nc) {
    case "pn":
      root.style.setProperty("--bg-color-2", "#003594");
      root.style.setProperty("--accent-color", "#FFB81C");
      break;
    case "po":
      console.log("PITT OLD");
      root.style.setProperty("--bg-color-2", "#1C2957");
      root.style.setProperty("--accent-color", "#CDB87D");
      break;
    case "st":
      root.style.setProperty("--bg-color-2", "#101820");
      root.style.setProperty("--accent-color", "#FFB612");
      break;
    case "pe":
      root.style.setProperty("--bg-color-2", "#101820");
      root.style.setProperty("--accent-color", "#FFB612");
      break;
    case "pi":
      root.style.setProperty("--bg-color-2", "#101820");
      root.style.setProperty("--accent-color", "#FFB612");
      break;
    case "xb":
      root.style.setProperty("--bg-color-2", "#107c10");
      root.style.setProperty("--accent-color", "#000000");
      break;
    default:
      console.log("DEFAULT");
      console.log(e);
      console.log(typeof(e));
      break;
  }
}

