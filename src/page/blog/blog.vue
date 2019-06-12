<template>
  <div>
    <head-top :title="blog.title"></head-top>
    <div class="blog-main">
      <div class="blog-time">时间：{{formater(blog.createTime)}}</div>
      <div class="blog-content">{{blog.content}}</div>
      <div class="blog-footer">
        <el-button-group class="button-group">
          <el-button type="primary" icon="el-icon-arrow-left" @click="prev">上一篇</el-button>
          <el-button type="primary" @click="next">
            下一篇
            <i class="el-icon-arrow-right el-icon--right"></i>
          </el-button>
        </el-button-group>
      </div>
    </div>
  </div>
</template>

<script>
import { request } from "@/common/request";
import headTop from "@/components/headTop";
import { networkUtil } from "@/common/networkUtil";

// console.info(request);
export default {
  data() {
    return {
      id: "",
      title: "",
      content: "",
      blog: {}
    };
  },
  computed: {},

  created() {
    this.id = this.$route.query.id;
    this.requestBlog(this.id);
  },

  methods: {
    prev() {
      let that = this;
      request.getPrevBlog(
        {
          id: this.id
        },
        data => {
          let obj = JSON.parse(data);
          this.blog = obj.data;
          if (obj && obj.code == "200") {
            let _id = obj.data.id;
            if (_id && _id > 0) {
              that.$router.push({ path: "blog", query: { id: _id } });
            }
          }
        },
        data => {}
      );
    },
    next() {
      let that = this;
      request.getNextBlog(
        {
          id: this.id
        },
        data => {
          let obj = JSON.parse(data);
          this.blog = obj.data;
          if (obj && obj.code == "200") {
            let _id = obj.data.id;
            if (_id && parseInt(_id) > 0) {
              that.$router.push({ path: "blog", query: { id: _id } });
            }
          }
        },
        data => {}
      );
    },

    add() {
      this.$router.push({ name: "add" });
    },

    requestBlog(id) {
      request.getBlog(
        {
          id: id
        },
        data => {
          let obj = JSON.parse(data);
          this.blog = obj.data;
        },
        data => {}
      );
    },
    formater(createTime) {
      let format = String(createTime).split(" ")[0];
      console.log(format);
      return format;
    }
  },

  watch: {
    "$route.query.id": function(id) {
      this.id = id;
      this.requestBlog(this.id);
    }
  },

  updated() {},

  beforeDestroy() {},

  components: {
    headTop
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
@import "../../style/mixin";

.blog-header {
  position: absolute;
  top: 0px;
  left: 0px;
  text-align: left;
  width: 100%;
  z-index: 0;
  overflow: hidden;
}

.blog-main {
  padding-top: @headertopheight;
}

.blog-time{
  margin: 20px;
  font-size: 12px;
  color: #999;
}

.blog-content {
  text-align: left;
  color: #333;
  font-size: 14px;
  min-height: 200px;
  margin: 20px;
}

.blog-footer {
  height: 80px;
  // position: absolute;
  bottom: 0px;
  padding-bottom: 10px;
  text-align: left;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  z-index: 0;
  overflow: hidden;
  background: #fff;

  .button-group {
    margin: 0 auto;
    display: flex;
  }
}
</style>
