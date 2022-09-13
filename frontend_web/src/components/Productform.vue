<script>
  import * as yup from "yup";
 
  import { Form, Field, ErrorMessage } from "vee-validate";

  import ProductService from "../services/Product.service";
  export default{
       
      props:{
          product: { type: Object, required: true },
          resetAfterSubmit: { type: Boolean, default: false },
      },
     
     data() {
    
        const productform = yup.object().shape({
            name: yup
            .string()
            .required("Tên phải có giá trị.")
            .min(3, "Tên phải ít nhất 3 ký tự."),
             img: yup
            .string()
            .required("Hình ảnh phải có giá trị."),
            price: yup
            .string()
            .required("Giá sản phẩm phải có giá trị."),
            sl: yup
            .string()
            .required("Giá sản phẩm phải có giá trị."),
            time: yup
            .string()
            .required("Thời gian đi có giá trị."),
            date: yup
            .string()
            .required("Ngày đi có giá trị."),
            desc: yup
            .string(),
            category: yup
            .string()
            .required("Loại sản phẩm phải có giá trị."),
            
            });
            return {
      
            productLocal:this.product,
            productform,
             
            }
            
        },
        
    components:{
    Form,
    Field,
    ErrorMessage,
  
  
  
},
    
    emits:['submit:product'],
    
    
    methods:{
    
      getdata(){
        ClassicEditor
    .create( document.querySelector( '#editor2' ), {
     

        autosave: {
            save( editor ) {
                return saveData( editor.getData() );
            }
        }
    } )
    .then( editor => {
        window.editor = editor;

        displayStatus( editor );
    } )
    .catch( err => {
        console.error( err.stack );
    } );

// Save the data to a fake HTTP server (emulated here with a setTimeout()).
function saveData( data ) {
    return new Promise( resolve => {
        setTimeout( () => {
            console.log( 'Saved', data );

            resolve();
        }, HTTP_SERVER_LAG );
    } );
}

// Update the "Status: Saving..." info.
function displayStatus( editor ) {
    const pendingActions = editor.plugins.get( 'PendingActions' );
    const statusIndicator = document.querySelector( '#editor-status' );

    pendingActions.on( 'change:hasAny', ( evt, propertyName, newValue ) => {
        if ( newValue ) {
            statusIndicator.classList.add( 'busy' );
        } else {
            statusIndicator.classList.remove( 'busy' );
        }
    } );
}

   
        },

      
    
      addImge(){
        document.querySelector("#imgproduct2").style.display = "block";
      },
      submitproduct(){
          this.$emit('submit:product',this.productLocal);
          	if (this.resetAfterSubmit) {
				     this.$refs.contactForm.resetForm();
			  }


        //  CKEDITOR.instances.editor2.updateElement()
        //  console.log( CKEDITOR.instances.editor2.getData());
        //  this.productLocal=  CKEDITOR.instances.editor2.updateElement();
      },
      
    },
   
    
    
  }
</script>
<template>


<div class="container">
  <h5> Thông tin tour</h5>
   <Form :validation-schema="productform"  @submit="submitproduct" >
  <div class="row">
    <div class="col">
      <div class="form-group">
        <label for="nameproduct">Name</label>
        <Field type="text" class="form-control" id="nameproduct" name="name" placeholder="Enter name product" v-model="productLocal.title" />
        <ErrorMessage name="name" class="text-danger" />
      </div>
    </div>
    
  </div>
  <div class="row">
    <div class="col">
         <div class="form-group">
        <label for="priceproduct">Price</label>
        <Field type="number" class="form-control" id="priceproduct" name="price" placeholder="Enter product price" v-model="productLocal.price" />
        <ErrorMessage name="price" class="text-danger"  />
      </div>
    </div>
    <div class="col">
     <div class="form-group">
        <label for="categoryproduct">Category</label>
        <Field type="text" class="form-control" id="categoryproduct" name="category" placeholder="Enter product categrogy" v-model="productLocal.categories"/>
          <ErrorMessage name="category" class="text-danger" />
      </div>
    
  </div>
  </div>

  <div class="row">
    <div class="col">
         <div class="form-group">
        <label for="priceproduct">Ngày đi</label>
        <Field type="text" class="form-control" id="priceproduct" name="date" placeholder="Enter product price" v-model="productLocal.date" />
        <ErrorMessage name="date" class="text-danger"  />
      </div>
    </div>
    <div class="col">
     <div class="form-group">
        <label for="categoryproduct">Thời gian</label>
        <Field type="text" class="form-control" id="categoryproduct" name="time" placeholder="Enter product categrogy" v-model="productLocal.time"/>
          <ErrorMessage name="time" class="text-danger" />
      </div>
    </div>
  </div>
   <div class="row">
    <div class="col">
         <div class="form-group">
        <label for="priceproduct">Ngày đi</label>
        <Field type="text" class="form-control" id="priceproduct" name="date" placeholder="Enter product price" v-model="productLocal.date" />
        <ErrorMessage name="date" class="text-danger"  />
      </div>
    </div>
    <div class="col">
     <div class="form-group">
        <label for="categoryproduct">Thời gian</label>
        <Field type="text" class="form-control" id="categoryproduct" name="time" placeholder="Enter product categrogy" v-model="productLocal.time"/>
          <ErrorMessage name="time" class="text-danger" />
      </div>
    
  </div>
  </div>
    <div class="row">
      <div class="col">
         <div class="form-group">
        <label for="imgproduct">Image</label>
        <div style="display: flex; flex-direction: row;">
        <Field type="text" class="form-control" id="imgproduct" name="img" placeholder="Enter link product image" v-model="productLocal.img[0]"/>
        <i class="bi bi-file-plus btn_img-add" @click="addImge()"></i>
        </div>
        <input type="text" class="form-control" id="imgproduct2" placeholder="Enter link product image" name="img" style="display:none; margin: 10px 0;" v-model="productLocal.img[1]">
          <ErrorMessage name="img" class="text-danger" />
      </div>
      </div>
      <div class="col">
     <div class="form-group">
        <label for="priceproduct">Số lượng tour còn:</label>
        <Field type="number" class="form-control" id="priceproduct" name="sl" placeholder="Enter address" v-model="productLocal.sl" />
        <ErrorMessage name="sl" class="text-danger"  />
      </div>
      </div>

  </div>
  
  <div class="row">
    <div class="col">
      <div class="form-group">
        <label for="nameproduct">Product Description</label>

          <textarea @click="getdata" name="desc" href="#autosave-feature" id="editor2"  class="form-control desc " rows="8" cols="80"  placeholder="Enter product description" v-model="productLocal.desc" >
              </textarea>
       
         <ErrorMessage name="desc" class="text-danger" />  
      </div>
      </div>
  </div>
 
  <div class="btn-main">
    <button type="submit" class="btn btn-primary">Lưu</button>
       <router-link to="/admin" style="margin: 10px;">
            <button class="btn btn-danger">Trở về</button>
        </router-link>
        </div>

  </Form>
</div>
    


</template>
<style scoped>

.wrapper{
 
   width:100%;
    margin: 50px 200px;
}
.col{
  border:none;
}
.container{
  
   padding: 30px;
  
   
    background: #ffffff;
    box-shadow: 0px 8px 8px rgb(0 0 0 / 3%);
    border-radius: 16px;
    justify-content: space-between;
}


.btn_img-add{
 font-size: 30px; 
 color: dodgerblue;
}






</style>