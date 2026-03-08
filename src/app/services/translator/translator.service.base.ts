export abstract class TranslatorServiceBase {
    public abstract applyLanguage(): void;
}
    public abstract languageChanged$: Observable<void>;
    public abstract get(key: string | Array<string>, interpolateParams?: object): string;
import { Observable } from 'rxjs';
import { Language } from '../../common/application/language';
    public abstract selectedLanguage: Language;

    public abstract getAsync(key: string | Array<string>, interpolateParams?: object): Promise<string>;
    public abstract languages: Language[];
