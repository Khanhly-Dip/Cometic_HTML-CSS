const listIm = document.querySelector(".silde_show");
const ims = document.querySelectorAll(".silde_show img");

let curr = 0;
const lenght = ims.length;

setInterval(()=>{
    if(curr == lenght -1){
        curr = 0;
        let wid = ims[0].offsetWidth
        listIm.style.transform = `translateX(0px)`;
    }
    else{
        curr ++;
        let wid = ims[0].offsetWidth
        listIm.style.transform = `translateX(${wid * -1 * curr}px)`;
    }
},4000)


document.getElementById("minus").addEventListener("click",function(){
    if(document.getElementById("quality").value  < 0){
        alert("Số lượng không đúng! Vui lòng nhập lại");
        document.getElementById("quality").value = 1;
    };
    document.getElementById("quality").value = (+document.getElementById("quality").value) - 1;
    document.getElementById("total_price").innerHTML = (+document.getElementById("quality").value) *180000;

});
document.getElementById("plus").addEventListener("click",function(){
    if(document.getElementById("quality").value  > 13){
        alert("Số lượng vượt quá hàng trong kho");
        document.getElementById("quality").value = 13;
    };
    document.getElementById("quality").value = (+document.getElementById("quality").value) + 1;
    document.getElementById("total_price").innerHTML = (+document.getElementById("quality").value) *180000;
   
});


const product = document.querySelectorAll(".infor_kind_lip img");
const thaythe = document.getElementById("img_pro"); 
for(let i = 0; i< product.length; i++){
    product[i].addEventListener('click',function() {
        thaythe.src = product[i].src;
    });
}

document.getElementById('addimg').addEventListener('click',function(){
    //tạo một elemrnt để chọn hình ảnh
    const input = document.getElementById('imageInput');
    // input.type = 'file';
    //lắng nghe sự kiện khi người dùng chọn hình ảnh
    input.onchange = function(event){
        const file = event.target.files[0]; // laay hinh anh da chon
        const reader = new FileReader();    //tao mot readerfile de doc hinh anh da chon
        reader.onload = function(e){
            const imgage = document.createElement('img');//Tao mot the ig de hien thi hinh anh
            imgage.src = e.target.result;       //thiet lap mot duong dan de hien thi hinh anh
            document.getElementById('imgcontainer').innerHTML = '';     //xoa hinh anh cu
            document.getElementById('imgcontainer').appendChild(imgage);        //hien thi hinh anh
        }
        reader.readAsDataURL(file);     //doc va chuyen doi hinh anh thanh dang du lieu URL
    }
    input.click();  //kich hoat su kien click cua input de chon cua so chon hinh anh
});

document.getElementById('cancelImageButton').addEventListener('click', function() {
    // Xóa hình ảnh đã hiển thị
    document.getElementById('imgcontainer').innerHTML = '';
    // Xóa nội dung của input element để cho phép chọn hình ảnh mới
    document.getElementById('imageInput').value = '';
    // Ẩn nút "Hủy"
    // document.getElementById('cancelImageButton').style.display = 'none';
});

document.getElementById('thanhtoan').addEventListener('click', function(){
    // Lấy giá trị của ô số và lưu vào local storage
    var qualityValue = document.getElementById('quality').value;
    localStorage.setItem('qualityValue', qualityValue);
    
    // Lấy đường dẫn của liên kết và lưu vào local storage
    var thanhtoanLink = this.href; // 'this' ở đây là phần tử <a> được nhấp vào
    localStorage.setItem('thanhtoanLink', thanhtoanLink);
});
