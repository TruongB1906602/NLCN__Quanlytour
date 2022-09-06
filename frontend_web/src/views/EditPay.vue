<template>

    <!-- <HeaderShop></HeaderShop> -->
    <toastsVue></toastsVue>
        <div v-if="pay" class="page">
        
            <Paymentform
                  :pay="pay"
                  @submit:pay="updatePay"
            />
            
        </div>
    
    </template>
    
    <script>
    import toastjs from "../assets/js/toasts";
    import toastsVue from "../components/toasts.vue";
    import PayService from "@/services/Pay.service";
    import HeaderShop from "../components/HeaderShop.vue";
    import Paymentform from "../components/Paymentform.vue";
    export default {
      data(){
        return {
             toasts:{
                  title:"Success",
                  msg:"Sửa thông tin thành công",
                  type:"success",
                  duration:2000
                  },
            pay:null,
        }
      },
        components: {
    // HeaderShop,
  
    toastsVue,
    Paymentform
},
        methods: {
        toastjs,
        async getpay(id) {
                try {
                    this.pay = await PayService.get(id);
                    console.log(this.pay.id)
                } catch (error) {
                    console.log(error);
                    this.$router.push({
                        name: "notfound",
                        params: { pathMatch: this.$route.path.split("/").slice(1) },
                        query: this.$route.query,
                        hash: this.$route.hash,
                    });
                }
            },
            async updatePay(data) {
                try {
                    await PayService.update(this.pay._id,data);
                    this.toastjs();
                }catch(error) {
                    console.log(error);
                        this.toasts.title = "Warning",
                        this.toasts.msg="Tài khoản không phải ADMIN",
                        this.toasts.type = "warn",
                        this.toasts.duration=2000
                        this.toastjs();
                    }
                },  
        },
        created(){
            this.getpay(this.$route.params.id);
        }
    };
    </script>
    <style scoped>
    h4{
        margin-left: 30px;
    }
    </style>
    