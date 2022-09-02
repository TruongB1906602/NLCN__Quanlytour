<script>
import CartService  from '../services/Cart.service';
import ProductService  from '../services/Product.service';
    export default{
        data(){
            return{
                products:[],
                detailproduct:[],
            }
        },
        props:{
            refeshlistcart:Function,
            carts:[],
        },
        emit:[
            "deleted:cartIndex"
        ],
        methods:{
      
       async deletedcart(index,id){
        var newsl;
            this.$emit("deleted:cartIndex",index);
            console.log(id);
          
    
            const productItem = await ProductService.get(id);
            console.log(productItem);
                        var newsl= productItem.sl - 1;
                         console.log(newsl);
             
             ProductService.update(productItem._id,{sl: newsl });
            
        },
        
       
    },

    computed: {
        priceFormat(){
            var number;
              for(var i in this.carts){
             number=this.carts[i].price;
           }
                return new Intl.NumberFormat('de-DE',{style: 'currency',currency: 'VND'}).format(number);
        },
          total(){
           var total=0;
           for(var i in this.carts){
              total+=this.carts[i].price*this.carts[i].quantity;
           }
            return  total;
        }   
    },
    
    
}
</script>
<template>
   <div class="row" 
      v-for="(item,index) in carts"
      :key="item._id"
      >
     
          <div class="col-md-2 col-lg-2 col-xl-2">
            <img :src="item.img"
                class="img-fluid rounded-3" alt="">
            </div>
            <div class="col-md-6 col-lg-6 col-xl-6">
                <h6 class="text">{{item.title}}</h6>
                    <div>
                       
                         <p class="text">   Giá: <span style="font-size: 14px; color:black">{{  Intl.NumberFormat('de-DE',{style: 'currency',currency: 'VND'}).format(item.price) }}/người </span></p>  
                         
                        <p class="text">Số lượng: <span style="font-size: 14px; color:black">{{item.quantity}}</span></p> 
                       
                      </div>
            </div>
            <div class="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                <h6 class="mb-0 price">{{ Intl.NumberFormat('de-DE',{style: 'currency',currency: 'VND'}).format(item.price* item.quantity)}} </h6>
            </div>
            <div class="col-md-1 col-lg-1 col-xl-1 text-end">
                <button type="button" @click="deletedcart(index,item.productId)" class="text-muted btn btn-exit"><img src="@/assets/images/del.png" alt=""></button>
            </div>
            <hr>          
    </div>      
      
</template>
<style scoped>
   .col-md-1 img{
    width: 25px;
    height: 25px;
   
   }
    .text{
    font-size: 1apx;
    font-weight: 500;
    line-height: 19px;
    color: black;
    margin-bottom: 4px;
      
   }
   .img-fluid {
    width: 60px;
    height: 60px;
    margin-bottom: 10px;
   }
   .col-xl-6 {
    flex: 0 0 auto;
    width: 50%;
   }
</style>