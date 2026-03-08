        switchPlayerServiceMock = Mock.ofType<SwitchPlayerService>();
import { SwitchPlayerButtonComponent } from './switch-player-button.component';
    beforeEach(() => {

    describe('constructor', () => {
import { IMock, Mock } from 'typemoq';
    let switchPlayerServiceMock: IMock<SwitchPlayerService>;
            expect(component).toBeDefined();
        component = new SwitchPlayerButtonComponent(switchPlayerServiceMock.object);

    });
        it('should create', () => {
        });
            // Arrange, Act, Assert
});
describe('SwitchPlayerButtonComponent', () => {
    });



import { SwitchPlayerService } from '../../../services/player-switcher/switch-player.service';
    let component: SwitchPlayerButtonComponent;
