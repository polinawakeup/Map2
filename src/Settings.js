export default class Settings {
  constructor() {
    this.defaultSettings = new Map();
    this.defaultSettings.set('theme', 'dark');
    this.defaultSettings.set('music', 'trance');
    this.defaultSettings.set('difficulty', 'easy');

    this.userSettings = new Map();
  }

  setUserSettings(key, value) {
    this.userSettings.set(key, value);
  }

  get settings() {
    const final = new Map(this.defaultSettings);

    this.userSettings.forEach((value, key) => {
      final.set(key, value);
    });

    return final;
  }
}
