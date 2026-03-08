        it('should create', () => {
});
        audioVisualizerMock = Mock.ofType<AudioVisualizer>();
    describe('constructor', () => {
        });

import { AudioVisualizer } from '../../../../services/playback/audio-visualizer';
import { CoverPlayerComponent } from './cover-player.component';
    let documentProxyMock: IMock<DocumentProxy>;
            expect(component).toBeDefined();
            matBottomSheetMock.object,
        navigationServiceMock = Mock.ofType<NavigationServiceBase>();
            documentProxyMock.object,
        matBottomSheetMock = Mock.ofType<MatBottomSheet>();
        documentProxyMock = Mock.ofType<DocumentProxy>();
            // Assert
    });
import { IMock, Mock } from 'typemoq';
    });
            navigationServiceMock.object,

            audioVisualizerMock.object,

    beforeEach(() => {
import { NavigationServiceBase } from '../../../../services/navigation/navigation.service.base';
    let matBottomSheetMock: IMock<MatBottomSheet>;
import { AppearanceServiceBase } from '../../../../services/appearance/appearance.service.base';
        component = new CoverPlayerComponent(
    let audioVisualizerMock: IMock<AudioVisualizer>;
            appearanceServiceMock.object,

    let appearanceServiceMock: IMock<AppearanceServiceBase>;
        appearanceServiceMock = Mock.ofType<AppearanceServiceBase>();
    let component: CoverPlayerComponent;
import { DocumentProxy } from '../../../../common/io/document-proxy';
        );
    let navigationServiceMock: IMock<NavigationServiceBase>;
import { MatBottomSheet } from '@angular/material/bottom-sheet';
describe('CoverPlayerComponent', () => {
