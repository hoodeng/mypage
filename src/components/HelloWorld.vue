<template>
  <el-container class="fillcontain">
    <el-aside width="200px">
      <div style="width: 100%;">
        <img class="avator" src="@/assets/avator.jpg">
      </div>
      <div class="aside-item user-name">
        <div>藤藤</div>
      </div>
      <div
        v-bind:class="selectBlog? 'aside-item  blog  selected' : 'aside-item  blog'"
        @click="blog"
      >我的随笔</div>
      <div
        v-bind:class="selectAbout? 'aside-item  about selected' : 'aside-item  about'"
        @click="about"
      >关于</div>
    </el-aside>
    <el-container>
      <el-header>
        <head-top :title="title" style="width:100%;"></head-top>
        <!-- Header -->
      </el-header>
      <el-main>
        <router-view></router-view>
        <!-- Main -->
      </el-main>
      <!-- <el-footer>Footer</el-footer> -->
    </el-container>
  </el-container>
</template>

<script>
const SIDE_BLOG_ITEM = 0x01;
const SIZE_ABOUT_ITEM = 0x02;
import headTop from "@/components/headTop";
export default {
  name: "helloWorld",
  data() {
    return {
      articles: ["背影", "我家的猫", "故都的秋"],
      username: "",
      isCollapse: false,
      headerTitle: "",
      select: SIDE_BLOG_ITEM
    };
  },
  created() {
    console.info("container created");
    console.info(this.$router);
    this.headerTitle = "我的随笔";
  },
  methods: {
    toggleSideBar() {
      this.isCollapse = !this.isCollapse;
    },
    logout: function() {
      this.$confirm("确认退出?", "提示", {})
        .then(() => {
          sessionStorage.removeItem("user");
          this.$route.push("/login");
        })
        .catch(() => {});
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    write(v) {
      console.info("write---->");
    },
    blog(v) {
      console.info("blog---->");
      this.$router.push({ path: "list" });
      this.headerTitle = "我的随笔";
      this.select = SIDE_BLOG_ITEM;
    },
    about(v) {
      console.info("about---->");
      this.$router.push({ path: "about" });
      this.headerTitle = "关于";
      this.select = SIZE_ABOUT_ITEM;
    },
    updateTitle(title) {
      this.$refs.headTop.updateTitle(title);
    }
  },
  mounted: function() {
    let user = sessionStorage.getItem("user");
    if (user) {
      this.username = user;
    }

    this.$root.eventHub.$on("refresh-title", (title) => {
      console.info("receive --->  " + title);
      this.title = title;
    });
  },

  beforeDestroy(){
    //  this.$root.eventHub.$off("refresh-title");
  },

  computed: {
    defaultActive: function() {
      let that = this;
      console.info("defaultActive  " + this.$route.path);
      this.headerTitle = this.$route.name;
      return this.$route.path.replace("/", "");
    },
    selectBlog: function() {
      // return true;
      return this.select & SIDE_BLOG_ITEM;
    },
    selectAbout: function() {
      return this.select & SIZE_ABOUT_ITEM;
    }
  },
  components: {
    headTop
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
@import "../style/common";
@import "../style/mixin";
.el-container {
  overflow: hidden;
}

.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
  padding: 0px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
  background: #4b64ad;
  display: flex;
  flex-direction: column;
}

.el-main {
  width: calc(100%-200px);
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
  padding: 0px;
}

.avator {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: 5px solid #fff;
  display: flex;
  margin: 0 auto;
  margin-top: 60px;
  // margin-left: 0px;
}

.user-name {
  height: 40px;
  font-size: 12px;
  color: @tc1;
  justify-content: center;
  display: flex;
  // margin: 0 auto;
  margin-top: 6px;
}

.aside-item {
  width: 100%;
  height: 20px;
  color: @tc1;
  font-size: 14px;
  display: flex;
  flex-flow: row;
  justify-content: center;
  align-items: center;
  font-weight: normal;
}

.aside-item:hover {
  background: #425caa;
  font-weight: bold;
}

.blog {
  margin-top: 16px;
}

.about {
  margin-top: 6px;
}

.selected {
  font-weight: bold;
  color: #fff;
}

// body > .el-container {
//   margin-bottom: 40px;
// }

// .el-container:nth-child(5) .el-aside,
// .el-container:nth-child(6) .el-aside {
//   line-height: 260px;
// }

// .el-container:nth-child(7) .el-aside {
//   line-height: 320px;
// }
</style>
