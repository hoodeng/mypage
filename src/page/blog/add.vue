<template>
  <div>
    <head-top title="写博客"></head-top>

    <div class="main">
      <el-input
        type="textarea"
        autosize
        placeholder="请输入标题"
        v-model="title"
        style="margin-top:20px"
      ></el-input>
      <div style="margin: 20px 0;"></div>
      <el-input
        type="textarea"
        :autosize="{ minRows: 20, maxRows: 40}"
        placeholder="请输入内容"
        v-model="content"
      ></el-input>
      <el-button class="btn" @click="submit">提交</el-button>
    </div>
  </div>
</template>

<script>
// import ajax from "../../common/request";
import headTop from "@/components/headTop";
import { request } from "@/common/request";
export default {
  name: "add",

  data() {
    return {
      title: "",
      content: ""
    };
  },
  computed: {},

  created() {},

  methods: {
    submit() {
      if (!this.title || this.title == "") {
        confirm("标题不能为空");
        return;
      }
      if (!this.content || this.content == "") {
        confirm("内容不能为空");
        return;
      }

      let that = this;
      request.insert(
        {
          title: this.title,
          content:this.content
        },
        data => {
          // let obj = JSON.parse(data);
          // this.blog = obj.data;
          if (obj && obj.code == "200") {
            console.info("添加成功");
          }
        },
        data => {}
      );

      // let that = this;
      // let url = "http://127.0.0.1:8080/api/blog/insert";
      // let options = {};
      // options.url = url;
      // options.data = {
      //   title: this.title,
      //   content: this.content
      // };
      // options.method = "GET";
      // options.onSuccess = data => {
      //   console.log(data);
      //   that.title = "";
      //   that.content = "";
      //   confirm("提交成功");
      // };
      // ajax(options);
    }
  },
  components: {
    headTop
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
@import "../../style/mixin";
.main {
  width: 50%;
  margin: 0 auto;
  margin-top: @headertopheight;
  display: flex;
  flex-direction: column;
}
.wrap {
  display: flex;
  flex-direction: column;
}

.title {
  width: 500px;
  height: 38px;
  margin: 0 auto;
  font-size: 18px;
}
.content {
  width: 500px;
  height: 500px;
  text-align: top;
  margin: 0 auto;
  margin-top: 20px;
  font-size: 14px;
  vertical-align: top;
  display: block;
}
.btn {
  width: 300px;
  height: 38px;
  margin: 0 auto;
  margin-top: 10px;
}
</style>
