language="javascript"
// Lấy đối tượng
var a_list = document.getElementsByid("setting");
// Lặp và gán sự kiện
for (var i = 0; i < a_list.length; i++) {
    a_list[i].onclick = function () {
        // return false để khỏi reload trang
        return false
    };
}
$( "formset" ).click(function() {
    $( "formset" ).show( "setting" );
});