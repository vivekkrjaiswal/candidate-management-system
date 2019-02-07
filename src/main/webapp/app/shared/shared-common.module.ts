import { NgModule } from '@angular/core';

import { CandidatemanagementsystemSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [CandidatemanagementsystemSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [CandidatemanagementsystemSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class CandidatemanagementsystemSharedCommonModule {}
