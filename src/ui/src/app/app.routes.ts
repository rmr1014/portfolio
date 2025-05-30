import { Routes } from '@angular/router';
import { AboutComponent } from './about.component';
import { SkillsComponent } from './skills.component';
import { ExperienceComponent } from './experience.component';
import { ProjectsComponent } from './projects.component';
import { CommunityComponent } from './community.component';
import { TestimonialsComponent } from './testimonials.component';
import { ContactComponent } from './contact.component';

export const routes: Routes = [
  { path: '', component: AboutComponent, pathMatch: 'full' },
  { path: 'about', component: AboutComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'experience', component: ExperienceComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'community', component: CommunityComponent },
  { path: 'testimonials', component: TestimonialsComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: '' }
];
