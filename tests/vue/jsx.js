import Temp from './template.vue'

export default {
    render() {
        return (
            <div>
                <Temp userInfo={this.userInfo?.data?.hahah}></Temp>
            </div>
        )
    },
    data() {
        return {
            userInfo: {},
        }
    },
}
