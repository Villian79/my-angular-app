import { TestBed, ComponentFixture } from "@angular/core/testing";
import { App } from "./app";
import { provideRouter } from "@angular/router";

describe("App", () => {
  let fixture: ComponentFixture<App>;
  let app: App;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(App);
    app = fixture.componentInstance;
  });

  it("should create the app", () => {
    expect(app).toBeTruthy();
  });

  it("should render title", () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector("h1")?.textContent).toContain("Router App: my-test-angular-app");
  });

  it("should have title signal", () => {
    expect(app["title"]()).toBe("my-test-angular-app");
  });
});
