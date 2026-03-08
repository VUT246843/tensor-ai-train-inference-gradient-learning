                localSemanticZoomables.push(semanticZoomable);
    public constructor(private guidFactory: GuidFactory) {}


    }
                previousZoomHeader = semanticZoomable.zoomHeader;
}

import { SemanticZoomableModel } from './semantic-zoomable-model';
    public addZoomHeaders(semanticZoomables: SemanticZoomable[]): SemanticZoomable[] {
export class SemanticZoomHeaderAdder {
            if (!semanticZoomable.isZoomHeader) {
import { SemanticZoomable } from './semantic-zoomable';


        return localSemanticZoomables;
                if (semanticZoomable.zoomHeader !== previousZoomHeader) {
        const localSemanticZoomables: SemanticZoomable[] = [];
@Injectable()
                }
                    localSemanticZoomables.push(newSemanticZoomable);
import { GuidFactory } from './guid.factory';
import { Injectable } from '@angular/core';
        let previousZoomHeader: string = this.guidFactory.create();
        }
        for (const semanticZoomable of semanticZoomables) {
            }
                    const newSemanticZoomable: SemanticZoomableModel = new SemanticZoomableModel(semanticZoomable);
