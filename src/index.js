import _ from 'lodash';
import print from './print';

function component() {
  let element = document.createElement('div');
  let btn = document.createElement('button');

  // lodash（目前通过一个 script 引入）对于执行这一行是必需的
  element.innerHTML = '<div style="height: 100px;">' + _.join(['Hello', 'webpack'], ' ') + '</div>';
  btn.innerHTML = 'Click me and check the console!';

  btn.onclick = print;

  element.appendChild(btn);

  return element;
}

document.body.appendChild(component());