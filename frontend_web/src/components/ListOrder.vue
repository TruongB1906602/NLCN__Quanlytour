<script>
    import OrderService from "../services/Order.service";
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
                orders:Array,
                refeshlist:Function,
                activeIndexOrder: { type: Number, default: -1 },
            },
        emits: ["update:activeIndexOrder"],
            methods:{
                toastjs,
                async delorder(id){
                    try{
                        await OrderService.delete(id);
                        this.refeshlist();
                        this.toasts.title = "Success",
                        this.toasts.msg="Đã xóa tour",
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
                updateActiveIndexOrder(index) {
                this.$emit("update:activeIndexOrder", index);
                },
            }
        }
    </script>
    <template>
    
         <div class="container">
         <div class=" row-cols-1">
            <h4 class="heading" >Tên tour</h4>
            <div class="title" v-for="order in orders"
                :key="order._id"
              
            >
            
                <span>{{order.title}}</span></div>
               
            </div>
            <div class=" row-cols-1">
            <h4 class="heading" >Tên khách</h4>
            <div class="name" v-for="order in orders"
                :key="order._id"
              
            >
            
                <span>{{order.name}}</span></div>
               
            </div>
            <div class=" row-cols-1">
            <h4 class="heading" >Địa chỉ</h4>
            <div class="address" v-for="order in orders"
                :key="order._id"
              
            >
            
                <span>{{order.address}}</span></div>
               
            </div>
            
            <div class=" row-cols-1">
            <h4 class="heading" >Ngày đặt</h4>
            <div class="date" v-for="order in orders"
                :key="order._id"
              
            >
            
                <span>{{order.createdAt}}</span></div>
               
            </div>
            <div class=" row-cols-1">
            <h4 class="heading" >Sđt</h4>
            <div class="phone" v-for="order in orders"
                :key="order._id"
              
            >
            
                <span>{{order.phone}}</span></div>
               
            </div>
            <div class=" row-cols-1">
            <h4 class="heading" >Tình trạng</h4>
            <div class="state" v-for="order in orders"
                :key="order._id"
              
            >
            
                <span>{{order.status}}</span></div>
               
            </div>
          
              <div class=" row-cols-1" >
            <h4 class="heading">Chức năng</h4>
            <div  class="btn list-group-item product-item d-flex" v-for="(order, index) in orders"
            
                :key="order._id"
                @click="updateActiveIndexOrder(index)"
               
            >
              <button class=" btn-outline-danger btn-sm" @click="delorder(order._id)"><ion-icon name="close-circle-outline"></ion-icon></button>
               <button class=" btn-outline-danger btn-sm" @click="updateActiveIndexOrder(order._id)"><ion-icon name="create-outline"></ion-icon></button>
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
    .phone{
        height:80px;
         font-weight: 500;
        font-size: 14px;
        padding: 10px;
         border: 1px solid #dee2e6;
        background: white;
        width: 100px;
          
    }
    .address{
         border: 1px solid #dee2e6;
        height: 80px;
        font-size: 14px;
         width: 150px; 
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
        width: 200px;
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
    .state{
        width:100px;
        border: 1px solid #dee2e6;
        height: 80px;
        font-size: 14px;
         font-weight: 500;
         padding: 10px;
         overflow: hidden;
        background: white;
        
    }
    .name{
        
         border: 1px solid #dee2e6;
        height: 80px;
        font-size: 14px;
        width: 160px;
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