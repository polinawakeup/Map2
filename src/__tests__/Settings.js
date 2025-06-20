// eslint-disable-next-line no-unused-vars
import Settings from '../Settings';

let settings;

beforeEach(() => {
  settings = new Settings();
});

test('testing new settings created with default settings', () => {
  const testMap = new Map([
    ['theme', 'dark'],
    ['music', 'trance'],
    ['difficulty', 'easy'],
  ]);
  expect(settings.defaultSettings).toEqual(testMap);
});

test('user settings are covering default settings', () => {
  const testMap = new Map([
    ['theme', 'light'],
    ['music', 'rock'],
    ['difficulty', 'easy'],
  ]);
  settings.setUserSettings('theme', 'light');
  settings.setUserSettings('music', 'rock');
  expect(settings.settings).toEqual(testMap);
});
