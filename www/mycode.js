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
    
    // trial code for SQLite from https://github.com/litehelpers/Cordova-sqlite-evcore-extbuild-free#sql-string-test
    db = window.sqlitePlugin.openDatabase({name: 'test.db', location: 'default'});
    db.transaction(function(tr) {
        tr.executeSql("SELECT upper('Test string') AS upperString", [], function(tr, rs) {
            alert('Got upperString result: ' + rs.rows.item(0).upperString);
        });
    }); 
    
}    
    
    function msg()
{
    setInterval(function(){ alert("Hello"); }, 3000);
     
}
