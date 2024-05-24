<script>
export default {
  props: {
    params: []
  },
  render(h) {
    let [ p0 = 'div', p1 = {}, p2 ] = this.params;
    return h(
      p0,
      this.cp(p1),
      p2 && p2(h)
    );
  }
}
</script>

<style>

</style>