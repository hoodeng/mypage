<template>
  <div class="about">
    <head-top title="关于"></head-top>
    <div class="about-content">有人说：每个人都是生活的导演，每一段生活都是一出好戏！用心去记录每一出好戏。</div>
  </div>
</template>

<script>
// import ajax from "@/common/request";
import headTop from "@/components/headTop";

export default {
  name: "helloWorld",
  data() {
    return {
      msg: "hello vue.js",
      title: "标题",
      content: "内容",
      current: 1,
      bottomCSS: "bottom"
    };
  },
  computed: {},

  created() {
    // this.requestBlog(this.current);
    this.title = this.$route.query.blog;
    console.info(this.$route);
    console.info("created  " + this.title);

    console.info(this.$parent);
    this.$root.eventHub.$emit('refresh-title', "关于");
    // this.$root.$emit('refresh-title', "关于");
  },

  beforeDestroy(){
     console.info("about destroy");
  },

  methods: {
    last() {
      if (this.current <= 1) {
        confirm("已经是第一篇");
        return;
      }

      this.current -= 1;
      this.requestBlog(this.current);
    },
    next() {
      this.current += 1;
      this.requestBlog(this.current);
    },

    add() {
      this.$router.push({ name: "add" });
    }
  },
  components: {
    headTop
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>

// .bolg {
//   width: 100%;
//   .about-header{
//     position: absolute;
//     top: 0px;
//     left: 0px;
//     text-align: left;
//     width: 100%;
//     z-index: 0;
//     overflow: hidden;
//   }
// }
.about-content {
    color: #333;
    font-size: 14px;
    text-align: left;
    margin: 20px;
  }
</style>
