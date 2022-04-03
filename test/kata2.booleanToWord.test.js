const { booleanToWord } = require("../src");

it("booleanToWord", () => {
 expect(booleanToWord(true)).toBe('Yes')
 expect(booleanToWord(false)).toBe('No')
});
