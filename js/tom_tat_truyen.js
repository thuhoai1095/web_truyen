
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

