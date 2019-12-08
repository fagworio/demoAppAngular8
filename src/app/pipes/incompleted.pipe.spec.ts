import { IncompletedPipe } from './incompleted.pipe';

describe('IncompletedPipe', () => {
  it('create an instance', () => {
    const pipe = new IncompletedPipe();
    expect(pipe).toBeTruthy();
  });
});
