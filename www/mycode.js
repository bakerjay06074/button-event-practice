//declare database
var db = null;

function init() {
    // the next line makes it impossible to see Contacts on the HTC Evo since it
    // doesn't have a scroll button
    // document.addEventListener("touchmove", preventBehavior, false);
    document.addEventListener("deviceready", onDeviceReady, false);
    //setInterval(function(){ alert("Hello, Jay"); }, 3000);
}
function onDeviceReady() {
    window.alert("In onDeviceReady");
    
}

function createFile() {
  var type = LocalFileSystem.PERSISTENT;
   var size = 0;
   window.requestFileSystem(type, size, successCallback, errorCallback)
   function successCallback(fs) {
      fs.root.getFile('log.txt', {create: true, exclusive: true}, function(fileEntry) {
         alert('File creation successfull!');
      }, errorCallback);
   }
   function errorCallback(error) {
      alert("ERROR: " + error.code)
   }
  
	//alert("clicked create file");
}    
