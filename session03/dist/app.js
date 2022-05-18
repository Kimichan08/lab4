// tạo lớp
class conCho {
    // phương thức khởi tạo
    //phương thức
    sua() {
        alert('Gau gau');
    }
    can() {
        console.log(`${this.ten} cắn nè`);
    }
    thanhTien() {
        return this.canNang * this.gia;
    }
}
var dog1 = new conCho();
dog1.ten = 'Cau Vang';
dog1.tuoi = 18;
dog1.canNang = 20;
dog1.gia = 70000;
dog1.can();
console.log(dog1);
var dog2 = new conCho();
