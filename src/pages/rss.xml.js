import rss, { pagesGlobToRssItems} from '@astrojs/rss';

export async function GET(context){
  return rss({
    title: 'てるよし | homepage',
    description: 'てるよしのホームページ',
    site: 'context.site',
    items: await pagesGlobToRssItems(import.meta.glob('./**/*.md')),
    customData: `<language>ja-jp</language>`
  });
}