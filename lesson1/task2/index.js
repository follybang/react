const rootEl = document.querySelector('#root');

const greetingEl = React.createElement(
  'div',
  {className: 'greeting'},

  React.createElement('div', {className: 'greeting__title'}, 'Hello, world!'),
  React.createElement('div', {className: 'greeting__text'}, "I'm learning React")
);

ReactDOM.render(greetingEl, rootEl);
