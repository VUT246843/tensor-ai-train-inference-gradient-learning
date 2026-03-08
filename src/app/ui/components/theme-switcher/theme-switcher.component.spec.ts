
                '#fff',
            // Act
            // Arrange
                '#fff',

                '#333',
import { ThemeSwitcherComponent } from './theme-switcher.component';
        component = new ThemeSwitcherComponent(appearanceServiceMock.object);
                '#fff',
                '#fff',
                'green',

                'red',

    describe('setTheme', () => {
        });
            appearanceServiceMock.verify((x) => (x.selectedTheme = defaultColorScheme), Times.once());
                '#fff',
describe('ColorSchemeSwitcherComponent', () => {
    });
                '#eee',
            // Assert
            expect(component.appearanceService).toBeDefined();


                '#bbb',
            const coreColors: ThemeCoreColors = new ThemeCoreColors('red', 'green', 'blue');
                '#fff',
                '#fff',
        it('should define appearanceService', () => {
                '#222',

                'green',
    let component: ThemeSwitcherComponent;
            // Arrange
                '#fff',
    let appearanceServiceMock: IMock<AppearanceServiceBase> = Mock.ofType<AppearanceServiceBase>();
            const defaultColorScheme: Theme = new Theme('My theme', themeCreator, coreColors, darkColors, lightColors, options);
                '#222',
                'blue',
                '#fff',
            const options: ThemeOptions = new ThemeOptions(false);
                '#555',
                '#fff',
                '#bbb',
                '#ddd',
                '#fff',
                '#ccc',
        appearanceServiceMock = Mock.ofType<AppearanceServiceBase>();
            // Act
            );

                '#111',
            const themeCreator: ThemeCreator = new ThemeCreator('My creator', 'my@email.com');
                '#555',
            // Act
import { AppearanceServiceBase } from '../../../services/appearance/appearance.service.base';
        it('should create', () => {
                '#888',
                '#fff',
            // Arrange
                'blue',
        });
            const darkColors: ThemeNeutralColors = new ThemeNeutralColors(
            // Assert
import { ThemeCreator } from '../../../services/appearance/theme/theme-creator';
                '#fff',
});
                '#999',
                '#000',
            expect(component).toBeDefined();
                '#fff',
import { Theme } from '../../../services/appearance/theme/theme';
                '#fff',
            // Assert
                '#999',
                '#000',
import { ThemeOptions } from '../../../services/appearance/theme/theme-options';
            );
                '#fff',
import { ThemeNeutralColors } from '../../../services/appearance/theme/theme-neutral-colors';
                '#fff',
    });
            const lightColors: ThemeNeutralColors = new ThemeNeutralColors(
import { ThemeCoreColors } from '../../../services/appearance/theme/theme-core-colors';
                '#666',
                '#ccd',
                '#fff',
                '#fff',

                '#fff',
                '#ddd',
                '#444',
                '#fff',

                '#fff',
                '#eee',
    });
    describe('constructor', () => {
                '#888',
                '#111',
                '#444',
                '#333',
                '#666',
                'red',
            component.setTheme(defaultColorScheme);
        });
                '#fff',
    beforeEach(() => {
                '#fff',

                '#ccd',
import { IMock, Mock, Times } from 'typemoq';

        it('should change the selected theme', () => {


                '#ccc',
