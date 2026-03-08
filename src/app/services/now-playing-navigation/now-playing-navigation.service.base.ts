import { NowPlayingPage } from './now-playing-page';

}
export abstract class NowPlayingNavigationServiceBase {
    public abstract readonly currentNowPlayingPage: NowPlayingPage;
import { Observable } from 'rxjs';
    public abstract navigated$: Observable<NowPlayingPage>;
    public abstract navigate(nowPlayingPage: NowPlayingPage);
