<script>
  import * as yup from "yup";
  import { Form, Field, ErrorMessage } from "vee-validate";
  import UserService from "../services/User.service";
  import toast from "../assets/js/toasts";
  import {mapActions} from "pinia";
  import { useAuthStore } from "@/stores/Auth.store";
  export default{
     props:{user:Object},
     data() {
        const userform = yup.object().shape({
            name: yup
            .string()
            .required("Tên phải có giá trị.")
            .min(3, "Tên phải ít nhất 3 ký tự."),
            email:yup
            .string()
            .required("Email phải có giá trị")
            .email("Email không hợp lệ"),
            password:yup
            .string()
         
          
            });
            return {
            userform,
            infouser:this.user,
            toasts:{
                  title:"",
                  msg:"",
                  type:"",
                  duration:0
              },
            }
    },
    components:{
      Form,
      Field,
      ErrorMessage
    },
    methods:{
        toast,
        ...mapActions(useAuthStore, ["logout"]),
        async updateUser(){
            try{
                await UserService.update(this.infouser._id,this.infouser);
                    this.toasts.title="Success",
                    this.toasts.msg="Đã sửa thông tin vui lòng đăng nhập lại !",
                    this.toasts.type="success",
                    this.toasts.duration=3000
                this.toast();
                setTimeout(()=>{
                    this.logout();
                    this.$router.push({name:"login"});
                },2000);
            }catch(error){
                    this.toasts.title="Lỗi rồi",
                    this.toasts.msg="Có lỗi hoặc trùng tên người dùng",
                    this.toasts.type="error",
                    this.toasts.duration=3000
                    this.toast();
                console.log(error);
            }
        },
    },
}
</script>
<template>
 <div class="wrapper">
    <Form :validation-schema="userform">
      <div class="form-group">
        <label for="nameproduct" class="name">Họ và tên:</label>
        <Field type="text" class="form-control" id="nameproduct" name="name" v-model="infouser.username" placeholder="Enter name product" />
        <ErrorMessage name="name" class="text-danger" />
      </div>
          <div class="form-group">
        <label for="nameproduct"  class="name">Email:</label>
        <Field type="text" class="form-control" id="nameproduct" name="email" v-model="infouser.email" placeholder="Enter name product" />
        <ErrorMessage name="email" class="text-danger" />
      </div>
         <div class="form-group">
        <label for="nameproduct"  class="pass">Password:</label>
        <Field type="password" class="form-control" id="nameproduct" name="password" v-model="infouser.password" placeholder="Enter password" />
    
      </div>
      <button type="submit" class="btn btn-primary" @click="updateUser">Lưu</button>
      <br>
    </Form>
</div>       
</template>
<style scoped>
.wrapper{
  
  width: 400px;
  height: 300px;
}
.name{
  margin-bottom: 10px;
}
.form-control{
  
  font: inherit;
    color: currentColor;
   
    width: 100%;
   border: none;
    height: 1.1876em;
    margin: 0;
    display: block;
    padding: 6px 0 7px;
    min-width: 0;
    background: none;
    box-sizing: content-box;
    animation-name: mui-auto-fill-cancel;
    letter-spacing: inherit;
    animation-duration: 10ms;

}
.btn{
  color: rgb(253, 253, 253);
    width: 100%;
    border: none;
    height: 44px;
    margin: 0px;
    padding: 10px 40px;
    font-size: 16px;
    min-height: 20px;
    font-weight: 600;
    border-radius: 8px;
    text-transform: none;
    background-color: rgb(255, 51, 102);
}
.form-group{
    margin-bottom: 15px;
    border-bottom: 1px solid grey;
   
}
</style>