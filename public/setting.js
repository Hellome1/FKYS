var params = [
  'div',
  {
    style: { width: '100%', height: '80px', backgroundColor: '#005aff', display: 'flex', padding: '10px 20px' }
  },
  function(h) {
    return [
      h(
        'div',
        {
          class: 'left-area',
          style: { backgroundColor: 'rgba(0, 0, 0, 0.2)' }
        },
        '图片位置'
      )
    ]
  }
];

function getItem(h) {
  var item = {
    tag: 'div',
    class: '',
    style: '',
    on: {  },
    children: []
  };
  return item;
}