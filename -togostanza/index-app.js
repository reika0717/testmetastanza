import { d as defineComponent, s as script$1, c as createBlock, r as resolveComponent, o as openBlock, w as withCtx, a as createVNode, F as Fragment, b as renderList, t as toDisplayString, e as createApp } from './Layout-23988380.js';

var script = defineComponent({
    components: {
      Layout: script$1
    },

    props: ['allMetadata'],

    setup({allMetadata}) {
      return {
        allMetadata
      };
    }
  });

const _hoisted_1 = /*#__PURE__*/createVNode("h1", { class: "display-4" }, "List of Stanzas", -1 /* HOISTED */);
const _hoisted_2 = { class: "list-group mt-3" };
const _hoisted_3 = { class: "small text-muted text-truncate mt-1 mb-0" };

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Layout = resolveComponent("Layout");

  return (openBlock(), createBlock(_component_Layout, null, {
    default: withCtx(() => [
      _hoisted_1,
      createVNode("div", _hoisted_2, [
        (openBlock(true), createBlock(Fragment, null, renderList(_ctx.allMetadata, (metadata) => {
          return (openBlock(), createBlock("a", {
            key: metadata['@id'],
            href: `./${metadata['@id']}.html`,
            class: "list-group-item list-group-item-action py-3"
          }, [
            createVNode("div", null, toDisplayString(metadata['stanza:label']), 1 /* TEXT */),
            createVNode("p", _hoisted_3, toDisplayString(metadata['stanza:definition']), 1 /* TEXT */)
          ], 8 /* PROPS */, ["href"]))
        }), 128 /* KEYED_FRAGMENT */))
      ])
    ]),
    _: 1
  }))
}

script.render = render;
script.__file = "node_modules/togostanza/src/components/Index.vue";

var allMetadata = [{"@context":{"stanza":"http://togostanza.org/resource/stanza#"},"@id":"meta_table","stanza:label":"Meta table","stanza:definition":"","stanza:parameter":[{"stanza:key":"say-to","stanza:example":"world","stanza:description":"who to say hello to","stanza:required":false}],"stanza:about-link-placement":"bottom-right","stanza:style":[],"stanza:usage":"<togostanza-meta_table></togostanza-meta_table>","stanza:type":"Stanza","stanza:context":"Environment","stanza:display":"Table","stanza:provider":"PENQE","stanza:license":"MIT","stanza:author":"reika0717","stanza:address":"hirahara@penqe.com","stanza:contributor":[],"stanza:created":"2020-09-18","stanza:updated":"2020-09-18"}];

createApp(script, {allMetadata}).mount('body');
//# sourceMappingURL=index-app.js.map
