const Koa = require('koa');
const Router = require('koa-router');
const slow = require('koa-slow');
const cors = require('@koa/cors');
const app = new Koa();
const router = new Router();

app.use(cors());

app.use(slow({
  delay: 3000
}));

router.get('/news', async (ctx, next) => {
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
  await next();
});

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(5000, () => {
  console.log('Server running on port 5000');
});
