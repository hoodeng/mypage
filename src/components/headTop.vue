<template>
  <div class="header-top-pos">
    <div class="header_container">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item class="header-top-text" style="color:#611616">{{title}}</el-breadcrumb-item>
        <!-- <el-breadcrumb-item v-for="(item, index) in $router.name" :key="index">{{item}}</el-breadcrumb-item> -->
      </el-breadcrumb>

      <!-- <el-dropdown  >
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item command="home">首页</el-dropdown-item>
        <el-dropdown-item command="signout">退出</el-dropdown-item>
      </el-dropdown-menu>
      </el-dropdown>-->
    </div>
  </div>
</template>
<script>
import { mapActions, mapState } from "vuex";

export default {
  props: ["title"],

  data() {
    return {};
  },
  created() {
    console.info(this.$route.meta);
    // if (!this.adminInfo.id) {
    // 	this.getAdminData()
    // }
  },
  computed: {
    // ...mapState(['adminInfo']),
  },
  methods: {
    async handleCommand(command) {
      if (command == "home") {
        // this.$router.push('/manage');
      } else if (command == "signout") {
        // const res = await signout()
        // if (res.status == 1) {
        // 	this.$message({
        //                 type: 'success',
        //                 message: '退出成功'
        //             });
        //             this.$router.push('/');
        // }else{
        // 	this.$message({
        //                 type: 'error',
        //                 message: res.message
        //             });
        // }
      }
    },
    updateTitle(t) {
      this.title = t;
    }
  }
};
</script>

<style lang="less">
@import "../style/mixin";
.header-top-pos {
  position: absolute;
  top: 0px;
  left: 230px;
  text-align: left;
  width: 100%;
  height: @headertopheight;
  z-index: 100;
  overflow: hidden;

  .header_container {
    background-color: #e8edf3;
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #611616;

    .header-top-text {
      color: #611616;
      font-weight: bolder;
      font-size: 16px;
      padding-left: 20px;
    }
  }
}

.el-breadcrumb-item {
  color: #611616;
}
.el-dropdown-menu__item {
  text-align: center;
}
</style>
