import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResearchHistoryComponent } from './pages/research-history/research-history.component';
import { MyResearchComponent } from './pages/my-research/my-research.component';
import { WijmoDemoComponent } from './pages/jaime-research/jaime-research.component';
import { HomeComponent } from './pages/westlaw-prototype/components/home/home.component';

import { NewResearchComponent } from './pages/westlaw-prototype/components/research/new-research/new-research.component';
import { DeepResearchConfirmationComponent } from './pages/westlaw-prototype/components/research/deep-research-confirmation/deep-research-confirmation.component';
import { KeywordSearchResultsComponent } from './pages/westlaw-prototype/components/research/keyword-search-results/keyword-search-results.component';
import { DeepResearchResultComponent } from './pages/westlaw-prototype/components/research/deep-research-result/deep-research-result.component';
import { CaseDetailsComponent } from './pages/westlaw-prototype/components/research/case-details/case-details.component';
import { QuickCheckComponent } from './pages/westlaw-prototype/components/research/quick-check/quick-check.component';

import { NewResearchComponentv2 } from './pages/westlaw-prototype/components/researchv2/new-research/new-research.component';
import { DeepResearchConfirmationComponentv2 } from './pages/westlaw-prototype/components/researchv2/deep-research-confirmation/deep-research-confirmation.component';
import { KeywordSearchResultsComponentv2 } from './pages/westlaw-prototype/components/researchv2/keyword-search-results/keyword-search-results.component';
import { DeepResearchResultComponentv2 } from './pages/westlaw-prototype/components/researchv2/deep-research-result/deep-research-result.component';
import { CaseDetailsComponentv2 } from './pages/westlaw-prototype/components/researchv2/case-details/case-details.component';
import { QuickCheckComponentv2 } from './pages/westlaw-prototype/components/researchv2/quick-check/quick-check.component';

import { NewResearchComponentv3 } from './pages/westlaw-prototype/components/researchv3/new-research/new-research.component';
import { DeepResearchConfirmationComponentv3 } from './pages/westlaw-prototype/components/researchv3/deep-research-confirmation/deep-research-confirmation.component';
import { KeywordSearchResultsComponentv3 } from './pages/westlaw-prototype/components/researchv3/keyword-search-results/keyword-search-results.component';
import { DeepResearchResultComponentv3 } from './pages/westlaw-prototype/components/researchv3/deep-research-result/deep-research-result.component';
import { CaseDetailsComponentv3 } from './pages/westlaw-prototype/components/researchv3/case-details/case-details.component';
import { QuickCheckComponentv3 } from './pages/westlaw-prototype/components/researchv3/quick-check/quick-check.component';

import { NewResearchComponentv4 } from './pages/westlaw-prototype/components/researchv4/new-research/new-research.component';
import { DeepResearchConfirmationComponentv4 } from './pages/westlaw-prototype/components/researchv4/deep-research-confirmation/deep-research-confirmation.component';
import { KeywordSearchResultsComponentv4 } from './pages/westlaw-prototype/components/researchv4/keyword-search-results/keyword-search-results.component';
import { DeepResearchResultComponentv4 } from './pages/westlaw-prototype/components/researchv4/deep-research-result/deep-research-result.component';
import { CaseDetailsComponentv4 } from './pages/westlaw-prototype/components/researchv4/case-details/case-details.component';
import { QuickCheckComponentv4 } from './pages/westlaw-prototype/components/researchv4/quick-check/quick-check.component';

import { NewResearchComponentv5 } from './pages/westlaw-prototype/components/researchv5/new-research/new-research.component';
import { DeepResearchConfirmationComponentv5 } from './pages/westlaw-prototype/components/researchv5/deep-research-confirmation/deep-research-confirmation.component';
import { KeywordSearchResultsComponentv5 } from './pages/westlaw-prototype/components/researchv5/keyword-search-results/keyword-search-results.component';
import { DeepResearchResultComponentv5 } from './pages/westlaw-prototype/components/researchv5/deep-research-result/deep-research-result.component';
import { CaseDetailsComponentv5 } from './pages/westlaw-prototype/components/researchv5/case-details/case-details.component';
import { QuickCheckComponentv5 } from './pages/westlaw-prototype/components/researchv5/quick-check/quick-check.component';

