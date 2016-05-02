var url = window.location.toString();
if (url.indexOf("#") != -1)
    localStorage.init = url.split("#")[1];
var map = null;
var bounds = new google.maps.LatLngBounds();
var geocoder;
var markers = [];
var directionsDisplay;
var directionsService = new google.maps.DirectionsService();

function initmap() {
    geocoder = new google.maps.Geocoder();
    directionsDisplay = new google.maps.DirectionsRenderer();

    var myOptions = {
        zoom: 16,
        center: new google.maps.LatLng(24.962, 121.218),
        mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    map = new google.maps.Map(document.getElementById("map"), myOptions);
    var input = document.getElementById('start');
    var input2 = document.getElementById('end');
    var searchBox = new google.maps.places.SearchBox(input);
    var searchBox = new google.maps.places.SearchBox(input2);
    directionsDisplay.setMap(map);
    directionsDisplay.setPanel(document.getElementById("direction-panel"));

    var control = document.getElementById("control").style.display = "block";

}

function calcRoute() {
    document.getElementById("direction-panel").innerHTML = '';
    var start = document.getElementById('start').value;
    var end = document.getElementById('end').value;
    if (start != '' & end != '') {
        if (markers[0] != '') {
            DeleteMarkers();
        }
        var request = {
            origin: start,
            destination: end,
            travelMode: google.maps.DirectionsTravelMode.DRIVING
        };
        directionsService.route(request, function(response, status) {
            if (status == google.maps.DirectionsStatus.OK) {
                directionsDisplay.setDirections(response);
            }
        });
    } else if (start) {
        geocoder.geocode({
            'address': start
        }, function(results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
                var image = {
                    url: 'favicon.ico',
                    size: new google.maps.Size(40, 40),
                    origin: new google.maps.Point(0, 0),
                    anchor: new google.maps.Point(0, 40),
                    scaledSize: new google.maps.Size(40, 40)
                };
                if (markers[0] != '') {
                    directionsDisplay.set('directions', null);
                    DeleteMarkers();
                }
                map.setCenter(results[0].geometry.location);
                map.setZoom(18);
                var marker = new google.maps.Marker({
                    map: map,
                    icon: image,
                    position: results[0].geometry.location
                });
                markers.push(marker);
                attachSecretMessage(marker, start);
                map.fitBounds(results[0].geometry.location);
            } else {
                alert('Geocode was not successful for the following reason: ' + status);
            }
        });
    }
    localStorage.map = '{"start":"' + start + '","end":"' + end + '"}';
}

function DeleteMarkers() {
    for (var i = 0; i < markers.length; i++) {
        markers[i].setMap(null);
    }
    markers = [];
};

function attachSecretMessage(marker, markerContent) {
    var infowindow = new google.maps.InfoWindow({
        content: markerContent
    });
    infowindow.open(marker.get('map'), marker);
}

function startmap() {
    if (localStorage.map) {
        var mapsave = JSON.parse(localStorage.map);
        document.getElementById('start').value = mapsave.start;
        document.getElementById('end').value = mapsave.end;
        calcRoute();
    }
}

function removeid(id) {
    var _items = document.getElementById(id);
    if (_items != null)
        _items.parentNode.removeChild(_items);
}
window.onload = function() {
    initmap();
    startmap();
    (function() {
        if (!('webkitSpeechRecognition' in window)) {
            removeid('startvoice');
            removeid('endvoice');
        } else {
            var patience = 10;

            function capitalize(str) {
                return str.length ? str[0].toUpperCase() + str.slice(1) : str;
            }
            var speechInputWrappers = document.getElementsByClassName('google-map');
            [].forEach.call(speechInputWrappers, function(x) {
                var StartInput = x.querySelector('#start');
                var StartMic = x.querySelector('#startvoice');
                var EndInput = x.querySelector('#end');
                var EndMic = x.querySelector('#endvoice');
                // setup recognition
                var finalTranscript = '';
                var recognizing = false;
                var timeout;
                var recognition = new webkitSpeechRecognition();
                recognition.continuous = false;
                recognition.lang = 'zh-TW';

                function restartTimer() {
                    timeout = setTimeout(function() {
                        recognition.stop();
                    }, patience * 1000);
                }

                recognition.onstart = function() {
                    if (recognition.c == 1) {
                        recognizing = 2;
                        StartMic.innerHTML = "<i class='fa fa-microphone-slash'></i>";
                    } else {
                        recognizing = 3;
                        EndMic.innerHTML = "<i class='fa fa-microphone-slash'></i>";
                    }
                    restartTimer();
                };

                recognition.onend = function() {
                    recognizing = false;
                    clearTimeout(timeout);
                    calcRoute();
                    EndMic.innerHTML = "<i class='fa fa-microphone'></i>";
                    StartMic.innerHTML = "<i class='fa fa-microphone'></i>";
                };

                recognition.onresult = function(event) {
                    clearTimeout(timeout);
                    for (var i = event.resultIndex; i < event.results.length; ++i) {
                        if (event.results[i].isFinal) {
                            finalTranscript += event.results[i][0].transcript;
                        }
                    }
                    finalTranscript = capitalize(finalTranscript);
                    if (recognizing == 2)
                        StartInput.value = finalTranscript;
                    else if (recognizing == 3)
                        EndInput.value = finalTranscript;
                    restartTimer();
                };

                StartMic.addEventListener('click', function(event) {
                    clearTimeout(timeout);
                    recognition.c = 1;
                    if (recognizing == 2) {
                        recognition.stop();
                        return;
                    } else if (recognizing == 3) {
                        alert('語音偵測中請稍等');
                    } else {
                        event.preventDefault();
                        StartInput.value = finalTranscript = '';
                        recognition.start();
                    }
                }, false);
                EndMic.addEventListener('click', function(event) {
                    recognition.c = 2;
                    if (recognizing == 3) {
                        recognition.stop();
                        return;
                    } else if (recognizing == 2) {
                        alert('語音偵測中請稍等');
                    } else {
                        event.preventDefault();
                        EndInput.value = finalTranscript = '';
                        recognition.start();
                    }
                }, false);
            });
        }
    })();
}

function mapenter(e) {
    if (e.keyCode == 13) {
        calcRoute();
    }
    return false;
}
