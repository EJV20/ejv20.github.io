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
  let color;
  if (localStorage.getItem('cs')) {
    color = localStorage.getItem('cs');
    update_cs(color);
  } else {
    localStorage.setItem('cs', 'pn');
  }
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

function update_cs(c) {
  let root = document.documentElement;

  switch (c) {
    case "pn":
      localStorage.setItem('cs', 'pn');
      root.style.setProperty("--bg-color-2", "#003594");
      root.style.setProperty("--accent-color", "#FFB81C");
      root.style.setProperty("--showcase-picture", "url('img/newpittlogo.jpg')");
      break;
    case "po":
      localStorage.setItem('cs', 'po');
      root.style.setProperty("--bg-color-2", "#1C2957");
      root.style.setProperty("--accent-color", "#CDB87D");
      root.style.setProperty("--showcase-picture", "url('img/pittoldcathy.jpg')");
      break;
    case "st":
      root.style.setProperty("--bg-color-2", "#000000");
      root.style.setProperty("--accent-color", "#FFB612");
      root.style.setProperty("--showcase-picture", "url('img/juju.jpg')");
      localStorage.setItem('cs', 'st');
      break;
    case "pe":
      root.style.setProperty("--bg-color-2", "#000000");
      root.style.setProperty("--accent-color", "#FCB514");
      root.style.setProperty("--showcase-picture", "url('img/pens2.jpg')");
      localStorage.setItem('cs', 'pe');
      break;
    case "pi":
      root.style.setProperty("--bg-color-2", "#000000");
      root.style.setProperty("--accent-color", "#FDB827");
      root.style.setProperty("--showcase-picture", "url('img/pirates.jpg')");
      localStorage.setItem('cs', 'pi');
      break;
    case "xb":
      root.style.setProperty("--bg-color-2", "#107c10");
      root.style.setProperty("--accent-color", "#000000");
      root.style.setProperty("--showcase-picture", "url('img/xbox_wallpaper2.jpg')");
      root.style.setProperty("--showcase-font", "#107c10");
      localStorage.setItem('cs', 'xb');
      break;
    default:
      console.log("DEFAULT");
      console.log(e);
      console.log(typeof(e));
      break;
  }
}

function theme_change() {
  let e = document.getElementById('ddm');
  let nc = e.options[e.selectedIndex].value;
  update_cs(nc);
}