import { LoginComponent } from './login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { NewLandingComponent } from './pages/westlaw-prototype/components/researchv5/new-landing/landing.component';

import { NewLandingComponentv6 } from './pages/westlaw-prototype/components/researchv6/new-landing/landing.component';
import { NewResearchComponentv6 } from './pages/westlaw-prototype/components/researchv6/new-research/new-research.component';
import { DeepResearchConfirmationComponentv6 } from './pages/westlaw-prototype/components/researchv6/deep-research-confirmation/deep-research-confirmation.component';
import { DeepResearchResultComponentv6 } from './pages/westlaw-prototype/components/researchv6/deep-research-result/deep-research-result.component';
import { QuickCheckComponentv6 } from './pages/westlaw-prototype/components/researchv6/quick-check/quick-check.component';
import { KeywordSearchResultsComponentv6 } from './pages/westlaw-prototype/components/researchv6/keyword-search-results/keyword-search-results.component';
import { CaseDetailsComponentv6 } from './pages/westlaw-prototype/components/researchv6/case-details/case-details.component';

import { HomeComponentv2 } from './pages/westlaw-prototype/components/homev2/home.component';

import { CaseDetailsComponentv7 } from './pages/westlaw-prototype/components/researchv7/case-details/case-details.component';
import { KeywordSearchResultsComponentv7 } from './pages/westlaw-prototype/components/researchv7/keyword-search-results/keyword-search-results.component';
import { NewResearchComponentv7 } from './pages/westlaw-prototype/components/researchv7/new-research/new-research.component';
import { NewLandingComponentv7 } from './pages/westlaw-prototype/components/researchv7/new-landing/landing.component';
import { DeepResearchConfirmationComponentv7 } from './pages/westlaw-prototype/components/researchv7/deep-research-confirmation/deep-research-confirmation.component';
import { DeepResearchResultComponentv7 } from './pages/westlaw-prototype/components/researchv7/deep-research-result/deep-research-result.component';
import { QuickCheckComponentv7 } from './pages/westlaw-prototype/components/researchv7/quick-check/quick-check.component';

import { NewLandingComponentv8 } from './pages/westlaw-prototype/components/researchv8/new-landing/landing.component';
import { CaseDetailsComponentv8 } from './pages/westlaw-prototype/components/researchv8/case-details/case-details.component';
import { KeywordSearchResultsComponentv8 } from './pages/westlaw-prototype/components/researchv8/keyword-search-results/keyword-search-results.component';
import { NewResearchComponentv8 } from './pages/westlaw-prototype/components/researchv8/new-research/new-research.component';
import { DeepResearchConfirmationComponentv8 } from './pages/westlaw-prototype/components/researchv8/deep-research-confirmation/deep-research-confirmation.component';
import { DeepResearchResultComponentv8 } from './pages/westlaw-prototype/components/researchv8/deep-research-result/deep-research-result.component';
import { QuickCheckComponentv8 } from './pages/westlaw-prototype/components/researchv8/quick-check/quick-check.component';


