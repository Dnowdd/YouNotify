function callNotification(location, type, message, duration, icon, google){
    var timestamp = Date.now() + Math.random(1,1000000);

    var google_class = 'material-symbols-outlined';

    var statusDiv = document.createElement('div');
    statusDiv.className = 'status status-'+type+' '+location;
    statusDiv.setAttribute('id', 'statusDiv-'+timestamp);

    if(google == false){
        var iconDiv = document.createElement('div');
        iconDiv.className = 'icon';
    }else{
        var iconDiv = document.createElement('span');
        iconDiv.className = 'icon icon-google '+google_class;  
    }
    iconDiv.innerHTML = icon;
    statusDiv.appendChild(iconDiv);

    var separateDiv = document.createElement('div');
    separateDiv.className = 'separate';
    statusDiv.appendChild(separateDiv);

    var messageDiv = document.createElement('div');
    messageDiv.className = 'message';
    messageDiv.innerHTML = message;
    statusDiv.appendChild(messageDiv);

    if(google == false){
        var closeDiv = document.createElement('div');
        closeDiv.className = 'close';
        closeDiv.innerHTML = 'X';
    }else{
        var closeDiv = document.createElement('span');
        closeDiv.className = 'close '+google_class
        closeDiv.innerHTML = 'close';
    }
    closeDiv.setAttribute('onclick', 'closeNotification("'+timestamp+'",1)');
    statusDiv.appendChild(closeDiv);

    document.body.appendChild(statusDiv);
    if(duration !== 0){
        closeNotification(timestamp,duration)
    }
}
function closeNotification(timestamp,time){
    setTimeout(function(){
        var statusDiv = document.getElementById('statusDiv-'+timestamp);
        statusDiv.className = statusDiv.className+' destroyStatus';
        setTimeout(function(){
            statusDiv.className = statusDiv.className+' destroyStatus2';
        }, 300 /* same time in css - line 132 */);
    }, time);
}