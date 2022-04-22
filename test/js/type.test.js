/* eslint-disable max-len */
import { elide, heading, md, mdInline, typogr } from '#/type';

const markdown = '## Lorem ipsum dolor sit amet, consectetur';
const content = 'Lorem ipsum dolor sit amet, consectetur';
const typogrd =
  'Lorem ipsum dolor sit amet,<span class="widont">&nbsp;</span>consectetur';
const slugifyd = 'lorem-ipsum-dolor-sit-amet%2C-consectetur';

describe('typography filters', () => {
  test('typogr', () => {
    expect(typogr(content)).toEqual(typogrd);
    expect(typogr('Foo "Bar"', true)).toBe('Foo &#8220;Bar&#8221;');
    expect(typogr('')).toBe('');
  });

  test('md', () => {
    const expected = `<div class="anchor-link-wrapper">\n<h2 id="${slugifyd}" tabindex="-1">${typogrd}</h2>\n<a class="header-anchor" href="#lorem-ipsum-dolor-sit-amet%2C-consectetur"><span aria-hidden="true"><svg data-icon="link" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" viewBox="0 0 20 20"> <path d="M10.682 12.998c-0.943 0-1.886-0.359-2.604-1.077-0.195-0.195-0.195-0.512 0-0.707s0.512-0.195 0.707 0c1.046 1.046 2.747 1.046 3.793 0l3.636-3.636c1.046-1.046 1.046-2.747 0-3.793s-2.747-1.046-3.793 0l-3.068 3.068c-0.195 0.195-0.512 0.195-0.707 0s-0.195-0.512 0-0.707l3.068-3.068c1.436-1.436 3.772-1.436 5.207 0s1.436 3.772 0 5.207l-3.636 3.636c-0.718 0.718-1.661 1.077-2.604 1.077z"></path><path d="M4.682 18.998c-0.943 0-1.886-0.359-2.604-1.077-1.436-1.436-1.436-3.772 0-5.207l3.636-3.636c1.436-1.436 3.772-1.436 5.207 0 0.195 0.195 0.195 0.512 0 0.707s-0.512 0.195-0.707 0c-1.046-1.046-2.747-1.046-3.793 0l-3.636 3.636c-1.046 1.046-1.046 2.747 0 3.793s2.747 1.046 3.793 0l3.068-3.068c0.195-0.195 0.512-0.195 0.707 0s0.195 0.512 0 0.707l-3.068 3.068c-0.718 0.718-1.661 1.077-2.604 1.077z"></path></svg></span> <span class="visually-hidden">Permalink to “Lorem ipsum dolor sit amet, consectetur”</span></a></div>\n`;

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
