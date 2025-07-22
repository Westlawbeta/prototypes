import { Component, ElementRef, QueryList, Renderer2, ViewChild, ViewChildren } from '@angular/core';
import { PlanTasksComponentv7 } from './plan-tasks/plan-tasks.component';
import * as sourcesData from './sources/sources.component.json';

@Component({
  selector: 'app-deep-research-result',
  templateUrl: './deep-research-result.component.html',
  styleUrls: ['./deep-research-result.component.less']
})
export class DeepResearchResultComponentv7 {
  @ViewChild('responseTimeMenu') responseTimeMenu!: ElementRef<HTMLDivElement>;
  @ViewChild('progressBarIndicator') progressBarIndicator!: ElementRef<HTMLDivElement>;
  @ViewChild('dialog', { static: false }) fullPlanDialog: any;
  @ViewChild('planTasks') planTasksComponent!: PlanTasksComponentv7;
  @ViewChild('popover') popoverRef!: ElementRef<HTMLDivElement>;@ViewChild('scrollContainer')
  private scrollContainer!: ElementRef;
  constructor(private renderer: Renderer2, private el: ElementRef) {}

  scrollToTop() {
    this.renderer.setProperty(this.el.nativeElement, 'scrollTop', 0);
  }

  public onGoTo(section: string, event:any): void {
    event.preventDefault();
    let element = document.getElementById(section);
    const container = document.querySelector('.left-panel-content');

    if (container && element) {
      const containerRect = container.getBoundingClientRect();
      const targetRect = element.getBoundingClientRect();

      const offsetTop = targetRect.top - containerRect.top + container.scrollTop;

      container.scrollTo({
      top: offsetTop-0,
      behavior: 'smooth',
      });
    }
  }

  updateProgressBar() {
    if (this.progressBarIndicator) {
      const progressPercentage = (this.currentStep / this.totalSteps) * 100;
      this.progressBarIndicator.nativeElement.style.width = `${progressPercentage}%`;

      // switch (this.currentStep) {
      //   case 2:
      //     this.progressBarIndicator.nativeElement.style.width = '44px';
      //     break;
      //   case 3:
      //     this.progressBarIndicator.nativeElement.style.width = '44px';
      //     break;
      //   case 4:
      //     this.progressBarIndicator.nativeElement.style.width = '44px';
      //     break;
      //   case 5:
      //     this.progressBarIndicator.nativeElement.style.width = '88px';
      //     break;
      //   case 6:
      //     this.progressBarIndicator.nativeElement.style.width = '176px';
      //     break;
      //   case 7:
      //     this.progressBarIndicator.nativeElement.style.width = '308px';
      //     break;
      //   case 8:
      //     this.progressBarIndicator.nativeElement.style.width = '100%';
      //     setTimeout(() => {
      //         this.progressBarIndicator.nativeElement.style.background = '#387C2B';
      //     }, 500);
      //     break;
      //   default:
      //     // Default logic
      //     break;
      // }
    }
  }

  openFullPlanDialog: boolean = false;
  loading: boolean = true;
  //sources: number = 0;
  researchReportTabLoading: boolean = true;
  fullReport: boolean = false;
  preliminaryAnswer: boolean = false;
  currentStep: number = 2;
  totalSteps: number = 8;
  taskCurrent: number = 1;
  taskTotal: number = 8;
  nQuestions: number = 0;
  nSources: number = 0;
  nNotes: number = 0;
  hasViewedSource: boolean = true;
  toggleSupplementalQuestions: boolean = false;
  supInputValue:string = '';
  showSupProgress:boolean = false;
  showSupResponse:boolean = false;
  showV2Report:boolean = false;

  expandedFooter: boolean = false;
  togglePlan: boolean = false;
  toggleReport: boolean = true;
  togglePlan2: boolean = false;
  toggleReport2: boolean = true;
  selectedTabIndex: number = 0;
  reportVersion: string = 'v1';

  sources = sourcesData;

  side: string = '';

  // --- State Properties ---
  data: {title: string, details: string, summary?:string, snippet?:string, url?:string, snippetUrl?:string} | null = null;
  isVisible: boolean = false;
  top: number = 0;
  left: number = 0;

  // --- Tab State ---
  activeTab = 'outcome';

  private hideTimeoutId?: number;
  private currentTarget: HTMLElement | null = null; // Track the current element


