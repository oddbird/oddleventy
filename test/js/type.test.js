import { heading, md, mdInline, typogr } from '#/type';

const markdown = '## Lorem ipsum dolor sit amet, consectetur';
const markup = '<h2>Lorem ipsum dolor sit amet, consectetur</h2>';
const content = 'Lorem ipsum dolor sit amet, consectetur';

describe('typography filters', () => {
  test('typogr', () => {
    typogr(markup, false);
    typogr(content, true);
  });

  test('md', () => {
    const expected =
      '<h2>Lorem ipsum dolor sit amet,<span class="widont">&nbsp;</span>consectetur</h2>';
    expect(md()).toBe(undefined);

    // expect(md(markdown)).toEqual(expected);
  });

  test('mdInline', () => {
    const expected =
      '## Lorem ipsum dolor sit amet,<span class="widont">&nbsp;</span>consectetur';

    expect(mdInline(markdown)).toEqual(expected);
    expect(mdInline()).toBe(undefined);
  });

  test('heading', () => {
    const headingWithAttr =
      '<h2 foo="bar">Lorem ipsum dolor sit amet, consectetur</h2>';
    const headingWithOutAttr =
      '<h2 >Lorem ipsum dolor sit amet, consectetur</h2>';

    expect(heading(content, 2, { foo: 'bar' })).toEqual(headingWithAttr);
    expect(heading(content, 2)).toEqual(headingWithOutAttr);
  });
});
