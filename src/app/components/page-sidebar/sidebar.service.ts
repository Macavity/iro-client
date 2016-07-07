
export class SidebarService {

    public collapsed = false;
    
    constructor() {
        
    }
    
    public toggleSidebar(): void {
        // let hideSidebar = this.appState.get('hideSidebar');
        console.log("collapsed", this.collapsed);
        
    }
}
