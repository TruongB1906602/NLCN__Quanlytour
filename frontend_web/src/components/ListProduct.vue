<script>
import ProductService from "../services/Product.service";
import toastjs from "../assets/js/toasts";
    export default{
        data(){
            return{
                toasts:{
                    title:"",
                    msg:"",
                    type:"",
                    duration:0
                 },
            }
        },   
        props:{
            products:Array,
            refeshlist:Function,
            activeIndex: { type: Number, default: -1 },
        },
	emits: ["update:activeIndex"],
        methods:{
            toastjs,
            async delproduct(id){
                try{
                    await ProductService.delete(id);
                    this.refeshlist();
                    this.toasts.title = "Success",
                    this.toasts.msg="Đã xóa người dùng",
                    this.toasts.type = "success",
                    this.toasts.duration=2000
                    this.toastjs();
                }catch(error){
                    console.log(error);
                    this.toasts.title = "Warning",
                    this.toasts.mqsg= "Bạn chưa đăng nhập hoặc bạn không phải ADMIN",
                    this.toasts.type = "warn",
                    this.toasts.duration=2000
                    this.toastjs();
                }
            },
            updateActiveIndex(index) {
			this.$emit("update:activeIndex", index);
		    },
        }
    }
</script>
<template>

     <div class="container">
     <div class=" row-cols-1">
        <h4 class="heading" >Tên tour</h4>
        <div class="title" v-for="product in products"
			:key="product._id"
          
		>
        
			<span>{{product.title}}</span></div>
           
        </div>
      <div class=" row-cols-1" >
          <h4 class="heading">Giá</h4>
        <div  class="price" v-for="product in products"
			:key="product._id"
          
		>
			<span>{{product.price}}</span></div>
           
        </div>
        
         <div class=" row-cols-1" >
         <h4 class="heading">Ngày đi</h4>
        <div  class="date" v-for="product in products"
			:key="product._id"
           
		>
			<span>{{product.date}}</span></div>
           
        </div>
         <div class=" row-cols-1" >
         <h4 class="heading">SL tour</h4>
        <div  class="sl" v-for="product in products"
			:key="product._id"
           
		>
			<span>{{product.sl}}</span></div>
           
        </div>
         <div class=" row-cols-1" >
         <h4 class="heading">Ảnh</h4>
        <div  class="images" v-for="product in products"
			:key="product._id"
         
		>
			    <img :src=product.img[0] style="width: 110px; height:60px; margin: 0px 5px;" alt="">
            </div>
           
        </div>
          <div class=" row-cols-1" >
        <h4 class="heading">Chức năng</h4>
        <div  class="btn list-group-item product-item d-flex" v-for="(product, index) in products"
        
			:key="product._id"
            @click="updateActiveIndex(index)"
           
		>
		  <button class=" btn-outline-danger btn-sm" @click="delproduct(product._id)"><ion-icon name="close-circle-outline"></ion-icon></button>
           <button class=" btn-outline-danger btn-sm" @click="updateActiveIndex(product._id)"><ion-icon name="create-outline"></ion-icon></button>
           </div>
        </div>
</div>
 </template>
<style scoped>
  
 .title:hover{
      background-color: #0d6efd;
        color: azure;

 }
.col{
    border: 1px solid  #dee2e6;
    font-size: 14px;
    
}
.btn button{
   
 
    font-size: 18px;
   
     border: 1px solid #dee2e6;
     background:#FBE2C5;
     margin: 0 5px;
}
.btn{
     font-weight: 500;
    font-size: 12px;
    padding: 20px;
     border: 1px solid #dee2e6;
        background: white;
      
}
.sl{
    height:80px;
     font-weight: 50
     0;
    font-size: 12px;
    padding: 20px;
     border: 1px solid #dee2e6;
        background: white;
      
}
.price{
     border: 1px solid #dee2e6;
    height: 80px;
    font-size: 14px;
     width: 100px; 
    font-weight: 500;
    padding: 10px;
       background: white;
    

} 
.heading{
    cursor: pointer;
    position: relative;
    border: 1px solid grey;
    background: #eee;
    font-size: 16px;
    display: flex;
   justify-content: center;
   align-items: center;
   height :35px;
 
}
.date{
    border: 1px solid #dee2e6;
    height: 80px;
    font-size: 14px;
     font-weight: 500;
    /* width: 30%; */
      width: 100px; 
      padding: 10px;
         background: white;
}
.title{
     border: 1px solid #dee2e6;
    height: 80px;
    font-size: 14px;
     font-weight: 500;
     padding: 10px;
     overflow: hidden;
        background: white;
    
}
.images{
     border: 1px solid #dee2e6;
    height: 80px;
    font-size: 14px;
    overflow: hidden;
    padding: 10px;
    width: 150px;
    background: white;
    
    
    
    
}
.row-cols-1{
    /* width: 10%; */
    height: 20%;
   

}
.container{
    display: flex;
    margin-left: 50px;
    max-width: 100%;
}

</style> 