const routes: Routes = [
  // Login route (accessible without authentication)
  { path: 'login', component: LoginComponent },
  // { path: 'new-landing', component: NewLandingComponent },

  // Protected routes\
  { path: 'new-landing', canActivate: [AuthGuard], component: NewLandingComponent },
  { path: 'new-landing-v6', canActivate: [AuthGuard], component: NewLandingComponentv6 },
  { path: 'new-landing-v7', canActivate: [AuthGuard], component: NewLandingComponentv7 },
  { path: 'new-landing-v8', canActivate: [AuthGuard], component: NewLandingComponentv8 },
  { path: 'app-jaime-research', canActivate: [AuthGuard], component: WijmoDemoComponent },
  { path: 'research-history', canActivate: [AuthGuard], component: ResearchHistoryComponent },
  { path: 'my-research', canActivate: [AuthGuard], component: MyResearchComponent },
  { path: 'westlaw-prototype-v2', canActivate: [AuthGuard], component: HomeComponentv2, children: [
    {
      path: 'new-research-v6',
      canActivate: [AuthGuard],
      component: NewResearchComponentv6,
    },
    {
      path: 'new-landing-v6',
      canActivate: [AuthGuard],
      component: NewLandingComponentv6,
    },
    {
      path: 'deep-research-v6',
      canActivate: [AuthGuard],
      children: [
        {
          path: 'research-confirmation',
          canActivate: [AuthGuard],
          component: DeepResearchConfirmationComponentv6
        },
        {
          path: 'research-results',
          canActivate: [AuthGuard],
          component: DeepResearchResultComponentv6
        },
        {
          path: 'quick-check',
          canActivate: [AuthGuard],
          component: QuickCheckComponentv6
        },
      ]
    },
    {
      path: 'keyword-searchv6',
      canActivate: [AuthGuard],
      component: KeywordSearchResultsComponentv6
    },
    {
      path: 'case-detailsv6',
      canActivate: [AuthGuard],
      component: CaseDetailsComponentv6
    },
  ]},
  { path: 'westlaw-prototype', canActivate: [AuthGuard], component: HomeComponent, children: [
    {
      path: 'new-research',
      canActivate: [AuthGuard],
      component: NewResearchComponent
    },
    {
      path: 'new-research-v2',
      canActivate: [AuthGuard],
      component: NewResearchComponentv2,
    },
    {
      path: 'deep-research-v2',
      canActivate: [AuthGuard],
      children: [
        {
          path: 'research-confirmation',
          canActivate: [AuthGuard],
          component: DeepResearchConfirmationComponentv2
        },
        {
          path: 'research-results',
          canActivate: [AuthGuard],
          component: DeepResearchResultComponentv2
        },
        {
          path: 'quick-check',
          canActivate: [AuthGuard],
          component: QuickCheckComponentv2
        },
      ]
    },
    {
      path: 'new-research-v3',
      canActivate: [AuthGuard],
      component: NewResearchComponentv3,
    },
    {
      path: 'deep-research-v3',
      canActivate: [AuthGuard],
      children: [
        {
          path: 'research-confirmation',
          canActivate: [AuthGuard],
          component: DeepResearchConfirmationComponentv3
        },
        {
          path: 'research-results',
          canActivate: [AuthGuard],
          component: DeepResearchResultComponentv3
        },
        {
          path: 'quick-check',
          canActivate: [AuthGuard],
          component: QuickCheckComponentv3
        },
      ]
    },
    {
      path: 'new-research-v4',
      canActivate: [AuthGuard],
      component: NewResearchComponentv4,
    },
    {
      path: 'deep-research-v4',
      canActivate: [AuthGuard],
      children: [
        {
          path: 'research-confirmation',
          canActivate: [AuthGuard],
          component: DeepResearchConfirmationComponentv4
        },
        {
          path: 'research-results',
          canActivate: [AuthGuard],
          component: DeepResearchResultComponentv4
        },
        {
          path: 'quick-check',
          canActivate: [AuthGuard],
          component: QuickCheckComponentv4
        },
      ]
    },
    {
      path: 'new-research-v5',
      canActivate: [AuthGuard],
      component: NewResearchComponentv5,
    },
    {
      path: 'new-landing',
      canActivate: [AuthGuard],
      component: NewLandingComponent,
    },
    {
      path: 'deep-research-v5',
      canActivate: [AuthGuard],
      children: [
        {
          path: 'research-confirmation',
          canActivate: [AuthGuard],
          component: DeepResearchConfirmationComponentv5
        },
        {
          path: 'research-results',
          canActivate: [AuthGuard],
          component: DeepResearchResultComponentv5
        },
        {
          path: 'quick-check',
          canActivate: [AuthGuard],
          component: QuickCheckComponentv5
        },
      ]
    },
    {
      path: 'new-research-v7',
      canActivate: [AuthGuard],
      component: NewResearchComponentv7,
    },
    {
      path: 'new-landing-v7',
      canActivate: [AuthGuard],
      component: NewLandingComponentv7,
    },
    {
      path: 'deep-research-v7',
      canActivate: [AuthGuard],
      children: [
        {
          path: 'research-confirmation',
          canActivate: [AuthGuard],
          component: DeepResearchConfirmationComponentv7
        },
        {
          path: 'research-results',
          canActivate: [AuthGuard],
          component: DeepResearchResultComponentv7
        },
        {
          path: 'quick-check',
          canActivate: [AuthGuard],
          component: QuickCheckComponentv7
        },
      ]
    },
    {
      path: 'new-research-v8',
      canActivate: [AuthGuard],
      component: NewResearchComponentv8,
    },
    {
      path: 'new-landing-v8',
      canActivate: [AuthGuard],
      component: NewLandingComponentv8,
    },
    {
      path: 'deep-research-v8',
      canActivate: [AuthGuard],
      children: [
        {
          path: 'research-confirmation',
          canActivate: [AuthGuard],
          component: DeepResearchConfirmationComponentv8
        },
        {
          path: 'research-results',
          canActivate: [AuthGuard],
          component: DeepResearchResultComponentv8
        },
        {
          path: 'quick-check',
          canActivate: [AuthGuard],
          component: QuickCheckComponentv8
        },
      ]
    },
    {
      path: 'deep-research',
      canActivate: [AuthGuard],
      children: [
        {
          path: 'research-confirmation',
          canActivate: [AuthGuard],
          component: DeepResearchConfirmationComponent
        },
        {
          path: 'research-results',
          canActivate: [AuthGuard],
          component: DeepResearchResultComponent
        },
        {
          path: 'quick-check',
          canActivate: [AuthGuard],
          component: QuickCheckComponent
        }
      ]
    },
    {
      path: 'keyword-searchv2',
      canActivate: [AuthGuard],
      component: KeywordSearchResultsComponentv2
    },
    {
      path: 'case-detailsv2',
      canActivate: [AuthGuard],
      component: CaseDetailsComponentv2
    },
    {
      path: 'keyword-search',
      canActivate: [AuthGuard],
      component: KeywordSearchResultsComponent
    },
    {
      path: 'case-details',
      canActivate: [AuthGuard],
      component: CaseDetailsComponent
    },
    {
      path: 'keyword-searchv3',
      canActivate: [AuthGuard],
      component: KeywordSearchResultsComponentv3
    },
    {
      path: 'case-detailsv3',
      canActivate: [AuthGuard],
      component: CaseDetailsComponentv3
    },
    {
      path: 'keyword-searchv4',
      canActivate: [AuthGuard],
      component: KeywordSearchResultsComponentv4
    },
    {
      path: 'case-detailsv4',
      canActivate: [AuthGuard],
      component: CaseDetailsComponentv4
    },
    {
      path: 'keyword-searchv5',
      canActivate: [AuthGuard],
      component: KeywordSearchResultsComponentv5
    },
    {
      path: 'case-detailsv5',
      canActivate: [AuthGuard],
      component: CaseDetailsComponentv5
    },
    {
      path: 'keyword-searchv7',
      canActivate: [AuthGuard],
      component: KeywordSearchResultsComponentv7
    },
    {
      path: 'case-detailsv7',
      canActivate: [AuthGuard],
      component: CaseDetailsComponentv7
    },
    {
      path: 'keyword-searchv8',
      canActivate: [AuthGuard],
      component: KeywordSearchResultsComponentv8
    },
    {
      path: 'case-detailsv8',
      canActivate: [AuthGuard],
      component: CaseDetailsComponentv8
    },
  ]},

  // Default route (redirect to login)
  { path: '', redirectTo: '/login', pathMatch: 'full' },

  // Wildcard route (redirect to login for undefined routes)
  { path: '**', redirectTo: '/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }