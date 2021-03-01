<script>
const Vue = "vue"
const { vuex: {mapState} } = Vue.$ctx
import Template from './template.vue'
const TEST = 'test'


export default {
    methods: {
        runMap() {
            let arr = []
            this.arr.map(item => {
                arr.push(item)
            })
        }
    },
    created() {
      console.log("created", TEST)
    },
    computed: {
        total () {
            return this.arr
        }
    },
    data() {
        return {
            arr: [1,2,3],
            arr2: [
                1,
                2,
                3
            ],
            obj: {a:1,b:2,c:3},
            obj2: {
                a:1,
                b:2,
                c:3
            },
            text: 'text',
            fast_name: 'xxx'
        }
    },
    components: {
        Template,
    }
}
</script>