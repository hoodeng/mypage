<template>
  <div class="fillcontain">
    <el-row class="el-row" style="height: 100%;">
      <el-col class="el-col-aside" :span="4" style="min-height: 100%;">
        <div style="width: 100%;">
          <img class="avator" src="@/assets/avator.jpg">
        </div>

        <label class="user-name">藤藤</label>

        <div
          v-bind:class="selectBlog? 'aside-item  blog  selected' : 'aside-item  blog'"
          @click="blog"
        >我的随笔</div>
        <div
          v-bind:class="selectAbout? 'aside-item  about selected' : 'aside-item  about'"
          @click="about"
        >关于</div>
      </el-col>

      <el-col :span="20" style="height: 100%;overflow: auto;">
				<keep-alive>
				    <router-view></router-view>
				</keep-alive>
			</el-col>
    </el-row>
  </div>
</template>


<script>
const SIDE_BLOG_ITEM = 0x01;
const SIZE_ABOUT_ITEM = 0x02;

export default {
  name: "dashboard",
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
    }
  },
  mounted: function() {
    let user = sessionStorage.getItem("user");
    if (user) {
      this.username = user;
    }
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
  }
};
</script>



<style lang="less" scoped>
@import "../../style/mixin";

.el-col-aside {
  display: flex;
  flex-flow: column;
  background: #4b64ad;
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
  font-size: 12px;
  color: @tc1;
  justify-content: center;
  display: flex;
  margin: 0 auto;
  margin-top: 6px;
}

.aside-item {
  width: 100%;
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
</style>

