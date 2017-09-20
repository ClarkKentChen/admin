<template>
  <div class='admin'>
    <div class='header'>
      <Header></Header>
    </div>
    <div class='wrapper-content'>
        <Navber></Navber>
    </div>

  </div>
</template>

<script>
import Header from '../Header/Headers';
import Navber from '../navber/Navber';

export default{
  created(){

  },
components:{
    'Header':Header,
    'Navber':Navber
  }

}
</script>

<style>
html{
  height: 100%;
  width: 100%;
  /* position: absolute; */
}
body{
  overflow-y: auto !important;
height: 100%;
  width: 100%;
}
body{
  background: url('./a.jpg') no-repeat;
  background-size: cover;
  width: 100%;
  height: 100%;
}
.header{

  /* overflow: hidden; */
  border: 1px solid red;
}

</style>

