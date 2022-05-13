let action = ["https://whsat-imagehosting.glitch.me/uploaded/c89d8e2e912042e43c278c7eff24435f.jpg", "https://whsat-imagehosting.glitch.me/uploaded/d0ee69b99156627ee05c4d91d91b7178.jpg"];

let drama = ["https://whsat-imagehosting.glitch.me/uploaded/ee850ff3ec8319e958dd8d14e89720ec.jpg", "https://whsat-imagehosting.glitch.me/uploaded/85d559bc3cceb05efd043c92a6346115.jpg"];

$(".submit-button").click(function() {
    let genreInput = $(".get-suggestions").val();
    $(".shows").empty();

    //conditional
    if (genreInput === "action") {
         for (let actionimg of action) {
        $(".shows").append("<img src=" + actionimg + ">");
    }

    } else if (genreInput === "drama") {
         for (let dramaimg of drama) {
        $(".shows").append("<img src=" + dramaimg + ">");
    }
    } else {
        alert("INCCORECT GENRE");
    }

   
   

});
let tasks= [];
$(".suggestion-button").click(function() {
    let suggestion = $(".give-suggestions").val();
    $(".shows").text("Thanks for your suggestion! Check the console to see that it was added!");
    //Write code for Task Three below this line!
tasks.push(suggestion);
    for (let suggest of tasks) {
        $(".shows").append("<img src ="+suggest+">"); }
});