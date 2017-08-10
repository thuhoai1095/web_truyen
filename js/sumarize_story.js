
 language="javascript"
// Lấy đối tượng
var a_list = document.getElementsByClassName("show");
// Lặp và gán sự kiện
for (var i = 0; i < a_list.length; i++) {
    a_list[i].onclick = function () {
        // return false để khỏi reload trang
        return false
    };
}
$( "a" ).click(function() {
    $( "p" ).show( "slow" );
});
