import { CompetitorModule } from './competitor.module';

describe('CompetitorModule', () => {
  let competitorModule: CompetitorModule;

  beforeEach(() => {
    competitorModule = new CompetitorModule();
  });

  it('should create an instance', () => {
    expect(competitorModule).toBeTruthy();
  });
});
