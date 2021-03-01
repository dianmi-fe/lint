import { defineComponent, PropType } from 'vue'

import s from './index.scss?module'

export default defineComponent({
    props: {
        value: {
            type: String,
            default: ''
        },
        list: {
            type: Array,
            require: true,
            defualt: () => []
        },
        onClick: {
            type: Function,
            default: () => {{}}
        }
    },
    setup(props) {
        return () => <div class={s.navSlider}>
            {
                props.list && props.list.map(m => <div
                    class={[
                        s.navItem,
                        props.value === m.id && s.active
                    ]}
                    onClick={() => props.onClick(m)} >{m.name}</div>)
            }
        </div>
    }
})
