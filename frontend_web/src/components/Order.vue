<script>

import CartService from '../services/Cart.service';
import toastsVue from '../components/toasts.vue';
import toastsjs from '../assets/js/toasts.js'
import CartItem from "../components/CartItem.vue";
export default{
    data(){
      return{
          carts:[],
          toasts:{
              title:"",
              msg:"",
              type:"",
              duration:0
              },
      }
    },
    components:{
      
         toastsVue,
         CartItem
     },
     methods:{
        getiduser(){
          const user =  JSON.parse(localStorage.getItem("user"));
          return user._id;
        },
        async getcarts(){
          try{
          this.carts = await CartService.get(this.getiduser());
          }catch(error){
            console.log(error);
          }
        },
        async delcart(index){
              this.toasts.title="Deleted",
              this.toasts.msg="Đã xóa sản phẩm",
              this.toasts.type="error",
              this.toasts.duration=2000
              this.toastsjs(); 
              await CartService.delete(this.carts[index]._id)
              this.refeshlistcart();  
        },
       toastsjs,
       refeshlistcart(){
         this.getcarts();
       },
       registerproduct(){
         if(this.carts.length > 0){
          this.toasts.title = "Thông báo!",
          this.toasts.msg = "Đã cập nhật",
          this.toasts.type = "success",
          this.toasts.duration=1000,
          
          
          this.toastsjs();
         }else{
              this.toasts.title = "Failed",
              this.toasts.msg = "Bạn chưa có sản phẩm",
              this.toasts.type = "error",
              this.toasts.duration=2000,
              this.toastsjs();
         }
       },  
        
     },
     computed: {
          total(){
           var total=0;
           for(var i in this.carts){
              total=total + this.carts[i].price*this.carts[i].quantity;
           }
             return  new Intl.NumberFormat('de-DE',{style: 'currency',currency: 'VND'}).format(total);
        }   
     },
      created(){
        this.refeshlistcart();
     },
}
</script>
<template>
 <div >
     <toastsVue></toastsVue>
   
           <div class="container py-5 h-100">
   
    
                  <div class="d-flex justify-content-between align-items-center mb-5">
                    <h1 >Đơn hàng của bạn</h1>
                    <h6 class="mb-0 text-muted">{{carts.length}} sản phẩm</h6>
                  </div>
                  <hr class="my-4">
                 
                  
                <div class="total">
              
                    <h4>Tổng cộng:</h4>
                    <h4>{{total}}</h4>
                  

                  <button type="button" class="payment"
                    data-mdb-ripple-color="dark" @click="registerproduct">Thanh toán</button>

             </div>
    
          
                  <div class="pt-5">
                    <h6 class="mb-0"><router-link to="/" class="text-body"><i
                          class="fas fa-long-arrow-alt-left me-2"></i>Quay lại</router-link></h6>
                  </div>
             </div>
              
             
 </div>

</template>


<style scoped>
.card-registration .select-input.form-control[readonly]:not([disabled]) {
font-size: 1rem;
line-height: 2.15;
padding-left: .75em;
padding-right: .75em;
}

.card-registration .select-arrow {
top: 13px;
}

.py-5 {
    
    width: 70%;
    padding: 0;
    height: 30%;
    
    border-radius: 8px;
    padding: 24px;
    background: white;
}
@media (min-width: 992px) {
.card-registration-2 .bg-grey {
border-top-right-radius: 16px;
border-bottom-right-radius: 16px;
}
}
h1, h1 {
    font-size: 1.5rem;
}
.pt-5 {
     padding: none !important;;
}
.total {
     padding-left: 50px; 
}
@media (max-width: 991px) {
.card-registration-2 .bg-grey {
border-bottom-left-radius: 16px;
border-bottom-right-radius: 16px;
}
}
.breadcrumb-item a {
            font-size: 18px;
            color: #333;
}
a{
        text-decoration: none;
}
.payment{

display: inline-block;
width: 350px;
height:40px;
    border-radius: 4px;
    font-weight: 500;
    padding: 2px 5em;
    box-sizing: border-box;
    text-align: center;
    cursor: pointer;
    transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
    position: relative;
    background: #338dbc;
    color: white;
    border: none;

}
h4{
  display: inline-block;
  margin: 0 30px;
  margin-bottom: 20px;
}
    .breadcrum{
        display: flex;
        flex-wrap: wrap;
        font-size: 18px;
        padding-top: 5px;
        padding-bottom: 5px;
        padding-left: 14%;
        background: #fafafa;
        list-style: none;
    }
    .bg-grey{
      background: #f4fbff;
    }
    .img-fluid[data-v-6428cdfa] {
    width: 60px;
    height: 60px;
    margin-bottom: 10px;
}


</style>