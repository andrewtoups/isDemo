import { IsJs } from './is.js/is.js';

const list = [
  'React',
  'Angular',
  'VueJs',
  'jQuery',
  'and most of all, IsJs!!'
];

const listItems = list.map(item => {
  const c = IsJs.newComponent()
  const { template } = c;
  template`<li>${item}</li>`;
  return c;
});

const justKidding = (() => {
  const c = IsJs.newComponent();
  const { template } = c;
  template`<p>Just kidding haha</p>`;
  return c;
})();

const app = IsJs.newComponent();
const badMood = app.state(true);
const imSuchAGeminiLol = app.state(false);
const orDoI = () => { imSuchAGeminiLol.set(true) };
badMood.onSet(({newVal}) => {if (newVal === true) imSuchAGeminiLol.set(false)});
const { is, template } = app;
template`
<div class='app grid-center' data-class=${is`[${badMood} === true ? 'bad-mood' : 'good-mood', ${imSuchAGeminiLol} && 'forgiving']`}>
  <div class='card'>
    <h2>Frameworks I ${is`${badMood} === true ? 'hate' : 'love'`}!</h2>
    <ul>
      <div data-list=${listItems}></div>
    </ul>
    <div data-if=${is`${badMood} === true && ${imSuchAGeminiLol} === true`}>
      <div data-component=${justKidding}></div>
    </div>
    <div data-if=${is`${badMood} === true && ${imSuchAGeminiLol} === false`}>
      <p>And I really mean it!!</p>
    </div>
    <button data-click=${badMood.toggle}>Toggle Mood</button>
    <div data-if=${is`${imSuchAGeminiLol} === false && ${badMood} === true`}>
      <button data-click=${orDoI}>...or do I??</button>
    </div>
  </div>
</div>
`;

IsJs.render(app);