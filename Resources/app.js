
// Whip up a basic UI ...
Titanium.UI.setBackgroundColor('#fff');
var nav = Titanium.UI.createTabGroup();


var window = Ti.UI.createWindow({ title: 'Web View Test', tabBarHidden: true });
var mainTab = Titanium.UI.createTab({
    icon: 'KS_nav_views.png',
    window: window
});

// Craft a web view ...
var runTests = true;
var web = Ti.UI.createWebView({ height: '100%', width: '100%', backgroundColor: '#d0e2ff', url: 'http://iphone.zappos.com' });
web.addEventListener('load', function(e) {
  if(runTests) {
    alert('Page loaded, running tests ...');
    alert('Title: ' + web.evalJS('document.title'));
    alert('Cookies: ' + web.evalJS("document.cookie"));
    alert('getElementById: ' + web.evalJS('document.getElementById("view-cart").innerHTML;'));
    alert('getElementsByTagName: ' + web.evalJS("document.getElementsByTagName('head')[0].innerHTML;"));
    alert('Update innerHTML: ' + web.evalJS('document.getElementById("view-cart").innerHTML = "UPDATED!!!";'));
    alert('Update form field value: ' + web.evalJS('document.getElementsByName("term")[0].value = "MAGYAR MOSTMÁ!";'));
    runTests = false;
  };
});
window.add(web);

nav.addTab(mainTab);
nav.open();

