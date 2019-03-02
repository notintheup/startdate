// Initialize Firebase
var config = {
    apiKey: "AIzaSyDWb-EH6zVn-sxlNRCA7lol1A93zOaXabM",
    authDomain: "employeedb-aca18.firebaseapp.com",
    databaseURL: "https://employeedb-aca18.firebaseio.com",
    projectId: "employeedb-aca18",
    storageBucket: "",
    messagingSenderId: "229696284539"
};
firebase.initializeApp(config);

var database = firebase.database();
var name = "";
var role = "";
var startDate = "";
var monthlyRate = "";

$("#submit").on("click", function (event) {
    // Don’t refresh the page
    event.preventDefault();

    name = $("#employee-name").val().trim()
    role =  $("#role").val().trim()
    startDate =  $("#start-date").val().trim()
    monthlyRate = $("#monthly-rate").val().trim()


    // Code for handling the push
    database.ref().push({
        name: name,
        role: role,
        startDate: startDate,
        monthlyRate: monthlyRate,
        dateAdded: firebase.database.ServerValue.TIMESTAMP
    });

    console.log(name.val());

});

// Firebase watcher .on("child_added"
database.ref().on("value", function (snapshot) {
    // storing the snapshot.val() in a variable for convenience
    var childAdd = snapshot.val();

    // Console.loging the last user's data
    console.log(childAdd.name);
    console.log(childAdd.role);
    console.log(childAdd.startDate);
    console.log(childAdd.monthlyRate);

    // Change the HTML to reflect
    $("#employee-name").text(childAdd.name);
    $("#role").text(childAdd.role);
    $("#start-date").text(childAdd.startDate);
    $("#monthly-rate").text(childAdd.monthlyRate);


});

database.ref().on("child_added", function (snapshot) {
    // storing the snapshot.val() in a variable for convenience
    var childAdd = snapshot.val();

    // Console.loging the last user's data
    console.log(childAdd.name);
    console.log(childAdd.role);
    console.log(childAdd.startDate);
    console.log(childAdd.monthlyRate);

    // Change the HTML to reflect
    $("#employee-name").text(childAdd.name);
    $("#role").text(childAdd.role);
    $("#start-date").text(childAdd.startDate);
    $("#monthly-rate").text(childAdd.monthlyRate);

    // Handle the errors
}, function (errorObject) {
    console.log("Errors handled: " + errorObject.code);
});



