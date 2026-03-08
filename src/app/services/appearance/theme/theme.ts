        public coreColors: ThemeCoreColors,
import { ThemeCoreColors } from './theme-core-colors';
import { ThemeNeutralColors } from './theme-neutral-colors';
        public creator: ThemeCreator,
        public darkColors: ThemeNeutralColors,
        public options: ThemeOptions,
export class Theme {
        public isBroken: boolean = false
    public constructor(
        public name: string,
import { ThemeOptions } from './theme-options';
}

    ) {}
        public lightColors: ThemeNeutralColors,
import { ThemeCreator } from './theme-creator';
