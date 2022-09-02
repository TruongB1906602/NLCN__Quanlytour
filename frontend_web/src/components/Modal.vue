<script>


export default {
    data() {
        return {
            showModal: true
        };
    },
    components: { Logup }
}
        


</script>
<template>
  <div id="app">
 <button class="button" @click="showModal = true">
  Show Modal
 </button>
 <Transition name="fade" appear>
  <div class="modal-overlay" v-if="showModal" @click="showModal = false"></div>
 </Transition>
 <transition name="slide" appear>
  <div class="modal" v-if="showModal">
   
     <!--  -->
   <button class="button" @click="showModal = false">
    Close Modal
   </button>
  </div>
 </Transition>
</div>
</template>


<style lang="scss">
* {
 margin: 0;
 padding: 0;
 box-sizing: border-box;
}
#app {
 position: relative;
 
 justify-content: center;
 align-items: center;
 width: 200vw;
 min-height: 100vh;
 overflow-x: hidden;
 display: block;
}

.button {
 appearance: none;
 outline: none;
 border: none;
 background: none;
 cursor: pointer;
 
 display: inline-block;
 padding: 15px 25px;
 background-image: linear-gradient(to right, #CC2E5D, #FF5858);
 border-radius: 8px;
 
 color: #FFF;
 font-size: 18px;
 font-weight: 700;
 
 box-shadow: 3px 3px rgba(0, 0, 0, 0.4);
 transition: 0.4s ease-out;
 
 &:hover {
  box-shadow: 6px 6px rgba(0, 0, 0, 0.6);
 }
}

.modal-overlay {
  position: absolute;
 top: 0;
 left: 0;
 right: 0;
 bottom: 0;
 z-index: 1;
 background-color: rgba(0, 0, 0, 0.3);
}

.modal {
 position: fixed;
 top: 30%;
 left: 30%;
 z-index: 5;
 width: 100%;
  transform: translate(-30%, -30%);
 max-width: 400px;
 height: 400px;
 background-color: white;
 border-radius: 16px;
 display: inline-block;
 padding: 25px;
 
 h1 {
  color: #222;
  font-size: 32px;
  font-weight: 900;
  margin-bottom: 15px;
 }
 
 p {
  color: #666;
  font-size: 18px;
  font-weight: 400;
  margin-bottom: 15px;
 }
}

.fade-enter-active,
.fade-leave-active {
 transition: opacity .5s;
}

.fade-enter,
.fade-leave-to {
 opacity: 0;
}

.slide-enter-active,
.slide-leave-active {
 transition: transform .5s;
}

.slide-enter,
.slide-leave-to {
 transform: translateY(-50%) translateX(100vw);
}

</style>