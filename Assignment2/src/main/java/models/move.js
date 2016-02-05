function moveHere(column, place){

    //user clicks on card
    if(place == 0 && document.getElementById("prompt").innerHTML == "Select a card to move to column: "){
        //move card to column

        var colFrom = column;
        var colTo = document.getElementById("colNum").innerHTML;
        $.ajax({
            type: "POST",
            url: "/moveCard/"+colFrom+"/"+colTo,
            data: JSON.stringify(game),
            success: function(data, status){console.log("Data: " + data + "\nStatus: " + status);
                game = data;
                display(data);},
            contentType:"application/json; charset=utf-8",
            dataType:"json",
        });

        document.getElementById("prompt").innerHTML = "Card moved.";
        document.getElementById("colNum").innerHTML = "";
    }else if(place == 0 && document.getElementById("prompt").innerHTML != "Select a card to move to column: "){
        //do nothing. Not in move mode
    }

    //user clicks on column
    if(place == 1 && document.getElementById("prompt").innerHTML == "Select a card to move to column: "){
        //user cancelled the move. No longer in move mode
        document.getElementById("prompt").innerHTML = "";
        document.getElementById("colNum").innerHTML = "";
    }else if(place == 1 && document.getElementById("prompt").innerHTML != "Select a card to move to column: "){
        //prompt user. Now in move mode
        document.getElementById("prompt").innerHTML = "Select a card to move to column: ";
        document.getElementById("colNum").innerHTML = column;
    }
    //change

}