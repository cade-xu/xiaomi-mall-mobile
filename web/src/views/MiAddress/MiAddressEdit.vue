<template>
  <div class="app-shell app-shell-bottom-navigation">
    <div class="app-view-wrapper">

      <MiTitle :title="title" :show-search-icon="false"/>

      <div class="container app-view app-view-with-header">
        <div class="page-wrap">
          <div class="address-manager">
            <div class="address-manager-edit">
              <ul class="ui-list">

                <li class="ui-list-item">
                  <div class="label">收货人：</div>
                  <div class="ui-input">
                    <input
                      v-model.trim="addressInfo.consignee"
                      placeholder="真实姓名"
                      name="consignee"
                      maxlength="15"
                      type="text"
                      autocomplete="off"
                    >
                  </div>
                </li>

                <li class="ui-list-item">
                  <div class="label">手机号码：</div>
                  <div class="ui-input">
                    <input
                      v-model.trim.number="addressInfo.tel"
                      :placeholder="telplaceholder"
                      name="tel"
                      maxlength="11"
                      id="tel"
                      type="tel"
                      autocomplete="off"
                    >
                  </div>
                </li>

                <li class="ui-list-item">
                  <div class="label">所在地区：</div>
                  <div class="ui-input" @click="showRegions=true">
                    <input
                      :value="addressStr"
                      placeholder="省 市 区 街道信息"
                      name="pcd"
                      maxlength="20"
                      type="text"
                      readonly="readonly"
                    >
                  </div>
                </li>

                <li class="ui-list-item">
                  <div class="label">详细地址：</div>
                  <div class="ui-input">
                    <input
                      v-model.trim="addressInfo.address"
                      placeholder="详细地址"
                      id="address"
                      name="address"
                      maxlength="40"
                      type="text"
                      autocomplete="off"
                    >
                  </div>
                </li>

                <li class="ui-list-item">
                  <div class="label">设置为默认地址</div>
                  <label class="ui-cell">
                    <input
                      name="is_default"
                      type="checkbox"
                      v-model="addressInfo.is_default"
                    >
                  </label>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="add">
          <a class="btn ui-button ui-button-active" @click="submit">
            <span>保存地址</span>
          </a>
        </div>

        <MiAddressAll v-model:value="showRegions" @region="changeRegion"/>
      </div>
    </div>
  </div>
</template>

<script>
import MiAddressAll from '@/components/MiAddressAll.vue'
// import { addressDetail, addressAdd, addressSave } from '@/api/address.js'
import Address from '@/api/addressService'
import Dialog from '@/components/dialog'

