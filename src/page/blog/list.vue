 <template>
  <div style="">
    <head-top title="我的随笔"></head-top>
    <el-table
      class="list-table"
      :data="tableData"
      :show-header="false"
      @row-click="rowClickHandler"
    >
      <el-table-column prop="title" label="标题" style="width: 100%"></el-table-column>
    </el-table>

    <div class="list-footer">
      <el-pagination
        class="page"
        background
        layout="prev, pager, next"
        :total="pageCount"
        @current-change="pager"
        @next-click="next"
        @prev-click="prev"
      ></el-pagination>
      <a class="record" href="http://www.miitbeian.gov.cn">粤ICP备18063336号</a>
    </div>
  </div>
</template>


<script>
import { request } from "@/common/request";
import headTop from "@/components/headTop";

export default {
  data() {
    return {
      tableData: [
      //   {
      //     date: "2016-05-02",
      //     title: "故都的秋"
      //   },
      //   {
      //     date: "2016-05-04",
      //     title: "背景"
      //   },
      //   {
      //     date: "2016-05-01",
      //     title: "苦柚子"
      //   },
      //   {
      //     date: "2016-05-03",
      //     title: "乡愁"
      //   },
      //   {
      //     date: "2016-05-02",
      //     title: "故都的秋"
      //   },
      //   {
      //     date: "2016-05-04",
      //     title: "背景"
      //   },
      //   {
      //     date: "2016-05-01",
      //     title: "苦柚子"
      //   },
      //   {
      //     date: "2016-05-03",
      //     title: "乡愁"
      //   },
      //   {
      //     date: "2016-05-02",
      //     title: "故都的秋"
      //   },
      //   {
      //     date: "2016-05-04",
      //     title: "背景"
      //   },
      //   {
      //     date: "2016-05-01",
      //     title: "苦柚子"
      //   },
      //   {
      //     date: "2016-05-03",
      //     title: "乡愁"
      //   },
      //   {
      //     date: "2016-05-02",
      //     title: "故都的秋"
      //   },
      //   {
      //     date: "2016-05-04",
      //     title: "背景"
      //   },
      //   {
      //     date: "2016-05-01",
      //     title: "苦柚子"
      //   },
      //   {
      //     date: "2016-05-03",
      //     title: "乡愁"
      //   },
      //   {
      //     date: "2016-05-02",
      //     title: "故都的秋"
      //   },
      //   {
      //     date: "2016-05-04",
      //     title: "背景"
      //   },
      //   {
      //     date: "2016-05-01",
      //     title: "苦柚子"
      //   },
      //   {
      //     date: "2016-05-03",
      //     title: "乡愁"
      //   },
      //   {
      //     date: "2016-05-02",
      //     title: "故都的秋"
      //   },
      //   {
      //     date: "2016-05-04",
      //     title: "背景"
      //   },
      //   {
      //     date: "2016-05-01",
      //     title: "苦柚子"
      //   },
      //   {
      //     date: "2016-05-03",
      //     title: "乡愁"
      //   }
      ],
      pageCount: 0,
      currentPage: 1
    };
  },
  created() {
    this.getBlogList();
    this.getBlogCount();
    // this.$root.eventHub.$emit('refresh-title', "我的随笔");
  },
  methods: {
    rowClickHandler(row, column, event) {
      console.info(row);
      let title = row.title;
      let id = row.id;
      console.info(title);
      console.info(id);

      // this.$router.push({ path: "blog", query: { blog: title } });

      this.$router.push({ path: "blog", query: { id: id } });
    },
    getBlogList() {
      request.getBlogList(
        {
          pageNum: this.currentPage,
          pageSize: 20
        },
        data => {
          let obj = JSON.parse(data);
          console.info(obj);
          this.tableData = obj.data;
        },
        data => {}
      );
    },
    getBlogCount() {
      request.getBlogCount(
        {},
        data => {
          let obj = JSON.parse(data);
          console.info(obj);
          this.pageCount = (parseInt(obj.data.count) / 20) * 10;
        },
        data => {}
      );
    },
    // prev, pager, next
    prev(o) {
      //to do
      console.info("prev");
    },
    pager(o) {
      console.info("pager");
      console.info(o);
      this.currentPage = o;
      this.getBlogList();
    },
    next(o) {
      //to do
      console.info("next");
    }
  },
  components: {
    headTop
  }
};
</script>

<style lang="less">

.list-header {
  position: absolute;
  top: 0px;
  // left: 0%;
  text-align: left;
  width: 100%;
  z-index: 0;
  overflow: hidden;
}

.list-table {
  width: 100%;
  padding-left: 20px;
  margin-bottom: 100px;
}

.list-footer {
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

  .page {
    margin: 0 auto;
  }
  .record {
    color: #999;
    font-size: 8px;
    margin: 0 auto;
    padding-top: 8px;
  }
}
</style>

