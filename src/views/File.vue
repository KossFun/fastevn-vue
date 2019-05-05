<template>
  <div class="file">
    <!-- Table -->
    <Table :columns="columns" :data="tabData">

      <!-- 自定义 action -->
      <template slot-scope="{ row, index }" slot="action">
        <a class="action-btn" @click="copy(index)">复制</a>
        <a class="action-btn" @click="cut(index)">剪切</a>
        <a class="action-btn" @click="rename(index)">重命名</a>
        <a class="action-btn" @click="editPermission(index)">权限</a>
        <a class="action-btn" @click="zip(index)">压缩</a>
        <a class="action-btn" @click="download(index)">下载</a>
        <a class="action-btn" @click="del(index)">删除</a>
      </template>
    </Table>
    <Page style="float: right; margin: 5px 0;" :total="100" show-sizer />
  </div>
</template>

<style lang="scss" scoped>
.file {
  height: 100vh;

  .action-btn {
    /* 添加 | 分割符 */
    &::after {
      margin: 0 2px;
      content: "|";
    }

    &:last-child::after {
       content: none;
    }
  }
}
</style>


<script>
export default {
  name: "file",
  data() {
    const item = {
          name: "John Brown",
          size: "1800.00KB",
          date: "2016-10-03 11:11:11",
          permission: "777",
          owner: "root"
        };
    return {
      columns: [
        { type: 'selection', fixed: "left", width: "35"},
        { title: "文件名", key: "name", fixed: "left"},
        { title: "大小", key: "size" },
        { title: "修改时间", key: "date" },
        { title: "权限", key: "permission" },
        { title: "所以者", key: "owner" },
        {
          title: "操作",
          slot: "action",
          width: 260,
          align: "center",
          fixed: "right"
        }
      ],
      tabData: Array(20).fill(item)
      
    };
  },
  methods: {
    copy(index) {

    },
    cut(index) {

    },
    rename(index) {

    },
    editPermission(index) {

    },
    zip(index) {

    },
    download(index) {

    },
    del(index) {

    }
  }
};
</script>
