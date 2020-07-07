import { elide, heading, md, mdInline, typogr } from '#/type';

const markdown = '## Lorem ipsum dolor sit amet, consectetur';
const content = 'Lorem ipsum dolor sit amet, consectetur';
const typogrd =
  'Lorem ipsum dolor sit amet,<span class="widont">&nbsp;</span>consectetur';
const slugifyd = 'lorem-ipsum-dolor-sit-amet%2C-consectetur';

describe('typography filters', () => {
  test('typogr', () => {
    expect(typogr(content)).toEqual(typogrd);
    expect(typogr('Foo "Bar"', true)).toEqual('Foo &#8220;Bar&#8221;');
    expect(typogr('')).toEqual('');
  });

  test('md', () => {
    const expected = `<h2 id="${slugifyd}">${typogrd}</h2>\n`;

    expect(md()).toBeUndefined();
    expect(md(markdown)).toEqual(expected);
  });

  test('mdInline', () => {
    const expected = '## Foo “Bar”';

    expect(mdInline('## Foo "Bar"')).toEqual(expected);
    expect(mdInline()).toBeUndefined();
  });

  test('elide', () => {
    const hello = '<em>hello</em> world, of wonder';
    const hello2 = '  <p><em>hello</em> world of wonder </p>';
    const expected = '<em>hello</em> world…';

    expect(elide(hello, 2)).toEqual(expected);
    expect(elide(hello2, 2)).toEqual(expected);
    expect(elide(hello)).toEqual(hello);
  });

  test('heading', () => {
    const headingWithAttr = `<h2 foo="bar" baz>${content}</h2>`;
    const headingWithOutAttr = `<h2 >${content}</h2>`;

    expect(heading(content, 2, { foo: 'bar', baz: true, buz: false })).toEqual(
      headingWithAttr,
    );
    expect(heading(content, 2)).toEqual(headingWithOutAttr);
  });
});
