<template>
  <div class="app">
    <el-container>
      <el-aside class="app-side app-side-left" :class="'app-side-expanded'">
        <img class="app-side-avator" @click="login" src="@/assets/avator.jpg">

        <label class="app-side-user">藤藤</label>

        <div
          v-bind:class="selectBlog? 'app-side-item blog selected' : 'app-side-item  blog'"
          @click="blog"
        >我的随笔</div>
        <div
          v-bind:class="selectAdd? 'app-side-item add selected' : 'app-side-item  add'"
          @click="add"
        >写日志</div>
        <div
          v-bind:class="selectAbout? 'app-side-item about selected' : 'app-side-item about'"
          @click="about"
        >关于</div>
      </el-aside>

      <el-main class="app-body" style="padding:0px;">
        <template>
          <router-view/>
          <div>
            <el-dialog
              title="登录"
              :visible.sync="dialogFormVisible"
              center
              :append-to-body="true"
              :lock-scroll="false"
              width="40%"
            >
              <el-form>
                <el-form-item label="账号" prop="num">
                  <el-input v-model="ruleForm2.num"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="pass">
                  <el-input type="password" v-model="ruleForm2.pass" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="记住密码" prop="delivery">
                  <el-switch v-model="ruleForm2.delivery"></el-switch>
                </el-form-item>
              </el-form>
              <div slot="footer" class="dialog-footer">
                <el-button type="primary" @click="submitForm()">登 录</el-button>
              </div>
            </el-dialog>
          </div>
        </template>
      </el-main>
      <!-- </el-container> -->
    </el-container>
  </div>
</template>

<script>
import { request } from "@/common/request";
const SIDE_BLOG_ITEM = 0x01;
const SIZE_ABOUT_ITEM = 0x02;
const SIZE_ADD_ITEM = 0x04;
export default {
  name: "Container",
  data() {
    return {
      articles: ["背影", "我家的猫", "故都的秋"],
      username: "",
      isCollapse: false,
      headerTitle: "",
      select: SIDE_BLOG_ITEM,
      dialogFormVisible: true,
      ruleForm2: {
        pass: "",
        num: "",
        delivery: false
      }
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
    add(v) {
      console.info("add ---->");
      this.$router.push({ path: "add" });
      this.headerTitle = "写日志";
      this.select = SIZE_ADD_ITEM;
    },
    login(v) {
      console.info("login------>");
      this.dialogFormVisible = true;
      this.apply();
    },
    submitForm(v) {
      console.info(this.ruleForm2);
      request.login(
        { username: this.ruleForm2.num, password: this.ruleForm2.pass },
        data => {
          let obj = JSON.parse(data);
          console.info(obj);
          this.pageCount = (parseInt(obj.data.count) / 20) * 10;
        },
        data => {}
      );
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
    },
    selectAdd: function() {
      return this.select & SIZE_ADD_ITEM;
    }
  }
};
</script>

<style lang="scss">
html {
  height: 100%;
}

body {
  position: relative;
  top: 0;
  left: 0;
  margin: 0;
  padding: 0;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.app {
  $solidBorder: 0px solid #eee;
  $textColor1: #f1f1f1;
  $sideCollapsedWidth: 66px;
  $sideExpandedWidth: 230px;
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  font-size: 1em;
  width: 100%;
  height: 100%;
  // min-width: 900px;
  border: $solidBorder;
  display: flex;
  display: -webkit-flex;
  flex-flow: row nowrap;
  &-side {
    width: 230px;
    height: 100%;
    font-weight: 700;
    border-right: $solidBorder;
    display: flex;
    flex-flow: column;
    &-left {
      // background-color: rgb(238, 241, 246);
      background: #4b64ad;
    }
    &-logo {
      height: 60px;
      text-align: center;
    }
    &-collapsed {
      width: 66px !important;
    }
    &-expanded {
      width: 230px !important;
    }

    &-avator {
      width: 60px;
      height: 60px;
      border-radius: 50%;
      border: 5px solid #fff;
      margin: 0 auto;
      margin-top: 60px;
      display: flex;
    }
    &-user {
      font-size: 14px;
      color: $textColor1;
      justify-content: center;
      display: flex;
      // flex-flow: row;
    }
    &-item {
      // height: 30px;
      width: 100%;
      color: $textColor1;
      font-size: 16px;
      display: flex;
      flex-flow: row;
      justify-content: center;
      align-items: center;
      font-weight: normal;

      // background: red;
    }

    &-item:hover {
      background: #425caa;
      font-weight: bold;
    }

    .blog {
      margin-top: 16px;
    }
    .add {
      margin-top: 12px;
    }
    .about {
      margin-top: 12px;
    }

    .selected {
      font-weight: bold;
      color: #fff;
    }
  }
  &-header {
    width: 100%;
    height: 60px;
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-items: center;
    border-bottom: $solidBorder;
  }
  &-body {
    font-size: 1em;
    width: 100%;
    height: 100%;
    padding: 0px;
    overflow-y: scroll;
  }
}

.inline-block {
  display: inline-block;
}
</style>
