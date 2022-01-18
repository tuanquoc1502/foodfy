import { CgSmileSad } from 'react-icons/cg'
import { Link } from 'react-router-dom'

function NotFound() {
    return (
        <div>
            <h1 style={{ fontSize: '40px', textAlign:'center', marginTop: '50px' }}>
                <div>ERROR: PAGE DOES NOT EXIST <CgSmileSad /></div>
                <Link to='/'><button style={{padding: '5px 12px'}}>Quay Trở Về</button></Link>
            </h1>
        </div>
    );
}

export default NotFound;