// create a constructor named quo
// then it construct a method and an object of status property

var quo = function(status) {
    return {
        get_status: function() {
            return status;
        }
    };
};

// create a quo instance without new
var myQuo = quo("amazed");
document.writeln(myQuo.get_status());

