import { Config } from './types/common';

const config: Config<any> = {
  fontPaletRule: [
    'text-black',
  ],
  fillPaletRule: [
    'bg-zink-500',
  ],
  sound: {
    random: 'sounds/',
    wait: 'sounds/win-sound-effect.mp3',
    button: 'sounds/machine-button-being-pressed-sound-effect.mp3',
    input: 'sounds/vintage-button-sound-effect.mp3',
  },
  soundPathRoot: {
    local: 'public/',
    server: '',
  },
};

export default config;
