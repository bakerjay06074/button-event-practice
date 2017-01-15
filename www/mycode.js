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
	 writeFile(fileEntry);    
      }, errorCallback);
   }
   function errorCallback(error) {
      alert("ERROR: " + error.code)
   }
  
	//alert("clicked create file");
}    

function writeFile(fileEntry, dataObj) {
    // Create a FileWriter object for our FileEntry (log.txt). 
    fileEntry.createWriter(function (fileWriter) {
 
        fileWriter.onwriteend = function() {
            console.log("Successful file write...");
            readFile(fileEntry);
        };
 
        fileWriter.onerror = function (e) {
            console.log("Failed file write: " + e.toString());
        };
 
        // If data object is not passed in, 
        // create a new Blob instead. 
        if (!dataObj) {
            dataObj = new Blob(['some file data'], { type: 'text/plain' });
        }
 
        fileWriter.write(dataObj);
    });
}
function readFile(fileEntry) {
 
    fileEntry.file(function (file) {
        var reader = new FileReader();
 
        reader.onloadend = function() {
            console.log("Successful file read: " + this.result);
            displayFileData(fileEntry.fullPath + ": " + this.result);
        };
 
        reader.readAsText(file);
 
    }, onErrorReadFile);
}
