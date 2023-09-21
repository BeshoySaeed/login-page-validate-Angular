import { TestServiceService } from './test-service.service';

describe('test login service function', () => {
  let login: TestServiceService;
  beforeEach(() => {
    login = new TestServiceService();
  });
  afterEach(() => {
    localStorage.removeItem('token');
  });
  it('test if user login', () => {
    localStorage.setItem('token', '123');
    expect(login.isLogin()).toBeTruthy();
  });

  it('test if no token', () => {
    expect(login.isLogin()).toBeFalsy();
  });
});

describe('test with some SPY', () => {
  const mySpy = jasmine.createSpyObj('', ['sayTrue']);
  mySpy.sayTrue.and.returnValue(true);
  it('test true spy', () => {
    expect(mySpy.sayTrue()).toBe(true, 'test error');
  });
});
