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

// Declare database
var database = firebase.database();

//Initial values
var name = "";
var role = "";
var startDate = "";
var monthlyRate = "";

//Event handler for click on submit
$("#submit").on("click", function (event) {

    // Don’t refresh the page
    event.preventDefault();

    //variables from input
    var employeeAdd = {
        name: $("#employee-name").val().trim(),
        role: $("#role").val().trim(),
        startDate: $("#start-date").val().trim(),
        monthlyRate: $("#monthly-rate").val().trim(),
    }
    // Code for handling the push
    database.ref().push(employeeAdd);

    // empty the html fields
    $("#employee-name").val(""),
        $("#role").val(""),
        $("#start-date").val(""),
        $("#monthly-rate").val("")

});


database.ref().on("child_added", function (childSnapshot) {
    // storing the snapshot.val() in a variable for convenience

    var name = $(childSnapshot).val().name;
    var role = $(childSnapshot).val().role;
    var startDate = $(childSnapshot).val().startDate;
    var monthlyRate = $(childSnapshot).val().monthlyRate;

    // Change the HTML to reflect
    $("#scheduler> tbody").append("<tr><td>" +
        name + "</td><td>" +
        role + "</td><td>" +
        startDate + "</td><td>" +
        monthlyRate + "</td><td>");

    // Handle the errors
    // }, function (errorObject) {
    //     console.log("Errors handled: " + errorObject.code);
});