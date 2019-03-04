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
var monthsWorked = "";
var monthlyRate = 0;
var totalBilled = 0;

//Event handler for click on submit
$("#submit").on("click", function (event) {

    // Don’t refresh the page
    event.preventDefault();

    //variables from input
    var employeeAdd = {
        name: $("#employee-name").val().trim(),
        role: $("#role").val().trim(),
        startDate: $("#start-date").val().trim(),
        monthsWorked: $("#months-worked").val().trim(),
        monthlyRate: $("#monthly-rate").val().trim(),
        totalBilled: $("#total-billed").val().trim()
    }
    // Code for handling the push
    database.ref().push(employeeAdd);

    // empty the html fields
    $("#employee-name").val(""),
    $("#role").val(""),
    $("#start-date").val(""),
    $("#months-worked").val(""),
    $("#monthly-rate").val(""),
    $("#total-billed").val("")

});


database.ref().on("child_added", function (childSnapshot) {

    var name = childSnapshot.val().name;
    var role = childSnapshot.val().role;
    var startDate = childSnapshot.val().startDate;
    var monthsWorked = childSnapshot.val().monthsWorked;
    var monthlyRate = childSnapshot.val().monthlyRate;
    var totalBilled = childSnapshot.val().totalBilled;

    // Change the HTML to reflect
    $("#scheduler > tbody").append("<tr><td>" +
        name + "</td><td>" +
        role + "</td><td>" +
        startDate + "</td><td>" +
        monthsWorked + "</td><td>" +
        monthlyRate + "</td><td>") +
        totalBilled + "</td></tr>";

});