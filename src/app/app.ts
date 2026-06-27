import { Component, signal, inject, effect, ChangeDetectionStrategy } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive, Router, NavigationEnd } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { filter, map } from 'rxjs';

interface MenuItem {
  path: string;
  label: string;
  iconPath: string;
}

@Component({
  selector: 'app-root',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  template: `
    <div class="min-h-screen flex flex-col bg-gradient-to-br from-green-50 via-emerald-50 to-teal-100 text-gray-800">

      <!-- ===================== TOP BAR ===================== -->
      <header
        class="sticky top-0 z-50 h-16 flex items-center gap-3 px-4 sm:px-6
               bg-gradient-to-r from-green-700 via-emerald-600 to-teal-500
               text-white shadow-lg shadow-emerald-900/20 backdrop-blur">
        <!-- Mobile menu toggle -->
        <button
          type="button"
          (click)="toggleSidebar()"
          [attr.aria-expanded]="sidebarOpen()"
          aria-label="Toggle navigation menu"
          class="lg:hidden grid place-items-center w-10 h-10 rounded-xl
                 bg-white/15 hover:bg-white/25 active:scale-95 transition">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" />
          </svg>
        </button>

        <!-- Brand -->
        <div class="flex items-center gap-3 select-none">
          <span class="grid place-items-center w-10 h-10 rounded-xl bg-white/20 ring-1 ring-white/40 shadow-inner font-black text-lg">
            Q
          </span>
          <div class="leading-tight">
            <h1 class="text-xl sm:text-2xl font-bold tracking-wide">Quiz App</h1>
            <p class="hidden sm:block text-[11px] text-emerald-50/80 font-medium">Test your knowledge</p>
          </div>
        </div>

        <div class="ml-auto hidden sm:flex items-center gap-2 text-sm font-medium text-emerald-50/90">
          <span class="w-2.5 h-2.5 rounded-full bg-lime-300 animate-pulse"></span>
          Ready
        </div>
      </header>

      <!-- ===================== BODY ===================== -->
      <div class="flex flex-1 min-h-0 relative">

        <!-- Mobile overlay -->
        @if (sidebarOpen()) {
          <div
            (click)="closeSidebar()"
            animate.enter="fade-in"
            animate.leave="fade-out"
            class="fixed inset-0 top-16 z-30 bg-emerald-950/40 backdrop-blur-sm lg:hidden">
          </div>
        }

        <!-- ===================== SIDEBAR ===================== -->
        <aside
          class="fixed top-16 bottom-0 left-0 z-40 w-72 shrink-0 overflow-y-auto
                 bg-gradient-to-b from-green-800 via-emerald-800 to-emerald-900
                 text-green-50 shadow-2xl transition-transform duration-300 ease-out
                 lg:static lg:top-0 lg:translate-x-0 lg:shadow-xl"
          [class.translate-x-0]="sidebarOpen()"
          [class.-translate-x-full]="!sidebarOpen()">

          <div class="px-4 py-6 flex flex-col h-full">
            <p class="px-3 mb-3 text-xs font-semibold uppercase tracking-widest text-emerald-200/70">
              Navigation
            </p>

            <nav class="flex flex-col gap-1.5">
              @for (item of menu(); track item.path) {
                <a
                  [routerLink]="item.path"
                  routerLinkActive="!bg-white/20 !text-white shadow-inner ring-1 ring-white/30 font-semibold"
                  (click)="closeSidebar()"
                  class="group relative flex items-center gap-3 px-3.5 py-3 rounded-xl
                         text-green-100/90 hover:bg-white/10 hover:text-white
                         hover:translate-x-1 transition-all duration-200">
                  <span class="grid place-items-center w-9 h-9 rounded-lg bg-white/10 ring-1 ring-white/10
                               group-hover:bg-white/20 transition">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" [attr.d]="item.iconPath" />
                    </svg>
                  </span>
                  <span class="text-sm">{{ item.label }}</span>
                  <svg class="ml-auto w-4 h-4 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all"
                       fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                </a>
              }
            </nav>

            <div class="mt-auto pt-6">
              <div class="rounded-2xl bg-white/10 ring-1 ring-white/15 p-4">
                <p class="text-sm font-semibold text-white">Keep learning 🌱</p>
                <p class="mt-1 text-xs text-emerald-100/80">Pick a topic and test yourself anytime.</p>
              </div>
            </div>
          </div>
        </aside>

        <!-- ===================== MAIN CONTENT ===================== -->
        <main class="flex-1 min-w-0 p-4 sm:p-6 lg:p-8">
          <div class="mx-auto w-full max-w-5xl">
            @for (key of [routeKey()]; track key) {
              <section
                animate.enter="route-enter"
                animate.leave="route-leave"
                class="rounded-3xl bg-white/70 ring-1 ring-emerald-900/5 shadow-xl shadow-emerald-900/5 backdrop-blur p-4 sm:p-6 min-h-[60vh]">
                <router-outlet />
              </section>
            }
          </div>
        </main>
      </div>
    </div>
  `
})
export class App {
  private readonly router = inject(Router);

  protected readonly sidebarOpen = signal(false);

  protected readonly menu = signal<MenuItem[]>([
    {
      path: '/home',
      label: 'Home',
      iconPath:
        'M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.5a.75.75 0 00.75.75h4.5a.75.75 0 00.75-.75V15a.75.75 0 01.75-.75h3a.75.75 0 01.75.75v5.25a.75.75 0 00.75.75h4.5a.75.75 0 00.75-.75V9.75'
    },

    {
      path: '/exam',
      label: 'Exam Questions',
      iconPath:
        'M9 12.75l2.25 2.25L15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z'
    }
  ]);

  // Reactive key that changes on every completed navigation. Used to re-create the
  // routed view so the :enter / :leave animation primitives fire on route change.
  protected readonly routeKey = toSignal(
    this.router.events.pipe(
      filter((e): e is NavigationEnd => e instanceof NavigationEnd),
      map((e) => e.urlAfterRedirects)
    ),
    { initialValue: this.router.url }
  );

  constructor() {
    // Auto-close the mobile drawer whenever navigation completes.
    effect(() => {
      this.routeKey();
      this.sidebarOpen.set(false);
    });
  }

  protected toggleSidebar(): void {
    this.sidebarOpen.update((open) => !open);
  }

  protected closeSidebar(): void {
    this.sidebarOpen.set(false);
  }
}
