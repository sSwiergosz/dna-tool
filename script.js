$(document).ready(function() {

    $("button").on("click", function(z) {
        z.preventDefault();
        var e = document.getElementById("option-list");
        var selected = e.options[e.selectedIndex].value;
        var inputValue = $("#seq").val();
        var str = '';
        var compBases = {
            A: "T",
            T: "A",
            G: "C",
            C: "G"
        };

        for (var i in inputValue) {
        	if (!(inputValue[i] in compBases)) {
        		return  $("#result").html("Error! In DNA there are only A,G,C or T.");
        	}
        }

        if (selected == 'reverse') {
            $("#result").html(inputValue.split('').reverse().join(''));
        } 

        else if (selected == 'complementary') {
            for (var i in inputValue) {
                str += inputValue[i].replace(/[ATGC]/, function(c) {
                    return compBases[c];
                });
            }
            $("#result").html(str);

        } 

        else if (selected = 'reverse complementary') {
            for (var i in inputValue) {
                str += inputValue[i].replace(/[ATGC]/, function(c) {
                    return compBases[c];
                });
            }
            $("#result").html(str.split('').reverse().join(''));
        }
    });
});
