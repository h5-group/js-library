import logo from '@/images/logo.png';
import {
  hello
} from '../../../src';
export default {
  name: 'home',
  setup() {

  },
  data() {
    return {
      title: 'hello home page',
      logo,
    }
  },
  mounted() {
    console.log('home page');
    hello('jane')
  }
}