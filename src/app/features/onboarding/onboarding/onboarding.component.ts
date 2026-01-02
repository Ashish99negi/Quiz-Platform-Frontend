import { Component, signal } from '@angular/core';
import { Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-onboarding',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './onboarding.component.html',
})
export class OnboardingComponent {
  selectedExam = signal<string | null>(null);

  exams = [
    {
      key: 'govt',
      title: 'Government Exams',
      desc: 'SSC, Banking, UPSC, Railways',
      icon: 'account_balance',
    },
    {
      key: 'jee',
      title: 'JEE',
      desc: 'JEE Main & Advanced',
      icon: 'functions',
    },
    {
      key: 'nda',
      title: 'NDA',
      desc: 'Defence entrance exam',
      icon: 'military_tech',
    },
    {
      key: 'neet',
      title: 'NEET',
      desc: 'Medical entrance exam',
      icon: 'medical_services',
    },
    {
      key: 'other',
      title: 'Other',
      desc: 'Other competitive exams',
      icon: 'more_horiz',
    },
  ];

  constructor(private router: Router) {}

  selectExam(key: string) {
    this.selectedExam.set(key);
  }

  continue() {
    if (!this.selectedExam()) return;

    console.log('Selected exam:', this.selectedExam());

    this.router.navigate(['/dashboard']);
  }
}
