
<template>
  <div class="layout">
    <Layout>
      <!-- 侧边栏 -->
      <Sider ref="side" hide-trigger collapsible :collapsed-width="78" v-model="isCollapsed">
        <Menu :active-name="this.$route.name" theme="dark" width="auto" :class="menuitemClasses">
          <MenuItem name="host" disabled>
            <Tooltip placement="right" content="10.187.139.33">
              <Icon type="logo-tux"/>
            </Tooltip>
          </MenuItem>

          <MenuItem name="home" to="/index/home">
            <Icon type="ios-home"/>
            <span>主页</span>
          </MenuItem>

          <MenuItem name="file" to="/index/file">
            <Icon type="ios-folder"/>
            <span>文件</span>
          </MenuItem>

          <MenuItem name="cpu" to="/index/cpu">
            <Icon custom="iconfont ks-cpu"/>
            <span>CPU</span>
          </MenuItem>

          <MenuItem name="memory" to="/index/memory">
            <Icon custom="iconfont ks-memory"/>
            <span>内存</span>
          </MenuItem>

          <MenuItem name="disk" to="/index/disk">
            <Icon custom="iconfont ks-hard-disk"/>
            <span>硬盘</span>
          </MenuItem>

          <MenuItem name="setting" to="/index/setting">
            <Icon type="ios-settings"></Icon>
            <span>设置</span>
          </MenuItem>

        </Menu>
      </Sider>
      <!-- 侧边栏 -->
      <Layout>
        <!-- 头部 -->
        <Header :style="{padding: 0}" class="layout-header-bar">
            <!-- collapsedSider btn -->
          <Icon
            @click.native="collapsedSider"
            :class="rotateIcon"
            :style="{margin: '0 20px'}"
            type="md-menu"
            size="24"
          ></Icon>
          <!-- collapsedSider btn -->

          <Dropdown trigger="click" style="float: right; margin-right: 20px; font-size: 15px;">
            <Icon type="logo-github" size="28"/>
            <a href="javascript:void(0)">
              {{adminName}}
              <Icon type="ios-arrow-down"></Icon>
            </a>
            <DropdownMenu slot="list">
              <DropdownItem>
                <router-link to="/index/setting">设置</router-link>
              </DropdownItem>
              <DropdownItem>注销</DropdownItem>
            </DropdownMenu>
          </Dropdown>

        </Header>
        <!-- 头部 -->
        <!-- 内容 -->
        <Content :style="{margin: '10px', background: '#fff', minHeight: '100vh'}">
          <router-view></router-view>
        </Content>
        <!-- 内容 -->
        <Footer style="text-align: center;">快环境Linux面板 &copy;2019 快环境 (fastevn.com)</Footer>
      </Layout>
    </Layout>
  </div>
</template>

<style scoped>
.layout {
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
}
.layout-header-bar {
  /* 头部 */
  background: #fff;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
}
/* .layout-logo-left {
  width: 90%;
  height: 30px;
  background: #5b6270;
  border-radius: 3px;
  margin: 15px auto;
} */
.menu-icon {
  transition: all 0.3s;
}
.rotate-icon {
  transform: rotate(-90deg);
}
.menu-item span {
  display: inline-block;
  overflow: hidden;
  width: 69px;
  text-overflow: ellipsis;
  white-space: nowrap;
  vertical-align: bottom;
  transition: width 0.2s ease 0.2s;
}
.menu-item i {
  transform: translateX(0px);
  transition: font-size 0.2s ease, transform 0.2s ease;
  vertical-align: middle;
  font-size: 16px;
}
.collapsed-menu span {
  width: 0px;
  transition: width 0.2s ease;
}
.collapsed-menu i {
  transform: translateX(5px);
  transition: font-size 0.2s ease 0.2s, transform 0.2s ease 0.2s;
  vertical-align: middle;
  font-size: 22px;
}
</style>

<script>
export default {
  data() {
    return {
      isCollapsed: true,
      adminName: "KossFun"
    };
  },
  computed: {
    rotateIcon() {
      return ["menu-icon", this.isCollapsed ? "rotate-icon" : ""];
    },
    menuitemClasses() {
      return ["menu-item", this.isCollapsed ? "collapsed-menu" : ""];
    }
  },
  methods: {
    collapsedSider() {
      this.$refs.side.toggleCollapse();
    }
  },
  mounted() {
    console.log(this.$route.name);
  }
};
</script>