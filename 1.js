let weight= Number(prompt("Nhập chỉ số cân nặng đơn vị kg"))
let height = Number(prompt("Nhập chỉ số chiều cao đơn vị m"))
let bmi= weight / (height*height)

if(bmi<18.5){
    alert("cân nặng thấp")
}else if (bmi < 25){
    alert(" Bình thường")

}else if ( bmi< 30){
    alert(" Tiền béo phì")
}else if (bmi <35){
    alert(" Béo phì độ I")
}else if (bmi<40){
    alert(" Béo phì độ II")
}else if ( bmi >=40){
    alert(" Béo phì độ III")
}
