
// document.getElementById("show").onclick = function() {myFunction()};
//
// function myFunction() {
//     document.getElementById("show").innerHTML = "<p>Phá Long mạch, Ngưng Thần đan, vũ động Thiên Hà, thân độ Luân Hồi vạn kiếp. Mặc ngươi tu vi thông thiên triệt địa, thực lực phách tuyệt hoàn vũ, ta đây có chiến lực viễn cổ Thần Long đánh cho ngươi vĩnh viễn không siêu sinh, phá vỡ luân hồi, vạn cổ trường tồn.\n" +
//         "\n" +
//         "                            Liệu đến cuối cùng những câu hỏi về sự tồn tại dài lâu, vững bền là biểu tượng của võ học có được giải đáp; đâu mới là điểm dừng chân của mọi thứ. Phải chăng mọi chuyện trong nhân thế đều như vậy mời bạn đón đọc truyện, bàn luận nghe thương thảo về võ hiệp. Đọc truyện bạn sẽ được giải đáp những thắc mắc, trải qua những gì đầy màu sắc võ hiệp. Bạn cũng có thể tìm đọc những truyện đặc sắc khác như: Kiếm Đạo Độc Tôn, Linh Vũ Cửu Thiên,...\n" +
//         "                      </p>";
// }

$("#rut_gon").hide();
function doc_them() {
    $("#doc_them").hide();
    $(".mieu_ta").css("max-height","100%");
    $("#rut_gon").show();
}
function rut_gon() {
    $("#doc_them").show();
    $(".mieu_ta").css("max-height","110px");
    $("#rut_gon").hide();
}

