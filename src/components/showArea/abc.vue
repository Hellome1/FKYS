<script>
export default {
  data() {
    return {
      itemClicked: false,
      innerItemClicked: false
    }
  },
  render(h) {
    return h(
      'div',
      { class: this.itemClicked ? 'item selected' : 'item', style: { width: '120px', height: '70px', overflow: 'hidden' }, on: { click: e => { e.stopPropagation(); this.itemClicked = !this.itemClicked } } },
      ['']
    )
  }
};
</script>

<style lang="scss">
.item {
  width: 100px;
  height: 50px;
  // border: 1px dashed black;
  background: linear-gradient(90deg, #333 50%, transparent 0) repeat-x,
    linear-gradient(90deg, #333 50%, transparent 0) repeat-x,
    linear-gradient(0deg, #333 50%, transparent 0) repeat-y,
    linear-gradient(0deg, #333 50%, transparent 0) repeat-y;
  background-size: 4px 1px, 4px 1px, 1px 4px, 1px 4px;
  background-position: 0 0, 0 100%, 0 0, 100% 0;
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
    // animation: borderMove .3s infinite linear;
  }
  &.selected {
    background-color: rgba(0, 0, 0, 0.1);
    animation: borderMove 0.3s infinite linear;
  }

  @keyframes borderMove {
    100% {
      background-position: 4px 0, -4px 100%, 0 -4px, 100% 4px;
    }
  }
}
</style>