const { isPublic, publicTags, displayName } = require('#/tags');

describe('tag filters', () => {
  const tags = ['javascript', '_foo bar'];
  test('isPublic', () => {
    expect(isPublic(tags[0])).toBe(true);
    expect(isPublic(tags[1])).toBe(false);
  });

  test('displayName', () => {
    console.log(displayName(tags[0]));
    console.log(displayName(tags[1]));
  });
});
