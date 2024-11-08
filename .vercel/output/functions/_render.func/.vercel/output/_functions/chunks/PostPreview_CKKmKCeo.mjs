import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, d as renderComponent, F as Fragment } from './astro/server_D34pVGWb.mjs';
import 'kleur/colors';
import { $ as $$ArrowRight } from './ArrowRight_D1OIaL3y.mjs';
import 'clsx';

const $$Astro$1 = createAstro("https://vannessapage-6tfxyjhr4-zainv4s-projects.vercel.app");
const $$FormattedDate = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$FormattedDate;
  const { date } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<time${addAttribute(date.toISOString(), "datetime")}> ${date.toLocaleDateString("en-us", {
    year: "numeric",
    month: "long",
    day: "numeric"
  })} </time>`;
}, "C:/Users/iyoun/Desktop/dante-astro-theme-v0.0.1/dante-astro-theme-main/src/components/FormattedDate.astro", void 0);

const $$Astro = createAstro("https://vannessapage-6tfxyjhr4-zainv4s-projects.vercel.app");
const $$PostPreview = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$PostPreview;
  const { post, class: className, headingLevel = "h2" } = Astro2.props;
  const { title, publishDate, updatedDate, excerpt } = post.data;
  const TitleTag = headingLevel;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(["flex justify-between items-start gap-8 group", className], "class:list")}${addAttribute(`/blog/${post.slug}/`, "href")}> <div class="grow"> ${renderComponent($$result, "TitleTag", TitleTag, { "class": "text-xl leading-tight font-serif font-medium group-hover:underline group-hover:decoration-dashed group-hover:underline-offset-4 group-hover:decoration-1 sm:text-2xl" }, { "default": ($$result2) => renderTemplate`${title}` })} <div class="mt-1 text-sm leading-normal"> ${renderComponent($$result, "FormattedDate", $$FormattedDate, { "date": publishDate })} ${updatedDate && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${" "}<span>
(Updated on ${renderComponent($$result2, "FormattedDate", $$FormattedDate, { "date": updatedDate })})
</span> ` })}`} </div> ${excerpt && renderTemplate`<div class="mt-3 text-sm leading-normal">${excerpt}</div>`} </div> <div class="hidden font-serif italic opacity-0 transition group-hover:opacity-100 sm:inline-flex sm:gap-1 sm:items-center sm:shrink-0">
Read Post ${renderComponent($$result, "ArrowRight", $$ArrowRight, { "class": "fill-current w-4 h-4" })} </div> </a>`;
}, "C:/Users/iyoun/Desktop/dante-astro-theme-v0.0.1/dante-astro-theme-main/src/components/PostPreview.astro", void 0);

export { $$FormattedDate as $, $$PostPreview as a };
