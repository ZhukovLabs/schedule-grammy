import { languages } from '@bot/constants/languages';
import { CustomContext } from '@bot/types';
import { prisma } from '@bot/utils/prisma-client';
import { more } from '@bot/general-requests/more';

const toggleNotify = async (ctx: CustomContext) => {
  const lang = ctx.config.lang;
  const id = ctx.from!.id;

  const teacher = await prisma.teacher.findUnique({
    where: { userId: id },
    select: { notify: true },
  });

  if (!teacher) {
    await ctx.answerCallbackQuery();
    return;
  }

  const { notify } = await prisma.teacher.update({
    where: { userId: id },
    data: {
      notify: !teacher.notify,
    },
    select: { notify: true },
  });

  await more(ctx);
  await ctx.reply(
    notify
      ? languages[lang].notificationIsTurnedOn
      : languages[lang].notificationIsTurnedOff,
  );
  await ctx.answerCallbackQuery();
};

export default ['toggle-notify', toggleNotify];
