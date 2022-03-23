import {Config} from '../core';
import {createI18n} from 'vue-i18n/index';
import Languages from './languages';

const _engine = createI18n({
    locale: Config.multiLang.locale,
    fallbackLocale: Config.multiLang.fallback,
    messages: Languages
});

export const Translate = _engine.global.t;
export default _engine;
