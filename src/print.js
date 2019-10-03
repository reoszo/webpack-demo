import hot from './hot';

export default function print() {
  console.log('I get called from print.js change before');
  hot();
}

if (module.hot) {
  module.hot.accept('./hot.js', function() {
    console.log('you can click btn and check the console, hot() is already changed');
  });
}