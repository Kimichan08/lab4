// tạo lớp

class conCho{
     
    //thuộc tính
    ten:string;
    tuoi:number;
    canNang:number;
    gia:number;


    // phương thức khởi tạo
    
    //phương thức

    sua():void{
        alert('Gau gau');
    }

    can():void{
        console.log(`${this.ten} cắn nè`);
    }

    thanhTien():number{
        return this.canNang * this.gia;
    }
}

var dog1 = new conCho();

dog1.ten = 'Cau Vang';
dog1.tuoi = 18;
dog1.canNang = 20;
dog1.gia= 70000;
 
dog1.can();
console.log(dog1);

var dog2 = new conCho();

