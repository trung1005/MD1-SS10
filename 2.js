
function calculateDays() {
    let month = document.getElementById("month").value;
    
    switch (parseInt(month)) {
      case 1:
      case 3:
      case 5:
      case 7:
      case 8:
      case 10:
      case 12:
        alert("Tháng " + month + " có 31 ngày");
        break;
      case 4:
      case 6:
      case 9:
      case 11:
        alert("Tháng " + month + " có 30 ngày");
        break;
      case 2:
        alert("Tháng " + month + " có thể có 28 hoặc 29 ngày, tùy thuộc vào năm nhuận");
        break;
      default:
        alert("Số thứ tự của tháng không hợp lệ");
        break;
    }
  }