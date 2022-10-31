// Bài 1 Tìm số nguyên dương nhỏ nhất 
function songuyenduongNhoNhat() {
    var sum = 0;
    var n = 0;
    while (sum < 10000) {
        n++;
        sum += n;
    }
    document.getElementById("info").innerHTML = "Có " + n + " số nguyên dương nhỏ nhất";
}
songuyenduongNhoNhat();

// Bài 2 Tính Tổng 
document.getElementById("tinhTong").onclick = function () {
    var n = 3;
    var soX = document.getElementById("soX").value * 1;
    var soN = document.getElementById("soN").value * 1;
    soN = 1;
    tong = 0;
    for (var i = 1; i <= n; i++) {
        soN = soN * soX;
        tong += soN;
        var result = "Tong la: " + tong;
    }
    document.getElementById("infoTong").innerHTML = result;
};

// Bài 3 Tính Giai Thừa 
document.getElementById("tinhGiaiThua").onclick = function () {
    var n = 5;
    var nhapsoGiaiThua = document.getElementById("nhapsoGiaiThua").value * 1;
    nhapsoGiaiThua = 1;
    tong = 0;
    for (var i = 1; i <= n; i++) {
        nhapsoGiaiThua = nhapsoGiaiThua * i;
        tong = nhapsoGiaiThua;
    }
    document.getElementById("infoGiaiThua").innerHTML = tong;
};

// Bài 4 
function btnChangeBg() {
    var divs = document.getElementById("div");
    for (var i = 0; i < divs.length; i++) {
        // Vị trí chẵn => màu đỏ
        if ((i + 1) % 2 == 0) {
            divs[i].style.background = "red";
        }
        else { // Vị trí lẽ => màu xanh
            divs[i].style.background = "blue";
        }
    }
}