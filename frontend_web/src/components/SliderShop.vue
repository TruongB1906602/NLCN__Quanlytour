<template>
<div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
          <video src="@/assets/images/vid-4.mp4"  loop autoplay muted class="d-block w-100 " ></video>
      
    </div>
    <div class="carousel-item">
      <video src="@/assets/images/vinhalong.mp4"  loop autoplay muted class="d-block w-100 "></video>
      
    </div>
    <div class="carousel-item">
     <video src="@/assets/images/phuquoc.mp4" loop autoplay muted class="d-block w-100 "></video>
    
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</template>
<style scoped>
  #carouselExampleCaptions{
    margin-top: 25px;
  }
  
.carousel-indicators .active {
    width: 20px; 
    height: auto;
    margin: 0;
    background-color: #fff;
}
</style>