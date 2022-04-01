/* exported defaults */

function defaults(target, source) {
  var targetArray = Object.keys(target);
  var sourceArray = Object.keys(source);

  if (targetArray.length === 0) {
    Object.assign(target, source);
  }
  for (var targetIndex = 0; targetIndex < targetArray.length; targetIndex++) {
    var counter = 0;
    for (var sourceIndex = 0; sourceIndex < sourceArray.length; sourceIndex++) {
      if (targetArray[targetIndex] !== (sourceArray[sourceIndex])) {
        counter++;
        if (counter === sourceArray.length) {
          target[sourceArray[sourceIndex]] = Object.values(source)[sourceIndex];
        }
      }
    }
  }

}
