!<template>
  <div class>
    <Header />
    personalCenter: 
    <div class="rem">页面测试:{{msg}}</div>
  </div>
</template>

<script type="text/javascript">
import Header from "@/components/Header/Header.vue";
export default {
  name: "PersonalCenter",

  data() {
    return {
      
    };
  },
  components: {
    Header
  },
  computed: {
    msg() {
      return this.$store.getters.getResturantName;
    }
  }
};
</script>

<style lang="scss" scoped>
 .rem{
   font-size: .5rem;
 }

</style>
