export default function metaTable(stanza, params) {
  const sayTo = params['say-to'] || 'world';

  let header = ['header1', 'header2', 'header3']
  let row = [
    {col: ["item1-1", "item1-2", "item1-3"]},
    {col: ["item2-1", "item2-2", "item2-3"]}
  ]

  stanza.render({
    template: 'stanza.html',
    parameters: {
      greeting: `Hello, ${sayTo}!`,
      header: header,
      row: row
    }
  });
}
