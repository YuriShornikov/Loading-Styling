const Koa = require('koa');
const Router = require('koa-router');
const slow = require('koa-slow');
const app = new Koa();
const router = new Router();

app.use(slow({
  delay: 3000  // Задержка в миллисекундах
}));


router.get('/news', async ctx => {
  ctx.body = [
    {
      title: "Случилось что-то очень важное",
      content: "Если вы читаете это, то обучение JS в браузере подходит к концу. Вам осталось изучить 2 темы и курсовой проект."
    },
    {
      title: "Сделать домашнее задание до 26 мая",
      content: "Если вы будете долго откладывать реализацию проекта, то вам предстоит в кротчайшие сроки сотворить чудо, либо воспользоваться продлением. Рекомендуем приступить сейчас же!"
    }
    ];
});

app.use(router.routes());
app.use(router.allowedMethods());

// app.use(async ctx => {
//   ctx.body = 'Данные загружены';
// });

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
