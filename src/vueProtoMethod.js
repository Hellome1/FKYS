const VUEPROTOTYPEMETHODS = {
  cp
};

export function mix(target) {
  for (var k in VUEPROTOTYPEMETHODS) {
    target[k] = VUEPROTOTYPEMETHODS[k];
  }
}

function cp (obj) {
  if ('object' === typeof obj) return JSON.parse(JSON.stringify(obj));
  else return obj;
}
