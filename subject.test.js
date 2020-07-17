const Subject = require('./subject');

describe("Subject", () => {
  it("should create an instance of Subject", () => {
    const subject = new Subject();
    expect(subject).toBeDefined();
  });
});