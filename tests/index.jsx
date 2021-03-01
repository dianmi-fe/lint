const { api, store, data } = Vue.$ctx
const {
    api,
    store,
    data,
    filter: { date, string, bool, object },
} = Vue.$ctx

const render = () => (
    <div>
        <button style="margin-top:12px;font-size:12px;color:#ffffff;background-color: pink;">
            Click Here
        </button>
        <button className="prettier-class">Click Here</button>
        <button className="prettier-class" onClick={this.handleClick}>
            Click Here
        </button>
        <button
            className="prettier-class"
            style={{ marginTop: '32px', fontSize: '12px', color: '#fff' }}
            onClick={this.handleClick}
        >
            Click Here
        </button>
        <button
            className="prettier-class"
            style={{
                marginTop: '32px',
                fontSize: '12px',
                color: '#fff',
            }}
            onClick={this.handleClick}
        >
            Click Here
        </button>
        <button
            className="prettier-class"
            style={{
                marginTop: '32px',
                fontSize: '12px',
                color: '#fff',
                backgroundColor: '#fff',
            }}
            onClick={this.handleClick}
        >
            Click Here
        </button>
    </div>
)
