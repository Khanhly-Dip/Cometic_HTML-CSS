document.getElementById('anvao').addEventListener('click', function(){
    alert("thông báo");
    console.log('thông báo');
})
const phonenum = document.getElementById('phonenumer');

phonenum.addEventListener('keypress', function(event) {
    var charCode = event.key;
    // Kiểm tra xem ký tự có phải là số không
    if (isNaN(parseInt(charCode))) {
        alert("Dữ liệu nhập vào không hợp lệ, vui lòng nhập lại");
        event.defaultPrevented();
    }
})
document.getElementById('acountnumber').addEventListener('click', function(event){
    const charnum = event.key;
    if (isNaN(parseInt(charnum))) {
        alert("Dữ liệu nhập vào không hợp lệ, vui lòng nhập lại");
        event.defaultPrevented();
    }
})

const chosseone = document.querySelectorAll('.inradio');
chosseone.forEach(button => {
    button.addEventListener('click', ()=>{
        chosseone.forEach(otherbutton => {
            if(otherbutton !== button){
                otherbutton.disabled = true;
            }
        })
    })
});



//  const soluong = document.getElementById('quality').value;
//  document.getElementById('thanhtoan').addEventListener('click', function(){
//     document.getElementById('soLuong').value = soluong = document.getElementById('quality').value;
//  })
// document.addEventListener('DOMContentLoaded', function() {
//     var soluong = localStorage.getItem('soLuong');
//     document.getElementById('soLuong').value = soluong;
// });


// document.getElementById('soLuong').addEventListener('change', function(){
//     document.getElementById('thanhtien').innerHTML = (+document.getElementById('soLuong').value)*180000;
// })

document.addEventListener('DOMContentLoaded', function() {
    var qualityInput = document.getElementById('quality');
    var buyNowButton = document.getElementById('thanhtoan');

    // Lắng nghe sự kiện click cho button 'BUY NOW'
    buyNowButton.addEventListener('click', function(event){
        // Ngăn chặn hành động mặc định của thẻ 'a'
        event.preventDefault();
        
        // Lấy giá trị của 'quality'
        var qualityValue = qualityInput.value;
        
        // Sau đó, chuyển trang
        window.location.href = './Thanhtoan.html';
        // Gán giá trị của 'quality' cho 'soLuong' bằng cách lấy phần tử 'soLuong' và gán giá trị
        document.getElementById('soLuong').value = qualityValue.value;
    });
});


