}
    public numberOfAddedTracks: number;
    public percentageOfAddedTracks: number;
    public type: string = 'addingTracks';
import { IIndexingMessage } from './i-indexing-message';

export class AddingTracksMessage implements IIndexingMessage {
