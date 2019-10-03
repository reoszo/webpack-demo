import _ from 'lodash';
import print from './print';
import './index.css';

function component() {
  var ele = document.createElement('div');
  var btn = document.createElement('button');

  // lodash（目前通过一个 script 引入）对于执行这一行是必需的
  ele.innerHTML = _.join(['Hello', 'webpack'], ' ');
  ele.classList.add('hello');
  btn.innerHTML = 'Click me and check the console!';

  btn.onclick = function () {
    print();
  };

  ele.appendChild(btn);

  return ele;
}

document.body.appendChild(component());

if (module.hot) {
  module.hot.accept('./print.js', function () {
    console.log('you can click btn and check the console, print() is already changed');
  });
}