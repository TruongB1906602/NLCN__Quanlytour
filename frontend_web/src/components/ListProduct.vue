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
                 title:"",
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

           
        },
        computed:{
            filterProductsByName: function() {
                return this.products.filter(product => !product.title.indexOf(this.title.charAt(0).toUpperCase(0)))
       
 
            },
        }
    }
</script>
<template>
    <div >
            <div class="form-search">
                <form action="" class="form-inline">
                    <h5 class="search"> <label for="">Tìm kiếm</label>  </h5>
                    <input type="text" class="form-control" v-model="title">
                  
                </form>
            </div>  


     <div class="container">
   
        
    
                <div class=" row-cols-1">
                    <h4 class="heading" >Tên tour</h4>
                    <div class="title"  v-for="product in filterProductsByName"
                                        :key="product._id"
                    >
                    
                            <span>{{product.title}}</span>
                    </div>
                    
                </div>
                <div class=" row-cols-1" >
                    <h4 class="heading">Giá</h4>
                    <div  class="price" v-for="product in filterProductsByName"
                        :key="product._id"
                    
                    >
                        <span>{{product.price}}</span></div>
                    
                    </div>
                    
                    <div class=" row-cols-1" >
                    <h4 class="heading">Ngày đi</h4>
                    <div  class="date" v-for="product in filterProductsByName"
                        :key="product._id"
                    
                    >
                        <span>{{product.date}}</span></div>
                    
                    </div>
                    <div class=" row-cols-1" >
                    <h4 class="heading">SL tour</h4>
                    <div  class="sl" v-for="product in filterProductsByName"
                        :key="product._id"
           
                        >
                            <span>{{product.sl}}</span></div>
                        
                        </div>
                        <div class=" row-cols-1" >
                        <h4 class="heading">Ảnh</h4>
                        <div  class="images" v-for="product in filterProductsByName"
                            :key="product._id"
                        
                        >
                                    <img :src=product.img[0] style="width: 110px; height:60px; margin: 0px 5px;" alt="">
                                </div>
                            
                            </div>
                            <div class=" row-cols-1" >
                            <h4 class="heading">Chức năng</h4>
                            <div  class="btn list-group-item product-item d-flex" v-for="(product, index) in filterProductsByName"
                            
                                :key="product._id"
                                @click="updateActiveIndex(index)"
                            
                            >
                                <button class=" btn-outline-danger btn-sm" @click="delproduct(product._id)"><ion-icon name="close-circle-outline"></ion-icon></button>
                                <button class=" btn-outline-danger btn-sm" @click="updateActiveIndex(product._id)"><ion-icon name="create-outline"></ion-icon></button>
                                </div>
                                </div>
                        </div>
                        </div>
 </template>
<style scoped>
  
 .title:hover{
      background-color: #0d6efd;
        color: azure;

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
.form-search{
    font-weight: 400;
    
    white-space: nowrap;
    text-align: left;
    background: white;
    color: black;
    padding: 5px;
    margin-right: 30px;
    width: 300px;
    float: right;
    border-radius: 0.357rem;
    border: 1px solid #ddd;
   margin-bottom: 20px;
}
.form-inline input{
    width: 70%;
    margin-left: 10px;
    height: 30px;
    display: inline-block; background-color: #f1f1f1;
}
.search{
    display: inline-block;
    font-size: 15px;
   
}
.row-cols-1{
    /* width: 10%; */
    height: 20%;
   

}
.container{
    display: flex;
   
    max-width: 100%;
}

</style> 