  onTabChange(event:any){
    this.selectedTabIndex = event.detail.index;
  }

  ngOnInit() {
    this.scrollToTop();
    this.setCurrentStep(this.currentStep);
    this.nextStep();
  }

  ngAfterViewInit(): void {
    const externalElement = document.querySelector('header');
    if (externalElement) {
      this.renderer.addClass(externalElement, 'dom-flow');
    }
    // Close popover when clicking outside
    document.addEventListener('click', (event: MouseEvent) => {
      if (this.isVisible && this.popoverRef) {
        const popoverElement = this.popoverRef.nativeElement;
        const target = event.target as HTMLElement;

        if (!popoverElement.contains(target) && target !== this.currentTarget) {
          this.closePopover();
        }
      }
    });
  }

  ngOnDestroy(): void {
    const externalElement = document.querySelector('header');
    if (externalElement) {
      this.renderer.removeClass(externalElement, 'dom-flow');
    }
  }

  closeDialog() {
    //this.fullPlanDialog.nativeElement.hide();
    this.openFullPlanDialog = false;
  }

  toggleFullPlanDialog() {
    this.openFullPlanDialog = !this.openFullPlanDialog;

    // if (this.openFullPlanDialog) {
    //   setTimeout(() => {
    //     this.fullPlanDialog.nativeElement.focus();
    //   });
    // }
  }

  toggleLoading() {
    this.loading = !this.loading;
  }

  resetStepData() {
    this.loading = true;
    this.nSources = 0;
    this.fullReport = false;
    this.preliminaryAnswer = false;
  }

  // getSources() {
  //   this.nSources = 12;
  // }

  waitForElement(selector: string, callback: (element: Element) => void) {
    const interval = setInterval(() => {
        const element = document.querySelector(selector);
        if (element) {
            clearInterval(interval);
            callback(element);
        }
    }, 100); // Check every 100ms
  }

  getPremilinaryAnswer() {
    this.preliminaryAnswer = true;
  }
  getFullReport() {
    this.fullReport = true;

    // const tabElement = document.querySelector('#tab-4');
    // (tabElement as HTMLElement).click();
    this.waitForElement('#tab-4', (element: Element) => {
      console.log('Element exists:', element);
      // Perform actions on the element
      (element as HTMLElement).click();
      this.hasViewedSource = false;
  });
  }

  //advance the current step by 1
  nextStep() {
    if(this.currentStep < 8) {
      this.setCurrentStep(this.currentStep + 1);
    }
  }

  //go back to the previous step
  prevStep() {
    if(this.currentStep > 2) {
      this.setCurrentStep(this.currentStep - 1);
    }
  }

  setCurrentStep(step: number) {
    // this.resetStepData();

    if(this.planTasksComponent)
    this.planTasksComponent.updateTask(step);

    this.currentStep = step;
    if(step === 2) {
      //no content visible
      this.taskCurrent = 1;
    }

    if(step === 3) {
       //empty tabs and loader visible
      this.taskCurrent = 3;
    }
    if(step === 4) {
      //preliminary answer and loader visible, 1 task completed, 1 question, 4 sources
      this.nSources = 4;
      this.togglePlan = true;
      this.getPremilinaryAnswer();
      this.taskCurrent = 5;
      this.nQuestions = 0;
    }
    if(step === 5) {
      //preliminary answer and loader visible, 2 tasks completed, 1 question, 6 sources
      this.nSources = 4;
      this.taskCurrent = 8;
      this.nQuestions = 0;
      this.nNotes = 4;
    }

    if(step === 6) {
      //preliminary answer and loader visible, at least 4 tasks completed, 1 question, 6 sources
      this.nSources = 4;
      this.taskCurrent = 8;
      this.nQuestions = 0;
      this.nNotes = 4;
    }

    if(step === 7) {
      //preliminary answer and loader visible, seems all visible tasks completed, 1 question, 8 sources
      this.nSources = 4;
      this.taskCurrent = 8;
      this.nQuestions = 0;
      this.nNotes = 4;
    }

    if(step === 8) {
      //no loader, full report, all visible tasks completed, 5 questions, 12 sources
      this.nSources = 23;
      this.getFullReport();
      this.taskCurrent = 8;
      this.nQuestions = 5;
      this.nNotes = 4;
      this.researchReportTabLoading = false;
      this.preliminaryAnswer = false;
      this.togglePlan = false;
      this.scrollToBottom(); // Scroll to the bottom of the container
    }


    this.updateProgressBar()
  }

