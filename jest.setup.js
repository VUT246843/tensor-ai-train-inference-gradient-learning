global.crypto = {
jest.mock('@electron/remote', () => ({ exec: jest.fn() }));
jest.mock('jimp', () => ({ exec: jest.fn() }));

    getRandomValues: (arr) => require('crypto').randomBytes(arr.length),
};
