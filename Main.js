//Bài 01
//Đầu vào:
//  Số ngày làm
//  Lương 1 ngày: 100.000
//Xử lý:
//  Tạo biến soNgaylam
//  Tạo biến luongMotngay
//  Tạo biến soTienluong
//  In ra màn hình
//Đầu ra:
//  In kết quả

document.getElementById("btnTinhluongNv").onclick = function () {
    var soNgaylam = +document.getElementById("soNgaylam").value;
    const soTienluongMotngay = 100000;
    var soTienluongDuocnhan = soNgaylam * soTienluongMotngay;
  
    var currentFormat = new Intl.NumberFormat("vn-VN");
    var tienLuongbaiMotvnD = currentFormat.format(soTienluongDuocnhan);
  
    var inRatienLuong = "<div>";
    inRatienLuong +=
      "<p>Số tiền lương được nhận là: " + tienLuongbaiMotvnD + "</p>";
    inRatienLuong += "</div>";
  
    document.getElementById("footerTinhtienLuongNv").innerHTML = inRatienLuong;
  };
  
  //Bài 02
  //Đầu vào:
  //  Nhập 5 số thực
  //Xử lý:
  //  Tạo biến cho số thực thứ 1
  //  Tạo biến cho số thực thứ 2
  //  Tạo biến cho số thực thứ 3
  //  Tạo biến cho số thực thứ 4
  //  Tạo biến cho số thực thứ 5
  //  (Tổng giá trị của 5 số) / 5 = kQua
  //Đầu ra:
  //  In kết quả ra màn hình
  
  document.getElementById("btnTinhlgiaTritb").onclick = function () {
    var soThucthu1 = +document.getElementById("soThucthu1").value;
    var soThucthu2 = +document.getElementById("soThucthu2").value;
    var soThucthu3 = +document.getElementById("soThucthu3").value;
    var soThucthu4 = +document.getElementById("soThucthu4").value;
    var soThucthu5 = +document.getElementById("soThucthu5").value;
    var kQuatBinh =
      (soThucthu1 + soThucthu2 + soThucthu3 + soThucthu4 + soThucthu5) / 5;
    var inRasoTbinh = "<div>";
    inRasoTbinh +="<p>Giá trị trung bình của 5 số thực là: " + kQuatBinh + "</p>";
    inRasoTbinh += "</div>";
    document.getElementById("footerGiatriTb").innerHTML = inRasoTbinh;
  };
  
  //Bài 03
  //Đầu vào:
  //  Nhập vào số tiền USD cần quy đổi ra VND
  //Xử lý:
  //  Tạo biến soTienuSd (Lấy giá trị)
  //  Tạo hằng số const MotUSDbang = 235000
  //  Tạo biến soTienVndSaukhiDoi = soTienuSd / MotUSBbang;
  //Đầu ra:
  // In ra kết quả ra màn hình
  document.getElementById("btnQuydoiUsdVnd").onclick = function () {
      var soTienuSd = +document.getElementById("soTienuSd").value;
      const MotUSDbang = 23500;
      var soTienVndSaukhiDoi = soTienuSd * MotUSDbang;
  
      var currentFormat = new Intl.NumberFormat("vn-VN");
      var tienBaibaVnD = currentFormat.format(soTienVndSaukhiDoi);
  
      var kQuaquyDoi = "<div>";
      kQuaquyDoi += "<p>Số tiền VND quy đổi ra là: " + tienBaibaVnD + " vnđ</p>";
      kQuaquyDoi += "</div>";
      document.getElementById("footerQuydoiUsdVnd").innerHTML = kQuaquyDoi;
  }
  //Bài 04
  //Đầu vào:
  //  Chiều dài hình chữ nhật
  //  Chiều rộng hình chữ nhật
  //Xử lý:
  //  Tạo biến chiều dài
  //  Tạo biến chiều động
  //  Tạo biến chu vi = (dài + rộng)*2
  //  Tạo biến diện tích = dài * rộng
  //Đầu ra:
  //  In ra kết quả chu vi, diện tích
  
  document.getElementById("btnTinhcVdT").onclick = function () {
      var chieuDai = document.getElementById("chieuDai").value;
      var chieuRong = document.getElementById("chieuRong").value;
      var chuVi = (chieuDai + chieuRong) * 2;
      var dienTich = chieuDai * chieuRong;
  
      console.log(chuVi);
      console.log(dienTich);
      
      var inKqCvDt = "<div>";
      inKqCvDt += "<p>Chu vi hình chữ nhật bằng: " + chuVi + " m</p>"
      inKqCvDt += "<p>Diện tích hình chữ nhật bằng: " + dienTich + " m2</p>";
      inKqCvDt += "</div>";
  
      document.getElementById("footerchuVidienTich").innerHTML = inKqCvDt;
  }
  
  //Bài 05
  //Đầu vào:
  //  Nhập vào 01 số có 02 chữ số
  //Xử lý:
  //  Tạo biến số vừa nhập
  //  Tạo biến lấy số ở hàng đơn vị của số vừa nhập
  //  Tạo biến lấy số ở hàng chục vị của số vừa nhập
  //  Tạo biến tổng = số hàng đơn vị + số hàng chục;
  //Đầu ra:
  // In kết quả ra màn hình
  
  document.getElementById("btnTonghaiKyso").onclick = function () {
      var soVuanhap = document.getElementById("soVuanhap").value;
      var soHangdonVi = soVuanhap % 10;
      var soHangchuc = soVuanhap / 10;
      var soHangchucSaukhiLamtron = Math.round(soHangchuc);
      var tongHaihang = soHangchucSaukhiLamtron + soHangdonVi;
  
      var inKqToghaiKyso = "<div>"
      inKqToghaiKyso += "<p>Tổng của 2 ký số của số có 2 chữ số là: " + tongHaihang + "</p>";
      inKqToghaiKyso += "</div>";
  
      document.getElementById("footerTonghaiKyso").innerHTML = inKqToghaiKyso;
  }