import I18n from 'react-native-i18n';
import vi from './locals/vi';
import en from './locals/en';
I18n.fallbacks = true;
I18n.translations = {
  vi,
  en,
}
export default I18n;