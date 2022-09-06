<script>
  import * as yup from "yup";
  import { Form, Field, ErrorMessage } from "vee-validate";

import { mapState } from 'pinia'
 import { useAuthStore } from "@/stores/Auth.store";
import CartService from '../services/Cart.service'
import OrderService from '../services/Order.service'
import toastsVue from '../components/toasts.vue'
import toastsjs from '../assets/js/toasts.js'
  
  export default{
      props:{
      
          pay: { type: Object, required: true },
          resetAfterSubmit: { type: Boolean, default: false },
          
            // refeshlistcart:Function,
            // carts:[],
      },
        //  computed:{
        //     ...mapState(useAuthStore,{
        //         currentUser: "user",
        //     }),
        // },
     data() {
        const payform = yup.object().shape({ 
            name: yup
            .string()
            .required("Tên phải có giá trị."),   
            
            others: yup
            .string(),
          
      
            //  userId: yup
            //  .string(""),
            
            address: yup
            .string()
            .required("Địa chỉ phải có giá trị."),
            phone: yup
          .string()
          .required("Điện thoại không có giá trị!")
          .matches(
            /((09|03|07|08|05)+(\d{8})\b)/g,
            "Số điện thoại không hợp lệ."
				),
           
            });
            return {
            
            paydetails:this.pay,
            payform,
            paydetails:{
             
              name:"",
              phone:"",
              address:"",
              others:""

            },
              cartItem:[],
               orderitem:{
                    userId:"",
                     quantity:"",
                     title:"",
                     price:"",
                     name:"",
                     phone:"",
                     address:"",
                     
                  
                },
               
                 toasts:{
                    title:"Success",
                    msg:"Thêm thông tin thành công!",
                    type:"success",
                    duration:2000
                 },

                 
              
            }
        },

       
       
    components:{
      Form,
      Field,
      ErrorMessage,
      toastsVue,
    },
    emits:['submit:pay'],
      methods:{
        
         
             
           toastsjs,
          submitpay(){
      
          // this.paydetails.userId = this.currentUser._id;
        
          this.$emit('submit:pay',this.paydetails);
          	if (this.resetAfterSubmit) {
              
				    this.$refs.contactForm.resetForm();
			  }
         
            
      },
        
            
                
             
      }
  }
     
  
  
</script>
<template>
 
<div class="wrapper">

     <Form :validation-schema="payform"  @submit="submitpay" >
        
     <div class="left">
     
         <h4>Thêm khách hàng</h4>
      <div class="form-group">
        <label for="nameproduct">Tên khách</label>
        <Field type="text" class="form-control" id="priceproduct" name="name" placeholder="Nhập vào họ tên" v-model="paydetails.name" />
        <ErrorMessage name="name" class="text-danger"  />
      </div>
  
      <div class="form-group">
        <label for="addressproduct">Địa chỉ</label>
        <Field type="text" class="form-control" id="priceproduct" name="address" placeholder="Nhập vào địa chỉ" v-model="paydetails.address" />
        <ErrorMessage name="address" class="text-danger"  />
      </div>
     
      <div class="form-group">
        <label for="phoneproduct">Phone</label>
        <Field type="number" class="form-control" id="nameproduct" name="phone"  placeholder="Nhập vào sđt" v-model="paydetails.phone"/>
          <ErrorMessage name="phone" class="text-danger" />
      </div>
    
    
      </div>
      <div class="right">
           <h4>Thông tin bổ sung</h4> 
          <div class="form-group">
            
           <textarea   cols="35" rows="4"  name="others" v-model="paydetails.others" ></textarea>
          
          </div>
        
      </div>
        <div class="btn">
                <button  type="submit" 
                
               class="btnsave btn-primary">Lưu thông tin </button>
        
           </div>
     
    </Form>
  
  
</div>
 
</template>
<style scoped>
.wrapper{
  /* margin-left: 160px; */
   width:1200px;
    border-radius: 8px;
   
    padding: 22px;
  
   background: white;
}
.right{
  width: 280px;
  
    
   display: inline-block;
}
#othersproduct{
   width: 400px;
   height: 50px;
   display: inline-block;
   
  border: 1px solid grey;
}
h4{
    font-size: 18px;
    font-weight: 600;
    line-height: 21px;
   
    font-weight: 600;
    margin-bottom: 15px;
    color: #006bbf;
    border-bottom: 1px solid #006bbf;
    padding-bottom: 7px;
   
}
.btn{
  display:block;
}
.left{
   
 margin-right: 30px;
  width:300px;
  display: inline-block;

}
.btnsave{
 
    border-radius: 4px;
    font-weight: 500;
    width:50%;
    float:left;
    margin-right:10px;
    height: 45px;
    text-align: center;
    cursor: pointer;
    transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
    position: relative;
    background: #338dbc;
    color: white;
}
.form-control1{
   font: inherit;
    color: currentColor;
    width: 200px;
    height: 50px!important;
    
    padding: 6px 0 7px;
  
    background: none;
    box-sizing: content-box;
    animation-name: mui-auto-fill-cancel;
    letter-spacing: inherit;
    animation-duration: 10ms;
}
.form-control{
  font: inherit;
    color: currentColor;
   
  
    height: 1.1876em;
    margin: 0;
    display: block;
    padding: 6px 0 7px;
   
    background: none;
    box-sizing: content-box;
    animation-name: mui-auto-fill-cancel;
    letter-spacing: inherit;
    animation-duration: 10ms;
 

}
.form-control1{
  font: inherit;
    color: currentColor;

    height: 1.1876em;
  
    display: block;
    padding: 6px 0 7px;
    min-width: 0;
    background: none;
    box-sizing: content-box;
    animation-name: mui-auto-fill-cancel;
    letter-spacing: inherit;
    animation-duration: 10ms;
 

}
.form-group{
 
  margin-bottom: 15px;
    border-bottom: 1px solid grey;
}
.btn_img-add{
 font-size: 30px; 
 color: dodgerblue;
}
</style>