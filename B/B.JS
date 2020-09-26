let Luot = 0
let ketQua =  Math.floor(1+Math.random()*10)
console.log("Kết quả là: "+ketQua)
let trungThuong=false
const App = {
    Start: function(){
        let get_quayso = document.querySelector(".quayso")
        get_quayso.addEventListener("click",this.quaySo)
    },
    quaySo:function(){
        let number = UIcontroler.getInputFromUI()
        console.log(number)
        if(Logic.kiemTra(number)===true){
            console.log("Nhập đúng")
            Luot=Luot+1
            document.querySelector(".luot").textContent="Lượt "+(1+Luot)
            document.querySelector(".number").value=""
            console.log(Luot)
            if(Luot<3){
                if(number==ketQua){
                    trungThuong=true
                }
            }else{
                console.log("Kết quả")
                if(trungThuong){
                document.querySelector(".luot").textContent="Kết quả đúng"
                document.querySelector(".luot").textContent="Kết quả sai !!! Kết quả đúng là: "+ketQua
                let rawhtml = `<td colspan="2" style="background-color: azure;" align="center"
                 class="dong_reset"><input type="button" name="reset" class="reset" value="Chơi Lại" onclick="App.reset()"></td>`
                let get_choilai = document.querySelector(".choilai")
                get_choilai.insertAdjacentHTML("beforeend",rawhtml)
                }else{
                    document.querySelector(".luot").textContent="Kết quả sai !!! Kết quả đúng là: "+ketQua
                    let rawhtml = `<td colspan="2" style="background-color: azure;" align="center"
                     class="dong_reset"><input type="button" name="reset" class="reset" value="Chơi Lại" onclick="App.reset()"></td>`
                    let get_choilai = document.querySelector(".choilai")
                    get_choilai.insertAdjacentHTML("beforeend",rawhtml)
                }
            }
        }else{
            console.log("Nhập sai")
            let get_number = document.querySelector(".number")
            get_number.value=""
            alert("Nhập Sai !!!Hãy nhập số từ 1 đến 10")
            
        }
    },
    reset:function(){
        Luot=0;
        ketQua= Math.floor(1+Math.random()*10)
        trungThuong=false
        let get_reset = document.querySelector(".dong_reset")
        console.log("reset")
        get_reset.parentElement.removeChild(get_reset)
        document.querySelector(".luot").textContent="Lượt "+(1+Luot)
    }
    
}

const UIcontroler = {
    getInputFromUI: function (){
        let get_number = document.querySelector(".number")
        let number = get_number.value
        return Number(number)
    }
}
App.Start()
const Logic = {
    kiemTra:function(number){
        if(number>=1 && number<=10){
            return true
        }else{
            return false
        }
    }
}