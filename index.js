import { IsJs } from './is/is.js';

const list = [
  'React',
  'Angular',
  'VueJs',
  'jQuery',
  'and most of all, IsJs!!'
];

const listItems = list.map(item => {
  const c = IsJs.newComponent()
  const { template: html } = c;
  html`<li>${item}</li>`;
  return c;
});

const justKidding = (IsJs => {
  const justKidding = IsJs.newComponent();
  const { template: html } = justKidding;
  html`<p>Just kidding haha</p>`;
  return justKidding;
})(IsJs);

const app = IsJs.newComponent();
const badMood = app.state(true);
const feelingForgiving = app.state(false);
const becomeForgiving = () => { feelingForgiving.set(true) };
badMood.onSet(({newVal}) => {if (newVal === true) feelingForgiving.set(false)});
const { is: js, template: html } = app;
html`
<div class='app grid-center' data-class=${js`${badMood} === true ? 'bad-mood' : 'good-mood'`}>
  <div class='card'>
    <h2>Frameworks I ${js`${badMood} === true ? 'hate' : 'love'`}!</h2>
    <ul>
      <div data-list=${listItems}></div>
    </ul>
    <div data-if=${js`${badMood} === true && ${feelingForgiving} === true`}>
      <div data-component=${justKidding}></div>
    </div>
    <div data-if=${js`${badMood} === true && ${feelingForgiving} === false`}>
      <p>And I really mean it!!</p>
    </div>
    <button data-click=${badMood.toggle}>Toggle Mood</button>
    <div data-if=${js`${feelingForgiving} === false && ${badMood} === true`}>
      <button data-click=${becomeForgiving}>...but I'm feeling forgiving</button>
    </div>
  </div>
</div>
`;

IsJs.render(app);

window.feelingForgiving = feelingForgiving;
window.badMood = badMood;