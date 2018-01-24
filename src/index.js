import _ from 'lodash';
import './style.css';
import Icon from './fdc_logo.png'
import Data from './data.xml';

function component() {
  let element = document.createElement('div');

  // lodash 是由当前 script 脚本 import 导入进来的
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  // 将图像添加到现有的div中
  let myIcon = new Image();
  myIcon.src = Icon;

  element.appendChild(myIcon);


  // 查看开发者工具中的控制台，你应该能够看到你导入的数据被打印在了上面！
  console.log(Data)


  return element;
}

document.body.appendChild(component());

