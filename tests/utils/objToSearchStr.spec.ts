import objToSearchStr from 'utils/objToSearchStr';

describe('objToSearch', () => {
  it('可以将对象转化成查询参数字符串', () => {
    expect(objToSearchStr({
      a: '1',
      b: '2'
    })).toEqual('a=1&b=2')
  });

});