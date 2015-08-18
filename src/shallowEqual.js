function shallowEqual(objA, objB) {
  if (objA === objB)
    return true;

  if (typeof objA !== 'object' || objA === null ||
      typeof objB !== 'object' || objB === null) {
    return false;
  }

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);

  if (keysA.length !== keysB.length)
    return false;

  // Test for A's keys different from B.
  var bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);

  for (var i = 0; i < keysA.length; i++) {
    if (!bHasOwnProperty(keysA[i]) || !eql(objA[keysA[i]], objB[keysA[i]]) ) {
      return false;
    }
  }

  return true;
}

function eql(){
  if (a === b) return true
  if (typeof a !== typeof b) return false

  if (Array.isArray(a))
    return !a.some((a, idx) => a !== b[i])

  return false
}