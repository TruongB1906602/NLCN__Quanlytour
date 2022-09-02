<script>
import HotelService from "../services/Hotel.service";
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
            hotels:Array,
            refeshlist:Function,
            activeIndex: { type: Number, default: -1 },
        },
	emits: ["update:activeIndex"],
        methods:{
            toastjs,
            async delhotel(id){
                try{
                    await  HotelService.delete(id);
                    this.refeshlist();
                    this.toasts.title = "Success",
                    this.toasts.msg="Đã xóa người dùng",
                    this.toasts.type = "success",
                    this.toasts.duration=2000
                    this.toastjs();
                }catch(error){
                    console.log(error);
                    this.toasts.title = "Warning",
                    this.toasts.msg="Bạn chưa đăng nhập hoặc bạn không phải ADMIN",
                    this.toasts.type = "warn",
                    this.toasts.duration=2000
                    this.toastjs();
                }
            },
            updateActiveIndex(index) {
			this.$emit("update:activeIndex1", index);
		    },
        }
    }
</script>
<template>

     <div class="container">
     <div class=" row-cols-1">
        <h4 class="heading" >Tên khách sạn</h4>
        <div class="title" v-for="hotel in hotels"
			:key="hotel._id"
          
		>
        
			<span>{{hotel.title}}</span></div>
           
        </div>
      <div class=" row-cols-1" >
          <h4 class="heading">Giá</h4>
        <div  class="price" v-for="hotel in hotels"
			:key="hotel._id"
          
		>
			<span>{{hotel.price}}</span></div>
           
        </div>
         <div class=" row-cols-1" >
         <h4 class="heading">Khu vực</h4>
        <div  class="area" v-for="hotel in hotels"
			:key="hotel._id"
           
		>
			<span>{{hotel.area}}</span></div>
           
        </div>
         <div class=" row-cols-1" >
         <h4 class="heading">Ảnh</h4>
        <div  class="images" v-for="hotel in hotels"
			:key="hotel._id"
         
		>
		
            <img :src=hotel.img[0] style="width: 110px; height:70px; margin: 0 5px;" alt="">
            </div>
           
        </div>
          <div class=" row-cols-1" >
        <h4 class="heading">Chức năng</h4>
        <div  class="btn list-group-item hotel-item d-flex" v-for="(hotel, index) in hotels"
        
			:key="hotel._id"
            @click="updateActiveIndex(index)"
           
		>
		  <button class=" btn-outline-danger btn-sm" @click="delhotel(hotel._id)"><ion-icon name="close-circle-outline"></ion-icon></button>
           <button class=" btn-outline-danger btn-sm" @click="updateActiveIndex(hotel._id)"><ion-icon name="create-outline"></ion-icon></button>
           </div>
        </div>
   
       

    

</div>
 
 
                   
			

         <!-- <ul class="list-group">
        <li 
			class="list-group-item product-item d-flex justify-content-between" 
			v-for="(product, index) in products"
			:key="product._id"
            @click="updateActiveIndex(index)"
		>
			<span>{{product.title}}</span>
            <button class="btn btn-outline-danger btn-sm" @click="delproduct(product._id)">X</button>
		</li>
        </ul>   -->
 </template>
<style scoped>
    /* .list-group-item:hover{
        background-color: #0d6efd;
        color: azure;
    }  */
 .title:hover{
      background-color: #0d6efd;
        color: azure;

 }
.col{
    border: 1px solid  #dee2e6;
    font-size: 12px;
     background: white;
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
    margin-top:5px;
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
.area{
    border: 1px solid #dee2e6;
    height: 80px;
    font-size: 12px;
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
    font-size: 12px;
    overflow: hidden;
    padding: 5px;
     background: white;
    width: 140px;
    
    
    
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