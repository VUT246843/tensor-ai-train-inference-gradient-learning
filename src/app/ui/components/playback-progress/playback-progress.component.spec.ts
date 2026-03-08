            component.onMouseUp();

    let playbackServiceProgressChanged: Subject<PlaybackProgress>;
            playbackServiceMock.setup((x) => x.isPlaying).returns(() => false);
            // Act

            component.progressBarPosition = 0;
            component.isProgressContainerDown = true;
            mathExtensionsMock.verify((x) => x.clamp(34, 0, 488), Times.exactly(1));
            component.isProgressThumbDown = false;
            // Arrange
            mathExtensionsMock.setup((x) => x.clamp(40, 0, 500)).returns(() => 40);

            component.onMouseMove(mouseEvent);
            playbackServiceProgressChanged.next(new PlaybackProgress(30, 300));
            component.showProgressThumb = true;
            // Assert

            // Arrange
            playbackServiceMock.setup((x) => x.isPlaying).returns(() => true);
            component.isProgressDragged = true;
    let loggerMock: IMock<Logger>;
            component.progressContainerMouseDown(mouseEvent);
import { MathExtensions } from '../../../common/math-extensions';
            playbackServiceMock.setup((x) => x.isPlaying).returns(() => true);
            // Act
            // Assert
    describe('progressContainerMouseEnter', () => {
        playbackServiceMock = Mock.ofType<PlaybackService>();
            component.isProgressDragged = true;
            expect(component.isProgressContainerDown).toBeFalsy();
            component.isProgressContainerDown = true;
            // Assert
            playbackServiceMock.setup((x) => x.isPlaying).returns(() => false);

            expect(component.isProgressDragged).toBeFalsy();
            component.showProgressThumb = false;
            mathExtensionsMock.setup((x) => x.clamp(34, 0, 488)).returns(() => 34);
            component.showProgressThumb = true;
            // Assert
            component.isProgressContainerDown = false;

            mathExtensionsMock.setup((x) => x.clamp(40, 0, 500)).returns(() => 40);
            playbackServiceMock.verify((x) => x.skipByFractionOfTotalSecondsAsync(It.isAny()), Times.never());
            mathExtensionsMock.setup((x) => x.clamp(34, 0, 488)).returns(() => 34);
            // Assert
        it('should update the progress if progress thumb is not down and progress container is not down', () => {
        it('should show the progress thumb', () => {
            mathExtensionsMock.setup((x) => x.clamp(40, 0, 500)).returns(() => 40);

            // Act
            component.isProgressThumbDown = true;
            // Arrange
        });
            mathExtensionsMock.verify((x) => x.clamp(It.isAny(), It.isAny(), It.isAny()), Times.never());
            component.onMouseMove(mouseEvent);
            mathExtensionsMock.setup((x) => x.clamp(40, 0, 500)).returns(() => 40);
            playbackServiceProgressChanged.next(new PlaybackProgress(30, 0));

            // Arrange

            // Act
            // Act
            component.isProgressThumbDown = true;
        it('should not skip playback when progress is dragged and progress container is not down and playback is stopped', () => {
            component.isProgressThumbDown = true;

            expect(component.progressBarPosition).toEqual(50);
            component.onMouseMove(mouseEvent);
            expect(component.isProgressDragged).toBeTruthy();
            const mouseEvent: any = { pageX: 30 };
            mathExtensionsMock.setup((x) => x.clamp(40, 0, 500)).returns(() => 40);
            expect(component.isProgressDragged).toBeFalsy();
            component.isProgressContainerDown = false;
            expect(component.progressThumbPosition).toEqual(0);

        });
            expect(component.showProgressThumb).toBeFalsy();
        it('should update the progress from playbackService immediately', () => {
import { Logger } from '../../../common/logger';
            const mouseEvent: any = { pageX: 40 };
        it('should create', () => {
            // Arrange
            component.isProgressThumbDown = false;



            // Act
            playbackServiceMock.setup((x) => x.isPlaying).returns(() => false);
            const mouseEvent: any = { pageX: 40 };
            component.onMouseMove(mouseEvent);
            mathExtensionsMock.verify((x) => x.clamp(It.isAny(), It.isAny(), It.isAny()), Times.never());
            // Arrange
            const mouseEvent: any = { pageX: 40 };
            component.isProgressDragged = true;
            // Arrange
            const mouseEvent: any = { pageX: 40 };
            // Act
        });
            // Act
            mathExtensionsMock.verify((x) => x.clamp(40, 0, 500), Times.exactly(1));
            expect(component.progressThumbPosition).toEqual(0);
    describe('progressContainerMouseDown', () => {
            component.isProgressThumbDown = false;

describe('PlaybackProgressComponent', () => {
            component.isProgressThumbDown = false;
            expect(component.progressBarPosition).toEqual(0);
            // Act
            component.onMouseMove(mouseEvent);
        });
        });
            // Act
            component.isProgressContainerDown = true;
        });
        });
        });
        it('should indicate that the progress is not being dragged anymore if the progress container is down', () => {


            component.isProgressDragged = true;
            mathExtensionsMock.verify((x) => x.clamp(It.isAny(), It.isAny(), It.isAny()), Times.never());

        it('should indicate that the progress container is not down anymore anymore if the progress is being dragged', () => {
            // Assert
        it('should indicate that progress is not being dragged if progress thumb is not down', () => {
            component.progressBarPosition = 0;
            mathExtensionsMock.setup((x) => x.clamp(40, 0, 500)).returns(() => 40);
            // Assert
        it('should skip playback when progress is not dragged and progress container is down and playback is started', () => {
            mathExtensionsMock.verify((x) => x.clamp(It.isAny(), It.isAny(), It.isAny()), Times.never());

            // Assert
    describe('progressContainerMouseLeave', () => {

            // Assert
import { Observable, Subject } from 'rxjs';
            // Assert
            component.showProgressThumb = true;

            // Arrange

            expect(component).toBeDefined();
        });

            component.isProgressContainerDown = true;

            mathExtensionsMock.setup((x) => x.clamp(34, 0, 488)).returns(() => 34);
            // Arrange
            mathExtensionsMock.setup((x) => x.clamp(40, 0, 500)).returns(() => 40);

            component.showProgressThumb = true;

            // Arrange
            // Act
            // Assert
            // Assert
            // Assert
            component.isProgressContainerDown = true;

        it('should indicate that the progress container is down', () => {
    });
        it('should not update the progress if progress thumb is not down', () => {

            playbackServiceMock.setup((x) => x.isPlaying).returns(() => true);
            component.progressBarPosition = 0;


            const mouseEvent: any = { pageX: 40 };
            // Arrange

            expect(component.isProgressThumbDown).toBeTruthy();

            expect(component.showProgressThumb).toBeTruthy();
        });
            component.onMouseUp();
            component.onMouseMove(mouseEvent);

            component.onMouseUp();
        });

            component.isProgressThumbDown = true;
            component.isProgressDragged = true;
            expect(component.progressThumbPosition).toEqual(0);
            component.isProgressThumbDown = true;
            // Arrange

            mathExtensionsMock.setup((x) => x.clamp(34, 0, 488)).returns(() => 34);
            expect(component.isProgressContainerDown).toBeFalsy();

            mathExtensionsMock.setup((x) => x.clamp(40, 0, 500)).returns(() => 40);
        it('should not update the progress if progress thumb is not down but progress container is down', () => {
            // Act
            component.isProgressDragged = false;

            expect(component.progressBarPosition).toEqual(0);
            playbackServiceMock.object,


            component.isProgressThumbDown = true;
            // Assert
            playbackServiceMock.setup((x) => x.isPlaying).returns(() => true);
            component.progressThumbPosition = 0;
            playbackServiceMock.verify((x) => x.skipByFractionOfTotalSecondsAsync(It.isAny()), Times.never());
    let mathExtensionsMock: IMock<MathExtensions>;
            component.progressBarPosition = 0;
import { PlaybackProgress } from '../../../services/playback/playback-progress';
        it('should initialize progressThumbPosition as 0', () => {
            expect(component.isProgressContainerDown).toBeFalsy();
        });


            mathExtensionsMock.verify((x) => x.clamp(It.isAny(), It.isAny(), It.isAny()), Times.never());
            component.onMouseMove(mouseEvent);


            // Act

            component.onMouseUp();

            // Assert
            expect(component.showProgressThumb).toBeTruthy();
            expect(component.progressBarPosition).toEqual(0);
            mathExtensionsMock.setup((x) => x.clamp(34, 0, 488)).returns(() => 34);
        it('should indicate that the progress thumb is not shown', () => {
    beforeEach(() => {
            playbackServiceMock.verify((x) => x.skipByFractionOfTotalSecondsAsync(40 / 500), Times.exactly(1));
    let nativeElementProxyMock: IMock<NativeElementProxy>;
            // Act
            expect(component.progressThumbPosition).toEqual(44);
        playbackServiceMock.setup((x) => x.progressChanged$).returns(() => playbackServiceProgressChanged$);
            // Assert
            component.onMouseUp();
            component.onMouseUp();
    let component: PlaybackProgressComponent;



            // Act
    });
        });
            component.isProgressDragged = false;
            component.isProgressThumbDown = true;
            expect(component.progressBarPosition).toEqual(0);
            component.onMouseUp();
            playbackServiceProgressChanged.next(new PlaybackProgress(30, 300));
            expect(component.isProgressThumbDown).toBeTruthy();
            playbackServiceMock.setup((x) => x.isPlaying).returns(() => true);
            component.isProgressThumbDown = true;
            mathExtensionsMock.setup((x) => x.clamp(34, 0, 488)).returns(() => 34);
            component.isProgressContainerDown = false;
        component.progressTrack = progressTrackElementRef;
            // Act
            playbackServiceProgressChanged.next(new PlaybackProgress(30, 300));
            component.isProgressContainerDown = false;


            component.isProgressDragged = true;
            component.isProgressThumbDown = false;
            const mouseEvent: any = { pageX: 40 };
    });
            mathExtensionsMock.setup((x) => x.clamp(34, 0, 488)).returns(() => 34);


            component.isProgressThumbDown = true;
            expect(component.progressThumbPosition).toEqual(34);
        nativeElementProxyMock = Mock.ofType<NativeElementProxy>();
        });
            // Assert
        it('should not update the progress if progress thumb is not down and progress container is not down and total progress seconds is 0', () => {


            expect(component.progressBarPosition).toEqual(0);

        nativeElementProxyMock.setup((x) => x.getElementWidth(progressTrackElementRef)).returns(() => 500);
            component.onMouseUp();
        });
            playbackServiceMock.setup((x) => x.isPlaying).returns(() => true);
            playbackServiceMock.setup((x) => x.progress).returns(() => new PlaybackProgress(30, 300));
            const mouseEvent: any = { pageX: 40 };
            // Arrange
            mathExtensionsMock.verify((x) => x.clamp(40, 0, 500), Times.exactly(1));
            expect(component.showProgressThumb).toBeFalsy();
            component.isProgressContainerDown = false;
            playbackServiceMock.verify((x) => x.skipByFractionOfTotalSecondsAsync(40 / 500), Times.exactly(1));

            component.progressContainerMouseLeave();
            playbackServiceMock.verify((x) => x.skipByFractionOfTotalSecondsAsync(It.isAny()), Times.never());
            expect(component.isProgressDragged).toBeFalsy();

import { PlaybackService } from '../../../services/playback/playback.service';

            mathExtensionsMock.setup((x) => x.clamp(34, 0, 488)).returns(() => 34);
            component.isProgressContainerDown = false;
            playbackServiceMock.setup((x) => x.isPlaying).returns(() => true);

            // Assert
            mathExtensionsMock.verify((x) => x.clamp(44, 0, 488), Times.exactly(1));
            component.showProgressThumb = true;
        it('should indicate that the progress thumb is down', () => {

            expect(component.progressThumbPosition).toEqual(0);
        it('should initialize isProgressContainerDown as false', () => {
        it('should indicate that the progress thumb is not down', () => {
            const mouseEvent: any = { pageX: 40 };
            component.onMouseUp();
            // Act

            // Act
        });
            component.onMouseUp();
            // Act
            // Arrange
            component.isProgressContainerDown = true;
            // Assert
        it('should indicate that progress is being dragged if progress thumb is down', () => {
    });

            // Assert
        it('should skip playback when progress is dragged and progress container is not down and playback is started', () => {

    let progressTrackElementRef: ElementRef;
            // Act
    describe('constructor', () => {
            // Arrange
            component.isProgressDragged = false;
            // Act
            component.progressBarPosition = 0;
            playbackServiceProgressChanged.next(new PlaybackProgress(30, 300));
        playbackServiceProgressChanged = new Subject();
            // Assert
        });
            // Assert
            component.isProgressThumbDown = false;
        it('should not skip playback when progress is not dragged and progress container is not down', () => {
            component.isProgressThumbDown = false;
            component.progressBarPosition = 0;
            component.progressThumbMouseDown();
        });
            // Arrange
        });
            playbackServiceMock.setup((x) => x.isPlaying).returns(() => false);

            component.isProgressThumbDown = true;



            // Arrange
            component.isProgressDragged = true;
        loggerMock = Mock.ofType<Logger>();

    describe('ngOnInit', () => {

            // Arrange
            loggerMock.object,
        component = new PlaybackProgressComponent(
            component.isProgressContainerDown = false;
        progressTrackElementRef = new ElementRef({});

            expect(component.progressThumbPosition).toEqual(0);
            component.onMouseMove(mouseEvent);

            mathExtensionsMock.verify((x) => x.clamp(It.isAny(), It.isAny(), It.isAny()), Times.never());

            // Arrange

    describe('progressThumbMouseDown', () => {
        it('should not skip playback when progress is dragged and progress container is down and playback is stopped', () => {
            const mouseEvent: any = { pageX: 40 };
            playbackServiceMock.setup((x) => x.isPlaying).returns(() => true);
            // Arrange
            // Arrange

            // Act
            expect(component.isProgressThumbDown).toBeFalsy();
    });
            // Act
            component.progressContainerMouseLeave();
            component.isProgressDragged = false;

        });
            const mouseEvent: any = { pageX: 40 };

        it('should not update the progress if progress thumb is down and playback is in not progress', () => {
            component.isProgressDragged = false;
            component.progressThumbMouseDown();
            playbackServiceMock.setup((x) => x.isPlaying).returns(() => false);
        it('should initialize showProgressThumb as false', () => {

            // Act


            mathExtensionsMock.setup((x) => x.clamp(40, 0, 500)).returns(() => 40);



            expect(component.progressBarPosition).toEqual(0);
            const mouseEvent: any = { pageX: 30 };
    describe('onMouseMove', () => {
            expect(component.isProgressThumbDown).toBeFalsy();
        });
            component.isProgressDragged = true;
            mathExtensionsMock.setup((x) => x.clamp(44, 0, 488)).returns(() => 44);
            component.isProgressThumbDown = true;
            playbackServiceMock.verify((x) => x.skipByFractionOfTotalSecondsAsync(It.isAny()), Times.never());
            component.onMouseMove(mouseEvent);

            // Assert
            // Act

import { PlaybackProgressComponent } from './playback-progress.component';


        it('should update not the progress if playbackService is not playing', () => {
            mathExtensionsMock.setup((x) => x.clamp(40, 0, 500)).returns(() => 40);
        it('should not update the progress if progress thumb is down and progress container is down', () => {
            mathExtensionsMock.verify((x) => x.clamp(34, 0, 488), Times.exactly(1));
    });
            // Assert
            // Assert

            mathExtensionsMock.setup((x) => x.clamp(34, 0, 488)).returns(() => 34);
            // Assert
            // Act
import { IMock, It, Mock, Times } from 'typemoq';
        });
            component.isProgressThumbDown = true;

            mathExtensionsMock.setup((x) => x.clamp(40, 0, 500)).returns(() => 40);
        component.ngOnInit();
        });
        it('should hide the progress thumb if the progress thumb is not down', () => {
            // Act


            mathExtensionsMock.verify((x) => x.clamp(It.isAny(), It.isAny(), It.isAny()), Times.never());
            // Arrange

            // Assert
            component.showProgressThumb = true;
            // Assert
            // Act
            component.progressBarPosition = 0;
        });
            // Arrange
            expect(component.progressBarPosition).toEqual(50);
            component.progressContainerMouseEnter();
            // Arrange
            expect(component.isProgressContainerDown).toBeTruthy();
            // Assert
        it('should not update the progress if progress thumb is down but progress container is not down', () => {

            component.onMouseMove(mouseEvent);

            playbackServiceMock.setup((x) => x.isPlaying).returns(() => true);
            expect(component.progressThumbPosition).toEqual(0);

    describe('ngAfterViewInit', () => {
            expect(component.showProgressThumb).toBeFalsy();
            playbackServiceMock.setup((x) => x.isPlaying).returns(() => true);
            // Assert
        });
        it('should initialize isProgressThumbClicked as false', () => {
            // Act
            // Assert
            // Act

            component.onMouseUp();
        mathExtensionsMock = Mock.ofType<MathExtensions>();
    });

            // Assert


            const mouseEvent: any = { pageX: 40 };
            // Assert
            expect(component.progressThumbPosition).toEqual(0);
            expect(component.progressBarPosition).toEqual(0);
            // Arrange
            component.isProgressThumbDown = true;
            expect(component.progressThumbPosition).toEqual(44);
            component.isProgressContainerDown = true;
            component.isProgressContainerDown = true;
    let playbackServiceMock: IMock<PlaybackService>;

            component.progressBarPosition = 0;

        });
            nativeElementProxyMock.object,
            component.isProgressDragged = false;
        });
            // Arrange
            component.progressContainerMouseDown(mouseEvent);

            // Arrange
        it('should update the progress if playbackService is playing', () => {

import { NativeElementProxy } from '../../../common/native-element-proxy';
            component.isProgressDragged = true;

        const playbackServiceProgressChanged$: Observable<PlaybackProgress> = playbackServiceProgressChanged.asObservable();

            // Assert
            // Assert
        );

            // Arrange
        it('should update the progress if progress thumb is down and playback is in progress', () => {
            // Arrange
            // Act
            const mouseEvent: any = { pageX: 40 };
            // Act
        it('should initialize progressBarPosition as 0', () => {
    });

            mathExtensionsMock.setup((x) => x.clamp(34, 0, 488)).returns(() => 34);
            mathExtensionsMock.setup((x) => x.clamp(34, 0, 488)).returns(() => 34);
            expect(component.progressThumbPosition).toEqual(0);
        });
            // Arrange
            component.showProgressThumb = true;
            // Arrange
            expect(component.progressBarPosition).toEqual(40);
            // Act
    describe('onMouseUp', () => {
            component.isProgressThumbDown = false;
            // Arrange
        });
            // Act
            // Arrange
        it('should initialize isProgressDragged as false', () => {
            expect(component.progressBarPosition).toEqual(40);
        });
            // Act


            // Arrange
            mathExtensionsMock.verify((x) => x.clamp(It.isAny(), It.isAny(), It.isAny()), Times.never());
            component.onMouseUp();
            expect(component.isProgressDragged).toBeFalsy();

        });

        it('should indicate that the progress is not being dragged anymore if the progress is being dragged', () => {

            jest.runAllTimers();
            mathExtensionsMock.setup((x) => x.clamp(44, 0, 488)).returns(() => 44);


});
            // Act



            component.isProgressThumbDown = true;
            component.progressContainerMouseDown(mouseEvent);
            component.onMouseMove(mouseEvent);
            component.isProgressThumbDown = true;
            // Act

            component.isProgressContainerDown = true;

            // Arrange
        });
            // Arrange
        });

        it('should skip playback when progress is dragged and progress container is down and playback is started', () => {
            // Assert
            playbackServiceMock.setup((x) => x.isPlaying).returns(() => true);
            // Arrange
        it('should not hide the progress thumb if the progress thumb is down', () => {
            component.ngAfterViewInit();

            expect(component.progressBarPosition).toEqual(0);
import { ElementRef } from '@angular/core';
        });
            component.isProgressThumbDown = true;
            component.isProgressThumbDown = true;
    });
        });


            // Arrange
            // Act
            component.onMouseUp();
            mathExtensionsMock.verify((x) => x.clamp(44, 0, 488), Times.exactly(1));
            // Act
            component.showProgressThumb = true;
            playbackServiceMock.setup((x) => x.isPlaying).returns(() => true);

            // Assert
            expect(component.progressThumbPosition).toEqual(34);
            // Assert

        it('should indicate that the progress thumb is down', () => {
        it('should indicate that the progress container is not down anymore if the progress container is down', () => {
            component.isProgressContainerDown = false;
        });
        it('should not skip playback when progress is not dragged and progress container is down and playback is stopped', () => {
            mathExtensionsMock.object,
            component.isProgressContainerDown = true;
            // Arrange

        });
    });
        });
        });
            component.isProgressContainerDown = true;
            component.isProgressThumbDown = true;

            // Assert
            jest.useFakeTimers();
            playbackServiceMock.verify((x) => x.skipByFractionOfTotalSecondsAsync(40 / 500), Times.exactly(1));