  //create a fuction that advances the current step by 1 every 10 seconds
  advanceStep() {
    setTimeout(() => {
      if(this.currentStep < 8) {
        this.setCurrentStep(this.currentStep + 1);
      }
    }, 2000);
  }

  searchBarFocused() {
    this.expandedFooter = true;
  }

  toggleShow(){
    this.togglePlan = !this.togglePlan;
  }

  searchBarBlur() {
    this.expandedFooter = false;
  }

   /**
   * Shows the popover and dynamically calculates its position after rendering.
   */
  showPopover(event: MouseEvent, title?:string, subtitle?:string) {
    event.preventDefault();
    const target = event.target;
    const caseName = target ? (target as HTMLElement).innerText : 'no target';
    const splitCaseName = caseName.split(',');
    const snippetLocation = splitCaseName[splitCaseName.length-1];
    let newTitleDetail = '';
    if(this.checkFirstThree(snippetLocation)){
      newTitleDetail = snippetLocation;
      splitCaseName.pop();
    }

    let newTitle = splitCaseName.join(',');

    if(title && subtitle){
      newTitle = title;
      newTitleDetail = subtitle;
    }

    this.cancelHide();
    this.currentTarget = event.currentTarget as HTMLElement; // Set the current target
    this.data = { title: newTitle, details: newTitleDetail };
    this.isVisible = true;
    this.switchTab('outcome');

    // Wait for the next tick for Angular to render the popover in the DOM.
    setTimeout(() => {
      // Only proceed if the popover is still visible and we have a reference to it
      if (!this.isVisible || !this.popoverRef || !this.currentTarget) {
        return;
      }

      const hostRect = this.currentTarget.getBoundingClientRect();

      const popoverElement = this.popoverRef.nativeElement;
      const popoverRect = popoverElement.getBoundingClientRect();
      const popoverWidth = popoverRect.width;
      const popoverHeight = popoverRect.height;

      let topPos = hostRect.top - popoverHeight - 10;
      let leftPos = hostRect.left + (hostRect.width / 2) - (popoverWidth / 2);

      // Adjust if it goes off-screen
      if (topPos < 0) { topPos = hostRect.bottom + 10; }
      if (leftPos < 0) { leftPos = 10; }
      if (leftPos + popoverWidth > window.innerWidth) { leftPos = window.innerWidth - popoverWidth - 10; }

      this.top = topPos + window.scrollY;
      this.left = leftPos + window.scrollX;
    }, 0);
  }

  /**
   * Shows the popover and dynamically calculates its position after rendering.
   */
  showPopoverv2(event: MouseEvent, sourceId:number , snippetId:any) {
    event.preventDefault();
    const source = this.sources.sources.filter(x => x.id === sourceId)[0];
    const title = source.title;
    const subtitle = source.subtitle;
    const url = source.url;
    const sourceSnippet = source.snippets.filter(x => x.id === snippetId)[0];
    const summary = sourceSnippet.summary;
    const snippet = sourceSnippet.passage;
    const snippetUrl = sourceSnippet.url;

    this.cancelHide();
    this.currentTarget = event.currentTarget as HTMLElement; // Set the current target
    this.data = { title: title, details: subtitle, summary: summary, snippet: snippet, url: url, snippetUrl: snippetUrl };
    this.isVisible = true;
    this.switchTab('outcome');

    // Wait for the next tick for Angular to render the popover in the DOM.
    setTimeout(() => {
      // Only proceed if the popover is still visible and we have a reference to it
      if (!this.isVisible || !this.popoverRef || !this.currentTarget) {
        return;
      }

      const hostRect = this.currentTarget.getBoundingClientRect();

      const popoverElement = this.popoverRef.nativeElement;
      const popoverRect = popoverElement.getBoundingClientRect();
      const popoverWidth = popoverRect.width;
      const popoverHeight = popoverRect.height;

      let topPos = hostRect.top - popoverHeight - 10;
      let leftPos = hostRect.left + (hostRect.width / 2) - (popoverWidth / 2);

      // Adjust if it goes off-screen
      if (topPos < 0) { topPos = hostRect.bottom + 10; }
      if (leftPos < 0) { leftPos = 10; }
      if (leftPos + popoverWidth > window.innerWidth) { leftPos = window.innerWidth - popoverWidth - 10; }

      this.top = topPos + window.scrollY;
      this.left = leftPos + window.scrollX;
    }, 0);
  }

