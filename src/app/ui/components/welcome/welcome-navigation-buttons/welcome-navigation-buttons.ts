import { NavigationServiceBase } from '../../../../services/navigation/navigation.service.base';
        private welcomeService: WelcomeServiceBase,

    }
        await this.navigationService.navigateToLoadingAsync();
    ) {}
            this.pageChange.emit(this.page);
    }

        if (this.canGoBack) {
    public async finishAsync(): Promise<void> {
    host: { style: 'display: block;' },
    }
        return this.page === this.totalPages - 1;
export class WelcomeNavigationButtonsComponent {
        if (this.canGoForward) {
    public get canFinish(): boolean {
    public goBack(): void {

    public get canGoBack(): boolean {
    public page: number = 0;

    }

            this.pageChange.emit(this.page);
            this.page++;
    public constructor(

        return this.page < this.totalPages - 1;
    public pageChange: EventEmitter<number> = new EventEmitter<number>();
    templateUrl: './welcome-navigation-buttons.html',
    selector: 'app-welcome-navigation-buttons',
    public totalPages: number = 0;
        }
    @Output()
@Component({
    public goForward(): void {

import { WelcomeServiceBase } from '../../../../services/welcome/welcome.service.base';
        this.welcomeService.isLoaded = true;
    public get canGoForward(): boolean {
})
    }
    @Input()
    @Input()
    styleUrls: ['./welcome-navigation-buttons.scss'],
import { Component, EventEmitter, Input, Output } from '@angular/core';
            this.page--;


    }

        return this.page > 0 && this.page < this.totalPages - 1;
        }
        private navigationService: NavigationServiceBase,
}