export default {
  components: {
    MiAddressAll
  },
  data() {
    return {
      title: '',
      showRegions: false,
      addressInfo: {
        consignee: '',
        tel: '',
        province: '',
        province_id: '',
        city: '',
        city_id: '',
        district: '',
        district_id: '',
        area: '',
        area_id: '',
        address: '',
        is_default: false
      },
      telplaceholder: '手机号'
    }
  },
  computed: {
    addressStr() {
      let info = this.addressInfo
      return `${info.province} ${info.city} ${info.district} ${info.area}`.trim()
    }
  },
  beforeRouteEnter(to, from, next) {
    let id = to.query.address_id
    if(id) {
      // Edit
      if(from.name) {
        Address.detail(id).then(res => {
          if(res.status === 200) {
            next(vm => vm.setAddress(res))
          }
        })
      } else {
        next(vm => vm.getAddress())
      }
    } else {
      // Add new one
      next()
    }
  },
  created() {
    if(this.$route.query.address_id) {
      // Edit
      this.title = '编辑地址'
    } else {
      // Add new one
      this.title = '新建地址'
      this.$store.commit('setViewLoading', false)
      this.$NProgress.done()
    }
  },
  methods: {
    getAddress() {
      Address.detail(this.$route.query.address_id).then(res => {
        if(res.status === 200) {
          this.setAddress(res)
        }
      })
    },
    setAddress(res) {
      this.$store.commit('setViewLoading', false)
      this.$NProgress.done()

      let info = res.data
      info.is_default = info.is_default === 1

      this.addressInfo = info
      this.telplaceholder = info.tel
      this.addressInfo.tel = ''
    },
    changeRegion(region) {
      this.addressInfo = Object.assign({}, this.addressInfo, region)
    },
    popupDialog(promptInfo) {
      Dialog.alert({
        message: promptInfo
      })
    },
    submit() {
      // Verify
      let ai = this.addressInfo

      // verify consignee
      if(!ai.consignee) {
        // Dialog.alert({
        //   message: '请输入收货人姓名'
        // })
        this.popupDialog('请输入收货人姓名')
        return
      }

      // verify telphone
      const reg = /^((1[3-9][0-9])+\d{8})$/
      if(this.$route.query.address_id) {
        if(ai.tel && !reg.test(ai.tel)) {
          // Dialog.alert({
          //   message: '请输入11位手机号码'
          // })
          this.popupDialog('请输入11位手机号码')
          return
        }
      } else {
        if(!ai.tel || !reg.test(ai.tel)) {
          // Dialog.alert({
          //   message: '请输入11位手机号码'
          // })
          this.popupDialog('请输入11位手机号码')
          return
        }
      }

      // verify area
      if(!this.addressStr) {
        // Dialog.alert({
        //   message: '请选择所在地区'
        // })
        this.popupDialog('请选择所在地区')
        return
      }

      // verify address detail
      if(!ai.address) {
        // Dialog.alert({
        //   message: '请输入详细地址'
        // })
        this.popupDialog('请输入详细地址')
        return
      }

      // verify address length
      let len = ai.address.length
      if(len < 5 || len > 120) {
        // Dialog.alert({
        //   message: '抱歉，详细地址不能少于5个字，不能多于120个字'
        // })
        this.popupDialog('抱歉，详细地址不能少于5个字，不能多于120个字')
        return
      }

      this.addressInfo.is_default = this.addressInfo.is_default ? 1 : 2

      let api = this.$route.query.address_id ? 'save' : 'add'
      Address[api](this.addressInfo).then(res => {
        if(res.status === 200) {
          this.$router.go(-1)
        }
      })
      // if(this.$route.query.address_id) {
      //   // Edit
      //   Address.save(this.addressInfo).then(res => {
      //     if(res.status === 200) {
      //       this.$router.go(-1)
      //     }
      //   })
      // } else {
      //   // Add new one
      //   Address.add(this.addressInfo).then(res => {
      //     if(res.status === 200) {
      //       this.$router.go(-1)
      //     }
      //   })
      // }
    }
  }
}
</script>

<style lang="scss" scoped>
.address-manager {
  .ui-list {
    position: relative;

    .ui-list-item {
      border-bottom: 1px solid #f6f6f6;
      font-size: 14px;
      overflow: hidden;
      background: #fff;
      padding: 10px 15px;
      display: flex;
      display: -webkit-box;
      box-align: center;
      -webkit-box-align: center
    }

    .ui-input {
      border: 0;
      box-flex: 1;
      overflow: hidden;
      font-size: 12px;
      width: 100%;

      input {
      padding: 9px 15px;
      width: 100%;
      -webkit-box-flex: 1;
      box-sizing: border-box;
      font-size: 14px;
      border: 0;
      text-decoration: none;
      outline: 0;
      vertical-align: middle;
    }
    }

    .ui-cell {
      display: block;
      box-flex: 1;
      -webkit-box-flex: 1;
      width: 100%;
      text-align: right;
    }
  }
}

[type=checkbox], [type=radio] {
  box-sizing: border-box;
  padding: 0;
}

.add {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: #fff;
  z-index: 1;

  span {
    font-size: 15px;
    color: #fff;
  }
}
</style>