  /** Hides the popover after a delay. */
  hideWithDelay() {
    // this.hideTimeoutId = window.setTimeout(() => {
    //   this.isVisible = false;
    //   this.currentTarget = null; // Clear the target when hiding
    // }, 500);
  }

  closePopover(){
    this.isVisible = false;
    this.currentTarget = null;
  }

  /** Cancels any pending hide actions. */
  cancelHide() {
    if (this.hideTimeoutId) {
      clearTimeout(this.hideTimeoutId);
    }
  }

  /** Switches the active tab. */
  switchTab(tabName: string) {
    this.activeTab = tabName;
  }


  checkFirstThree(str:string) {
    if (str.length < 3) return false;

    for (let i = 0; i < 3; i++) {
      const char = str[i];
      if (!(char === ' ' || !isNaN(parseInt(char)))) {
        return false;
      }
    }

    return true;
  }
  
  handleToggleSide(clicked:string) {
    if(this.side === clicked){
      this.side = '';
    }else{
      this.side = clicked;
    }
  }


  handleToggleReport(){
    this.toggleReport = !this.toggleReport;
  }
  handleToggleSteps(){
    this.togglePlan = !this.togglePlan;
  }
  handleToggleReport2(){
    this.toggleReport2 = !this.toggleReport2;
  }
  handleToggleSteps2(){
    this.togglePlan2 = !this.togglePlan2;
  }
  handleToggleSup(){
    this.toggleSupplementalQuestions = !this.toggleSupplementalQuestions;
  }

  numberOfFollowUps: number = 0;

  handleInputChange(event: any) {
    console.log(event);
    this.numberOfFollowUps++;
    console.log('Number of follow-ups:', this.numberOfFollowUps);
    this.followupResponse();
  }

  followUp1userPost:boolean = false;
  followup1progress:boolean = false;
  followup1response:boolean = false;

  followUp2userPost:boolean = false;
  followup2progress:boolean = false;
  followup2response:boolean = false;

  followUp3userPost:boolean = false;
  followup3progress:boolean = false;
  followup3response:boolean = false;

  followupResponse(){
    if(this.numberOfFollowUps === 1){
      this.followUp1userPost = true;
      this.followup1progress = true;
      this.scrollToBottom();

      setTimeout(() => {
        this.followup1progress = false;
        this.followup1response = true;
        this.scrollToBottom(); // Scroll to the bottom of the container
      }, 3000);
    }else if(this.numberOfFollowUps === 2){
      this.followUp2userPost = true;
      this.followup2progress = true;
      this.scrollToBottom();

      setTimeout(() => {
        this.followup2progress = false;
        this.followup2response = true;
        this.scrollToBottom(); // Scroll to the bottom of the container
      }, 3000);
    }else if(this.numberOfFollowUps === 3){
      this.followUp3userPost = true;
      this.followup3progress = true;
      this.scrollToBottom();

      setTimeout(() => {
        this.followup3progress = false;
        this.followup3response = true;
        this.scrollToBottom(); // Scroll to the bottom of the container
      }, 3000);
    }

  }

  handleSupInput(event: any) {
    this.supInputValue = event.target.value;
  }

  handleSubmitSupQuestions(){ 
    console.log('Submitted Supplemental Questions:', this.supInputValue);
    //this.supInputValue = ''; // Clear the input after submission
    this.toggleSupplementalQuestions = false; // Close the input area
    this.showSupProgress = true;
    this.showSupResponse = true;
    this.scrollToBottom(); // Scroll to the bottom of the container

    setTimeout(() => {
      this.showSupProgress = false;
      this.showV2Report = true;
      this.reportVersion = 'v2';
      this.scrollToBottom(); // Scroll to the bottom of the container
    }, 3000);
  }

  scrollToBottom(): void {
    setTimeout(() => {
      this.scrollContainer.nativeElement.scrollTop = this.scrollContainer.nativeElement.scrollHeight;
    }, 500);
  }
}
