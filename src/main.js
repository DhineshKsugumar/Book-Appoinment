import Vue from 'vue'
import App from './App.vue'
import {Tag,Spin,InputNumber, Result,Card,message,FormModel ,Col,Row,List,Avatar,Input,DatePicker,Button,Icon,TimePicker } from 'ant-design-vue';

const components = [Tag,Spin,InputNumber,Result,Card,message,FormModel ,Col,Row,List,Avatar,Input,DatePicker,Button ,Icon,TimePicker];

Vue.prototype.$message = message;

components.map(component => {
  Vue.use(component);
});

import 'ant-design-vue/dist/antd.css';

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app')
