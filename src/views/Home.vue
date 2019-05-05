<template>
  <div class="home">
    <ul>
      <!-- <li class="list-item">
        <el-card class="info-box-card">
          <div slot="header" class="clearfix">
            <span>配置</span>
          </div>
          <p>HostName: Acer</p>
          <p>系统: Centos7</p>
          <p>CPU: Intel(R) Core(TM) i5-4210M CPU @ 2.60GHz</p>
          <p>CPU核心: 4</p>
          <p>内存: 16G</p>
        </el-card>
      </li>-->
      <li class="list-item">
        <el-card class="info-box-card">
          <div slot="header" class="clearfix">
            <span>CPU使用率</span>
          </div>
          <Tooltip placement="top" max-width="200">
            <i-circle percent="80" stroke-color="#2db7f5">
              <span style="font-size:18px">80%</span>
            </i-circle>
            <div slot="content">
              <p>CPU Cores: 4</p>
              <p>CPU: Intel(R) Core(TM) i5-4210M CPU @ 2.60GHz</p>
            </div>
          </Tooltip>
        </el-card>
      </li>
      <li class="list-item">
        <el-card class="info-box-card">
          <div slot="header" class="clearfix">
            <span>内存使用率</span>
          </div>
         <Tooltip placement="top" max-width="200">
            <i-circle percent="80" stroke-color="#2db7f5">
              <span style="font-size:18px">80%</span>
            </i-circle>
            <div slot="content">
              <p>总数: 16G</p>
              <p>已使用: 3G</p>
              <p>可用: 13G</p>
              <p>使用率: 80%</p>
            </div>
          </Tooltip>
        </el-card>
      </li>
      <li class="list-item">
        <el-card class="info-box-card">
          <div slot="header" class="clearfix">
            <span>硬盘使用率</span>
          </div>
          <Tooltip placement="top" max-width="200">
            <i-circle percent="80" stroke-color="#2db7f5">
              <span style="font-size:18px">80%</span>
            </i-circle>
            <div slot="content">
              <p>总数: 500G</p>
              <p>已使用: 300G</p>
              <p>可用: 200G</p>
              <p>使用率: 80%</p>
            </div>
          </Tooltip>
        </el-card>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.list-item {
  float: left;
  margin: 0 5px 5px 0;
}
</style>


<script>
export default {
  name: "home",
  components: {}
};
</script>
