import _ from 'lodash';
import './index.css';
import icon from './icon.svg';

function component() {
  let element = document.createElement('div');

  // lodash（目前通过一个 script 引入）对于执行这一行是必需的
  element.innerHTML = '<div style="height: 100px;">' + _.join(['Hello', 'webpack'], ' ') + '</div>';

  element.classList.add('hello');

  const image = new Image();
  image.src = icon;
  element.appendChild(image);

  return element;
}

document.body.appendChild(component());