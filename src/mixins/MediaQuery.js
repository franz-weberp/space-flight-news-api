export default {
    data () {
      return {
        mdBreakPoint: window.matchMedia('(max-width: 767px)'),
        isMdBreakPoint: false
      }
    },
  
    methods: {
      setBreakpoint () {
        this.isMdBreakPoint = this.mdBreakPoint && this.mdBreakPoint.matches
      },
  
      getIsMdBreakPoint () { return this.isMdBreakPoint }
    },
  
    beforeDestroy () {
      this.mdBreakPoint.removeListener(this.setBreakpoint)
    },
  
    mounted () {
      this.mdBreakPoint.addListener(this.setBreakpoint)
      this.setBreakpoint()
    },
  
    provide () {
      return { getIsMdBreakPoint: this.getIsMdBreakPoint }
    }
  }
  