<script>
import HeaderShop from '@/components/HeaderShop.vue';
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
         HeaderShop,
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
          this.toasts.title = "Success",
          this.toasts.msg = "Đã cập nhật",
          this.toasts.type = "success",
          this.toasts.duration=100,
          this.$router.push("/addpay")
        
       
          
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


  <HeaderShop></HeaderShop>
  <toastsVue></toastsVue>
   <nav style="--bs-breadcrumb-divider: url(&#34;data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='%236c757d'/%3E%3C/svg%3E&#34;);" aria-label="breadcrumb">
                <ol class="breadcrum">
                    <router-link class="breadcrumb-item" to="/"><a href="#">Trang chủ</a></router-link>
                    <router-link class="breadcrumb-item" to="/details/:id"><a href="#">Chi tiết sản phẩm</a></router-link>
                     <router-link class="breadcrumb-item" to="/details/:id/Cart"><a href="#">Giỏ hàng</a></router-link>
                </ol>
            </nav>
    <section class="h-100 h-custom" style="background-color: rgb(234,232,232);">
  <div class="container py-5 h-100">
   
      <div class="col-12">
        <div class="card card-registration card-registration-2" style="border-radius: 15px;">
        
            <div class="row g-0">
              <div class="col-lg-8">
                <div class="p-5">
                  <div class="d-flex justify-content-between align-items-center mb-5">
                    <h1 class="fw-bold mb-0 text-black">Giỏ hàng của bạn</h1>
                    <h6 class="mb-0 text-muted">{{carts.length}} items</h6>
                  </div>
                  <hr class="my-4">
                  <CartItem :refeshlistcart="refeshlistcart" :carts="carts" @deleted:cartIndex="delcart"></CartItem>
                  <div class="pt-5">
                    <h6 class="mb-0"><router-link to="/" class="text-body"><i
                          class="fas fa-long-arrow-alt-left me-2"></i>Quay lại</router-link></h6>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 bg-grey">
                <div class="p-5">
                 <h1 class="fw-bold mb-5 mt-2 pt-1">Thông tin đơn hàng</h1> 
                 
                  <div class="d-flex justify-content-between mb-5">
                    <h5 class="text-uppercase">Tổng cộng:</h5>
                    <h5>{{total}}</h5>
                  </div>

                
                  <div class="container">
                    <div  class="button"  @click="registerproduct()">
                    <a href="#" class="btn-main btn-2" >Thanh toán</a>
    
                     </div>

                    </div>

                </div>
              </div>
            </div>
      
        </div>
      </div>

  </div>
</section>
</template>
<style scoped>
@media (min-width: 1025px) {
.h-custom {
height: 100%;
}
}
h1{
  font-size:25px;
}
       
 .container{

 top:10%;
 height:100%;
display:flex;
align-items: center;
justify-items: center;
        }
.btn-main{
 text-decoration: none;
 font-size: 1.25rem;
  padding: 20px 50px;
 margin: 32px;
 

 position: relative;
}
.btn-2{
  color:#000;
}
.btn-2::after, .btn-2::before{
  border: 3px solid   #000;
  content:"";
  position: absolute;
  width: calc(150px - 6px);
  height:  calc(50px - 6px);
  left: 30px;
  bottom:10px;
  z-index:1;
  transition:  transform 0.3s ease;

}
.btn-2:hover::after{
  transform:  translate(-5px,-5px);

}
.btn-2:hover::before{
  transform: translate(5px,5px);
}

.py-5{
    
    width: 75%;

    padding-top: 2rem!important;
    padding-bottom: 2rem!important;
}
.card-registration .select-input.form-control[readonly]:not([disabled]) {
font-size: 1rem;
line-height: 2.15;
padding-left: .75em;
padding-right: .75em;
}

.card-registration .select-arrow {
top: 13px;
}

.bg-grey {
background-color: #eae8e8;
}

@media (min-width: 992px) {
.card-registration-2 .bg-grey {
border-top-right-radius: 16px;
border-bottom-right-radius: 16px;
}
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
</style>