import {createRouter,createWebHistory } from "vue-router";
import ShopView from "@/views/ShopView.vue";

const routes = [
    {
        path: "/",
        name: "ShopMain",
        component: ShopView,
    },
  
   
    {
        path: "/login",
        name: "login",
        component: () => import("@/views/LoginUser.vue"),
    },
   
    
    {
        path: "/logup",
        name: "Logup",
        component: () => import("@/views/Logup.vue"),
    },
    {
        path: "/modal",
        name: "modal",
        component: () => import("@/components/Modal.vue"),
    },
    {
        path: "/orderdetails",
        name: "orderdetails",
        component: () => import("@/views/Orderdetails.vue"),
    },
   
    {
        path: "/details/:id",
        name: "details",
        component:() => import("@/views/DetailsProduct.vue"),
        
      },  
      {
        path: "/Cartshopdetails",
        name: "Cartshopdetails",
        component:() => import("@/views/Cartshopdetails.vue"),
        
      },  
      {
        path: "/hotels/:id",
        name: "hotels",
        component:() => import("@/views/DetailsHotel.vue"),
        
      },  
      
      {
        path: "/places",
        name: "places",
        component:() => import("@/views/Place.vue"),
        
      },  
      
    
      {
        path: "/hotel",
        name: "hotel",
        component:() => import("@/views/Hotel.vue"),
        
      },  
      
      {
        path: "/slider1",
        name: "slider1",
        component:() => import("@/views/Slider1.vue"),
        
      },  
      
      {
            path: "/Cart",
            name: 'CartShop',
             component:() => import("@/views/CartShop.vue"),
     },

        
    
    {
        path: "/addproduct",
        name: "addproduct",
        component: () => import("@/views/AddProduct.vue"),
    },
    
    {
        path: "/addhotel",
        name: "addhotel",
        component: () => import("@/views/AddHotel.vue"),
    },
    {
        path: "/addpay",
        name: "addpay",
        component: () => import("@/views/Addpay.vue"),
    },
    {
        path: "/addcreatepay",
        name: "addcreatepay",
        component: () => import("@/views/Addcreatepay.vue"),
    },
  
    {
        path: "/editproduct/:id",
        name: "editproduct",
        component: () => import("@/views/EditProduct.vue"),
    },
    {
        path: "/edithotel/:id",
        name: "edithotel",
        component: () => import("@/views/EditHotel.vue"),
    },
    {
        path: "/editpay/:id",
        name: "editpay",
        component: () => import("@/views/EditPay.vue"),
    },
    {
        path: "/profile",
        name: "profile",
        component: () => import("@/views/UserProfile.vue"),
    },
    {
        path: "/success",
        name: "success",
        component: () => import("@/views/Successorder.vue"),
    },
    {
        path: "/admin",
        name: "admin",
        component: () => import("@/views/Adminview.vue"),
    },
    {
        path: "/:pathMatch(.*)*",
        name: "NotFound",
        component: () => import("@/views/NotFound.vue"),
    },
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

export default router;